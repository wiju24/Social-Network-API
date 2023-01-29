# Social Network API

## Description

This interactive Back-End application allows users to manage friends, their thoughts and any reactions using the Back-End applications, Insomnia and MongoDB Compass. With the use of Insomnia, users will be able to create/remove any users and thoughts while creating/removing their reactions and friends. In addition, the same users who create an entire list of those listed above, will have the information stored in the Database using the NoSql MongoDB Compass application. Leverage both technologies with the information with this application to create an organized and polished Social Network API.

## Table of Contents

* User Story
* Acceptance Criteria
* Mock Up
* Getting Started & Installation
* Test
* Socials

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Mock-Up

The youtube link, attached in the following section (Getting Started & Installation) is the mockup of how the backend of the application is ran.

## Getting Started & Installation

To get started with the application,  make sure you have the latest version of Node, Insomnia and MongoDB Compass installed.

Following the installation, clone this repository to the local server to allow the connection to the Database and Insomnia to function properly.

Once the repository has been connected, install the following packages in the terminal:
```
npm i moment@6.9.0 mongoose@2.29.4 express@4.18.2 
```
After installation of the packages, in the same terminal, run the application by typing:

```
npm start
```

The following youtube link will go over how to connect to the database and run the routes.

```
https://youtu.be/PLG8jAMytYg
```

## Test
Run: 
```
node index.js
```

## Socials

For details regarding the specific application, proceed to the repository:https://github.com/wiju24/Social-Network-API

For details regarding the Github profile, click on the link: https://github.com/wiju24

For any questions or concerns, do not hesitate to email: vijithiran_navajeevayokan@hotmail.com