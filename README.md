# KanbanTool
*Spring Boot/React App that allows the organization of projects in a group setting.*

<!--![alt text](https://media.giphy.com/media/U6k41BdMeH83hH7y5H/giphy.gif 'Picutre App in Action')-->

Users can login and view projects they are currently working on. When viewing the projects they can see tasks organized into three columns. Those columns are to-do, in-progress, and done. Each task can have a priority level of either low, medium, or high. This is a kanban implementation but can but built out to handle other tasks.

### Follow these steps to use the app:

#### Clone Repository
Paste this line of code into your terminal.

`` git@github.com:rtothaoss/KanbanTool.git ``



#### MySQL Section

Create a schema in MySQL. You may name it whatever you wish just be sure change the name in the application.properties in Spring Boot.



#### Spring Boot Section

Once the MySQL schema has been created make sure it matches in application.properties. Be sure to include the timezone otherwise the database connection will not work. Down below an example is listed. After setting up everything in application.properties start the server by running KanbanApplication.java

`` spring.datasource.url = jdbc:mysql://localhost:3306/kanbanTool?serverTimezone=UTC ``


#### Install Dependencies in React
Open the React section and Install all the necessary packages for the app to run correctly.

`` npm install ``

#### Usage 
Start up the app by using this command.

`` npm start ``

### Technologies Used:
* Java
* Spring Boot
* React
* React-Redux
* Redux-Thunk
* MySQL
* Gson
* Lombok
* Bootstrap

