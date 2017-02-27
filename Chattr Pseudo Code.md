# Chattr Pseudo Code
1. user creates an account -Wednesday -done
2. user logs in -Wednesday -done
3. user sees past messages -Thursday -done
4. user posts message -Thursday -done
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

- I tried to run `heroku run printenv` to test what ports I'm running, but encountered another error. How come I got an error message when I ran 'heroku run printenv'?  http://stackoverflow.com/questions/34498819/socket-io-woks-with-localhost-but-not-on-heroku-server

- How come the app runs on localhost:3000 but the socket and the database do not work? It responds with a 404.

- Could it be a port binding issue? Don't really understand port binding.
