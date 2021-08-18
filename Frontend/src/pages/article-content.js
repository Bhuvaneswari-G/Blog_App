const articles = [
  {
    name: "learn-react",
    title: " How Do You Write Your Own Programming Language?",
    thumbnail: "/images/blog1.jpg",
    content: [
      
      `While many new programmers often begin by learning one of the “big name” and easily understandable programming languages, such as Python, other coding learners may be interested in starting from scratch. By that, we mean writing your own language to use for whatever end purpose you may have in mind. Whether you are building mobile apps, designing a video game, want to create websites, or interested in data science (among the dozens of other needs for dynamic programming languages), there is certainly an appeal to creating your own language and seeing it adopted by programmers around the world.

      
      
      So what are the key questions that can get you started toward creating a programming language of your own? Here are just a few of the things to consider as you begin brainstorming and mapping out your ideal creation.
      
      Interpreted or Compiled Language? 
      There are two central “classes” of programming languages, known as compiled and interpreted:
      
      In the case of a compiled language, a compiler identifies everything a program will do, transforms it into “machine code” (a format which a computer can then run very quickly), and subsequently saves that to be executed later.
      Meanwhile, for an interpreted language, an interpreter steps through the source code line by line, figuring out what it’s doing as it goes.
      To be fair, any language could theoretically be compiled or interpreted, but usually one or the other option makes more sense for a specific language. Experienced programmers will tell you that interpreting tends to be the more flexible option, while compiling offers higher performance. 
      
      This is an essential decision to make early in the brainstorming process, because many language design decisions are based on it (for one example, static typing is a big benefit to compiled languages, but not so much for interpreted ones).
      
      Choosing A Language For Your Language 
      We know, this sounds a bit confusing, but the easy way to think about it is to realize that programming languages are themselves programs, and thus need to be written in a language. Languages like C++ are often used because of structural advantages, although again, this decision is affected by the choice you make above:
      
      If you want to create an interpreted language, it is more sensible to write your language within a compiled one (such as C, C++ or Swift) because the performance lost in the language of your interpreter and the interpreter that is interpreting your interpreter will compound.
      If you choose to compile instead, a slower language (such as Python or JavaScript) is perfectly acceptable. While the compile time may be lackluster, many programmers consider good run time more important and these languages can offer that.
      Other Factors In Creating Your Own Language 
      To give you a snapshot of the many other factors you’ll need to consider when writing your own language, here’s a quick hitting list of some of the other decisions you’ll need to make during the process:
      
      High level design -- including the way you will format data on each level of the language
      Lexing -- the lexer is supposed to incorporate a string containing an entire file's worth of source code and spit out a list containing every token. The lexing process basically breaks down the language into tokens, which can help you organize the language.
       Tokens are small units of a language, such as a variable or function name (also known as an identifier), an operator or a number.
      Parsing -- the process by which you add structure to the list of tokens that are produced during the lexing stage.
      External tools to help write it out -- there are countless out-of-the-box solutions available for programmers creating their own language, such as Bison (a prominent parsing library) or LLVM (a collection of compiler tools). You will need to do some research (and visit developer forums) as you work to figure out which are ideal for your chosen language.
      Sound like a lot of work? It is. But that’s not to say you shouldn’t write your own language, especially if creativity is the real appeal to programming for you. However, the best method for any newer coding learner is to start by learning the basics of established and multipurpose languages like Python and Java, and then graduate toward building your own!`,
    ],
  },
  {
    name: "learn-node",
    title: "A Guide to Emotional Intelligence for Software Engineers",
    thumbnail: "/images/1.webp",
    content: [
      `What Is Emotional Intelligence? 
      Emotional intelligence, or EI, is defined as the ability for one to “recognize their own emotions and those of others, discern between different feelings and label them appropriately, use emotional information to guide thinking and behavior, and adjust emotions to adapt to environments.”
      
      Though the concept has been around for decades, the term “emotional intelligence” gained popularity with the publication of the book Emotional Intelligence in 1995. Since then, it has come to be recognized as an important trait in leaders and senior professionals, as well as employees in general.
      
      Recognizing Your Own Emotions and Those of Others 
      One key aspect of emotional intelligence is the ability to correctly recognize both one’s own emotions and those of others. For example, a coworker may be visibly upset. An emotionally intelligent person can determine whether the person is angry, disappointed or sad -- and whether that emotion was caused by something at work or something else entirely.
      
      The same is true for your own emotions. By figuring out what you’re feeling and why, you’ll be able to better control your reactions to things, leading to better interactions with others.
      
      Responding to Emotions Correctly 
      Once you’ve determined what you or someone else is feeling and why, emotional intelligence will help you to react appropriately to the situation. For example, if the coworker is upset because of something you did (or didn’t do) at work, you can decide whether it would be best to apologize immediately, or perhaps to wait a day for things to calm down.
      
      Likewise, if you understand why you are feeling a certain way, you can take steps to change how you’re feeling or deal with it in a healthy way. You might conclude that someone who upset you didn’t mean to, and so there’s no reason to continue to be mad about it. Emotional intelligence will help you to make those kinds of decisions that will help you to get along with those you work with.
      
      Why Emotional Intelligence is Important for Software Engineers
      As mentioned, traditional measures of intelligence like logical thinking, problem solving, and memory are usually what come to mind when we think of software engineers. But there are many good reasons for software engineers to develop emotional intelligence throughout their careers.
      
      Software Engineers Work With Teams 
      Today, very few software engineers work completely by themselves. This means that at some point, you will be interacting with another person, which means you will need emotional intelligence. In fact, most software engineers work as part of a larger team, perhaps using a methodology like Scrum or Agile, which involves lots of collaboration with others.
      
      Additionally, you may need to work with non-technical people such as managers, executives, creative professionals, and salespeople. Emotional intelligence will help you to explain complicated concepts in a way that is understandable to non-technical people. This is a valuable skill especially for senior engineers.
      
      Whether in a technical or non-technical role, everyone appreciates feeling heard and understood. Having emotional intelligence will go a long way toward helping you to succeed in your career and quickly adjust to a new role or a new environment.
      
      Software Engineers Design For People 
      Another area where emotional intelligence is important for software engineers is when designing new software or systems. Though many teams now include a dedicated user experience (UX) designer, software engineers can contribute much to the usability of the products they design.
      
      For example, you may think about how easy it would be for someone who comes from a different culture or background to use your product. Or someone who is using your program for the first time, or who has a disability. Is your product easy-to-use for everyone who might need to use it, not just a small group? Emotional intelligence will help you to see things from another viewpoint and, in turn, design better software.
      
      Employers Value Emotional Intelligence 
      Whether you plan to work for a big tech company or strike out on your own as a freelancer, emotional intelligence will serve you well in your career. Many companies are actively looking for signs of emotional intelligence throughout the hiring and interview process, and so having it can help you to stand out in your job search.
      
      Even at smaller companies or as a freelancer, emotional intelligence is important. People like working with people who they like, and so showing emotional intelligence when you interact with clients or coworkers can help you to build a better and more satisfying career.
      
      How to Develop Emotional Intelligence as a Software Engineer
      Though some research indicates that all of us are born with a certain amount of emotional intelligence, other studies have shown that EI can be developed with practice. Whether you’re just starting out in your career or you’ve been in it for decades, you can learn to improve your emotional intelligence.
      
      Practice Empathy 
      Emotionally intelligent people tend to be empathetic -- that is, they understand how others are feeling, or may feel, and take that into consideration. Before assuming how someone feels, take a moment to consider how they may really be feeling, and what may have led them to feel that way. Then, let that realization guide how you react.
      
      For example, your coworker may be late completing their part of a project. Rather than assuming that they’re lazy or trying to get out of work, consider what else you may know about them.  Maybe they’ve been sick, or their child has been having a tough time at school. Empathy will help you to put yourself in their position and see things from their point of view. In turn, this will allow you to react in a better way to potentially challenging situations.
      
      Empathy will also help you to make better design and usability choices for the products and software that you work on. By considering how someone from another part of the world or from another background will view your product, you will show empathy and be able to design better solutions that help more people.
      
      Think Before You React
      Another important part of emotional intelligence is recognizing one’s own emotions and being able to keep them under control. This can be hard to do in the heat of the moment. That’s why emotionally intelligent people tend to pause before responding when emotions are running high.
      
      For example, imagine you receive an email from a coworker that’s written in a way that upsets you. Maybe they’re showing frustration about something and directing it toward you. Rather than immediately dashing off an equally snippy reply, wait a while before responding. After you’ve calmed down, you’ll be able to write a reply that is less emotional and can defuse the situation instead of escalating it.
      
      Practice Every Day And Don’t Give Up 
      One thing to know about working on emotional intelligence is that it can be difficult. All of us say things that we don’t mean and upset other people. And we get frustrated, upset, sad, and even angry from time to time.
      
      When this happens, don’t take it as a sign that you can’t build emotional intelligence. Instead, view it as an opportunity to keep practicing. Just like when you started learning to code, you had to practice it every day in order to see results. In the same way, make it a goal to work on emotional intelligence every day. Find one small way to show empathy or thoughtfulness, and before you know it, it will come naturally to you.`,
    ],
  },
  {
    name: "my-thoughts-on-learning-react",
    title: "Your Job Search: Crushing The Technical Interview",
    thumbnail: "/images/2.jpg",
    content: [
      `Pre-Interview Stage 
      Just about all medium- to large-sized companies utilize an Automated Tracking Software (ATS) to manage their job postings, collect and organize candidate information, and track candidates as they progress through the evaluation process. 
      
      The content from a candidate's job application materials are extracted from documents and placed in a database with all other applicants. From this database, the recruiting team will select candidates to be interviewed based on predetermined job and company requirements. Access to the candidate profile is given to the hiring team. The hiring team will have access to resumes, and will be prompted to answer a few survey questions about candidate interview performance after each step. Only the hiring manager and recruiter will likely see all of the notes, to keep the process as objective as possible. Depending on company policy, unanimous approval might be required by each member of the hiring team to progress to the next round of the interview, or the hiring manager may have authority to make the final decision (this is usually dependent on the volume of their candidate pipeline -- the more candidates, the more likely unanimous approval is required). Interviewee progress is tracked via the ATS. 
      
      Phone Screen
      Typically conducted by an in-house recruiter (sometimes the hiring manager if the company is smaller in size), the phone screen is the first live contact candidates will likely have with the company. On average, the phone screen lasts anywhere from 15-30 minutes. The recruiter will help candidates understand the job requirements, introduce candidates to the company, and check for interest on both sides. It is common for the recruiter to review resumes and ask general questions about prior and current work experience. 
      
      Especially for high demand technical jobs the recruiter’s purpose is to:
      
      Align candidate interests with the company’s
      Screen candidates by asking a few qualifying questions
      Explain the interview process
      Introduce their technical screen, or “take home”
      Understand candidate salary expectations
      All candidates should be prepared for most screener/qualifying questions -- this should be the easiest part of the interview. You can review a list of questions that recruiters commonly ask here. Many companies will ask if candidates require sponsorship to start employment. If candidates require sponsorship (work visa) to be eligible for employment, it is important to establish a relationship with an immigration attorney so that candidates understand their options and how to best navigate the process. 
      
      Recruiters take this opportunity to explain their entire interview process, and give candidates general information to help candidates understand their process. Because they want to fill the position and move to the next open one, they have some incentive to help candidates succeed. Ask clarifying questions if any part of the process is unclear. 
      
      By the time the phone screen has ended, candidates should have a good understanding of:
      
      How many steps are involved in the process, and what each step consists of specifically
      What is the expected timeline to offer to understand the sense of urgency
      Number of candidates in competition for the same position
      Nuances, particular emphasis, or requirements not included in the original job description
      Insight into where past candidates have been successful and not successful
      Where to focus study efforts, helpful resources and tips (some may not give candidates this information, but it is worth asking)
      Technical Screen 
      The tech screen is designed to evaluate the basic technical skills of its candidates. Using their existing technical staff to evaluate candidate skill at scale is costly and requires time that development teams typically do not have. To streamline this process, many companies use an assessment that automatically tabulates candidate scores. The assessments are typically scored using a simple 1-5 scoring system, or pass/fail. Not all companies will administer a technical assessment -- they may opt to skip this step and send candidates a take home exercise, described next. 
      
      It is common for companies to outsource a technical assessment to a company such as HackerRank, TripleByte, or Codesignal. These 3rd party assessment companies help advise companies where to set pass/fail criteria, based on industry hiring standards. Practice assessments and learning resources are typically made available to engineers by the 3rd party assessment companies. SQL is the most common technology found on technical screens. The technical assessments typically range from 45 minutes to 90 minutes. Especially if technical assessments are new to candidates, candidates will find doing practice runs will be helpful. 
      
      Technical Evaluation 
      Technical evaluations differ from tech screens, in that they require a deeper understanding of multiple technologies and skills, require more time to complete, and often require candidates to apply skills in a problem solving exercise. 
      
      “Take Homes” are typically given to candidates after the phone screen, and may be timed or not. The timed take home (sent via email), gives candidates a predetermined amount of time to complete the assessment. Candidates click on the link, which opens a coding environment and coding challenges to complete. The window closes once the allotted time is reached. It assesses coding skills under time pressure. 
      
      Another type of take home presents a complex problem, which requires the candidate to use the information given to evaluate and solve the problem. Typically more common in data science related job interviews, it can take up to a week to submit, and requires the candidate to demonstrate technical, analytical, and communication skills. Many of these take homes ask the candidate to create a slide deck presentation of their solution. Candidates are asked to present their submission to the hiring team panel during the in-person interview. 
      
      Virtual Coding 1:1 evaluations are common in software development roles and in data science roles that prioritize development skills. Typically lasting 30-60 minutes, a member of the hiring team will invite candidates to a virtual coding environment. The candidate will be asked to provide code for a particular problem in the environment while the interviewer watches interviewee progress along the way. This gives the company more insight into the candidate’s thought process and how clean their code is on the first pass. The interviewer may or may not make themselves available for help or hints during the evaluation. 
      
      If candidates are new to this interview process, practicing these types of technical evaluations are essential. Candidates often fail in their first couple of attempts, and so it is preferable to address the interview learning curve while practicing.
      
      In-Person Interviews:
      
      If candidates pass the technical evaluations, the company will bring candidates onsite to interview with the team. The company will continue to evaluate the candidate’s technical skills, but the onsite is an opportunity for candidates to meet the team, take a tour of the facilities, and ask more questions about the job and company. 
      
      The interviewing team will likely spend more time evaluating soft skills. It is likely that candidates will meet members from teams that interface with the open position, which includes development teams, data teams, product people, hiring managers, HR/recruiting, marketing, sales, and potentially executives. Learn more about the onsite interview in our previous post: Your Job Search: How to Crush the Behavioral Interview.
      
      Whiteboarding is an evaluation similar to the 1:1 virtual coding interview in that candidates will write code for a given prompt with one or two people observing participant progress. Nonetheless, there are noteworthy differences. 
      
      Candidates are almost certainly writing code on a white board instead of in a coding environment. This is significant because candidates no longer have the ability to have the environment to help candidates check and run code. In addition to not having the support of a coding environment, first timers often are surprised by the cognitive difference of writing code on a while board versus typing on a laptop. 
      
      Candidates are also expected to interact with the interviewers while coding. Coding is often a collaborative effort, and whiteboarding tests the candidate’s ability to work with others to write code and solve problems. Interviewers almost always make themselves available for clarifying questions. The interview may intentionally provide insufficient information to solve the problem, requiring the interviewee to pull the necessary information from them. Seasoned interviewers will also be able to talk their way through their code to explain their thought process.
      
      Final Round Interview
      
      Not every company will request  that candidates return to their site a second time. If they do, it means that those candidates have made the final cut, and that they are one of the finalists. 
      
      Typically they might bring 2 or 3 candidates back for the final round. This round will likely assess mostly for culture fit rather than technical skills and aptitude. Because executives’ time is limited, companies might reserve this step of the interview for executives to meet promising candidates, and provide their final stamp of approval. Candidates should be prepared to talk about their motivation to work at this company doing the offered job. 
      
      Recruiters will also use this time to do any final soft skills evaluation, and also gather as much salary information from candidates in order to prepare for a potential job offer. Recruiters will often revisit salary requirement questions, and also get updates on the candidate’s overall job search to assess their potential competition, should candidates receive multiple job offers. 
      
      In most cases, it is a good strategy to let them know that candidates are in process with more than one company. This will help create more urgency, and they will likely come in with a stronger initial offer. We will cover negotiating a higher salary in a subsequent article.`,
    ],
  },
  {
    name: "learn-node",
    title: "What Is SQL Used For?",
    thumbnail: "/images/3.jpg",
    content: [
      `SQL is the commonly used acronym for Structured Query Language, the standard language for relational database management systems. SQL traces its origins all the way back to 1973, when it was initially created by a team at IBM to manipulate and retrieve the data stored in their system at the time.

      Far from becoming outdated over time, SQL remains the primary language for communicating and interacting with databases, used by a variety of heavyweights including Oracle, Sybase, Microsoft SQL Server, Access, and others. While many of these systems have their own proprietary extensions tailored to their specific needs, SQL remains the structure on which these databases are powered.
      
      So what is SQL used for specifically? How has SQL continued to prove its usefulness over the past several decades? This guide will walk you through the basics of SQL, what you can hope to do with it when you master it, and the best ways to start learning SQL for yourself. 
      
      Why was SQL created?
      SQL was created for a simple, specific purpose: to query data stored within a relational database. Why is this so important? A language that efficiently manipulates, filters, and retrieves data from a database can allow individuals or companies to:
      
      Search for trends among user behavior, to help develop branding and outreach or fix existing UI gaps
      Actually sort and collect the mountains of data accumulated by an app or web page, to answer operational or research questions
      More easily search for single use cases or customers based on key categories or columns, without having to manually go line-by-line
      Better package and present important data, whether for resale opportunities or to present as evidence for research or academic papers
      To go beyond simply collecting and displaying information, as you might with Microsoft Excel - unlike simple spreadsheets, SQL databases can process millions upon millions of cells of data
      SQL offers important flexibility to its users by supporting distributed databases - databases that can be run on several computer networks simultaneously. SQL serves both enterprise and academic needs, and can be used on both individual computers and corporate servers. Further driving its continued adoption is affordability - as database technology has continued to progress, SQL-based applications are no longer cost-prohibitive for casual users.
      
      Why Should I Learn SQL?
      While most major programming languages have a variety of functional uses that have led to their widespread adoption, there may be no more universally important language to learn than SQL. Here are a few reasons why:
      
      Collecting, sorting, and manipulating data is essential to nearly every business with a significant web presence these days. Knowing SQL is essential to perform these functions and help business managers make more informed decisions to compete.
      In conjunction with its importance, the widespread need for experienced database managers has led to significant demand (and similarly, rapidly rising salaries) for individuals who are well-versed in SQL and database operations.
      Unlike the variety of front-end or back-end languages (like Python or Ruby, for instance), SQL is largely the industry standard even decades after its creation. While some alternatives are beginning to emerge, knowing SQL can be a more widely applicable skill than learning a single language for creating a web app or online game.
      What Is SQL Used For? by SoloLearn
      
      Examples of SQL in Action
      So what do these various benefits and applications of SQL actually look like in a real-world application? Here are some examples across a variety of industries and market verticals where SQL plays a key role:
      
      Perhaps you run a subscription-based news or service business. If you wanted to search for every client who chose to upgrade to a specific monthly subscription plan AND filter them by location, SQL capabilities allow for that level of specificity when filtering and sorting data.
      Music apps like Spotify and Pandora are powered by complex, frequently-used databases responsible for storing everything from customer preferences to music genres and categories. SQL-powered databases power these apps’ ability to store vast libraries of music files and albums by various artists, operate this data to find what the user is looking for, and generate relevant suggestions and similar content to improve user experience.
      Similarly, social media sites like Facebook and Instagram are equally powered through storing a diverse library of user info (in this case, personal information from user profiles and posts) and making that info efficiently sortable for generating search results that are predictive and relevant to user needs.
      In academic settings, SQL databases are also essential to modern research and observations in various scientific fields. This is especially true for highly technical research fields like astrophysics or molecular biology, where complex and precise data are essential to supporting research conclusions and develop new technologies or innovations based on those results.
      Common Elements of SQL Language
      So what does SQL actually look like? What are the characteristics that make this language so universally relied upon for such a long time? In a simple sense, SQL is based on an array of key elements that make up the general structure of the language. To make things easier for SQL developers, all necessary language commands in the corresponding database management systems are normally executed through a unique SQL command-line interface (CLI). These elements include:
      
      Clauses - the clauses are components of the statements and the queries
      Expressions - the expressions can produce tables or scalar values, which consist of both columns and rows of data (similar to what you’d see in an Excel sheet)
      Predicates - these elements specify conditions, which can be used to limit effects of statements and queries or change the program flow
      Queries - a query will retrieve data, based on a given criteria. Queries allow users to manipulate the database with a specific end-goal or desired data set in mind.
      Statements - statements allow SQL developers to control transactions, program flow, connections, sessions, or diagnostics. In most database systems, the SQL statements are utilized for sending queries from a client program to an external server where the databases are stored. The server processes the SQL statements and returns replies to the client program in response to these queries.
      In addition to these common elements, SQL is also largely driven by commands. While there are numerous specific commands for creating targeted queries or returning specific sets of data, some example commands an SQL developer often uses include:
      
      CREATE DATABASE – to create a database
      CREATE TABLE – to create tables
      SELECT – to find/extract some data from a database
      UPDATE – make adjustments and edit data
      DELETE – to delete some data
      While these seem obvious, SQL queries offer the ability to combine commands to return a very specific and targeted set of data. The more complex and intensive a database is, the more the commands will reflect this need for nuance.
      
      What Are The Most Popular SQL Database Systems?
       
      Oracle Database
      Oracle is the primary name to know among SQL database systems, as it is the most widely used of all of the systems. Particularly popular for data warehousing and online transaction processing, the Oracle database has an ever-growing number of use cases each passing year.
      
      Microsoft SQL Server
      SQL Server is Microsoft’s enterprise SQL database management system. This database runs on all major versions of Windows operating systems, which is part of the reason for its sizable user base. In addition to web servers that are run on Windows, Microsoft SQL is often used for consumer software needs.
      
      MySQL
      The most popular choice for small business owners and startups, mostly because it doesn’t have a license fee, MySQL is an open-source database system. This makes it obviously useful in conjunction with open-source programs and applications as well.
      
      PostgreSQL
      The main competitor to MySQL, PostgreSQL is also an attractive open-source option for startups and small businesses looking to avoid paying licensing fees. Unlike some of the other SQL servers that significantly change standard SQL syntax for their own purposes, PostgreSQL adheres pretty closely to the standard, making it easier to read and understand than others.
      
      How Do I Learn SQL?
      Like any programming language, the trick to learning SQL is starting with the fundamentals. SoloLearn’s SQL Fundamentals course offers the ideal combination of resources for any beginner looking to learn the language. The course includes:
      
      Tutorials and mini-lessons on over twenty different essential topics for learning, understanding, and using SQL for your own projects
      The ability to unlock achievements and score points by completing fun, relevant quizzes and coding challenges as you progress through the class
      The opportunity to collaborate and network with thousands of other coding learners and beginning programmers to build skills and solve problems together
      SoloLearn’s comprehensive Code Playground provides a space for practicing with actual code and building your own “starter projects”
      Database managers are in high demand, from small startups to the biggest companies around the world. Get started with SoloLearn’s SQL Fundamentals course today, and begin your path toward mastering databases and data manipulation.`,
    ],
  },
  {
    name: "learn-node",
    title: "Pro Tips For Writing Better Code",
    thumbnail: "/images/5.jpg",
    content: [
      `Beginning coders often learn quickly that the ability to simply code in a particular language is only half the battle. The ability to write clear and reliable code is a different story -- one that requires knowledge of best practices, attention to detail, and experience with reviewing and editing code to optimize it.

      Typically, when code is completed for a certain portion of a project, it gets passed on to another person (or multiple people) for review, revision, and extension. With this being the case, keeping your code clear and logical is essential to allow other team members to work efficiently.
      
      So how do you write better code? While certain programming languages have their own unique best practices, there are some general guidelines that you can follow no matter if you write with Python, Ruby, JavaScript, or your own preferred programming language.
      
      Plan Ahead and Outline Your Process Beforehand
      Similar to tackling writing projects, research, or even home improvement, the more you plan out your process in advance, the more you can anticipate issues and areas of focus and use your time effectively.
      
      Going through the planning process when coding also lets you see how processes you may want to use in early stages of development may become complicated in later stages. Here are a few tips to make your planning process more efficient:
      
      Consider using a tool like Agile Manager, which allows you to collect user stories and client needs and coordinate a plan of attack for future steps, thus making coding more efficient and avoiding miscommunications or conflicted coding.
      If you are working as part of a team, a project management tool like Trello can also help you create individual to-do lists, coordinate on assigning tasks and project components, and keep track of what has been completed.
      Project managers or senior developers will usually be in charge of organizing and managing the more junior developers on a major project, but if you are working individually, you may have to do this yourself. Fortunately, there are some great resources out there that can help you organize your own project for the first time.
      While Coding, Use Comments The Right Way
      Much like outlining your process before beginning to write code can help avoid missteps later on, using comments appropriately from the start of a project can also prevent issues down the road. Creating documentation of the process ahead of time also helps you think through what you’ll be creating even further. You might realize a flaw in your plan beforehand, instead of as you write and work, or afterwards
      
      Here are some other tips and best practices for using comments:
      
      Don’t comment on everything. Be specific and intentional in choosing where you add them, and keep them brief to avoid wearing out anyone reading them
      Too many comments can make code unreadable and messy. Try to condense where you can.
      Focus on potential misunderstandings others may have when choosing where to add comments.
      If you are looking for specific feedback, use comments to point your reviewer to those spots to make revision more useful.
      Proper Use of Descriptive Names
      As you name different classes, variables, methods, functions, and so on, pay careful attention to making the descriptive names informative and unique. 
      
      For example, you should give related features similar names, but unrelated features should be clearly differentiated to avoid vagueness and potential confusion. 
      Remember to keep all names current and logical as the build continues and functionality changes. Make sure to revisit your descriptive names later in your coding and revise as needed to ensure changes are reflected.
      Learn and utilize common naming conventions for a specific language you are working with (for example, camelCase when using Java). Since conventions are created for uniformity specifically to avoid confusion, not using them will frustrate and confuse others who rely on them to navigate through code files.
      alt goes here
      
      Take Simple Steps To Keep Code Clean and Concise
      There are some simple best practices you can utilize to help “slim down” your code to make it easier to read and work with to maximize efficiency. 
      
      Avoid long nesting: A common beginner/inexperienced coder mistake is excessive or overly complicated nesting. When you add too many levels of code, the code can become unnecessarily complex and make a fellow team member’s revisions both complicated and potentially damaging if the wrong changes are made. Try to find ways to limit the levels to avoid this easy trap.
      Delete unnecessary code: Think of this as “cleaning up your workspace”. While you might know why unnecessary code has been left hanging around, someone else won’t. Removing it makes code more easy to read and less confusing.
      Create multiple files: While an entire application’s code could go in a single file, the hassles of trying to read and edit a giant file far outweigh any convenience. To avoid this common issue, create clearly delineated files for different aspects of the build, labeled with a system that is consistent for others to navigate
      Separate languages into files: Don’t mix different languages such as HTML, PHP, or CSS in a single file. Divide your code into separate files in such a way that you avoid excessive HTML in PHP files – and vice versa.
      Prioritize readability: Remember, readability is always the preference over being clever in writing your code, especially if you will be collaborating as part of a team.
      Avoid repeating code: Repeating code will make your document very long and it will break the reading flow. If you have pieces of code that are used more than once, it is preferable to make a separate file and include the file path when needed. For example, most pages will have the same header and footer, but there is no need to copy-paste the same code onto every page since you can simply link to it.
      Organized Processes for Reviewing Code Are Key
      While many teams and project managers require peer code review, if you are working on your own or with a less experienced group, sometimes code review can fall by the wayside. Here are some tips and resources for implementing an optimal code review process:
      
      Collaborate with team members and project managers to come up with a routine schedule for reviewing code. By setting benchmarks for submitting code for review, you can increase productivity of individual team members with deadlines/goals and also ensure reviews happen regularly
      The more reviewers and feedback, the better. Beyond the fact that the more eyes on code the better the chances to catch bugs and optimize the code for clarity, different team members bring different perspectives and may each catch something that another programmer did not.
      If you are working alone on a project or need extra help with reviewing your code, there are a number of effective sites for checking code quality and evaluating code automatically. Make sure to use some of these tools to serve as a “virtual editor” for your project.
      Practice With Coding Challenges To Build Experience
      While all of the tips above are considered best practices in the coding community, the truth is that the ability to effectively review and edit code for clarity often comes with experience. The more projects and specific problems you work on, the easier it is to anticipate issues and catch bugs early on in future projects.
      
      Fortunately, there is no shortage of websites with professionally created coding challenges and problems for you to work through and hone your skills before working on a big project. Develop a “practice routine” by completing a number of coding challenges every week or month to build your own skills and simulate the work pace of an actual coding project.
      
      Learn From The Best By Reading Their Code
      Much like practicing with writing code and solving coding problems can help you learn in advance, learning from experienced professionals by reading their code is equally important for beginning coders looking to level up:
      
      Learning from others’ mistakes and seeing the differences between clear and confusing or vague code and crisp, clean code can also help you learn the upsides and downsides of writing both.
      There are numerous resources on the Internet with best practices for reading code as well as plenty of useful sites for actually writing code yourself. Github and Bitbucket are often cited by many in the coding community for their variety of projects and open-source options for you to review.
      Consult with various coding communities and forums if you see something that confuses you and want an explanation. Most major languages have thriving developer communities that share tips, workarounds, and are available to answer questions from their own experience to help you grow.`,
    ],
  },
  {
    name: "learn-node",
    title: "Maintaining Your Motivation To Learn To Code",
    thumbnail: "/images/4.jpg",
    content: [
      `Only forty-five percent of American schools teach coding on campus. So, it is no surprise that learners come to SoloLearn for free coding courses. However, often when students get over the initial energy boost that comes with embarking on a new coding learning journey, motivation can dwindle. 

      Imagine deciding to train to run a marathon. At first, your goal is shiny -- filled with thoughts of new running shoes, playlists, and innovative apps to help you along the way. However, the newness soon wears off, leaving the daily work of waking up early, tying your sneakers, and hitting the pavement. Coding, like running, can feel like a lot of work -- important to practice daily, but sometimes requiring a lot of motivation.
      
      However, the runner who ultimately crosses the finish line feels accomplished and has improved their health. Similarly, the user who sticks through a complete coding course feels that same accomplishment paired with increased job prospects. Read on for tips and tricks on maintaining your motivation to learn.
      
      Remember Your Why
      What brought you to learn in the first place? Maybe you wanted to learn about Ruby in order to complete more advanced development, or maybe you wanted some strategies to implement CRUD. 
      
      Regardless of your reason, something likely drew you in. Simon Sinek once famously said, “Working hard for something we don’t care about is called stress. Working hard for something we love is called passion.” In other words, if you don’t know why you’re working through coding lessons daily, it will feel like just that -- work. Take a moment to remember your ambition to learn to code. Once you have reinvested, move forward, re-invigorated toward your new goal. 
      
      Interact with Those Around You
      SoloLearn has an important feature noticeably absent in many other learning platforms: a discussion board. Peer support keeps you motivated in a number of ways.
      
      For example, advice-giving creates a boost in performance. Additionally, if you’re skilled at using a programming language, you’re more than likely to continue practicing! Similarly, discussing the work with those around you helps to improve your skills. 
      
      One SoloLearner, Hatsy Rei, says, “I have three students who I help on the site and I feel a responsibility to help them become all that they can be. This cycle of teaching and learning keeps me motivated.”
      
      Begin a Project
      While you should certainly chunk your learning in order to give yourself brain breaks and deepen your understanding over time, sometimes, learning skills in small, isolated pieces can make it hard to stay motivated. 
      
      Consider beginning a simple website build where you can directly apply your skills as you learn them. You can begin with simple HTML, which will allow you to manage most blogs, and eventually Java, which will allow you to code your own site. If you begin a site from scratch and slowly practice your skills by adding to it, bit by bit, it will be easier to remember what you’re working for.
      
      Prioritize Consistency
      Learning a programming language is not easy! Prioritize consistency over speeding through the course. Consistency optimizes the chances you complete your projects, small pieces at a time, while retaining what you learn.
      
      Consider completing one lesson each day, and really taking the time to digest it. Practice the skills you learned that day rather before moving on to the next checkpoint. This will ensure that your learning sticks.
      
      Define and Track Your Goal
      Set a tangible learning goal for your coding journey so that you can remind yourself when things get tough. Your goal reminds you of where you are headed and what the payoff is for successfully completing the work. 
      
      Track your goal during your work using charts or other goal trackers. SoloLearn has many tracking  features built in as you progress through the course. Track your progress and stay the course in order to stay motivated to learn to code. 
      
      alt goes here
      
      Mind the Bigger Picture
      Are you learning to code because you hope it will help you earn a pay increase at work? Are you learning to code because you plan to switch careers altogether? Maybe you are learning to code because you’d like to start a website for your business and don’t want to bother with the high costs of a web developer or advertising agency
      
      Keep the bigger picture in mind while doing this work, in order to stay motivated. Consider placing visual or written reminders around your work area of what you eventually hope to accomplish with your newfound skills, so that when things start to feel too challenging, or you are tempted to take an unscheduled break from your learning, you’ll remember why it’s important to stick with it. 
      
      Organize Your Workspace
      Education and motivation experts alike agree that workspace plays a tremendous role in the individual’s decision to stick with a new task. Think about your workspace. Is this a place you like to spend time? Is it a place where you can clear your head and get down to work? 
      
      If you love your workspace as is, that’s wonderful! Keep up the good work. If your workspace doesn’t spark motivation, then consider some changes. Find a way to bring in more natural light, through opening blinds, or obtaining a light simulating lamp. Organize your space with all of the materials you need on a regular basis -- a spare charger, a notebook, pencils, and whatever else you may need in easy arms reach. Create a space you love to be in to keep motivation high. 
      
      Set Frequent Deadlines
      Organize yourself by setting frequent dates for check-ins and sticking to them/ Let’s say you’re starting with our HTML fundamentals course. This course contains forty-four lessons housed in four modules. Think about a way to break these up that makes the most sense to you.
      
      Perhaps you have chosen to divide your work into two lessons per day. In the case of the HTML course, that means you’ll need twenty-two days to complete it. At this rate, you are working through anywhere from four to eight questions per day. 
      
      Should you choose this as your goal, mark the expected end deadline in your planner or set a reminder in your phone or Internet calendar. Miss a lesson? It’s okay, it happens to the best of us. But rather than setting your goal back entirely, commit to completing four lessons the next day in order to meet your overall deadline. Repeat this process for each course, and you’ll work through anything you need to in order to achieve your goals.
      
      Reward Yourself
      You’re working hard! Don’t be afraid to reward yourself when you reach goals that you have been actively working toward.
      
      Consider aligning your rewards to your deadlines -- if you need a challenging deadline, reward yourself with a favorite self-care item or a benefit designed to help yourself along on your journey. Think about rewarding yourself with resources on coding or additional supplies that may bring you to your end goal faster. 
      
      Stay Motivated with SoloLearn
      Although SoloLearn’s free coding courses offer a wealth of benefits to learners, staying motivated to learn any skill independently is not without its challenges. Follow these tips to keep yourself motivated and driven on your journey, and you’ll be coding like a pro in no time.`,
    ],
  },
  {
    name: "learn-node",
    title: "5 Reasons to Learn HTML and CSS",
    thumbnail: "/images/6.webp",
    content: [
      `HTML and CSS are the foundational languages of the web. HTML is a markup language that is used for developing web pages. CSS is a language that defines the presentation of a document written in HTML.

      The following are a few reasons to consider taking a few minutes of your time to gain a better understanding of what makes the web go 'round.
      
      Learning to use HTML and CSS enables you to…
      
      Better Understand the Web
      Knowing the basics of HTML and CSS and how they're used to create web pages is a skill that will always be useful.
      
      They’re helpful tools for designers, marketing specialists, and many other professionals.
      
      For example, today's marketers must optimize, analyze, and develop landing pages, and perform many other related functions. Without at least a basic understanding of HTML and/or CSS, it’s impossible to get the best results.
      
      Create Websites
      Nowadays, it's quite easy to take a free Web template and build a website. But your website will look like everyone else’s!
      
      You can create the ideal website yourself – a personal, unique web page. And you don’t need to pay someone else to do it!
      
      Start a Web Career
      For those of you who want become professional Web developers, knowledge of HTML is required.
      
      Ask experienced web designers about the importance of learning these two languages. Only a few of them will say you can get by without them, and the vast majority will recommend that you learn to use one or both of them.
      
      Learn Another Languages with Greater Ease
      Having a handle on the fundamentals will make learning another programming language (like JavaScript, PHP, SQL…) much easier. And the more you know, the more job opportunities will open up for you.
      
      Earn Money
      We are happy to inform you that you can start making money with HTML and CSS skills ALONE. Search the web and see for yourself. You will find dozens of available HTML and CSS freelance jobs. Of course, you can earn more as you learn more by adding other skills, like JavaScript, PHP, Photoshop, and more to your toolbox.`,
    ],
  },
  {
    name: "learn-node",
    title: "How To Think Like A Programmer",
    thumbnail: "/images/1.webp",
    content: [
      `Always Be Learning!
      You may have started to notice a theme with these suggestions -- specifically, embracing what you don’t know and working to fix those gaps. While some of that comes with experience in working with clients and tackling different types of coding problems and projects, there is also a simple way to continue building your knowledge base. Never stop learning.
      
      What might this look like as you begin your career and start accepting more demanding jobs?
      
      Continuing to take quality coding courses in languages you aren’t as familiar with, or experiment with code playgrounds that let you practice with code in real-time, to build out your coding skill set
      Visiting active developer forums, like Stack Overflow or Github, to learn from experienced developers, ask questions, and get advice over specific problems and bugs you are tackling
      Read leading tech publications and programmer advice blogs that can help you stay abreast of new developments in programming and trends for the future
      Keep a directory of previous clients to reach out to for feedback, advice, and suggestions on processes that can make you a more effective programmer and team member on future projects
      Find a good tool for building and maintaining your own professional portfolio, which can better help you reflect on where your experience and knowledge lies and what gaps you need to fill to make it even more robust
      There’s no better tool than experience, but using these resources and others can be the best method for helping you achieve success in your career and reaching the goals that you have, whether they be professional or creative.`,
    ],
  },
  {
    name: "learn-node",
    title: "A Guide to Emotional Intelligence for Software Engineers",
    thumbnail: "/images/7.jpg",
    content: [
      `What Is Emotional Intelligence? 
      Emotional intelligence, or EI, is defined as the ability for one to “recognize their own emotions and those of others, discern between different feelings and label them appropriately, use emotional information to guide thinking and behavior, and adjust emotions to adapt to environments.”
      
      Though the concept has been around for decades, the term “emotional intelligence” gained popularity with the publication of the book Emotional Intelligence in 1995. Since then, it has come to be recognized as an important trait in leaders and senior professionals, as well as employees in general.
      
      Recognizing Your Own Emotions and Those of Others 
      One key aspect of emotional intelligence is the ability to correctly recognize both one’s own emotions and those of others. For example, a coworker may be visibly upset. An emotionally intelligent person can determine whether the person is angry, disappointed or sad -- and whether that emotion was caused by something at work or something else entirely.
      
      The same is true for your own emotions. By figuring out what you’re feeling and why, you’ll be able to better control your reactions to things, leading to better interactions with others.
      
      Responding to Emotions Correctly 
      Once you’ve determined what you or someone else is feeling and why, emotional intelligence will help you to react appropriately to the situation. For example, if the coworker is upset because of something you did (or didn’t do) at work, you can decide whether it would be best to apologize immediately, or perhaps to wait a day for things to calm down.
      
      Likewise, if you understand why you are feeling a certain way, you can take steps to change how you’re feeling or deal with it in a healthy way. You might conclude that someone who upset you didn’t mean to, and so there’s no reason to continue to be mad about it. Emotional intelligence will help you to make those kinds of decisions that will help you to get along with those you work with.
      
      Why Emotional Intelligence is Important for Software Engineers
      As mentioned, traditional measures of intelligence like logical thinking, problem solving, and memory are usually what come to mind when we think of software engineers. But there are many good reasons for software engineers to develop emotional intelligence throughout their careers.
      
      Software Engineers Work With Teams 
      Today, very few software engineers work completely by themselves. This means that at some point, you will be interacting with another person, which means you will need emotional intelligence. In fact, most software engineers work as part of a larger team, perhaps using a methodology like Scrum or Agile, which involves lots of collaboration with others.
      
      Additionally, you may need to work with non-technical people such as managers, executives, creative professionals, and salespeople. Emotional intelligence will help you to explain complicated concepts in a way that is understandable to non-technical people. This is a valuable skill especially for senior engineers.
      
      Whether in a technical or non-technical role, everyone appreciates feeling heard and understood. Having emotional intelligence will go a long way toward helping you to succeed in your career and quickly adjust to a new role or a new environment.
      
      Software Engineers Design For People 
      Another area where emotional intelligence is important for software engineers is when designing new software or systems. Though many teams now include a dedicated user experience (UX) designer, software engineers can contribute much to the usability of the products they design.
      
      For example, you may think about how easy it would be for someone who comes from a different culture or background to use your product. Or someone who is using your program for the first time, or who has a disability. Is your product easy-to-use for everyone who might need to use it, not just a small group? Emotional intelligence will help you to see things from another viewpoint and, in turn, design better software.
      
      Employers Value Emotional Intelligence 
      Whether you plan to work for a big tech company or strike out on your own as a freelancer, emotional intelligence will serve you well in your career. Many companies are actively looking for signs of emotional intelligence throughout the hiring and interview process, and so having it can help you to stand out in your job search.
      
      Even at smaller companies or as a freelancer, emotional intelligence is important. People like working with people who they like, and so showing emotional intelligence when you interact with clients or coworkers can help you to build a better and more satisfying career.
      
      How to Develop Emotional Intelligence as a Software Engineer
      Though some research indicates that all of us are born with a certain amount of emotional intelligence, other studies have shown that EI can be developed with practice. Whether you’re just starting out in your career or you’ve been in it for decades, you can learn to improve your emotional intelligence.
      
      Practice Empathy 
      Emotionally intelligent people tend to be empathetic -- that is, they understand how others are feeling, or may feel, and take that into consideration. Before assuming how someone feels, take a moment to consider how they may really be feeling, and what may have led them to feel that way. Then, let that realization guide how you react.
      
      For example, your coworker may be late completing their part of a project. Rather than assuming that they’re lazy or trying to get out of work, consider what else you may know about them.  Maybe they’ve been sick, or their child has been having a tough time at school. Empathy will help you to put yourself in their position and see things from their point of view. In turn, this will allow you to react in a better way to potentially challenging situations.
      
      Empathy will also help you to make better design and usability choices for the products and software that you work on. By considering how someone from another part of the world or from another background will view your product, you will show empathy and be able to design better solutions that help more people.
      
      Think Before You React
      Another important part of emotional intelligence is recognizing one’s own emotions and being able to keep them under control. This can be hard to do in the heat of the moment. That’s why emotionally intelligent people tend to pause before responding when emotions are running high.
      
      For example, imagine you receive an email from a coworker that’s written in a way that upsets you. Maybe they’re showing frustration about something and directing it toward you. Rather than immediately dashing off an equally snippy reply, wait a while before responding. After you’ve calmed down, you’ll be able to write a reply that is less emotional and can defuse the situation instead of escalating it.
      
      Practice Every Day And Don’t Give Up 
      One thing to know about working on emotional intelligence is that it can be difficult. All of us say things that we don’t mean and upset other people. And we get frustrated, upset, sad, and even angry from time to time.
      
      When this happens, don’t take it as a sign that you can’t build emotional intelligence. Instead, view it as an opportunity to keep practicing. Just like when you started learning to code, you had to practice it every day in order to see results. In the same way, make it a goal to work on emotional intelligence every day. Find one small way to show empathy or thoughtfulness, and before you know it, it will come naturally to you.`,
    ],
  },
  {
    name: "learn-node",
    title: "Let your profile do the talking!",
    thumbnail: "/images/8.jpg",
    content: [
      `Learning to be a developer is one of the best decisions you've ever made.

      Acquiring the programming skill itself can be hard work, but thankfully, nowadays the barriers are lower than ever, with a variety of resources available online and offline. The challenge is to go beyond learning to develop valuable, profitable skills and to back those up by establishing a reputation for trustworthiness. These attributes are equally important as you work to become successful.
      
      Henry Ford
      
      As a coder, you need to have a reputation based on projects you’ve already completed. But since you’re starting from zero, you have NO projects and NO reputation. To look good when your name comes up in online searches, you need to do the following:
      
      Learn
      Code
      Showcase
      Now set the loop to run over and over again!
      
      In everyday life, this means that you spend time surfing the web for online courses; wait to gain a level of mastery; overcome barriers to join open source projects on coding platforms; spend time blogging; attend gatherings; and hang out on the various forums. Do all you can to show everyone your work.
      
      Now, imagine that you have one convenient place where you can do all of this! SoloLearn organically converts your code learning and achievements into a competitive ranking. You’ll have your shining Coder Identity Profile, built automatically, it lists your personal, individual skills and competitive rankings.
      
     This is what we have been working on throughout the last months. We believe that you should have the opportunity to do only what you love – and to do it often!
      
      Keep coding, get early access to the new app, and see if this is what you've been waiting for.`,
    ],
  },
  {
    name: "learn-node",
    title: "Your First Programming Job: Tips for More Success, Much Earlier",
    thumbnail: "/images/9.jpg",
    content: [
      `Beginning a career in programming can be a challenge. It would be safe to say that nearly every new programmer will come across issues that will seem difficult and irritating. Many successful developers admit that they made many mistakes early in their careers, and that they realized it later on, maybe a few months or even years after the fact. All of them wish they'd had access to tips for success at an earlier date, so they could have avoided wasting so much time trying to get an understanding of what it takes to work as part of a programming team.

      In this post, we'll pass along some tips and advice that our professional developers have shared with us to help you have earlier success as a programmer and avoid some of the pitfalls.
      
      Teamwork is Essential
      When working with a team, you can't avoid communicating with others. And even if you can somehow avoid it, your code must interact with code written by others. And no matter how talented a programmer you are, you should learn how to interact and collaborate with your teammates to avoid ending up as a failure.
      
      You don't have to like everyone on your team, but you do have to be able to work with them. So, learn people language, as well as programming language!
      
      Don't Be Afraid to Ask Questions
      Asking questions is a good way to learn, as well as an opportunity to socialize with your coworkers.
      
      Before asking a technical question, try to find the answer on your own by searching the Web. For example, if you are a PHP developer, it is not okay to ask your colleague, “I want to create an array like {1, 2, 3, …n-1, n} in PHP; can you help me?” You have just shown that not only do you lack skills in PHP documentation, but also that you won't make the effort to search Google or think it through for a moment.
      
      See also: How to ask technical questions
      
      Complete High Priority Tasks First
      This might seem obvious, but remember: You have to pick up the higher priority task first, even though the one with the lower priority looks way more interesting to you. Be a professional!
      
      See also: 8 tips for writing better code  
      
      Don't Worry About What You Don't Know
      You will probably be exposed to many technical discussions full of words and phrases that may not make much sense to you. No need to get stressed or waste time on worrying about what you don't know. There are endless topics to learn about in computer science, and an endless list of terms that you won't understand at first. But if you stick with it, you will eventually understand it all!
      
      The Learning doesn't End when You Find a Job
      Besides keeping up on the news, you should also keep up with learning new skills and tools. In almost all professions - and programming is not an exception - keeping up-to-date on your skills will make you that much more in-demand.`,
    ],
  },
];
export default articles;
