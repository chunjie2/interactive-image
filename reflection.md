## 💬 Final ChatGPT Prompt and Response

**Prompt:**  
"Explain how my code uses JavaScript objects or iteration. Suggest one way to refactor or improve it."

**Response:**  
Your code primarily uses direct DOM manipulation and event listeners to update the image and caption dynamically, which is great for clarity and simplicity. However, it currently does **not** make significant use of JavaScript objects or iteration.

To improve and refactor the code, you could introduce a **JavaScript object** to store metadata for each image (e.g., `src`, `alt`, optional style). This reduces hardcoded paths and allows scalable data-driven behavior.

Example refactor using an object:

```js
const animalData = {
  cat: { src: "cat.jpg", alt: "A cute cat" },
  dog: { src: "dog.jpg", alt: "A happy dog" },
  bird: { src: "bird.jpg", alt: "A colorful bird" }
};

animalSelect.addEventListener("change", () => {
  const animal = animalSelect.value;
  const data = animalData[animal];
  imageDisplay.src = data.src;
  imageDisplay.alt = data.alt;
});
