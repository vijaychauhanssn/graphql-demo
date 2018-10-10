const express = require("express");
const mongoose = require('./config/mongoose');
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const db = mongoose();
const app = express();
const path = require('path');
const    bodyParser = require('body-parser');
app.use('*', cors());

const userSchema = require('./graphql/index').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));
app.use(express.static(path.join(__dirname, 'public')))   
app.use(bodyParser.json());
 
// views is directory for all template files

// CONNECT TO MONGODB SERVER
//mongoose.connect(process.env.MONGOLAB_PINK_URI);

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log('A GraphQL API running at port 4000');
});
