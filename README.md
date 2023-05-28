# React Contact Manager & COVID-19 Dashboard

This is a React+TypeSciript application that serves as a contact manager and also provides a COVID-19 dashboard with real-time data. It allows you to add, view, edit, and delete contacts, and also provides graphical representation of COVID-19 cases worldwide and country-specific data.

## Features

### Contact Page
- Add new contacts using a form
- Display a list of all added contacts
- View contact details for each contact
- Edit and delete contacts

### COVID-19 Dashboard
- Line graph showing the fluctuations in COVID-19 cases
- React Leaflet map with markers indicating country-specific data:
  - Country name
  - Total number of active cases
  - Total number of recovered cases
  - Total number of deaths
  - Displayed as a popup on the map

### APIs Used
- Country-specific data of cases: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
- Graph data for cases with date: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies: "npm install"

## Usage

1. Start the development server: "npm start"

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the application.

## Tech Stacks and Libraries

- React: JavaScript library for building user interfaces
- Redux: State management library for React applications
- Tailwind CSS: Utility-first CSS framework for styling the application
- React Leaflet: React components for Leaflet maps
- React ReCharts : React Component for Line Graph
- React Spinner: Proloader
- React Icons : Dashboard Icons

## Hosted Link

https://covid-details-management.vercel.app/
