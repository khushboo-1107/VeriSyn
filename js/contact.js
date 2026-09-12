// Upload Box click opens file input
const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("fileInput");

uploadBox.addEventListener("click", () => fileInput.click());

// Drag & Drop styling
uploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadBox.style.background = "rgba(21,212,253,0.15)";
});

uploadBox.addEventListener("dragleave", () => {
    uploadBox.style.background = "transparent";
});

uploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    fileInput.files = e.dataTransfer.files;
    uploadBox.innerHTML = "File Selected: " + fileInput.files[0].name;
});
