/* All page content, from the supplied screenshots.

   Wording is kept as close to the screenshots as possible. What is
   standardised is the SHAPE of each section, so every tool page reads
   the same way:
     when to use   — an italic lead, then bullets if there are any
     prerequisites — "Before you start, you should know:" + bullets
     data collection — a numbered list
     synthesis     — dashed steps: italic title, body, optional bullets

   Blocks: {p}, {i} italic, {ul}, {ol}, {gap}. \n is a line break. */
window.TOOLKIT = {

/* ============================ intro ============================ */
welcome: {
  kind:'intro', nav:'Welcome', title:'Welcome to the toolkit!',
  lead:'The intention of this toolkit is for a digital product designer or team to achieve the following goals:',
  goals:[
    ['Understand why','Move from “what are they doing?” to “why does this way of doing it work for them?”'],
    ['Find opportunities','Identify where existing systems support, hinder or could better enable the stakeholder’s way of working.'],
    ['Surface invisible practices','Reveal the cultural influences, informal processes, workarounds and dependencies that contribute to how work actually gets done.'],
    ['Connect the dots','Map the people, tools, technologies and practices involved in achieving that goal, and understand how they work together rather than looking at each one on its own.'],
    ['Understand how people think and work','Discover what stakeholders are actually trying to optimise: time, effort, cost, convenience, communication, coordination or something else.'],
    ['Tackle biases and assumptions','Acknowledge your own biases and challenge them through what you encounter in your research process.']
  ],
  after:[
    {p:'Our guiding question: why is it the way it is?'},
    {gap:1},
    {p:'Instead of taking behaviours, systems or practices at face value, this toolkit encourages designers to question what shaped them.'},
    {p:'We look beyond what people do, to understand why they do it this way, what they are trying to achieve, and what conditions influence their choices.'},
    {p:'This helps digital product designers uncover the logic, adaptations and relationships within a context, without being led by assumptions or solutioning.'}
  ]
},

tools: {
  kind:'tools', nav:'The 5 tools', title:'Our toolkit consists of the following 5 tools'
},

chotu: {
  kind:'chotu', nav:'Chotu', title:'Meet Chotu',
  lead:'This is Chotu. He’s a digital product monkey who will be using the toolkit too, and he will be with you the whole way.'
},

/* ============================ tools ============================ */
aoiiv: {
  kind:'tool', nav:'AOIIV', peek:{src:'assets/chotu-aoiiv.png',tilt:-6,alt:'Chotu holding a clipboard'}, card:'AOIIV', num:'001', name:'AOIIV',
  aim:[{p:'To understand how people interpret, communicate and exchange information within a specific Indian context, and how their language changes depending on who they are speaking to, what they are doing, and how they are communicating.'}],
  whenToUse:[{i:'Use when you want to understand an existing communication system before designing a new one.'},
    {i:'Particularly useful when language, relationships, tacit knowledge or technology influence how work gets done.'}],
  prerequisites:[
    {p:'Before you start, you should know:'},
    {ul:[
      'The context and the stakeholder ecosystem',
      'Who the stakeholder interacts with, the tools they use, and the broad activities they perform'
    ]},
    {gap:1},
    {p:'You do not need to know the “right” language beforehand; the tool is intended to uncover it.'}
  ],
  dataCollection:[
    {ol:[
      {t:'<i>Assume</i> — before the research activity. What am I bringing into this? The researcher briefly records the assumptions that may affect how they approach the next activity. Look for: expectations · prior experience · ideas of “normal” · perceived problems · what they expect people to do.',
       sub:['What do I expect to see?','What do I already believe?','What am I taking for granted?','What am I already calling a problem?','What might I be assuming because of my own experience?']},
      {t:'<i>Observe</i> — during or immediately after the activity. What actually happened? This stays deliberately factual.',
       sub:['What did I actually see or hear?','What did people actually do or say?','What happened?','What changed?','What surprised me?','What contradicted what I expected?']}
    ]},
    {gap:1},
    {p:'Then use the context lenses as optional prompts: people · bodies · movement · objects · space · time · rules · relationships · infrastructure · language · formal and informal · negotiation · adaptation · power · access · community · locality. Choose whichever are relevant to the tool and the context.'},
    {gap:1},
    {p:'Output: a few assumptions to carry into the activity, and evidence separated from explanation.'}
  ],
  synthesis:{ steps:[
    { title:'Affinity-map the associations',
      body:['Group similar responses. Bring together words, phrases and ideas that relate to one another.','This can reveal recurring words, expressions, topics or ways of describing something.'] },
    { title:'Identify patterns',
      body:['Challenge — what should I question?'],
      sub:['What evidence actually supports my interpretation?','Could there be another explanation?','Am I generalising from one person, place or situation?','Am I interpreting this through my own experience?','What am I still missing?','What do I need to investigate next?'] }
  ]},
  exampleHeading:'Chotu’s process',
  example:[
    {p:'<i>Reference example — tailor</i>\nResearch activity: Material Realities — taking a customer order.'},
    {gap:1},
    {p:'<i>Assume.</i> I expect the tailor to keep customer requirements in one place.'},
    {p:'<i>Observe.</i> Tool used: Material Realities.'},
    {p:'<i>Interpret.</i> Information is being distributed across different sources, which may be creating extra retrieval work.'},
    {p:'<i>Challenge.</i> Is the switching actually a problem for the tailor, or is it simply part of how they currently work? What evidence supports that interpretation?'},
    {p:'<i>Next question.</i> Which parts of retrieving customer information create unnecessary work?'}
  ],
  exampleFigures:[{src:'assets/aoiiv-example.jpg',w:760,caption:'fig 001.1',
    alt:'A five-column table — Assumptions, Observations, Interpretations, Interpretation_final and Validation — filled in for the tailor example, with Chotu at a mixing desk beside it'}]
},

sturfry: {
  kind:'tool', nav:'STURFRY', peek:{src:'assets/chotu-sturfry.png',tilt:5,alt:'Chotu leaning forward on one hand'}, card:'STURFRY', num:'002', name:'STURFRY',
  aim:[{p:'STURFRY is a synthesis tool that helps researchers understand how stakeholders use existing digital tools and their features within a context.'},
    {p:'It reveals the relationships, overlaps, differences, gaps and workarounds (jugaad) in how these tools are actually used.'}],
  whenToUse:[{i:'Use STURFRY when you have completed your primary and secondary research and want to synthesise how existing digital tools are being used within a context.'}],
  prerequisites:[
    {p:'Before you start, you should know, from your secondary research:'},
    {ul:[
      'Who the relevant stakeholders are',
      'What tools or products they use',
      'How those tools or features are being used',
      'Why, or for what, they are being used',
      'What evidence supports these findings'
    ]}
  ],
  dataCollection:[
    {ol:[
      {t:'<i>Extract</i> from your <b>primary</b> research:',
       sub:['Stakeholders','Tools and technologies they use','Features they use','What they use each feature for','Relationships between stakeholders and features','Gaps, workarounds or jugaad']},
      {t:'<i>Group</i> related findings together.'}
    ]}
  ],
  synthesis:{ steps:[
    { title:'Map stakeholders', body:['Represent each stakeholder as a circle.'] },
    { title:'Map feature uses',  body:['Place each tool’s features, and what they are used for, within the relevant stakeholder circle.'] },
    { title:'Connect',           body:['Connect related features across the diagram to show relationships, shared uses and dependencies.'] },
    { title:'Analyse',           body:['Look for differences, overlaps, gaps, workarounds and jugaad.'] }
  ], figure:{caption:'fig 002.1',w:191,srcs:[
    {src:'assets/venn-1.png',alt:'Three overlapping circles, one per stakeholder'},
    {src:'assets/venn-2.png',alt:'The same circles with feature cards placed inside them'},
    {src:'assets/venn-3.png',alt:'The feature cards joined by arrows across the circles'}
  ]} },
  guiding:{ title:'Guiding questions', items:[
    'How are the same features being used differently?',
    'Which different features are being used for a similar goal?',
    'Where do features or use cases overlap?',
    'Where do gaps lead to workarounds or jugaad, and what are they?',
    'What do these patterns reveal about the stakeholders and the context?'
  ]},
  exampleHeading:'Chotu’s process',
  example:[
    {p:'Context: understanding how technology is already embedded in a tailor’s work.'},
    {gap:1},
    {p:'Chotu maps the stakeholders:'},
    {ol:[
      {t:'Customer',sub:['WhatsApp: sends reference images','Phone: calls about alterations','Google Pay: sends advance payment']},
      {t:'Tailor',sub:['WhatsApp: receives references and communicates','Gallery: saves useful garment references','Notes: records measurements','Phone: calls the customer for clarification']},
      {t:'Neighbouring shop owner',sub:['WhatsApp: communicates with the tailor','Google Maps: helps locate customers or nearby businesses']}
    ]},
    {gap:1},
    {p:'Then Chotu connects related uses. For example: the customer sends a blouse reference on WhatsApp → the tailor looks at it → the tailor writes the measurements in a notebook → later, the tailor searches WhatsApp again to find the reference.'}
  ],
  exampleFigures:[{src:'assets/sturfry-example.png',w:760,caption:'fig 002.2',
    alt:'Worked STURFRY map for tailors: Customer, Neighbouring Shop Owner and Tailor as overlapping circles with app feature cards inside, joined by labelled arrows, with an app key and Chotu arranging sticky notes beside it'}]
},

ispy: {
  kind:'tool', nav:'I SPY', peek:{src:'assets/chotu-ispy.png',tilt:-5,alt:'Chotu peering through a magnifying glass'}, card:'I SPY', num:'003', name:'I SPY',
  aim:[{p:'To understand how different members of the team see and interpret the same visual environment, uncovering different layers of meaning, emotion, relationship and function within it.'},
    {p:'I SPY does this by analysing differences in what researchers notice, and using those differences to see different dimensions of the same context.'}],
  whenToUse:[{i:'Use I SPY after the first field visit, once the researchers have had an initial opportunity to observe and familiarise themselves with the context.'},
    {i:'Use it before ecosystem mapping, and before synthesising design opportunities.'}],
  prerequisites:[
    {p:'Before you start, you should know:'},
    {ul:[
      'Which location or context you are investigating',
      'Why this location is relevant to your research question',
      'What broad activities or interactions take place there',
      'Optionally, Don Norman’s visceral, behavioural and reflective lenses'
    ]}
  ],
  dataCollection:[
    {ol:[
      {t:'<i>Form the team.</i> At least four people. Three members each choose a lens — functional, emotional or decorative. The fourth member, and anyone beyond them, takes the role of documenter.'},
      {t:'<i>Photograph the place.</i> At the field location, the documenters take exactly 10 high-level contextual photographs that collectively capture the area, its visual environment, objects, spatial arrangements and activities.'},
      {t:'<i>Keep the rule.</i> Only the documenters may photograph the location, and they may take only 10 photographs between them. They do not photograph with a particular lens in mind.'},
      {t:'<i>Share the set.</i> These 10 photographs form the shared dataset.'}
    ]}
  ],
  dataFigures:[{src:'assets/ispy-cutouts.png',w:330,alt:'One photograph of a tailor’s shop, and the same photograph with the selected elements cut away'},
               {src:'assets/ispy-cutout-row.png',w:400,alt:'The cut-out elements laid out in a row'}],
  synthesis:{ steps:[
    { title:'Create lens cut-outs', body:['Each of the three lens researchers receives the same set of 10 images, and cuts out what they find relevant through their lens.','The documenters note what is left of each image once the cut-outs are removed.'] },
    { title:'Sort the cut-outs into the matrix', body:['On a 3 × 3 matrix, the rows and columns are labelled after the three lenses. The column is the primary lens and the row is the secondary lens.','The team sorts every cut-out into the matrix together.'] },
    { title:'Discuss overlaps', body:['An overlap is when the same visual element is selected by two or more researchers.','Discuss these together and decide which lens is primary and which is secondary, then place the cut-out in the appropriate box of the matrix.'] },
    { title:'Discuss remnants', body:['For the parts of the images that no cut-out covered, discuss what was consistently overlooked, why it may have been overlooked, and what other purposes it might serve.'] }
  ], figure:{src:'assets/ispy-matrix.png',caption:'fig 003.1',w:402,alt:'A three by three matrix with cut-outs placed in its cells, beside the full photograph'} },
  exampleHeading:'Chotu’s process',
  example:[
    {p:'Chotu’s functional lens might guide him to select:'},
    {ul:['Sewing machine','Measuring tape','Cutting table','Fabric shelves']},
    {p:'His teammate with the decorative lens might select:'},
    {ul:['Fabric patterns','Garments hanging on the wall','Colourful thread spools','Decorative objects']},
    {p:'Another teammate with the emotional lens might select:'},
    {ul:['A customer’s old garment hanging in the shop','A family photograph','A handwritten note from a regular customer']},
    {gap:1},
    {p:'Chotu and his teammate might see that fabric appears under both the functional and the decorative lens. Chotu sees it as a material used to make garments, while the decorative teammate notices its colours, patterns and arrangement.'},
    {gap:1},
    {p:'Electrical wiring might remain outside all three lenses. Its absence could prompt Chotu and his teammates to ask what they are overlooking, and whether there are other functional, contextual or infrastructural elements that their three lenses do not capture.'}
  ]
},

language: {
  kind:'tool', nav:'Language', peek:{src:'assets/chotu-language.png',tilt:6,alt:'Chotu talking, with a speech bubble'}, card:'LANGUAGE', num:'004', name:'Language',
  aim:[{p:'To understand how people interpret, communicate and exchange information within a specific Indian context, and how their language changes depending on who they are speaking to, what they are doing, and how they are communicating.'}],
  whenToUse:[
    {i:'Use this tool when you want to understand how communication actually works in a context, before deciding how it should work in a product or service.'},
    {p:'It is particularly useful when communication is influenced by:'},
    {ul:['Different languages or dialects','Code-switching between languages','Relationships and social roles','Familiarity or hierarchy','Literacy and vocabulary','Text, voice, images, gestures or face-to-face communication','The situation in which the communication happens']}
  ],
  prerequisites:[
    {p:'Before you start, you should know:'},
    {ul:[
      'Who the key stakeholders are',
      'What they do, and who they interact with',
      'What situations they communicate in',
      'What tools or mediums they currently use to communicate'
    ]},
    {gap:1},
    {p:'You do not need to know the “correct” or preferred language beforehand. The purpose of this tool is to discover it.'}
  ],
  dataCollection:[
    {ol:[
      {t:'<i>Build a picture deck.</i> Collect pictures representing people, objects, situations and technology that exist within the context. The pictures should represent things the participant is familiar with, or encounters in their everyday life.'},
      {t:'<i>Show one picture at a time</i> and ask: “What is the first thing that comes to mind when you see this?” Do not explain what the picture is supposed to represent — let the participant interpret it themselves.'},
      {t:'<i>Build associations.</i> Keep asking “What else?”, and record the words, phrases, ideas, memories and associations that emerge.'},
      {t:'<i>Interpret.</i> Ask: “What do you think is happening?”'},
      {t:'<i>Enact.</i> Pick any of the situation cards and ask: “If you were the person in the picture, what would you say or do?” This helps reveal the language and communication choices they might actually make in that situation.'}
    ]}
  ],
  dataFigures:[{src:'assets/language-deck.png',caption:'fig 004.1',w:338,alt:'Four picture cards fanned out, labelled People, Objects, Situations and Technology'}],
  synthesis:{ steps:[
    { title:'Affinity-map the associations', body:['Group similar responses. Bring together words, phrases and ideas that relate to one another.','This can reveal recurring words, expressions, topics or ways of describing something.'] },
    { title:'Identify patterns', body:['Look at what people consistently notice, prioritise or associate with.'],
      sub:['What words appear repeatedly?','What ideas are strongly associated with each other?','What do people notice first?','What meanings seem to be shared?'] },
    { title:'Compare shifts', body:['Now look for changes.'],
      sub:['Does the way people communicate change depending on who they are speaking to?','Does it change depending on the situation?','Do people use different words or languages for different purposes?','Do they switch between text, voice, images or gestures?'] },
    { title:'Trace information flow', body:['Follow how information moves: what comes in → how is it understood → how is it changed → how is it communicated to someone else?'] },
    { title:'Identify friction and adaptation', body:['Look for moments where communication becomes difficult or requires adaptation.'],
      sub:['Where do people hesitate?','When do they simplify or translate something?','When do they switch languages?'] },
    { title:'Derive design implications', body:['Now ask: what should a future product or service support for this stakeholder?'] }
  ]},
  exampleHeading:'Chotu’s process',
  example:[
    {p:'Context: understanding how a tailor communicates a garment requirement.'},
    {gap:1},
    {p:'Chotu shows the tailor a picture of a blouse that needs alteration, and asks: “How would you tell the customer what needs to be changed?”'},
    {gap:1},
    {p:'The tailor might speak to the customer in Hindi:\n“Yahan se thoda tight karna hai.”'},
    {p:'But when explaining it to an assistant, they might switch to Marathi:\n“इथून थोडं कमी करायचं आहे.”'},
    {p:'Or they might use a mix of languages:\n“Sleeve thoda tight karo, yahan se.”'},
    {gap:1},
    {p:'Then Chotu asks: “How would you communicate the same thing on WhatsApp?” They might send a photo with a circle or an arrow on it, instead of writing a detailed message.'},
    {gap:1},
    {p:'Chotu compares:\nCustomer → Hindi — “Yahan se thoda tight karna hai.”\nWorker → Marathi — “इथून थोडं कमी करायचं आहे.”\nWhatsApp → photograph, plus gesture or marking.'}
  ]
},

material: {
  kind:'tool', nav:'Material', peek:{src:'assets/chotu-material.png',tilt:-4,alt:'Chotu carrying a bundle of materials'}, card:'MATERIALITY', num:'005', name:'Material',
  aim:[
    {p:'Material Reality is a tool for understanding the physical, technological and social conditions within which a person performs a task. It helps a designer answer two questions:'},
    {ul:['What does the digital product have to work with?','What work can the digital product take away?']},
    {gap:1},
    {p:'The first question establishes the user’s resource baseline: what devices, connectivity, power, information and human support are actually available.'},
    {p:'The second examines the person’s physical workflow: what they physically and socially do to complete a task, and where unnecessary friction occurs.'}
  ],
  whenToUse:[
    {i:'Use this tool when you are:'},
    {ul:['Designing a digital product for a particular occupation','Designing an app for workers or communities','Digitising an existing process','Designing for a context unfamiliar to you','Trying to understand how technology fits into someone’s existing work','Trying to identify physical or organisational friction that could be reduced through technology']},
    {gap:1},
    {p:'The tool works best when you can identify a person → an occupation → one specific task.'}
  ],
  prerequisites:[
    {p:'Before you start, you should know:'},
    {ul:[
      {t:'<i>Contextual observation</i> — how to observe people performing tasks in their real environment.\n[IDEO Design Kit — Observation](https://www.designkit.org/methods)'},
      {t:'<i>Interviewing and probing</i> — how to ask open-ended questions, and follow up without leading the participant.\n[IDEO Design Kit — Interview](https://www.designkit.org/methods)'},
      {t:'<i>Workflow mapping</i> — how to map the sequence of actions involved in completing a task.\n[Service Design Tools — Journey Map](https://servicedesigntools.org/tools/journey-map)'},
      {t:'<i>Mental models</i> — how people’s expectations influence the way they interact with products and systems.\n[Nielsen Norman Group — Mental Models](https://www.nngroup.com/articles/mental-models/)'},
      {t:'<i>Research synthesis</i> — how to organise observations and identify patterns across research findings.\n[IDEO Design Kit — Methods](https://www.designkit.org/methods)'}
    ]}
  ],
  dataCollection:[
    {ol:[
      {t:'<i>Define the task.</i> Identify who you are studying, and the specific task you want to understand. Find out what triggers the task, what they need to accomplish, who else is involved, and what “done” looks like.'},
      {t:'<i>Map the resources.</i> Understand what the person actually has available while doing the task: their devices, connectivity, power, information and human support. Look beyond simply listing resources, and understand how accessible and usable they are in practice.'},
      {t:'<i>Observe the workflow.</i> Have the person perform the task naturally, or reconstruct it with them if observation isn’t possible. Follow each step to understand what they do, what they need, who or what they rely on, and what happens when something is unavailable.'},
      {t:'<i>Identify friction and adaptations.</i> Look for moments where the task becomes difficult, slow, or dependent on something else. Document the workarounds, adaptations and informal practices people use to keep things moving.'}
    ]}
  ],
  synthesis:{ steps:[
    { title:'Build the resource baseline', body:['Organise your observations around device, connectivity, power, information and human support.','This gives you a clear picture of the resources the person actually has, and the conditions any potential solution needs to work within.'] },
    { title:'Map the physical workflow', body:['Turn your observation notes into a step-by-step sequence of the task, and plot each step and touchpoint onto a diagram of the physical space where the task takes place.','This makes the existing workflow visible in context, and helps you identify where friction occurs and where a digital intervention could fit.'] },
    { title:'Classify the interactions', body:['Classify each interaction between touchpoints as necessary, context-dependent, or reducible.','This prevents you from assuming that every physical interaction is a problem technology needs to solve.'] },
    { title:'Identify the design opportunity', body:['For each friction point, ask whether technology could remove, absorb, reduce or support the work.','First understand why the friction exists, then consider what kind of intervention might address it.'] }
  ], figure:{src:'assets/material-reference.png',caption:'fig 005.1',w:480,
    alt:'Key to the three kinds of interaction \u2014 necessary, context-dependent, reducible \u2014 beside a plan of a workspace with interactions drawn between its touchpoints'} },
  exampleHeading:'Chotu’s process',
  example:[
    {p:'Context: understanding how a tailor takes a customer order, before designing a digital product.'},
    {gap:1},
    {p:'Chotu investigates the actual resources:'},
    {ul:[
      '<i>Device.</i> The tailor has a smartphone, and can access it while working.',
      '<i>Connectivity.</i> Mobile data works inconsistently inside the shop.',
      '<i>Power.</i> The phone is usually charged at home.',
      '<i>Information.</i> Customer requirements come through conversation, WhatsApp and photographs.',
      '<i>Human support.</i> The tailor sometimes asks an assistant to retrieve information.'
    ]},
    {gap:1},
    {p:'Then he maps the physical workflow:\nCustomer arrives\n ↓\n Explains the garment requirement\n ↓\n Tailor asks questions\n ↓\n Measurements are taken\n ↓\n Reference image arrives on WhatsApp\n ↓\n Information is written down\n ↓\n Customer leaves\n ↓\n Tailor later searches for the order'}
  ],
  exampleFigures:[
    {src:'assets/material-example.png',caption:'fig 005.2',w:760,
     alt:'The same plan filled in for the tailor: phone, sewing machine, notebook and the pile of orders to be done, with the interactions between them coloured by kind, and Chotu perched on the key'},
    {src:'assets/material-shop.png',caption:'fig 005.3',w:760,
     alt:'The workflow drawn over an illustration of the tailor shop, with friction points marked REMEMBER, HANDLE, SWITCH, FIND and ASK, and the actual resources listed underneath'}
  ]
}
};

/* Goals to tools, read off the chart on intro page 2.
   Bar colours now use the three supplied hex codes; rows that shared a
   colour on the original chart still share one here. */
window.GOAL_MAP = {
  cols:[['aoiiv','AOIIV'],['sturfry','STURFRY'],['material','Material'],['ispy','I SPY'],['language','Language']],
  rows:[
    ['Understand why',                       'green',  ['aoiiv','sturfry','material','ispy']],
    ['Surface invisible practices',          'green',  ['sturfry','material','language']],
    ['Connect the dots',                     'pink',   ['sturfry','material','ispy','language']],
    ['Find opportunities',                   'yellow', ['sturfry','material']],
    ['Understand how people think and work', 'yellow', ['sturfry','material','ispy','language']],
    ['Tackle biases and assumptions',        'pink',   ['aoiiv','language']]
  ]
};

/* Card colour per tool, cycling the three supplied hex codes. */
window.CARD_COLOUR = {
  aoiiv:'yellow', sturfry:'green', ispy:'pink', language:'yellow', material:'green'
};
