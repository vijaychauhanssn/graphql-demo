var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;

// User Type
exports.userType = new GraphQLObjectType({
  name: 'user',
  lname:'user',
  address:'user',
  phone : 'user',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      },
      lname: {
        type: GraphQLString
      },
      address: {
        type: GraphQLString
      },
      phone: {
        type: GraphQLString
      }
    }
  }
});

