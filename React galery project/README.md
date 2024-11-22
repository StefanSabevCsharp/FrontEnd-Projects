# [Gallery App](https://gallery.stefansabev.com)

## Overview

The **Gallery App** is a React-based image gallery that fetches images from the Pixabay API. It allows users to browse through images with pagination, displaying a set number of images per page. The app is built with responsiveness and smooth navigation in mind.

## Features

- **Dynamic Image Fetching**: Images are fetched dynamically from the Pixabay API.
- **Pagination**: Allows users to navigate through images using "Next" and "Previous" buttons.
- **Responsive Layout**: The gallery adapts to different screen sizes, supporting a grid layout for a seamless browsing experience.
- **Smooth Scrolling**: Automatically scrolls to the top of the gallery when navigating between pages.
- **Loading Indicator**: Displays a spinner while images are being fetched from the API.

## Technologies Used

- **React**: For building the user interface and managing state.
- **Pixabay API**: To fetch high-quality images.
- **Tailwind CSS**: For styling the application and ensuring responsiveness.

## What I Learned

- **Handling APIs**: Learned how to integrate third-party APIs like Pixabay in React apps.
- **State Management**: Gained experience in managing state for dynamic content, such as images and loading indicators.
- **Pagination Logic**: Developed an understanding of implementing pagination logic with slicing arrays for specific page views.
- **Smooth Navigation**: Learned how to create a smooth scrolling effect using `window.scrollTo` and React refs.
- **Responsive Design**: Enhanced knowledge of building responsive layouts with Tailwind CSS.
- **Error Handling**: Practiced handling API errors gracefully and ensuring a smooth user experience.

## Project Link

[View the Project](https://gallery.stefansabev.com)

## How It Works

1. **Fetching Images**: The app sends a request to the Pixabay API using the configured base URL and API key. 
2. **Pagination**: Images are displayed 20 per page by default, with options to navigate using "Next" and "Previous" buttons.
3. **Smooth Navigation**: Clicking navigation buttons updates the displayed images and scrolls to the top of the gallery smoothly.

---
