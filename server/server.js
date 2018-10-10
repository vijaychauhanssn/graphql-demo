const express = require("express");
const mongoose = require('./config/mongoose');
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const db = mongoose();
const app = express();

app.use('*', cors());

const userSchema = require('./graphql/index').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGOLAB_PINK_URI);

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});
