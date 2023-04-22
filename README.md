# Social Network API [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Social Network API project is a functional Express.js API that uses MongoDB database to store unstructured data of a social network web application. Insomnia Core is used to test endpoints to **GET**, **POST**, **PUT** and **DELETE** data to and from the database.\
This API allows users to add, edit and delete thoughts, reactions to thoughts, and to add and remove friends to and from their friend's list.\
This project is part of a challenge from Full Stack Coding Bootcamp at the University of Minnesota.


## Installation

For this application, please use https://nodejs.org/en/ to install Node.js (version 16 is recommended).\
Run `npm i` in the terminal to install dependencies Day.js, Express.js, Mongoose and Nodemon.

## Usage
To use this Application Programming Interface, follow these steps:
1. Clone this project's repository to local machine by using SSH Key `git@github.com:BiaJorgensen/social-network-api.git`

1. To connect to server:
    * Open a new Terminal
    * Type `npm i` to guarantee dependencies are installed
    * Type `npm start` or `npm run dev` if you wish to make changes to the code and automatically restart the server

1. After doing the steps above, open the Insomnia app.
    * To **GET**, **POST**, **PUT** and/or **DELETE** User:
        * **GET** `http://127.0.0.1:3001/api/users` (to see all users)
        * **GET** `http://127.0.0.1:3001/api/users{:userId}` (to see one user)
        * **POST** `http://127.0.0.1:3001/api/users` (to add a new user)
            * In Body JSON:<br/>
            {<br> 
                &emsp; "username" : "_new user name_",<br>
                &emsp; "email": "_new user email_"<br>
            } 
        * **PUT** `http://127.0.0.1:3001/api/users{:userId}` (to update one user)
            * In Body JSON (you don't have to update both username and email):<br>
            {<br> 
                &emsp; "username" : "_updated user name_",<br>
                &emsp; "email": "_updated user email_"<br>
            } 
        * **DELETE** `http://127.0.0.1:3001/api/users{:userId}` (to delete one user)
        <br><br>
    * To **POST** and/or **DELETE** Friend from User's friend's list:
        * **POST** `http://127.0.0.1:3001/api/users/{:userId}/friends/{:friendId}` (to add a new friend to one specific user's friend's list)
            * **userId** is the ID of the user you wish to add to their friend's list a new friend
            * **friendId** is the User ID of the friend that will be added to the friend's list
 
        * **DELETE** `http://127.0.0.1:3001/api/users/{:userId}/friends/{:friendId}` (to delete a friend from one specific user's friend's list)
            * **userId** is the ID of the user you wish to remove from their friend's list a friend
            * **friendId** is the User ID of the friend that will be removed from the friend's list
        <br><br>
    * To **GET**, **POST**, **PUT** and/or **DELETE** Thoughts:
        * **GET** `http://127.0.0.1:3001/api/thoughts` (to see all thoughts)
        * **GET** `http://127.0.0.1:3001/api/thoughts/{:id}` (to see one thought)
        * **POST** `http://127.0.0.1:3001/api/thoughts` (to add a new thought)<br>
            {<br> 
                &emsp; "thoughtText" : "_new thought_",<br>
                &emsp; "username": "_user that is adding the new thought_"<br>
            } 
        * **PUT** `http://127.0.0.1:3001/api/thoughts/{:thoughtId}` (to update one thought)
             * In Body JSON (you don't have to update both thoughtText and username):<br/>
            {<br> 
                &emsp; "thoughtText" : "_updated thought_",<br>
                &emsp; "username": "_user that is updating the thought_"<br>
            } 
        * **DELETE** `http://127.0.0.1:3001/api/thoughts/{:thoughtId}` (to delete one thought)
        <br><br>
    * To **POST** and/or **DELETE** Reaction from Thought:
        * **POST** `http://127.0.0.1:3001/api/thoughts/{:thoughtId}/reactions` (to add a new reaction to one specific thought)
            * **thoughtId** is the ID of the thought you wish to add a reaction to
            * In Body JSON:<br/>
            {<br> 
                &emsp; "reactionBody" : "_reaction description_",<br>
                &emsp; "username": "_user that is adding the new reaction_"<br>
            } 
        * **DELETE** `http://127.0.0.1:3001/api/thoughts/{:thoughtId}/reactions/{:reactionId}` (to delete a reaction from one specific thought)
            * **thoughtId** is the ID of the thought you wish to remove a reaction from
            * **reactionId** is the ID of the reaction that will be removed from the thought
        

## Credits

University of Minnesota - Full Stack Coding Bootcamp

## License

The license for this project is **The MIT License**<br>
To learn more about this license, please access https://opensource.org/licenses/MIT

## Walkthrough Video
[Link to the walkthrough video](https://drive.google.com/file/d/1B7qa8pRT3OOwYF4S4E8BAyWNtuL0aLtS/view?usp=sharing)