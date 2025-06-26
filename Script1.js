// JavaScript source code
// script.js

const animalSelect = document.getElementById("animalSelect");
const captionInput = document.getElementById("captionInput");
const imageDisplay = document.getElementById("imageDisplay");
const captionText = document.getElementById("captionText");

// 下拉菜单监听器
animalSelect.addEventListener("change", () => {
  const selectedAnimal = animalSelect.value;
  imageDisplay.src = `${selectedAnimal}.jpg`; // 图片要准备好，如 cat.jpg, dog.jpg
});

// 文本输入监听器
captionInput.addEventListener("input", () => {
  captionText.textContent = captionInput.value;
});
