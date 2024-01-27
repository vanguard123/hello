// Array of image URLs
const images = ["image/1.jpg", "image/2.jpg", "image/3.jpg"];
let currentIndex = 0;

// Function to change the image
function changeImage() {
    document.getElementById('slideshow-image').src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeImage, 5000); // Change image every 3 seconds 3000
}

// Start the image slideshow
changeImage();

// Redirect to another page after all images are displayed
setTimeout(() => {
    window.location.href = 'fireworks.html';
}, images.length * 5000); // Adjust the time based on the number of images