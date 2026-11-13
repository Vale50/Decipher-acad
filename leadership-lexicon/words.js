/*
 * Leadership Lexicon — word bank
 * ------------------------------------------------------------------
 * Each category holds entries of the form:
 *   { w: "Display form", c: "Definition shown as the clue", u: "Example sentence using the term" }
 *
 * - `w` may contain spaces or hyphens ("Parking lot", "Check-in"). The grid
 *   answer is the letters only; the clue shows the enumeration, e.g. (7,3).
 * - `u` must contain the term exactly as written in `w` (case-insensitive) so
 *   the "Context hint" can blank it out.
 * - Keep answers to 13 letters or fewer so puzzles stay phone-sized.
 *
 * To add a category, add a new key below; it appears in the menu automatically.
 */
window.LEXICON = {
  "Opening a Meeting": [
    { w: "Agenda", c: "The ordered list of topics a meeting will cover, ideally circulated in advance", u: "Before we dive in, let's walk through the agenda so we know where we're headed." },
    { w: "Quorum", c: "The minimum number of members who must be present for a meeting's decisions to be valid", u: "We have a quorum, so any vote we take today will stand." },
    { w: "Icebreaker", c: "A short opening activity that eases tension and gets participants talking", u: "Let's open with a quick icebreaker: one word for how your week has gone." },
    { w: "Check-in", c: "An opening round where each person briefly shares their status or state of mind", u: "We'll do a thirty-second check-in before we get into the numbers." },
    { w: "Objective", c: "The specific outcome a meeting exists to achieve", u: "Our objective today is to leave with a decision on the vendor shortlist." },
    { w: "Pre-read", c: "Material circulated before a meeting so attendees arrive informed", u: "I trust everyone has gone through the pre-read, so I'll skip the background." },
    { w: "Ground rules", c: "Agreed norms of behaviour that govern how a session will run", u: "As per our ground rules: laptops closed, one conversation at a time." },
    { w: "Timebox", c: "To allocate a fixed, non-negotiable duration to an agenda item", u: "Let's timebox this discussion to ten minutes and then decide." },
    { w: "Parking lot", c: "A holding list for valid but off-topic points, to be revisited later", u: "Great point. Let's put it in the parking lot and return to it at the end." },
    { w: "Kickoff", c: "The first meeting of a project, where goals, roles and expectations are set", u: "At Monday's kickoff we'll confirm who owns each workstream." },
    { w: "Facilitator", c: "The person who guides a meeting's process and keeps discussion productive without dictating outcomes", u: "As facilitator, my job is to make sure every voice is heard, not to push my view." },
    { w: "Housekeeping", c: "Brief administrative notes at the start of a session: breaks, recording, logistics", u: "A bit of housekeeping first: this session is being recorded." },
    { w: "Preamble", c: "An introductory statement that sets context before the main business begins", u: "Without a long preamble, here is why we've called this meeting." }
  ],

  "Closing a Meeting": [
    { w: "Recap", c: "A brief summary of the key points discussed", u: "To recap: we've agreed the budget and deferred the hiring question." },
    { w: "Action items", c: "Specific tasks, each with an owner and a date, agreed during a meeting", u: "Let's run through the action items before we drop off the call." },
    { w: "Takeaways", c: "The key insights or conclusions participants should leave with", u: "My three takeaways from today are clarity, speed and ownership." },
    { w: "Next steps", c: "The immediate actions that follow on from a discussion", u: "Before we close, can someone summarise the next steps?" },
    { w: "Adjourn", c: "To formally bring a meeting to a close, or suspend it until a later time", u: "If there's no other business, I'll adjourn the meeting." },
    { w: "Minutes", c: "The official written record of what was discussed and decided", u: "Ada will circulate the minutes by close of business today." },
    { w: "Follow-up", c: "A later communication or action to make sure agreements are carried out", u: "I'll send a follow-up email with the decisions and deadlines." },
    { w: "Debrief", c: "A structured review held after an event to capture what happened and the lessons learned", u: "Let's hold a short debrief after the client presentation." },
    { w: "AOB", c: "Any Other Business: the final agenda slot for unscheduled items (abbr.)", u: "We have five minutes left. Is there any AOB?" },
    { w: "Owner", c: "The single person accountable for delivering an agreed action", u: "Every action needs one owner, not a committee." },
    { w: "Sign-off", c: "Formal approval that allows work to proceed", u: "We need the director's sign-off before we launch." },
    { w: "Hard stop", c: "A firm end time beyond which a meeting cannot run", u: "I have a hard stop at three, so let's prioritise the top two items." },
    { w: "Wrap up", c: "To bring a discussion to a tidy conclusion", u: "Let's wrap up here and pick this thread up on Thursday." }
  ],

  "Driving a Team": [
    { w: "Cadence", c: "The regular rhythm at which a team meets, reports or delivers", u: "We'll move to a weekly cadence for status updates." },
    { w: "Alignment", c: "A state in which everyone shares the same understanding of goals and priorities", u: "Before we build anything, I want full alignment on what success looks like." },
    { w: "Bandwidth", c: "Informally, a person's available capacity to take on more work", u: "Do you have the bandwidth to own this before Friday?" },
    { w: "Bottleneck", c: "A point of congestion that slows the flow of an entire process", u: "Approvals have become our bottleneck; let's delegate sign-off for small spends." },
    { w: "Escalate", c: "To raise an issue to a higher level of authority for resolution", u: "If the supplier misses another date, escalate it to me immediately." },
    { w: "Milestone", c: "A significant checkpoint marking progress toward a project's completion", u: "Finishing the pilot is our first major milestone." },
    { w: "Delegate", c: "To entrust both a task and the authority to complete it to someone else", u: "A good leader learns to delegate outcomes, not just chores." },
    { w: "Roadmap", c: "A high-level plan showing goals and deliverables over time", u: "Our roadmap shows the mobile app shipping in the third quarter." },
    { w: "Backlog", c: "A prioritised queue of work that has not yet been started", u: "Add it to the backlog and we'll rank it at the next planning session." },
    { w: "Deliverable", c: "A tangible output that must be handed over by a deadline", u: "The final deliverable is a ten-page report for the board." },
    { w: "Scope creep", c: "The uncontrolled expansion of a project's requirements after it has begun", u: "Three new feature requests this week. That's scope creep, and we need to push back." },
    { w: "Critical path", c: "The longest chain of dependent tasks, which sets the minimum project duration", u: "Testing sits on the critical path, so any delay there delays launch." },
    { w: "Stand-up", c: "A brief daily team meeting to share progress, plans and blockers", u: "In today's stand-up, keep it to yesterday, today and blockers." },
    { w: "Blocker", c: "An obstacle that prevents a task from moving forward", u: "Is there any blocker I can help remove for you this week?" },
    { w: "Workstream", c: "A distinct strand of related activity within a larger programme", u: "Tunde will lead the training workstream while Ife leads procurement." }
  ],

  "Motivating the Team": [
    { w: "Morale", c: "The overall confidence, enthusiasm and spirit of a team", u: "Morale dipped after the restructure, so we need some visible wins." },
    { w: "Autonomy", c: "Freedom to decide how one does one's work; a key intrinsic motivator", u: "Give the team autonomy over the how, and hold them to the what." },
    { w: "Mastery", c: "The urge to keep getting better at something that matters", u: "This project is a chance to build mastery in data analysis." },
    { w: "Purpose", c: "The sense that one's work serves something larger than oneself", u: "When people see the purpose behind the task, effort follows." },
    { w: "Recognition", c: "Public or private acknowledgement of a person's contribution", u: "Timely recognition costs nothing and means a great deal." },
    { w: "Empower", c: "To give someone the authority and confidence to act on their own judgement", u: "I want to empower you to make client decisions up to this limit." },
    { w: "Kudos", c: "Praise and honour given for an achievement", u: "Kudos to the operations team for closing the quarter early." },
    { w: "Engagement", c: "The emotional commitment a person feels toward their organisation and its goals", u: "Our engagement survey shows people want clearer career paths." },
    { w: "Buy-in", c: "Genuine agreement and support for a plan from those who must carry it out", u: "Without buy-in from the front line, this policy will fail." },
    { w: "Stretch goal", c: "An ambitious target set beyond what seems comfortably achievable", u: "Our target is ten new partners; fifteen is the stretch goal." },
    { w: "Intrinsic", c: "Describes motivation that comes from within rather than from external rewards", u: "The best performers are driven by intrinsic motivation." },
    { w: "Rapport", c: "A relationship of mutual trust and understanding", u: "Spend the first month building rapport with your new team." },
    { w: "Incentive", c: "Something that encourages a person to act, such as a bonus or reward", u: "The sales incentive rewards long-term clients, not just new ones." }
  ],

  "Feedback & Coaching": [
    { w: "One-on-one", c: "A regular private meeting between a manager and a direct report", u: "Let's use our one-on-one to talk about your development goals." },
    { w: "Feedforward", c: "Future-focused suggestions offered instead of critiques of past performance", u: "Instead of a post-mortem, let me offer some feedforward for the next pitch." },
    { w: "Coaching", c: "Helping someone find their own answers through questions rather than instructions", u: "Good coaching sounds like 'What options do you see?' rather than 'Do this.'" },
    { w: "Mentor", c: "An experienced adviser who guides a less experienced colleague's development", u: "Every new supervisor is paired with a mentor for six months." },
    { w: "Growth mindset", c: "The belief that abilities can be developed through effort and learning", u: "A growth mindset treats a failed launch as data, not a verdict." },
    { w: "Paraphrase", c: "To restate what someone said in your own words to confirm understanding", u: "Let me paraphrase to be sure I've understood your concern." },
    { w: "Candid", c: "Frank and honest, even when the message is uncomfortable", u: "I'd rather you were candid with me now than surprised later." },
    { w: "Direct report", c: "An employee who reports straight to a particular manager", u: "Each direct report should know exactly how they'll be assessed." },
    { w: "Appraisal", c: "A formal assessment of an employee's performance over a period", u: "Your mid-year appraisal is a conversation, not a judgement." },
    { w: "Blind spot", c: "An area of weakness that a person is unaware of", u: "Feedback from peers helped me see a blind spot in how I run meetings." },
    { w: "Open-ended", c: "Describes a question that cannot be answered with a simple yes or no", u: "Ask open-ended questions like 'What got in the way?'" },
    { w: "Upskill", c: "To teach a person additional skills for their role", u: "We'll upskill the team on the new CRM before go-live." },
    { w: "Praise", c: "Expression of approval; best given specifically and promptly", u: "Make praise specific: name the behaviour and its impact." }
  ],

  "Decisions & Strategy": [
    { w: "Consensus", c: "General agreement reached by a group as a whole", u: "We don't need consensus on every detail, just on the direction." },
    { w: "Trade-off", c: "A balance struck between two desirable but competing options", u: "The trade-off is speed now versus quality later." },
    { w: "Pivot", c: "A fundamental change of strategic direction", u: "The data suggests we should pivot from retail to corporate clients." },
    { w: "North star", c: "A single guiding goal or metric that orients all decisions", u: "Customer retention is our north star this year." },
    { w: "Mandate", c: "The official authority given to a person or group to act", u: "The board has given us a clear mandate to cut costs by ten percent." },
    { w: "Rationale", c: "The underlying reasons behind a decision", u: "Let me share the rationale so you can explain it to your teams." },
    { w: "Contingency", c: "A backup plan prepared for a possible future event", u: "What's our contingency if the funding is delayed?" },
    { w: "Stakeholder", c: "Anyone with an interest in, or influence over, a project's outcome", u: "Map every stakeholder before you present the proposal." },
    { w: "Pre-mortem", c: "Imagining a project has already failed in order to surface risks in advance", u: "Let's run a pre-mortem: it's six months on and this failed. Why?" },
    { w: "Root cause", c: "The fundamental reason a problem occurred", u: "Fixing the symptom won't help until we find the root cause." },
    { w: "Headwind", c: "A force or condition that slows progress", u: "Rising fuel prices are a headwind for our logistics budget." },
    { w: "Veto", c: "The right to reject a decision single-handedly", u: "Legal holds a veto on any contract above this value." },
    { w: "Prioritise", c: "To rank tasks by importance and deal with the most important first", u: "We can't do all ten, so let's prioritise the three with most impact." }
  ],

  "Conflict & Hard Talks": [
    { w: "De-escalate", c: "To reduce the intensity of a conflict or tense situation", u: "Lower your voice and slow down; it helps de-escalate the room." },
    { w: "Mediate", c: "To intervene between parties to help them reach an agreement", u: "HR has agreed to mediate between the two departments." },
    { w: "Common ground", c: "Shared interests or views that opposing parties can build on", u: "We disagree on method, but our common ground is the customer." },
    { w: "Reframe", c: "To present a situation from a different, more constructive perspective", u: "Let's reframe this from 'who is at fault' to 'what do we fix'." },
    { w: "Impasse", c: "A deadlock in which no progress seems possible", u: "Talks reached an impasse, so we brought in a neutral facilitator." },
    { w: "Concession", c: "Something given up in order to reach an agreement", u: "Offering flexible hours was a small concession that unlocked the deal." },
    { w: "Acknowledge", c: "To accept or recognise the validity of another person's feelings or point", u: "I acknowledge this change has been hard on your team." },
    { w: "Empathy", c: "The ability to understand and share the feelings of another", u: "Lead with empathy, then move to solutions." },
    { w: "Grievance", c: "A formal complaint about perceived unfair treatment", u: "The employee has filed a grievance, so we must follow due process." },
    { w: "Hold space", c: "To be fully present with someone without judging or rushing to fix things", u: "Sometimes the best thing a leader can do is hold space and listen." },
    { w: "Assertive", c: "Confident and direct in stating needs while respecting others", u: "Be assertive about the deadline without being aggressive." },
    { w: "Neutral", c: "Not taking sides in a dispute", u: "As a neutral party, I'll summarise both positions first." },
    { w: "Resolve", c: "To settle or find a solution to a dispute", u: "Let's resolve this between us before it goes any further." }
  ],

  "Leading Change": [
    { w: "Rollout", c: "The phased introduction of a new system, product or policy", u: "The rollout starts with the Lagos office in January." },
    { w: "Champion", c: "An influential advocate who promotes a change within their team", u: "We need a change champion in every department." },
    { w: "Resistance", c: "Opposition from people who feel threatened by a change", u: "Expect resistance and treat it as information, not defiance." },
    { w: "Quick win", c: "An early, visible success that builds momentum for a larger change", u: "Automating the timesheet is a quick win that builds trust." },
    { w: "Cascade", c: "To pass information down through successive levels of an organisation", u: "Managers will cascade the new strategy to their teams by Friday." },
    { w: "Transition", c: "The process of moving from one state or way of working to another", u: "We'll run both systems in parallel during the transition." },
    { w: "Adoption", c: "The extent to which people actually start using a new way of working", u: "Adoption of the new tool is at sixty percent and rising." },
    { w: "Change fatigue", c: "Apathy that sets in when people face too many changes too quickly", u: "Pause the next initiative; the team is showing change fatigue." },
    { w: "Status quo", c: "The existing state of affairs", u: "Staying with the status quo is also a decision, and it has costs." },
    { w: "Pilot", c: "A small-scale trial run before a full launch", u: "Let's pilot the new shift pattern with one team first." },
    { w: "Momentum", c: "The forward energy that keeps a change effort progressing", u: "Celebrate each milestone to keep the momentum going." },
    { w: "Vision", c: "A clear, compelling picture of the future an organisation is working toward", u: "Paint the vision first, then explain the plan." },
    { w: "Sponsor", c: "A senior leader who backs a change and secures its resources", u: "Our executive sponsor will open the town hall." }
  ]
};
