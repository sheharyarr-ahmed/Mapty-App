# 🌍 **Mapty - Workout Logger Application**

![Mapty App Logo](logo.png)

---

## 🎯 **Project Overview**

**Mapty** is a cutting-edge workout logging app that fuses interactive mapping with running and cycling tracking. Built from scratch with **modern JavaScript (ES6+)**, it harnesses object-oriented programming (OOP), advanced DOM manipulation, and browser local storage for a fully offline experience. Log your workouts, pin them on a map, and browse your progress—all with zero dependencies!

---

## 📋 **Table of Contents**

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Skills & Technologies Used](#-skills--technologies-used)
- [Architecture](#-architecture)
- [Object-Oriented Programming](#-object-oriented-programming)
- [Data Handling & Structures](#-data-handling--structures)
- [DOM Manipulation](#-dom-manipulation)
- [Local Storage](#-local-storage)
- [Map Integration](#-map-integration)
- [How to Run](#-how-to-run)
- [Folder Structure](#-folder-structure)
- [Reset Functionality](#-reset-functionality)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ **Features**

- **🏃‍♂️ Workout Logging**: Pin running or cycling workouts on the map with a click and fill in details via an interactive form.
- **🗺️ Interactive Map**: Powered by [LeafletJS](https://leafletjs.com/), with zoom, markers, and custom popups.
- **🎨 OOP & Custom Classes**: ES6 classes for encapsulated workout and app logic.
- **📱 Responsive UI**: Dynamic DOM updates and animations for a sleek experience.
- **💾 Persistent Data**: Auto-saves workouts using browser localStorage.
- **🔄 Reset Capability**: Clear data with a single tap.

---

## 📸 **Screenshots**

Check out the UI and codebase in action:

![Mapty Screenshots](screenshots/1.png)
![Mapty Screenshots](screenshots/2.png)
![Mapty Screenshots](screenshots/3.png)
![Mapty Screenshots](screenshots/4.png)

---

## 🛠️ **Skills & Technologies Used**

- **JavaScript (ES6+)**: Classes, modules, arrow functions, destructuring, array methods.
- **Object-Oriented Programming**: Inheritance, encapsulation, private fields, method binding.
- **DOM Manipulation**: Query selectors, event listeners, dynamic HTML, animations.
- **Local Storage**: Serializing/deserializing complex objects.
- **LeafletJS**: Interactive mapping and geo-features.
- **HTML & CSS**: Grid layouts, minimalist forms, icons.
- **Frontend Architecture**: Modular design, separation of concerns.

---

## 🏗️ **Architecture**

### Component-Based Brilliance

- **App Class**: Orchestrates initialization, events, data flow, and localStorage.
- **Workout (Base), Running, Cycling Classes**: Inheritance-driven data and logic.
- **UI Layer**: Manages DOM, map interactions, and form dynamics.

### Key Patterns

- **Encapsulation**: Private fields (`#workouts`, `#mapZoomLevel`) safeguard state.
- **Event Delegation**: Streamlines dynamic DOM handling.
- **Functional Methods**: Array operations for display and manipulation.

---

## 👨‍💻 **Object-Oriented Programming**

- **Classes & Inheritance**:
  - `Workout`: Base class for shared properties (`id`, `date`, `coords`).
  - `Running` & `Cycling`: Extend with pace/speed calculations.
- **Method Binding**: `.bind()` ensures correct `this` context.
- **Custom Methods**: Render, sort, and manage workouts seamlessly.

---

## 📊 **Data Handling & Structures**

- **Workouts Array**: Privately managed in-memory data via `App`.
- **ID Generation**: Unique IDs via timestamp slicing (note: use UUIDs in production).
- **Serialization**: JSON conversion for persistent storage.
- **Immutability**: Prevents direct data mutation for robustness.

---

## 🎨 **DOM Manipulation**

- **Form Controls**: Toggles visibility, focuses inputs, and clears on submit.
- **Workout Rendering**: Dynamically builds HTML lists with icons.
- **Map Markers**: Adds custom popups using LeafletJS.
- **Animation & Focus**: Form pops up on map click, workouts animate on select.

---

## 💾 **Local Storage**

- **Saving Workouts**: `localStorage.setItem()` stores JSON data.
- **Restoring Data**: Parses JSON on startup to re-render workouts.
- **Data Reset**: Clears storage and refreshes state.

---

## 🌐 **Map Integration**

- **Geo-location API**: Centers map on user location.
- **LeafletJS**: Manages map creation, clicks, markers, and popups.
- **Responsive Zoom**: Adjusts dynamically based on user input.

---

## 🚀 **How to Run**

1. **Clone the Repository**:

   ```
   git clone https://github.com/sheharyarr-ahmed/Mapty-App.git
   ```

2. **Launch in Browser**:

   - Open `index.html`—no setup needed!

3. **Get Moving**:
   - Click the map to log a workout, browse your list, and reset as desired.

---

## 📂 **Folder Structure**

```
MAPTY-APP/
│
├── .prettierrc
├── before-implementing-the-architecture.js
├── icon.png
├── index.html
├── logo.png
├── Mapty-architecture-final.png
├── Mapty-architecture-part-1.png
├── Mapty-flowchart.png
├── other.js
├── script.js         # Core logic
└── style.css
```

`script.js` houses the app’s heart—classes, DOM, and control flow.

---

## 🔄 **Reset Functionality**

- **Clear Workouts**: `localStorage.removeItem('workouts')` resets data.
- **Refresh**: Reloads the app for a clean slate.
- **Documented**: Easy to extend or debug.

---

## 🤝 **Contributing**

Love Mapty? Fork it, enhance it, and submit a pull request—I’m all ears!

---

## 📜 **License**

This project was created purely for learning and educational purposes.  
You are welcome to explore the code, but please do not use it for commercial purposes.

---
