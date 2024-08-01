# E-COMMERCE PROJECT

## The Chennai Mobiles

##### Description
A Smartphone store where people can buy different brands of latest smartphones in the market.

#####  Tech Stack:-

#####  Frontend Setup
Initialized ReactJS project.

#####  Backend Setup: 
Initialized Node.js project with Express and connected to MongoDB (Atlas).

##### Database Schema Design (MongoDB)

###### Products Schema

- name: String 
- brand: String 
- description: String 
- price: Number 
- category: String 
- stock: Number 
- imageLink: String

###### Users Schema

- username: String 
- password: String 
- email: String 
- role : String (customer/admin)

###### Orders schema

- orderId : ObjectID 
- email : String(Foreign key) 
- productName : String 
- totalPrice : Number 
- status : String ("On Process","Successful","Failed")

> Notes:- The project is set up using Git and GitHub for version control.

_Further development will include implementing user interfaces for product listings, shopping cart, and checkout._
