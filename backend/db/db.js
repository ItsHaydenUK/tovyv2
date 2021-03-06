const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err => {
    if (err) {
        console.error(err)
    }
}));



module.exports = {
    user: require('./schemas/user.schema'),
    session: require('./schemas/session.schema'),
    config: require('./schemas/config.schema'),
    ia: require('./schemas/ia.schema'),
}