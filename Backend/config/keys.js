//dbPassword = 'mongodb+srv://Bhuvi123:'+ encodeURIComponent('abcd@123') + '@Sandbox.mongodb.net/test?retryWrites=true';
//mongodb://Bhuvi123:abcd@123@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true
dbPassword = 'mongodb+srv://Bhuvi123:abcd@123@sandbox.gpulo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
module.exports = {
    mongoURI: dbPassword
};
