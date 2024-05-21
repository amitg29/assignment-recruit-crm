> A brief description of this assignment. 

# Recruit CRM - Assignment

![Project Logo](https://recruitcrm.io/wp-content/uploads/2023/03/favicon-32x32-1.png)

> This project helps recruiters manage candidate details very easily.

## Table of Contents

- [Introduction](#introduction)
- [Approach](#approach)
- [Technologies Used](#technologies-used)
- [Challenges and Solutions](#challenges-and-solutions)
- [Features](#features)
- [Installation](#installation)
- [Contributing](#contributing)
- [Contact](#contact)

## Introduction

Recruit CRM - Assignment is a project designed to streamline the process of managing candidate information for recruiters. It provides an easy-to-use interface to view, edit, and update candidate details dynamically.

## Approach

The initial approach was to hardcode all the values to achieve the desired visual effect. After that, I implemented dynamic changes using Pinia for global state management in Vue.js. This allowed for more flexible and scalable data handling.

## Technologies Used

- HTML
- CSS
- JavaScript
- Vue.js

## Directory Structure

### src Folder:

- **assets**: Contains CSS files (e.g., main.css, base.css).
- **main.js**: Creates and mounts the Vue.js application.
- **App.vue**: Serves as the homepage of the Vue application.
- **layouts**: Contains layout-related files.
  - **default.vue**: Responsible for creating the default layout shown in the UI.
  - **header.vue**: Displays header details.
  - **navigation.vue**: Shows a list of navigation options.
  - **sidebars.vue**: Displays details of the sidebar located on the right side of the main page.
- **components**: Holds user-related components.
  - **candidate.vue**: Acts as the parent component for all child or sub-components related to candidates.
  - **candidate-details**: Contains components for displaying user details and an edit form.
### stores Folder :
Root directory for Pinia stores.
  - **userStore.js**: Manages user data.
  - **navigationStore.js**: Handles navigation data.
  - **sidebarStore.js**: Manages data inside sidebars.


## Challenges and Solutions

### Challenges Faced

1. **Understanding and Implementing Pinia:**
   - I had to familiarize myself with the Pinia documentation to understand how to use it efficiently for state management.

2. **Creating an Editable Form:**
   - I needed to create a form within a modal that could display user information fetched from Pinia's store and allow edits.

### Solutions Implemented

1. **Gaining Knowledge of Pinia:**
   - I thoroughly studied the Pinia documentation and examples to implement it effectively in the project.

2. **Implementing the Editable Form:**
   - I created a modal that pulls user information from the store and displays it in the form. The form allows users to edit the details and save the changes locally. These changes are then reflected in the store and the UI.

## Features

- Responsive design
- Fast performance
- Dynamic data handling with Pinia
- Editable user information

## Installation

To set up the project locally, follow these steps:

1. Clone the Git repository:
    ```sh
    git clone https://github.com/amitg29/recruit-crm-assignment.git
    ```
2. Navigate to the `frontend` directory:
    ```sh
    cd recruit-crm-assignment/frontend
    ```
3. Install all dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```
5. Open your browser and go to the provided local server link (typically `http://localhost:5173/`).



I hope this documentation is helpful for your project submission. If you need any further assistance or modifications, feel free to ask!
