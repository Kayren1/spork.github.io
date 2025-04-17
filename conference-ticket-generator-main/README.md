# Frontend Mentor - Conference Ticket Generator Solution

This is a solution to the [Conference Ticket Generator Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Questions and Answers](#questions-and-answers)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### The Challenge

Users should be able to:

- Complete the form with their details.
- Receive form validation messages if:
  - Any field is missed.
  - The email address is not formatted correctly.
  - The avatar upload is too large or in the wrong image format.
- Complete the form using only their keyboard (accessibility).
- Have inputs, form field hints, and error messages announced on their screen reader.
- See the generated conference ticket when they successfully submit the form.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

![Screenshot of the project](./assets/images/screenshot.jpg)

### Links

- **Solution URL**: [GitHub Repository](https://github.com/Kayren1/spork.github.io.git)
- **Live Site URL**: [Live Demo](https://kayren1.github.io/spork.github.io/)

---

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS Nesting
- Mobile-first workflow
- Vanilla JavaScript (ES6+)
- Accessibility best practices

### What I Learned

This project helped me solidify my understanding of form validation, file handling, and accessibility. Below are some key learnings:

1. **Form Validation**:
   - Implemented real-time validation for fields like name, email, and GitHub username.
   - Added error messages for invalid inputs and ensured they are accessible to screen readers.

   ```javascript
   function validateForm() {
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if (!emailRegex.test(email.value)) {
           showError(errors.email, 'Please enter a valid email address');
       }
   }
   ```

2. **File Handling**:
   - Implemented validation for avatar uploads to ensure correct file format.

   ```javascript
   const handleFile = (file) => {
       if (!file.type.match(/image\/(jpeg|png)/)) {
           showError(errors.avatar, 'Invalid file format. Please upload JPG or PNG.');
           return;
       }
   };
   ```

### Continued Development

In future projects, I plan to focus on:

- Enhancing accessibility features.
- Improving form validation techniques.
- Exploring more advanced CSS Grid layouts.

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - Comprehensive resource for web development.
- [CSS Tricks](https://css-tricks.com/) - Great articles and tutorials on CSS.

---

### Questions and Answers

#### **1. What is the purpose of this project?**
The project is a conference ticket generator that allows users to fill out a form, upload an avatar, and receive a personalized ticket. It focuses on form validation, file handling, and accessibility.

#### **2. What technologies were used?**
The project was built using:
- HTML5
- CSS3 (Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- Accessibility best practices

#### **3. What challenges did you face?**
- Implementing real-time form validation while ensuring accessibility.
- Handling file uploads and validating file size and format.
- Ensuring the layout was responsive across different screen sizes.

#### **4. How did you solve the issues?**
- Used the `FileReader` API to handle file uploads and preview images.
- Added `aria-live` regions and proper focus management for accessibility.
- Tested the layout on multiple devices to ensure responsiveness.

#### **5. What are your future plans for this project?**
- Add server-side validation for enhanced security.
- Implement a feature to download the generated ticket as a PDF.
- Refactor the codebase to use a modern JavaScript framework like React.

---

## Author

- Website - [Kayren](https://www.your-site.com)
- Frontend Mentor - [@Kayren1](https://www.frontendmentor.io/profile/Kayren1)
- Twitter - [@Kayren1](https://www.twitter.com/Kayren1)

## Acknowledgments

Thanks to the Frontend Mentor community for their support and feedback.
