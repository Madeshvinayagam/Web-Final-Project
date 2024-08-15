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

> Recent Updates:- Updated Checkout and fetch product details from product page.

# Project Setup and Running Guide

## Overview

This project is a web application that displays products, allows users to add items to a cart, and proceed to checkout. It uses React.js for the frontend and Node.js with MongoDB for the backend. Follow the instructions below to set up and run the project.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v16 or later)
- **MongoDB** (for local development)

## Setup Instructions

### 1. Clone the Repository

Clone the repository from GitHub:

- bash
- git clone https://github.com/Madeshvinayagam/Web-Final-Project.git
- cd Web-Final-Project

### 2.Setup Backend

- cd final-app-backend
- npm install

- To start the server
- node server.js

### 3.Setup Frontend

- cd ../final-app
- npm install

##### Create a .env file in the final-app directory
REACT_APP_API_URL=http://localhost:3000

- npm start 








