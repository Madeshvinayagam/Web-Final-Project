This Repository is Used for the Version Control of my Final Project in Web Technologies

Student Name: [Madesh Vinayagam] Student Number: [8963164] Date: [19/07/2024]

Technology Stack Frontend: ReactJS Backend: Node.js with Express Database: MongoDB (Atlas)

Project Setup Project Initialization: Repository created on GitHub and cloned to local machine. 

Web Application Title:-
 The Chennai Mobiles 

Description:-
A Smartphone store where people can buy different brands of latest smartphones in the market.

Tech Stack:-

Frontend Setup: Initialized ReactJS project. 

Backend Setup: Initialized Node.js project with Express and connected to MongoDB (Atlas). 

Database Schema Design Products Schema (MongoDB)

name: String
brand: String 
description: String 
price: Number 
category: String 
stock: Number 
imageLink: String 

Users Schema (MongoDB)

username: String 
password: String 
email: String
role : String (customer/admin)

Orders schema

orderId : ObjectID
email : String(Foreign key)
productName : String
totalPrice : Number
status : String ("On Process","Successful","Failed")

Notes:- The project is set up using Git and GitHub for version control.
Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
