# Frontend Mentor - Social Links Profile Solution

This is my solution to the [Social Links Profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). This project helped me practice building a responsive layout with hover and focus states for interactive elements.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page.
- Navigate the page using keyboard controls with proper focus management.

### Screenshot

![Screenshot of the solution](./screenshot.png)

> **Note:** The screenshot shows the final design of the project, including hover and focus states. It was captured using Firefox's "Take a Screenshot" feature.

### Links

- [Solution URL]()
- [Live Site URL](https://kayren1.github.io/spork.github.io/social-links-profile-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Accessible ARIA roles and labels

### What I learned

This project helped me solidify my understanding of responsive design and hover/focus states. Below are some code snippets that I’m particularly proud of:

#### HTML Example
```html
<a href="https://twitter.com" class="social-link" aria-label="Twitter">
  <svg>...</svg>
</a>
```

#### CSS Example
```css
.social-link:hover,
.social-link:focus {
  color: var(--primary-color);
  transform: scale(1.1);
  outline: 2px solid var(--primary-color);
}
```

### Continued development

In future projects, I want to focus on:

- Improving accessibility by using ARIA roles and labels effectively.
- Exploring advanced CSS animations for interactive elements.
- Enhancing performance by optimizing assets and reducing unnecessary code.
- Implementing light mode support for better user experience.

### Useful resources

- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - Helped me understand how to structure the layout effectively.
- [CSS Tricks - Hover States](https://css-tricks.com/almanac/selectors/h/hover/) - Provided insights into creating smooth hover effects.
- [A11y Project - Focus Management](https://www.a11yproject.com/) - Helped me improve the accessibility of interactive elements.

## Author

- Website - [Your Name](https://your-website.com)
- Frontend Mentor - [@Kayren1](https://www.frontendmentor.io/profile/Kayren1)
- GitHub - [@Kayren1](https://github.com/Kayren1)
- LinkedIn - [Your Name](https://www.linkedin.com/in/your-profile)
