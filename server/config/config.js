module.exports = {
    //MongoDB configuration
    development: {
        db: 'mongodb://127.0.0.1/graphql',
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: 'mongodb://graphql-demo:sursati4044@ds127843.mlab.com:27843/heroku_10r5z3sk',
        app: {
            name: 'graphql'
        }
    }
};