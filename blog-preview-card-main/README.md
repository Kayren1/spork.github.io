# Frontend Mentor - Blog Preview Card Solution

This is my solution to the [Blog Preview Card Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). This challenge helped me improve my HTML and CSS skills by building a realistic project.

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
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page.

### Screenshot

![Screenshot of the solution](./Screenshot%20(1).png)

### Links

- Solution URL: [GitHub Repository](https://github.com/Kayren1/spork.github.io)
- Live Site URL: [Live Demo](https://kayren1.github.io/spork.github.io/blog-preview-card-main/index.html)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I Learned

This project helped me practice structuring HTML and styling with SCSS. I also learned how to implement hover and focus states for interactive elements. Below is an example of a CSS snippet I used:

```css
footer {
    margin-top: 5rem;
    position: relative;
    top: 100%;
}

@media screen and (max-width: 768px) {
    main {
        width: 100%;
    }

    .card {
        height: auto;
        padding: 10px;
    }

    .card-shadow {
        height: auto;
    }

    .blog-img img {
        width: 100%;
    }

    footer {
        margin-top: 5rem;
        position: relative;
        top: 100%;
    }
    
    .blog-title h1 {
        font-size: $font-med;
    }
    
}

@font-face {
    font-family: 'Figtree';
    src: url('assets/fonts/Figtree-VariableFont_wght.ttf') format('truetype');
    font-weight: 600;
    font-style: regular;
}
```

### Continued Development

In future projects, I want to focus on:

- Improving accessibility by ensuring all interactive elements are keyboard-navigable.
- Using SCSS Grid for more complex layouts.
- Exploring SCSS animations for hover effects.

### Useful Resources

- [MDN Web Docs](https://developer.mozilla.org/) - A great resource for learning about HTML and CSS.
- [Frontend Mentor Community](https://www.frontendmentor.io/community) - Helpful for getting feedback and tips.

## Author

- Frontend Mentor - [@Kayren1](https://www.frontendmentor.io/profile/Kayren1)
- GitHub - [Kayren1](https://github.com/Kayren1)
- Email - [Allistersenzo@gmail.com](mailto:Allistersenzo@gmail.com)

## Acknowledgments

Thanks to [Frontend Mentor](https://www.frontendmentor.io) for providing this challenge. It was a great learning experience!
