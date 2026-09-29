/* ============================================================
   Renderers + router. The three diagrams are marked DIAGRAM.
   ============================================================ */
(function(){
'use strict';

var T = window.TOOLKIT, G = window.GOAL_MAP;

/* canonical order — intro pages then the five tools, as numbered on intro page 2 */
var ORDER = ['welcome','tools','chotu','aoiiv','sturfry','ispy','language','material'];
var TOOLS = ['aoiiv','sturfry','ispy','language','material'];
/* two of each, scrambled so the welcome cards read as unpatterned */
var GOAL_COLOURS = ['pink','yellow','green','yellow','pink','green'];

/* the shared spine every tool page follows */
var SPINE = [
  ['aim',             'What the tool is for',  'aim'],
  ['when-to-use',     'When to reach for it',  'when to use'],
  ['prerequisites',   'What you need first',   'prerequisites'],
  ['data-collection', 'What you gather',       'data collection'],
  ['synthesis',       'What you do with it',   'synthesis'],
  ['example',         'What it looks like',    'Chotu’s process']
];

var esc = function(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };

/* <b>/<i> for the runs shown that way, [label](url) for the links, \n for breaks */
function rich(s){
  return esc(s)
    .replace(/&lt;(\/?)(b|i)&gt;/g,'<$1$2>')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\n/g,'<br>');
}

function items(list){
  return list.map(function(it){
    if(typeof it==='string') return '<li>'+rich(it)+'</li>';
    return '<li>'+rich(it.t)+(it.sub?'<ul class="list">'+items(it.sub)+'</ul>':'')+'</li>';
  }).join('');
}
function blocks(arr,wide){
  if(!arr) return '';
  return arr.map(function(b){
    if(b.gap) return '<div class="gap"></div>';
    if(b.ul)  return '<ul class="list">'+items(b.ul)+'</ul>';
    if(b.ol)  return '<ol class="list">'+items(b.ol)+'</ol>';
    if(b.i!=null) return '<p class="p p--i'+(wide?' p--wide':'')+'">'+rich(b.i)+'</p>';
    return '<p class="p'+(wide?' p--wide':'')+'">'+rich(b.p)+'</p>';
  }).join('');
}
function figure(f){
  var art = f.srcs
    ? '<div class="fig__stack">'+f.srcs.map(function(x){
        return '<img src="'+esc(x.src)+'" alt="'+esc(x.alt||'')+'" loading="lazy">'; }).join('')+'</div>'
    : '<img src="'+esc(f.src)+'" alt="'+esc(f.alt||'')+'" loading="lazy">';
  return '<figure class="fig"'+(f.w?' style="max-width:'+f.w+'px"':'')+'>'+art+
    (f.caption?'<figcaption>'+esc(f.caption)+'</figcaption>':'')+'</figure>';
}
function figures(list){
  if(!list||!list.length) return '';
  return '<div class="figs">'+list.map(figure).join('')+'</div>';
}
function stepBox(s){
  var body = (s.body||[]).map(function(t){ return '<p class="step__b">'+rich(t)+'</p>'; }).join('');
  var sub  = s.sub?'<ul class="list step__list">'+items(s.sub)+'</ul>':'';
  return '<div class="step"><div class="step__pair">'+
    (s.title?'<p class="step__t">'+rich(s.title)+'</p>':'')+body+sub+'</div></div>';
}
function steps(list,figure_){
  var chain = list.map(stepBox).join('<div class="connector" aria-hidden="true"></div>');
  if(!figure_) return '<div class="steps">'+chain+'</div>';
  return '<div class="synth-row"><div class="steps">'+chain+'</div>'+figure(figure_)+'</div>';
}

/* ---------- DIAGRAM 1: the spine shared by every tool page ---------- */
function spine(active){
  return '<nav class="spine"'+(active?' aria-label="Sections of this page"':'')+'>'+
    SPINE.map(function(n,i){
      var tag = active?'a':'div', href = active?' href="#'+n[0]+'"':'';
      return (i?'<span class="spine__a" aria-hidden="true">→</span>':'')+
        '<'+tag+' class="spine__n"'+href+'><b>'+esc(n[2])+'</b><span>'+esc(n[1])+'</span></'+tag+'>';
    }).join('')+'</nav>';
}

/* ---------- DIAGRAM 2: goals × tools, from the chart on intro page 2 ---------- */
function matrix(){
  var head = '<tr><th></th>'+G.cols.map(function(c){
    return '<th><a href="#'+c[0]+'">'+esc(c[1])+'</a></th>'; }).join('')+'</tr>';
  var body = G.rows.map(function(r){
    return '<tr><th>'+esc(r[0])+'</th>'+G.cols.map(function(c){
      var on = r[2].indexOf(c[0])>=0;
      return '<td>'+(on?'<span class="gbar" data-c="'+r[1]+'"></span>':'')+'</td>';
    }).join('')+'</tr>';
  }).join('');
  return '<div class="matrix"><h3 class="h-figure">To understand</h3>'+
    '<table><thead>'+head+'</thead><tbody>'+body+'</tbody></table></div>';
}

/* ---------- pages ---------- */
function toolPage(k){
  var d = T[k];
  var left =
    '<div class="block" id="when-to-use"><h2 class="h-section">When to use this tool</h2>'+blocks(d.whenToUse)+'</div>'+
    '<div class="block" id="prerequisites"><h2 class="h-section">Prerequisites</h2>'+blocks(d.prerequisites)+'</div>';

  var right =
    '<div class="block" id="data-collection"><h2 class="h-section">Data collection</h2>'+
      blocks(d.dataCollection) + figures(d.dataFigures) + '</div>'+
    (d.synthesis?'<div class="block" id="synthesis"><h2 class="h-section">Synthesis</h2>'+
      steps(d.synthesis.steps, d.synthesis.figure)+'</div>':'');

  return '<div class="tool-top"><div class="topline"></div><div class="wrap">'+
    (d.peek?'<img class="peek" src="'+esc(d.peek.src)+'" alt="'+esc(d.peek.alt)+
      '" style="--tilt:'+d.peek.tilt+'deg">':'')+
    '<h1 class="h-title page-title">'+esc(d.num)+'. '+esc(d.name)+'</h1>'+
    '</div></div><div class="wrap">'+
    '<div class="block" id="aim" style="margin-top:var(--sp-40)"><h2 class="h-section">Aim</h2>'+blocks(d.aim,true)+'</div>'+
    '<hr class="rule">'+
    '<div class="split"><div class="split__l">'+left+'</div><div class="split__r">'+right+'</div>'+
      (d.guiding?'<aside class="callout"><h2 class="h-section">'+esc(d.guiding.title)+'</h2>'+
        '<ul class="list">'+items(d.guiding.items)+'</ul></aside>':'')+
    '</div>'+
    '<hr class="rule" style="margin-top:var(--sp-64)">'+
    '<div class="block" id="example" style="margin-top:var(--sp-40)">'+
      '<h2 class="h-section">'+esc(d.exampleHeading)+'</h2>'+
      '<div class="split" style="margin-top:var(--sp-16)"><div class="split__l">'+
        blocks(d.example)+
      '</div><div class="split__r">'+figures(d.exampleFigures)+'</div></div>'+
    '</div>'+
    '</div>';
}

function welcomePage(){
  var d = T.welcome;
  return '<div class="topline"></div><div class="wrap">'+
    '<h1 class="h-title page-title">'+esc(d.title)+'</h1>'+
    '<p class="p p--wide" style="margin-top:var(--sp-40)">'+esc(d.lead)+'</p>'+
    '<div class="goals">'+d.goals.map(function(g,i){
      return '<div class="goal" data-c="'+GOAL_COLOURS[i%GOAL_COLOURS.length]+'">'+
        '<b>'+esc(g[0])+'</b><span>'+esc(g[1])+'</span></div>'; }).join('')+'</div>'+
    '<div style="margin-top:var(--sp-64)">'+blocks(d.after,true)+'</div>'+
    '<hr class="rule" style="margin-top:var(--sp-64)">'+
    '<div style="margin-top:var(--sp-40)"><h2 class="h-section">Where to go next</h2>'+
      '<p class="p p--wide" style="margin-top:var(--sp-16)">All five tools run the same shape. '+
      '<a href="#tools">See them side by side</a>, or meet <a href="#chotu">Chotu</a> first.</p></div>'+
    '</div>';
}

function toolsPage(){
  var d = T.tools;
  var cards = TOOLS.map(function(k){
    return '<a class="tc" href="#'+k+'" data-c="'+window.CARD_COLOUR[k]+'">'+
      '<span class="tc__name">'+esc(T[k].card)+'</span></a>';
  }).join('');

  return '<div class="topline"></div><div class="wrap">'+
    '<h1 class="h-title page-title">'+esc(d.title)+'</h1>'+
    '<div class="toolcards">'+cards+'</div>'+
    '<div style="margin-top:var(--sp-64)">'+matrix()+'</div>'+
    '<hr class="rule" style="margin-top:var(--sp-64)">'+
    '<div style="margin-top:var(--sp-40)"><h2 class="h-section">Every tool runs the same shape</h2>'+
      '<p class="p p--wide" style="margin-top:var(--sp-16)">Whichever tool you open, it moves left to right through these six sections. '+
      'On a tool page, this strip becomes navigation.</p>'+ spine(false) +'</div>'+
    '</div>';
}

function chotuPage(){
  var d = T.chotu;
  return '<div class="topline"></div><div class="wrap">'+
    '<h1 class="h-title page-title">'+esc(d.title)+'</h1>'+
    '<p class="p" style="margin:var(--sp-40) auto 0;text-align:center;max-width:44ch">'+esc(d.lead)+'</p>'+
    '<img src="assets/chotu.png" alt="Chotu, a small monkey, waving" '+
      'style="display:block;width:230px;margin:var(--sp-64) auto 0">'+
    '<hr class="rule" style="margin-top:var(--sp-64)">'+
    '<div style="margin-top:var(--sp-40)"><h2 class="h-section">He turns up in every tool</h2>'+
      '<p class="p p--wide" style="margin-top:var(--sp-16)">Each tool ends with a worked example from '+
      'a study on Indian tailors, run by Chotu: '+TOOLS.map(function(k){
        return '<a href="#'+k+'">'+esc(T[k].name)+'</a>'; }).join(' · ')+'</p></div>'+
    '</div>';
}

/* ---------- chrome ---------- */
function nav(at){
  var link = function(k){
    return '<a href="#'+k+'"'+(k===at?' aria-current="page"':'')+'>'+esc(T[k].nav)+'</a>'; };
  var onTool = TOOLS.indexOf(at)>=0;
  var label  = onTool ? T[at].nav : 'pick a tool';
  return '<div class="nav__g">'+['welcome','tools','chotu'].map(link).join('')+'</div>'+
    '<div class="pick" id="pick" data-open="0">'+
      '<button class="pick__btn" id="pickBtn" aria-expanded="false" aria-controls="pickList">'+
        '<span class="pick__papers" aria-hidden="true"><i></i><i></i><i></i></span>'+
        '<span class="pick__label"'+(onTool?' data-on':'')+'>'+esc(label)+'</span>'+
      '</button>'+
      '<ul class="pick__list" id="pickList">'+TOOLS.map(function(k){
        return '<li><a href="#'+k+'" data-c="'+window.CARD_COLOUR[k]+'"'+(k===at?' aria-current="page"':'')+'>'+
          '<span class="pick__n">'+esc(T[k].num)+'</span>'+esc(T[k].nav)+'</a></li>'; }).join('')+
      '</ul>'+
    '</div>';
}
function pager(at){
  var i = ORDER.indexOf(at), prev = ORDER[i-1], next = ORDER[i+1];
  var side = function(k,cls,label){
    if(!k) return '<span></span>';
    return '<a class="'+cls+'" href="#'+k+'"><small>'+label+'</small><b>'+esc(T[k].nav)+'</b></a>'; };
  return '<div class="pager__in">'+side(prev,'prev','← previous')+side(next,'next','next →')+'</div>';
}

function render(){
  var at = location.hash.slice(1);
  if(ORDER.indexOf(at)<0) at = 'welcome';
  var d = T[at];
  var html = d.kind==='tool' ? toolPage(at)
           : at==='welcome'  ? welcomePage()
           : at==='tools'    ? toolsPage() : chotuPage();
  document.getElementById('app').innerHTML = html;
  document.getElementById('nav').innerHTML = nav(at);
  document.getElementById('pager').innerHTML = pager(at);
  document.title = (at==='welcome'?'':T[at].nav+' — ')+'Designing for Indian Context';
}

addEventListener('hashchange', function(){ render(); window.scrollTo({top:0,behavior:'instant'}); });
document.addEventListener('click', function(e){
  if(e.target.closest('#brand')){ location.hash = 'welcome'; return; }
  var btn = e.target.closest('#pickBtn'), pick = document.getElementById('pick');
  if(btn && pick){
    var open = pick.dataset.open !== '1';
    pick.dataset.open = open ? '1' : '0';
    btn.setAttribute('aria-expanded', String(open));
    return;
  }
  if(pick && !e.target.closest('#pick')){ pick.dataset.open = '0'; }
});
addEventListener('keydown', function(e){
  if(e.key !== 'Escape') return;
  var pick = document.getElementById('pick');
  if(pick){ pick.dataset.open = '0'; var b=document.getElementById('pickBtn'); if(b) b.setAttribute('aria-expanded','false'); }
});
render();
})();
