
# Jahnavi Vyas - Final Project

# Coronavirus Donations

## Overview:

During the COVID-19 pandemic, New York City has emerged as the world's epicenter. As many in the city rely on a vocation that is in-person, they now find themselves out of work. There have been shortages for many household supplies, such as groceries and toilet paper. This has had devastating effects on the population as many struggle to acquire basic needed items. On the flip side, many have also begun to hoard essential items that may go bad without ever being used. 

Coronavirus Donations is an app that allows users to connect with those who are donating or in need. Users will be categorized by the borough that they reside in, and will be able to contact each other to arrange for a no-contact pickup. 

## Data Model

This application will store Users and their donations if they choose to donate.

An Example User: 

{
	firstName: "Jahnavi",
	lastName: "Vyas",
	email: "jv1340@nyu.edu",
	password: #####,
	borough: "Manhattan",
	donations: ["2% milk", 5]

}

An Example Donation:

{
	item: "2% milk",
	quantity: 5
}

## Link to Commented First Draft Schema

https://github.com/nyu-csci-ua-0480-008-spring-2020/jv1340-final-project/blob/master/db.js

## Wireframes

In order:

https://github.com/nyu-csci-ua-0480-008-spring-2020/jv1340-final-project/blob/master/Register.jpeg
https://github.com/nyu-csci-ua-0480-008-spring-2020/jv1340-final-project/blob/master/LogIn.jpeg
https://github.com/nyu-csci-ua-0480-008-spring-2020/jv1340-final-project/blob/master/Category.jpeg
https://github.com/nyu-csci-ua-0480-008-spring-2020/jv1340-final-project/blob/master/Donations.jpeg
https://github.com/nyu-csci-ua-0480-008-spring-2020/jv1340-final-project/blob/master/Forum.jpeg

## Site Map

https://github.com/nyu-csci-ua-0480-008-spring-2020/jv1340-final-project/blob/master/Site%20Map.jpeg

## User Stories

1. As a non-registered user, I can register with a new account and log in to the site.

2. As a user, I can log in to the site.

3. As a user, I can choose whether I want to donate.

4. As a user, I can enter donations.

5. As a user, I can add additonal donations.

6. As a user, I can view all donations by borough.

## Research Topics

(3 points) Integrate user authentication

I am using Passport.js for user authentication.

(3 points) Perform client side form validation using JavaScript

https://www.w3schools.com/js/js_validation.asp

## Link to Initial Main Project File

https://github.com/nyu-csci-ua-0480-008-spring-2020/jv1340-final-project/blob/master/app.js

## Annotations/References Used

1. https://github.com/Createdd/Writing/blob/master/2017/articles/AuthenticationIntro.md#user-registration

2. https://medium.com/createdd-notes/starting-with-authentication-a-tutorial-with-node-js-and-mongodb-25d524ca0359

3. http://www.passportjs.org/docs/

4. https://www.w3schools.com/howto/howto_css_register_form.asp

5. https://www.w3schools.com/js/js_validation.asp