See [instructions.md](instructions.md), then later add your docs to this file.

 How to run the program?

The front and backend work in such a way that they have to be executed in different consoles.

So, open the first console and go to the /frontend file and run 'npm run dev'.

In the second console, go to /backend and run py app.py.

1. Documentation and Execution

Do the READMEs explain the solution and how to install it?

Yes The main README and auxiliary files provide clear instructions for configuring and running the project.
Can a solution be run quickly with little setup effort?
Yes The project can be set up with a few commands, and dependencies are well specified.

2. Functionality and Code Quality

Does the solution demonstrate understanding of the problem or are there conceptual errors?
Partially There are minor errors in the frontend and in the way policies are saved in the database (policy.db), but the main logic is correct.
Is it possible to design the policy in the frontend?
Yes The interface allows the creation of policies through conditional blocks (START, conditions, END).
How functional is the UI for policy design?
Basic, but functional The UI fulfills its purpose, allowing the definition of rules, but could be more intuitive with visual and usability improvements.
Does the Execution Engine execute the policy correctly?
Yes Both PolicyFlow and App.py work as expected, processing the defined policies.
Are there serious bugs?
No The buttons, conditions and saving in policy.db work. The only known issue is a minor error in the frontend that does not impact the main functionality.


3.Code Quality and Documentation

Is the code clear and well tested?
Yes The code was developed with the help of AI tools to clarify doubts, resulting in a readable structure. Manual tests were performed, but automated tests could be added.
Is the solution well documented?
Partially More complex functions have explanatory comments, but some parts could be more detailed.
Does it meet non-functional requirements?
Mostly The solution meets most of the requirements, such as error handling, documentation in English, and small descriptive commits.
📝 Final Observations
Strengths:

Main functionality successfully implemented.

Organized code and basic documentation present.

Operational interface, although simple.

Suggested improvements:

Fixing minor bugs in the frontend and in saving policies.

Adding more automated tests.

Improving the UI/UX for greater clarity in creating policie

OBS: This project was a deeply enriching technical challenge. Although I used AI platforms as a tool to help clarify specific doubts and validate approaches, all architectural decisions and implementations were made personally after careful analysis. Working with new technologies allowed me to significantly expand my capabilities - in 6 intense days, I not only understood the core logic of the system, but also acquired practical knowledge that I will take to future projects.