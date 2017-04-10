# Attempts to fix Socket.io and Sequelize interaction


## Summary of issue
I am trying to use Socket.io and Sequelize to create a chat app. Socket.io will handle the socket to allow for instant messaging. Sequelize will handle storing the messages so when you refresh the screen you still have your messages. 

What is happening is that on localhost my socket works, but it does not send the messages to the database. When I put it onto Heroku, my database worked, but it does not use the sockets.

My socket is located in app.js and my database route is located in routes/messages.js

## Things tried and did not yield the expected outcome

- Idea: Got rid of calling port 8080 for the socket.
- Result: The socket didn't work at all.


- Idea: Call the socket on the same port as the rest of the app (3000).
- Result: Said the port was already in use.


- Idea: Follow instructions on https://devcenter.heroku.com/articles/node-websockets and run in the command line: `heroku features:enable http-session-affinity`
- Result: I knew that if this worked, it would have only fixed the issue in Heroku. I ran that line and it didn't make it work, but it likely fixed a bug I would have encountered in the future.

- Idea: Tried to add the socket to routes/messages.js.
- Result: Everything I did created a lot of errors.

- Idea: get the message to be added to the database within App.js
- Result: This is the current error message I am getting:
``` 
Executing (default): INSERT INTO "Messages" ("id","createdAt","updatedAt") VALUES (DEFAULT,'2017-03-30 04:20:30.667 +00:00','2017-03-30 04:20:30.667 +00:00') RETURNING *;
Unhandled rejection SequelizeBaseError: null value in column "message" violates not-null constraint
    at Query.formatError (/Users/Jen/generalassembly/vortxt/node_modules/sequelize/lib/dialects/postgres/query.js:357:14)
    at Query.<anonymous> (/Users/Jen/generalassembly/vortxt/node_modules/sequelize/lib/dialects/postgres/query.js:88:19)
    at emitOne (events.js:96:13)
    at Query.emit (events.js:189:7)
    at Query.handleError (/Users/Jen/generalassembly/vortxt/node_modules/pg/lib/query.js:131:8)
    at Connection.<anonymous> (/Users/Jen/generalassembly/vortxt/node_modules/pg/lib/client.js:180:26)
    at emitOne (events.js:96:13)
    at Connection.emit (events.js:189:7)
    at Socket.<anonymous> (/Users/Jen/generalassembly/vortxt/node_modules/pg/lib/connection.js:121:12)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:189:7)
    at readableAddChunk (_stream_readable.js:176:18)
    at Socket.Readable.push (_stream_readable.js:134:10)
    at TCP.onread (net.js:551:20)
```

- Idea: delete the not null from the messages database
- Result: It sends the data to the database as an empty string and prints a colon.

## How to replicate the error
1. Download the repo
2. Run npm install
3. Run `createdb vortxt_development`
4. Run `sequelize db:migrate`
5. Update the config/config.json file to have your username. 
6. Go to Chrome and run localhost:8080.
