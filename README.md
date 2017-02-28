# Vortxt

A chat room that allows anyone to delete a message.

[Link to deployed app](https://vortxt.herokuapp.com/)

## Technologies Used
- Socket.io
- EJS
- Express
- NodeJS
- Sequelize
- Bootstrap
- CSS
- Pexels for the homepage image

## Screenshots
This is the home page.
![home page](https://i.imgur.com/2HCEpGe.jpg)

This is the register page.
![homepage](https://i.imgur.com/dOO0wlS.png)

This is the login page.
![homepage](https://i.imgur.com/UDsZaqe.png)

This is the messages page.
![messages page](https://i.imgur.com/b9LaFvK.png)

## Process
This is my pseudo code with my expected timeframe. 

1. user creates an account -Wednesday -done
2. user logs in -Wednesday -done
3. user sees past messages -Thursday -done
4. user posts message -Thursday -done
5. messages past 24 hours are erased -Friday
6. hook up websockets -Friday

## MVP
Create a full stack app that allows anyone to create an account and users can chat with each other and erases all messages after 24 hours.

## Unsolved
- The socket works on localhost, but does not speak to the database. The socket does not work when deployed, but the database works properly. 
- I ran out of time to add the auto-delete.


