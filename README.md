# AI-Powered Data Query Dashboard  
 A **React-based** Gen AI Analytics tool prototype that enables non-technical users to query data using natural language and visualize insights instantly.

---

## Table of Contents  
- [Overview](#-overview)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Project Structure](#-project-structure)  
- [Installation & Setup](#-installation--setup)  
- [How It Works](#-how-it-works)  
- [Evaluation Focus](#-evaluation-focus)  
- [Future Enhancements](#-future-enhancements)  
- [Contributors](#-contributors)  

---

## Overview  
This project is a **React-based SPA (Single Page Application)** that simulates an **AI-powered data query dashboard**. It allows users to:  
- Ask complex business queries in natural language  
- Get instant insights in a **bar chart** format  
- View query history for quick reference  
- Eliminate dependency on data teams  

> **Note:** This is a prototype, so actual AI processing is simulated.

---

## Features  
**Natural Language Query Input** – Users can type business queries easily  
**AI-Simulated Query Processing** – Instant responses with mock data  
**Interactive Bar Charts** – Visual representation of results  
**Query History** – Users can see previous queries on the right  
**Dark Themed UI** – Inspired by modern dashboards  

---

## Tech Stack  
- **Frontend:** React.js  
- **State Management:** Redux  
- **Styling:** Tailwind CSS  
- **Charts:** Recharts (for data visualization)  

---

## Project Structure  
```
AI-Query-Dashboard
┣ src
┃ ┣ components
┃ ┃ ┣ QueryInput.js        # Query input field with AI-powered suggestions
┃ ┃ ┣ QueryHistory.js      # Query history section (on the right)
┃ ┃ ┣ ResultsDisplay.js    # Displays query results as a bar chart
┃ ┣ store
┃ ┃ ┣ querySlice.js        # Redux slice for managing queries & results
┃ ┃ ┣ store.js             # Redux store setup
┃ ┣ App.js                 # Main application layout
┃ ┣ main.jsx               # Vite entry file (Provider wrapped)
┃ ┣ index.css              # Global styling
┣ package.json
┣ README.md
```

---

## Installation & Setup  
- **Clone the repository**  
```bash
git clone https://github.com/your-repo/ai-query-dashboard.git
cd ai-query-dashboard
```
- **Install dependencies**  
```bash
npm install
```
- **Start the development server**  
```bash
npm run dev
```
- **Open in browser**  
Navigate to `http://localhost:5173` (or as per Vite output).

---

## How It Works  
1. **User enters a natural language query**  
2. **Simulated AI processes the query** (mock API response)  
3. **Results are displayed in a bar chart**  
4. **Query history is updated** (shown on the right)  
5. **User can enter new queries, and previous ones remain accessible**  

---

## Evaluation Focus  
This project will be evaluated based on the following criteria:

### React Component Structure  
- Modular and reusable React components  
- Separation of concerns between UI and state management  

### State Management Efficiency  
- Uses **Redux** to manage global state (query inputs, results, and history)  
- Actions and reducers are structured properly  
- Efficient use of Redux hooks (`useSelector`, `useDispatch`)  

### UI/UX Design  
- **Inspired by modern dashboards** (e.g., Behance, Dribbble)  
- **Dark theme** with intuitive layout  
- **Responsive design** for various screen sizes  

### Code Quality  
- Follows **best practices** (clean, readable, maintainable code)  
- Proper **file structure** and **component reusability**  
- Uses **Tailwind CSS** for consistent styling  

### Creativity in Simulating AI Query Interaction  
- **Generates dynamic mock data** for bar chart updates  
- Mimics **real AI interactions** (loading states, instant results)  
- Provides **realistic user experience** for data querying  

---

## Future Enhancements  
🔹 Integrate with **real AI models** (e.g., OpenAI, LangChain)  
🔹 Implement **filters & sorting options** in results  
🔹 Add **multiple chart types** (line, pie, etc.)  
🔹 Save history **persistently** (local storage or database)  

---
