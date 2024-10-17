# Expense Tracker App

A simple and intuitive expense tracker application built using **Vite**, **React**, and **Tailwind CSS**. This app allows users to track their daily expenses, add new transactions, and view a summary of their expenses.

## Features

- Add and remove transactions (income/expense)
- View balance and total income/expense
- Filter transactions by date or type
- Responsive UI using Tailwind CSS
- Fast build and development setup with Vite

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Build Tool**: Vite
- **State Management**: React Hooks (useState)

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
```bash
git clone https://github.com/ahsanul-habib/expense-tracker.git
cd expense-tracker
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

4. **Build for production**:

To create a production-ready build of the app:

```bash
npm run build
```

### Preview production build

After building the project, you can preview the production build locally:

```bash
npm run preview
```

## Project Structure
```php

├── public                                  # Static files
├── src
│   ├── assets                              # Project assets
│   ├── data                                # Project data
│   │     └── Categories.js                 # Categories data
│   ├── components                          # Reusable components
│   │     ├── pages                         # Page components
│   │     │     ├── Header.jsx              # Header Section component
│   │     │     ├── TrackerForm.jsx         # Tracker Form Section component
│   │     │     ├── ExpenseSection.jsx      # Expense Section component
│   │     │     ├── IncomeSection.jsx       # Income Section component
│   │     │     └── TotalBalance.jsx        # Total Balance Section component
│   │     └── SVG.jsx                       # All SVG components packed
│   ├── App.jsx                             # Main App component
│   ├── App.css                             # Main App styles
│   ├── index.css                           # Global styles (tailwind configuration)
│   └── index.jsx                           # Entry point for the app
├── package.json                            # Project metadata and dependencies
├── postcss.config.js                       # PostCSS configuration for Tailwind CSS
├── tailwind.config.js                      # Tailwind CSS configuration
└── vite.config.js                          # Vite configuration
```

## Available Scripts
`npm run dev`: Start the development server

`npm run build`: Build the app for production

`npm run preview`: Preview the production build locally

`npm run lint`: Lint your code using ESLint