//const MY_PORT = 26110;



var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose")
    
var app = express();
app.set('view engine','ejs');
mongoose.connect("mongodb://localhost/auth_demo_app");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret:"secret",
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'hbs');
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// database setup
//require('./db');
//const mongoose = require('mongoose');

// express
//const express = require('express');
//const app = express();

// static files
//const path = require("path");
//const publicPath = path.resolve(__dirname, "public");
//app.use(express.static(publicPath));

// body parser
//mongoose.connect("mongodb://localhost/auth_demo_app");
//app.use(express.static(__dirname + '/public'));

//app.use(express.urlencoded({ extended: false }));



//let User = mongoose.model('User', userSchema);
//let Donation = mongoose.model('Donation', donationSchema)




app.get("/",function(req,res){
    res.render("register");
});

app.get("/register", function(req, res){
    res.render("register");
});

app.get("/login", function(req, res){
    res.render("login");
});






app.post("/register", function(req, res) {


if (req.body.fname &&
  req.body.lname &&
  req.body.email &&
  req.body.password &&
  req.body.borough) {

  var userData = {
    firstName: req.body.fname,
    lastName: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    borough: req.body.borough,
    
  }

  //use schema.create to insert data into the db
  User.create(userData, function (err, user) {
    if (err) {
      return next(err)
    } else {
      return res.redirect('/login');
    }
  });
}
});






app.get("/login", function(req, res){
    res.render("login");
});


app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    let user = req.body.email,
    findUser(user)
    res.redirect("/category");
  });



app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
  	let user = req.body.email,
  	//findUser(user)
    res.redirect('/category');
  });

app.post('/login',
  passport.authenticate('local', { successRedirect: '/category',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);





app.get("/donations", loggedIn, function(req, res){
    res.render("donations");
    //is loggedin as parameter
});

app.get("/logout", loggedIn, function(req, res){
    //findUser(req.body.email)
    req.logout();
    res.redirect("/login");
});


app.post("/donations", loggedIn, function(req, res) {


if (req.body.item &&
  req.body.quantity) {

  var donationData = {
    donateThing: req.body.item,
    howMany: req.body.quantity,
  }

  //use schema.create to insert data into the db
  Donation.create(donationData, donation) {
    if (err) {
      return next(err)
    } else {
    	User.updateOne( {_id: req.user._id}, {$push: {donation}})
    	//sort users by borough
  		//find user
    	//code to push to array of donations in user schema
    	//sort by borough
      return res.redirect('/donations');
    }
  });
}
});

    var bronxResidents =[];
    var brooklynResidents =[];
    var manhattanResidents =[];
    var queensResidents =[];
    var statenIslandResidents =[];

app.get("/forum", loggedIn, function(req, res){
    //put all users into different arrays
    if (Users.find ({ borough: bronx})){
    	bronxResidents.push(User);
    	bronxResidents.forEach(printDonationsNameEmail);
    	//printDonationsNameEmail(bronxResidents);
    } else if (Users.find ({ borough: brooklyn})){
    	brooklynResidents.push(User);
    	brooklynResidents.forEach(printDonationsNameEmail);
    	//printDonationsNameEmail(brooklynResidents);
    } else if (Users.find ({ borough: manhattan})){
    	manhattanResidents.push(User);
    	manhattanResidents.forEach(printDonationsNameEmail);
    } else if (Users.find ({ borough: queens})){
    	queensResidents.push(User);
    	queensResidents.forEach(printDonationsNameEmail);
    } else if (Users.find ({ borough: staten island})){
    	statenIslandResidents.push(User);
    	statenIslandResidentsat.forEach(printDonationsNameEmail);
    //db.collection.find().forEach(sortByBorough),



    res.render("forum");
    //is loggedin as parameter
});



function loggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function printDonationsNameEmail(boroughArray){

	if (!(Users.find ({ donations: })) === ""))){
		console.log(
	'Name: ' + User.firstname + User.lastname + '\n' + "Email: " + User.emailID + '\n' + 'Donations: ')
		
		console.log(User.donations.forEach.toString(); + '\n')
		//User.donations.toString()); 
	//email address
	//
  
		//if they are donating
	//console.log
}}

//function findUser

//what did i comment out in login and logout?

//donations --> do this now

//stuff at top

//create find user function

//make list of crediting all links

make a read md 

handle css

deploy w aws

gitignore

//update function??

//print

special topics

unit tests and another api

//app.post (get info):
//forms: 

//app.gett (move to another page):

//forum
//logout --> save data and redirect to log in page
//login page we reach through registration or logout --> use logout method
//donations

//not go register bc default page


//register --> should work
//login --> should work

//after we register, we log in
//if log in successful, we go to category page
//authenticate the user after we register and go to login page
//so we use the information stored in the db

/**
app.get("/category", loggedIn, function(req, res){
    res.render("category");
    //is loggedin as parameter
    //redirected from login post route
});
**/







/*

app.post("/donations", loggedIn, function (req, res){
	//create donation object then add to user donation field
	//authenticated
	items = req.body.item,
	quantities = req.body.quantity,

	//how do i push this object to the user??
	});


*/



//is logged in function
//is authenticated function
//logout function
//does register button link anywhere?






/*




app.post('/donations', (req, res) => {
	let itemID = req.body.item;
	let howMany = req.body.quantity;
	//we print email and 
  
  })

app.post('/category', (req, res) => {
	if (req.body.)
  
  })














app.get('/api/donations', function (req, res) {
	const groceryLists = req.query;
	console.log(groceryLists);
	User.find(groceryLists, (err, foundLists) =>
		if (err){
			console.log(err);
			res.status(500).send("There was an error retrieving the donation lists.")
		}
		res.json(foundLists);
		});

	});

//fix this
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);



app.post('/api/donations/create', (req, res) => {
	// TODO: create new review... if save succeeds, send back JSON
	// representation of saved object
	const newList = new groceryList({
		item: req.body.item,
		quantity: req.body.quantity,
	});
	newList.save((err, savedMessage) => {
		if (err) {
			res.status(500).json({ success: false });
		}
		else {
			res.json({ success: true, result: savedMessage });
		}
	});

});




/*
app.post("/register", function(req, res) {
    


User.register(new User{
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    borough: req.body.borough,
)

 
User.register(new User({
    lastName: req.body.lname, 
    firstName: req.body.fname,
    email: req.body.email,
   borough: req.body.borough,
     
}),req.body.password, function(err, user){
       if(err){
            console.log(err);
            return res.render("register");
        } 
        passport.authenticate("local")(req, res, function(){
            res.redirect("/login"); 
       }); 
    });
});


*/










/**

app.listen(process.env.PORT || AIT_PORT, (err) => {
	console.log('Server started (ctrl + c to shut down)'); 

});

**/
app.listen(process.env.PORT || 3000)










