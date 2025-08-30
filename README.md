Dynamic Portfolio Generator

This is a dynamic portfolio generator built with React, Vite, and React Router. The application allows users to select a design template, fill out a multi-section form with their professional details, and generate a live, shareable portfolio page.

The project uses json-server to simulate a backend for storing and retrieving portfolio data.

Features
Template Selection: Users can choose from multiple professional design templates.

Multi-Section Form: A comprehensive form captures all necessary portfolio details, including:

Hero Section (Name, Title, Image)

About Me (Bio, Contact Info)

Skills & Services

Portfolio Projects (Title, Image, Description)

Dynamic Profile Cards: After submission, a new profile card is generated on the home page.

Dynamic Page Generation: Clicking "View Portfolio" on a card renders a full, multi-section portfolio page using the data and the template chosen by the user.

Client-Side Routing: Utilizes react-router-dom to manage navigation between the home page, the creation form, and individual portfolio pages.

API-Based: All portfolio data is fetched from and sent to a mock API, simulating a real-world application.

Tech Stack
Frontend: React, Vite, React Router

Styling: CSS

API Mocking: json-server

HTTP Client: Axios

Setup and Running the Project
To run this project locally, you will need to have two terminal windows open: one for the Vite development server and one for the json-server mock API.

Prerequisites
Node.js (v18 or newer)

npm

1. Clone the Repository
git clone <your-repo-url>
cd portfolio-generator

2. Install Dependencies
npm install

3. Run the Mock API Server
This server will manage the data from the db.json file.

npx json-server --watch db.json --port 3001

The API will be available at http://localhost:3001/professionals.

4. Run the React Application
In a new terminal, start the Vite development server.

npm run dev

The application will be available at http://localhost:5173.
