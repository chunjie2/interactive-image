// JavaScript source code
// script.js

const animalSelect = document.getElementById("animalSelect");
const captionInput = document.getElementById("captionInput");
const imageDisplay = document.getElementById("imageDisplay");
const captionText = document.getElementById("captionText");

// �����˵�������
animalSelect.addEventListener("change", () => {
  const selectedAnimal = animalSelect.value;
  imageDisplay.src = `${selectedAnimal}.jpg`; // ͼƬҪ׼���ã��� cat.jpg, dog.jpg
});

// �ı����������
captionInput.addEventListener("input", () => {
  captionText.textContent = captionInput.value;
});
