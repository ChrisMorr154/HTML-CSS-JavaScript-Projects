const images = [
  'Images/NiceAntec.JPG',
  'images/6600xt 2.jpg',
  'Images/Julia1070.jpg'
];

let currentImageIndex = 0; // Initialize the index to 0

function changeImage() {
  const displayImage = document.getElementById('image1');
  
  // Update the source of the image to the next image in the array
  displayImage.src = images[currentImageIndex];

  // Increment the index, and wrap around to 0 when it reaches the end
  currentImageIndex = (currentImageIndex + 1) % images.length;
}
