function convertToUpper() {
  const input = document.getElementById("fname");
  input.value = input.value.toUpperCase();
}

document.getElementById("fname").addEventListener("blur", convertToUpper);
