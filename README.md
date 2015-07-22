The technical innovation of iRules project lies behind on the fact that it will be a platform responsible of bringing together exploratory content to facilitate learning mathematics to the students and an intuitive interface to facilitate making rules to the teachers, which want to add extra support to the exploratory content. The importance of creating an interface to make rules from the scratch will help teachers that they don’t have programming skills or technological background to improve the system intelligence and student experience.

The making rules interface will be properly designed considering a good interaction design to facilitate the teacher labour as much as possible. All this, will result on helping the student to navigate through the exploratory content with all support that the teacher has decided to apply by means of rules. To reduce on a sentence: more learning for students and simplicity of making support for the teachers.    


At the moment the application has 2 different views:

    - FRACTIONSLAB VIEW: Select an specific task for Fractions Lab, using a combo. This view includes Fractions Lab.
    - RULES VIEW: Creates a new task (name, id, description), including initial models and initial configuration. In the same view where you create tasks there is an utility to add rules to an specific task, including if (at the moment by combo selection) and "thens" (socratic, guidance, didactic conceptual and highlight) by text input. As a result of all of this, the application will create a tip file to be read by the specific task chosen by FractionsLab View.


The project at the moment has a dependency to a database to store the different tasks, basically id's and names and other dependency to create users for special features in the future.
When I collect more info for fractions lab, specially the way to trigger rules I will check if it's feasible to change the "if" combo and create something more opened.

The way to execute the project is installing maven3

https://maven.apache.org/install.html

Then,

"mvn tomcat:run" on the root of the project