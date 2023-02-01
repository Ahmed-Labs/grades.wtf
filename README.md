**Todo**

High priority:
- create a get started / login page
    - get started checks for UofT email both client/server side -> sends verification code using third party service
    - Don't give user access to anything until verification is passed 
    - Once verified, user must go to the *mandatory* grade submission page where they anonymously provide any of their grades
- Set up mutations for CRUD with mongodb through prisma client
- Find a way to get all course codes at UofT

Low Priority:
- Create layout component for Navbar
- Create Search bar component for searching courses
- Create modal using react portal (for things like adding grades quickly / alerts)
- Work on course specific dynamic route
    - Add grade submission history (anonymous but with timestamps)
    - Add section with a 'bell curve' for the grade distribution
    - Syllabus section with all the files people uploaded 
    - Upvotes and downvotes