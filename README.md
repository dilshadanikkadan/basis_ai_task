# Patient Health Dashboard for Prior Authorization

## Overview
The **Patient Health Dashboard** is a full-stack application designed for healthcare providers to view and manage patient health data, focusing on prior authorization workflows. This application allows users to easily navigate through patient records and submit prior authorization requests.

## Features
- View a list of patients with basic information (name, age, condition).
- Detailed view of patient health records, including past treatments and medication history.
- Search and filter functionality to navigate through patient records.
- Submit prior authorization requests for selected patients.
- Responsive design for mobile and desktop users.
- Basic authentication for healthcare providers 
- maintainable code both server and client
- clean code 
- Reusabel components in front-end

## Technologies Used
- **Frontend:** React, Tailwind 
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT 
- **Testing:** Jest

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dilshadanikkadan/basis_ai_task.git
2. Install the dependencies for both frontend and backend:
   cd server
   npm install
   npm start - for dev mode
   npm test - for test

   Set up your environment variables. Create a .env file in the backend folder with the following variables:Set up your environment variables. Create a .env file in the backend root folder 
   -
   MONGO_URL = mongodb+srv://efootball3312:dilshad4321@cluster0.mz4yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   -

3. cd client
   npm install
   npm run dev - for start

   Configure Base URL for Local Development  
   When running the application locally in  client , you need to configure the base URL. Go to src/lib/buildClient/buildClient.ts and change the URL to:http://localhost:3000/
 
