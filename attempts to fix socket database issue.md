# Attempts to fix Socket.io and Sequelize interaction


## Summary of issue
I am trying to use Socket.io and Sequelize to create a chat app. Socket.io will handle the socket to allow for immediate messaging. Sequelize will handle storing the messages so when you refresh the screen you still have your messages. 

What is happening is that on localhost my socket works, but it does not send the messages to the database. When I put it onto Heroku, my database worked, but it does not use the sockets.

My socket is located in app.js and my database route is located in routes/messages.js

## Things tried and did not yield the expected outcome

- Idea: Got rid of calling port 8080 for the socket.
- Result: The socket didn't work at all.


- Idea: Call the socket on the same port as the rest of the app (3000).
- Result: Said the port was already in use.


- Idea: Follow instructions on https://devcenter.heroku.com/articles/node-websockets and run in the command line: `heroku features:enable http-session-affinity`
- Result: I knew that if this worked, it would have only fixed the issue in Heroku. I ran that line and it didn't make it work, but it likely fixed a bug I would have encountered in the future.

