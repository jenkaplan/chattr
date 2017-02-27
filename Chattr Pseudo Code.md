# Chattr Pseudo Code
1. user creates an account -done
2. user logs in -done
3. user sees past messages -done
4. user posts message -done
5. messages past 24 hours are erased -Friday
6. hook up websockets -Friday


## Past MVP
- look into Twilio api
- user can select who they message with
- user can delete a message -done
- user can edit only their message

### Socket.io with Database
- on page load, render all the data from the database
- when data is entered use socket.io to render that data and push it into the database

### Auto-Delete
- Use Moment end of day feature to autodelete

### Questions about Sockets
- Socket isn't working on Heroku, Socket is working on localhost, but not sending to the database.
