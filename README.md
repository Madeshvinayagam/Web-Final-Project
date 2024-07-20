This Repository is Used for the Version Control of my Final Project in Web Technologies

Student Name: [Madesh Vinayagam] Student Number: [8963164] Date: [19/07/2024]

Technology Stack Frontend: ReactJS Backend: Node.js with Express Database: MongoDB (Atlas)

Project Setup Project Initialization: Repository created on GitHub and cloned to local machine. 

Frontend Setup: Initialized ReactJS project. 

Backend Setup: Initialized Node.js project with Express and connected to MongoDB (Atlas). 

Database Schema Design Products Schema (MongoDB)

name: String 
description: String 
price: Number 
category: String 
stock: Number 
imageUrl: String 

Users Schema (MongoDB)

username: String 
password: String 
email: String
role : String (customer/admin)

Orders schema

order_id : ObjectID
username : String(Foreign key)
product_name : String
total_amount : Number
status : String ("Pending","completed" etc.)

Frontend Setup Basic structure set up for React components, including directories for components and services. 
State management planned to handle user sessions and cart data.

Notes:- The project is set up using Git and GitHub for version control. Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
