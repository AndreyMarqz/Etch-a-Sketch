# 🎨 Etch-a-Sketch

A browser-based interactive sketch pad inspired by the classic mechanical drawing toy. This project was built to practice **DOM manipulation**, **Event Listeners**, and **CSS Grid/Flexbox** concepts.

<img width="1917" height="868" alt="image" src="https://github.com/user-attachments/assets/b094576d-3332-4785-9c56-eded8c2bcc77" />

## 🔗 Live Demo
[**Click here to play!**](LINK_DO_SEU_GITHUB_PAGES_AQUI)

## ✨ Features

- **Dynamic Grid Size:** Users can specify the grid resolution (from 1x1 up to 100x100) via an input box.
- **Rainbow Mode:** The pen generates random vibrant colors using HSL logic.
- **Darkening Mode (Shader):** A checkbox option that enables a progressive shading effect. Each pass adds 10% opacity to the square until it becomes fully black.
- **Reset Function:** Instantly clears the canvas without reloading the page.

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (Flexbox & CSS Variables)
- **JavaScript** (ES6+)

## 🧠 What I Learned

This project was a deep dive into how JavaScript interacts with HTML elements. Key learnings included:

- **DOM Manipulation:** Creating `div` elements dynamically within a loop based on user input.
- **Event Bubbling & Listeners:** Using `mouseover` to detect cursor movement and `click` for UI controls.
- **State Management:** Using boolean flags (like the checkbox status) to change the drawing behavior inside the event listener.
- **Logic:** Implementing the logic to calculate 10% increments in opacity for the darkening effect.
