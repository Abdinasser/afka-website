export type FoundingBriefSection = {
  id: string;
  title: string;
  summary: string;
  paragraphs: string[];
  pullQuote?: string;
};

export const foundingBrief = {
  title: "The case for an independent Somali digital research institute",
  institution: "Afka Digital Institute",
  type: "Founding Brief",
  year: "2026",
  framing:
    "Somali public life is already digital. The work of understanding it is still catching up.",
  downloadHref: "/downloads/afka-founding-brief.pdf",
  quickRead: [
    "Somali public life is already shaped by platforms, but continuous Somali research infrastructure is weak.",
    "The correct unit of analysis is not only the Somali state, but the Somali language sphere across the Horn and diaspora.",
    "Platform decisions affect speech, visibility, monetization, safety, moderation, and public knowledge.",
    "Somali remains under-resourced in AI, moderation, and language-specific analysis.",
    "The need is not another isolated study, but sustained institutional memory.",
    "Afka is being built to produce evidence, preserve memory, and make Somali digital life legible."
  ],
  sections: [
    {
      id: "digital-public-sphere",
      title: "The digital public sphere",
      summary:
        "Somali digital life is visible, active, and consequential, but it is still poorly archived and weakly studied.",
      pullQuote:
        "Somali public life is already digital. The work of understanding it is still catching up.",
      paragraphs: [
        "That sentence sounds simple, almost too simple. But it is where the case begins. A political argument in Mogadishu no longer stays in Mogadishu. It moves through Facebook pages, TikTok clips, WhatsApp groups, Telegram channels, YouTube livestreams and diaspora networks. A sermon can travel faster than a press release. A rumour can cross three countries before anyone knows where it began. A creator can shape public taste from a bedroom, a shopfront or a rented studio, while still depending on platform systems built for markets with more data, better payment access and stronger institutional attention.",
        "Somali society has always been mobile and transnational. Families, remittances, religious authority, political loyalties and business ties have long moved across borders. Digital platforms did not create that condition. They accelerated it. They gave it new forms, new incentives and new vulnerabilities.",
        "The problem is not that Somali digital life is invisible. Often it is painfully visible. It is loud, funny, hostile, inventive, devotional, political, commercial and intimate. It is also poorly studied. There is plenty of content, but not enough public knowledge. There are viral moments, but weak archives. There are platform statistics, but limited language specific analysis. There are outside reports, but little continuous Somali institutional memory.",
        "That is the gap Afka Digital Institute is being built to address.",
        "Somalia's own digital figures already justify serious attention. DataReportal estimates that Somalia had 5.47 million internet users at the end of 2025, equal to 27.6 percent internet penetration. It also estimates 3.51 million social media user identities and 11.5 million cellular mobile connections in late 2025. TikTok's advertising tools reported 3.51 million adult users in Somalia, while Meta's tools put Facebook's ad reach at 2.7 million users. These are not clean measures of individual people, and DataReportal is careful about that. Ad tools change, users duplicate, and platform reach is not the same thing as lived influence. Still, the numbers are enough to make one thing clear: Somali digital life is not a side issue. (DataReportal - Global Digital Insights)"
      ]
    },
    {
      id: "somali-language-sphere",
      title: "The Somali language sphere",
      summary:
        "Digital influence moves through Somali language, kinship, diaspora networks, and regional publics that do not fit a single national frame.",
      pullQuote:
        "The unit of analysis cannot simply be the Somali state. It has to be the Somali language sphere.",
      paragraphs: [
        "The national frame only gets us so far. Somali is spoken across Somalia, Ethiopia, Kenya and Djibouti, with WorldData estimating around 27.7 million mother tongue speakers in the Horn of Africa. The diaspora adds another layer. Rift Valley Institute estimates the global Somali diaspora at around two million people outside the Somali regions of the Horn, with influence in development, politics and the economy. (Worlddata.info)",
        "That means the unit of analysis cannot simply be the Somali state. It has to be the Somali language sphere.",
        "A debate about an election, a conflict, a celebrity, a religious controversy or a social taboo may begin in one country and become meaningful in another. A claim made in London can alter a conversation in Hargeisa. A clip from Nairobi can be reframed in Mogadishu. A diaspora account can become more influential than a local institution. This is not an exception to Somali politics. It is part of its structure now."
      ]
    },
    {
      id: "platforms-as-governors",
      title: "Platforms as governors",
      summary:
        "Platforms now rank, remove, recommend, restrict, and monetize Somali speech, often in contexts where public trust is already under pressure.",
      paragraphs: [
        "Platforms sit inside that structure. They rank posts, recommend videos, remove content, leave content up, restrict accounts, sell ads, decide who can earn money, and decide which languages receive real moderation investment. Their choices affect what people see and what people think others are seeing. That matters in any society. It matters more in places where state institutions are fragile, media markets are uneven, and public trust is already under pressure.",
        "Somalia's 2023 attempt to restrict TikTok, Telegram and 1XBET showed how quickly platform governance can become a state question. AP reported that Somalia's Ministry of Communications and Technology said it intended to shut down access to TikTok and Telegram over concerns about extremist material, explicit content and material seen as offensive to Somali culture and Islam. AP also described it as the first official attempt by a Somali government institution to block social media platforms. (AP News)",
        "Whatever one thinks of that decision, it exposed a real institutional problem. Governments can reach for bans. Platforms can issue statements. Users can find workarounds. But none of that produces a serious public account of how harmful content circulates, how young people use platforms, how moderation actually works in Somali, or what rights should survive a security panic."
      ]
    },
    {
      id: "digital-rights",
      title: "Digital rights and public protection",
      summary:
        "Rights questions in Somali digital spaces are concrete: censorship, takedown pressure, harassment, surveillance, and manipulation.",
      paragraphs: [
        "That last point matters. Digital rights in Somalia are not abstract. The 2025 Somalia Country Focus Report from Eu SEE and Hivos describes ad hoc censorship, takedown pressure and online harassment targeting journalists and civic actors, especially those working on governance and human rights. It also says the absence of a comprehensive legal framework for digital rights and online content leaves users more exposed to surveillance and manipulation.",
        "This is where the argument for an institute becomes concrete."
      ]
    },
    {
      id: "language-infrastructure",
      title: "Language as infrastructure",
      summary:
        "Somali moderation, AI, and platform analysis depend on language infrastructure that remains thin, uneven, and poorly scrutinized.",
      pullQuote: "Language is not a small technical detail here. It is the material itself.",
      paragraphs: [
        "Somali digital life is being governed by systems that often do not understand Somali speech. A 2025 paper on Somali fake news and toxic message detection puts the technical problem plainly: Somali remains a low resource language for AI, with scarce annotated training datasets and few models tailored to its linguistic features. The authors created Somali social media datasets for fake news and toxicity classification and developed a monolingual Somali model called SomBERTa. Their work is useful, but it also reveals the scale of the absence. If one paper has to build basic resources before it can test the problem, the research infrastructure is still thin. (arXiv)",
        "Language is not a small technical detail here. It is the material itself.",
        "Somali online speech includes formal writing, phonetic spelling, dialect, religious reference, poetry, sarcasm, clan coded language, gendered insult, political shorthand, diaspora slang, Arabic phrases, English phrases and platform specific humour. A harmful post may not look harmful to a system that cannot read the cultural signal. A legitimate criticism may look threatening to a system trained badly. A coordinated pile on may look like ordinary disagreement. A joke may be read as abuse. Abuse may be read as a joke.",
        "This is how weak language infrastructure becomes weak public protection.",
        "The problem is not unique to Somali. Research on content moderation in the Global South has shown that low resource languages suffer from scarce training data and limited public scrutiny of platform moderation systems. The Center for Democracy & Technology's work on low resource languages describes moderation as an area that technology companies keep largely inaccessible, except for the information they choose to disclose. (MediaWell)",
        "Meta's own Oversight Board has warned that community notes, if expanded globally without enough testing and safeguards, could carry human rights risks in crisis and conflict settings. The Board also warned that such systems could privilege dominant political, ethnic or linguistic groups and marginalise others. (The Oversight Board)",
        "For Somali spaces, that warning is not theoretical. A system that depends on crowds to correct misinformation has to ask which crowd. Which dialect? Which political alignment? Which diaspora network? Which gendered risk? Which local fear? Which armed context? A correction tool can help, but it can also reproduce power if the social environment around it is unequal."
      ]
    },
    {
      id: "research-gap",
      title: "The research gap",
      summary:
        "Without independent evidence, harms become incidents, patterns disappear, and policy is made from panic or convenience.",
      paragraphs: [
        "This is why the research gap cannot be treated as an academic inconvenience. It changes the quality of governance. If platforms cannot see Somali harms clearly, they cannot moderate them fairly. If governments do not have independent evidence, they may legislate from fear or political convenience. If donors depend on short studies, they may fund yesterday's problem. If journalists work only from incidents, patterns disappear. If civil society has no archive, every debate starts again from zero.",
        "The consequences are already visible.",
        "Misinformation is one part of it, but not the whole field. Conflict narratives move through platforms. Religious authority is contested through clips and counterclips. Clan language can be coded, denied and reactivated. Diaspora accounts can amplify local grievances from a distance. Women journalists and civic actors face abuse that follows them across platforms and into offline life. Young creators build audiences without stable access to the same monetisation systems available elsewhere. Somali language data enters AI systems unevenly, sometimes as absence, sometimes as bad translation, sometimes as misclassification."
      ]
    },
    {
      id: "creator-economy-mobile-money",
      title: "The creator economy and mobile money",
      summary:
        "Somali digital life includes culture, money, media, public debate, and infrastructure, not only misinformation.",
      paragraphs: [
        "The creator economy is a useful example because it is usually discussed as opportunity. Opportunity exists, but it is not evenly distributed. YouTube's official Partner Program availability list includes countries such as Kenya, Tanzania, Uganda and Yemen, but the page does not list Somalia among eligible countries. That does not mean Somali creators cannot earn in any way. Many operate through diaspora accounts, regional registration, sponsorships or informal arrangements. But the absence of Somalia from official availability still says something about how platform economies map value unevenly. (Google Help)",
        "Mobile money shows the other side of the story. Somali digital life is not only social media. It is economic infrastructure. The World Bank reported that about 73 percent of Somalia's population used mobile money, compared with 15 percent with access to formal banking services. The same Somalia Economic Update describes mobile money as one of the main channels for financial access in the country. (World Bank)",
        "That is why Afka's field cannot be reduced to misinformation monitoring. Somali digital ecosystems include money, media, politics, culture, family, religion, migration and identity. They also include the private rules of companies that decide who is visible, who is paid, who is punished and who is ignored."
      ]
    },
    {
      id: "why-an-institute",
      title: "Why an institute",
      summary:
        "Afka is not a replacement for journalists, civil society, academia, platforms, or government. Its role is continuity.",
      pullQuote: "An institute is a form of memory.",
      paragraphs: [
        "Existing institutions are not useless. That would be the wrong argument. International NGOs have produced valuable work. Somali journalists have covered important harms. Academics have opened technical questions. Civil society groups have defended rights under difficult conditions. Platforms have some trust and safety capacity. Government ministries have legitimate security and regulatory concerns.",
        "The problem is that none of these structures, on their own, can do the patient work required.",
        "International projects often end when funding ends. Platform teams are accountable first to the company. Journalism follows events, and events move quickly. Academic work can be slow or distant from everyday platform culture. Government action can protect, but it can also censor. Civil society groups often work with limited resources and under political pressure.",
        "What is missing is continuity.",
        "An institute is a form of memory. It can keep records when the timeline moves on. It can compare one election cycle with another. It can track how narratives mutate across platforms. It can notice when harms shift from Facebook to TikTok, from public posts to closed groups, from text to audio, from human abuse to AI generated impersonation. It can publish carefully when evidence is strong and hold back when evidence is weak.",
        "That restraint matters. Somali digital spaces are often described through panic: extremism, moral decline, misinformation, youth addiction, cybercrime. Some of those concerns are real. But panic is a poor research method. It misses ordinary life. It misses humour, learning, business, creativity, mutual aid, religious study, language play and the ways people use platforms to survive distance.",
        "A serious institute has to study harm without turning Somali users into victims. It has to study platform power without treating technology as magic. It has to study misinformation without assuming the public is stupid. It has to study digital rights without importing frameworks that ignore local political reality.",
        "Afka Digital Institute begins from that position."
      ]
    },
    {
      id: "independence-method",
      title: "Independence and method",
      summary:
        "Afka's independence is a working condition: evidence, limits, language knowledge, and ethical method must carry the work.",
      paragraphs: [
        "Afka is an independent research and policy institute focused on Somali-speaking digital ecosystems. Its work sits across digital harm, platform governance, information systems, digital rights and digital economies. The institution is not being built to sell a mood about technology. It is being built to produce evidence, preserve memory and make Somali digital life legible to the people and institutions making decisions about it.",
        "The name matters. Afka means \"the language\" in Somali. That is not decoration. It is the method. Language is where platform power becomes social power. It is where a rumour becomes believable, where an insult becomes dangerous, where a religious argument becomes political, where a joke becomes a signal, where a policy failure becomes invisible.",
        "An institute working in this field has to move between Somali and English, between public writing and technical research, between local knowledge and global platform debates. It has to understand Mogadishu, Hargeisa, Nairobi, Jigjiga, Djibouti and the diaspora without pretending they are the same space. It has to speak to journalists, researchers, platforms, donors, civil society and policymakers without becoming owned by any of them.",
        "Independence is not a slogan here. It is a working condition. Research on digital systems must be able to examine government censorship, platform failure, donor blind spots, civil society weaknesses, creator exclusion, gendered harm and misinformation networks with the same discipline. It must also be able to say, plainly, when the evidence is not enough.",
        "That is harder than it sounds. Somali public life is politically dense. Claims travel with histories attached. Every institution risks being read through faction, ideology, clan, donor interest or foreign alignment. Afka cannot escape that environment by claiming purity. It can only build habits that make its work harder to dismiss: clear methods, careful sourcing, transparent limits, ethical research practice, and a refusal to inflate evidence for attention."
      ]
    },
    {
      id: "work-ahead",
      title: "The work ahead",
      summary:
        "The institute's work is slow by design: archives, briefs, explainers, datasets, field notes, and usable evidence.",
      paragraphs: [
        "The work ahead is slow by design. It means building archives. Tracking platform changes. Publishing explainers. Producing policy briefs. Mapping creator economies. Documenting gendered digital harm. Studying AI and Somali language visibility. Comparing moderation failures. Reading diaspora narratives alongside local speech. Training researchers. Working with journalists. Making evidence usable without making it simplistic.",
        "Some of that work will look quiet. Good research often does. It does not always announce itself in a dramatic launch or a campaign line. Sometimes it is a spreadsheet, a translation note, a preserved dataset, an interview transcript, a corrected claim, a short policy memo that prevents a bad law from sounding persuasive."
      ]
    },
    {
      id: "closing-argument",
      title: "Closing argument",
      summary:
        "Somali digital life is too consequential to remain dependent on fragments.",
      pullQuote:
        "The Somali-speaking world is already living inside platform power.",
      paragraphs: [
        "The case for Afka is not that one institution can understand everything. It cannot. The case is that Somali digital life has become too consequential to remain dependent on fragments.",
        "The Somali-speaking world is already living inside platform power. Decisions about speech, money, safety, visibility and knowledge are being made every day, often by systems that cannot fully read the language or the context. The need now is not another isolated study that disappears into a PDF folder. It is sustained attention, held in an institution with memory.",
        "That is the work. Not to dramatise the digital age. Not to celebrate connectivity as progress by itself. To understand what is happening, in the language in which it is happening, before others define it from the outside."
      ]
    }
  ] satisfies FoundingBriefSection[],
  sources: [
    "DataReportal - Global Digital Insights",
    "WorldData.info",
    "Rift Valley Institute",
    "AP News",
    "Eu SEE and Hivos",
    "arXiv",
    "MediaWell",
    "Meta Oversight Board",
    "Google Help",
    "World Bank"
  ]
};
