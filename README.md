# Railway Management System API  

## Project Overview  
This is a **Railway Management System** similar to IRCTC, built using **Node.js, Express, and MySQL**. It allows users to:  
- Register and log in  
- View available trains and seat availability  
- Book train tickets securely with authentication  
- Prevent race conditions when multiple users book simultaneously  
- Provide **Admin Access** for train management

-  railway-management/
│-- config/ # Database configuration
│-- controllers/ # Business logic for routes
│-- middleware/ # Middleware functions
│-- models/ # Database models
│-- routes/ # Express route handlers
│-- scripts/ # Utility scripts
│-- schema.sql # Database schema
│-- server.js # Main server file
│-- package.json # Project dependencies
│-- Dockerfile # Docker configuration
│-- docker-compose.yml # Docker Compose configuration

--git clone https://github.com/yourusername/railway-management.git  
cd railway-management  

1.intall dependencies
npm install  

2.Configure Environment Variables
Create a .env file in the root directory and add:
PORT=3000  
DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=yourpassword  
DB_NAME=railway_db  
ADMIN_API_KEY=your_secret_admin_key  
JWT_SECRET=your_jwt_secret_key 

3.Start the Server
node server.js

---API Endpoints
 User Authentication (/api/auth):
Method  | Endpoint             | Description        
POST    | /api/auth/register  | Register a user   
POST    | /api/auth/login     | Login user, returns JWT Token  

---Train Management (/api/trains):
Method  | Endpoint           | Description                     
POST    | /api/trains       | Add a new train (Admin Only)  
GET     | /api/trains       | Get all trains                
GET     | /api/trains/:id   | Get train by ID               
PUT     | /api/trains/:id   | Update train details (Admin Only)  
DELETE  | /api/trains/:id   | Delete a train (Admin Only)  

---Seat Availability (/api/seats):
Method  | Endpoint                  | Description    
GET     | /api/seats?src=A&dest=B  | Get seat availability for trains between two stations  

--- Booking APIs (/api/bookings):
Method  | Endpoint             | Description    
POST    | /api/bookings       | Book a seat  
GET     | /api/bookings/:id   | Get booking details  













