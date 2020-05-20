
const mongoose = require('mongoose');


let donationSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

});
//user info of person requesting donations
let userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    email:{
        type: String, 
        required: true
    },
    password:{
        type: String, 
        required: true
    },
    borough:{
        type: String,
        required: true
    },

    donations: {
        type: [{ donationSchema}],
        //donation schema
        required: false
    }
});



//grocery list of item and necessity 
//schema of each item




let User = mongoose.model('User', userSchema);
let Donation = mongoose.model('Donation', donationSchema)




let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fs = require('fs');
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/test3';
}

mongoose.model('User', userPersonalInfo)
mongoose.connect(dbconf,{ useNewUrlParser: true, useUnifiedTopology: true });

/**


dbconf = 'mongodb://localhost/jv1340';
}

    
    linserv1.cims.nyu.edu
    port 26110

**/