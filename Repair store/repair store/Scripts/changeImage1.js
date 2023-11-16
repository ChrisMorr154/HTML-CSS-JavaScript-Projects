const images1 = [
  'images/AntexXFX1.jpg',
  'images/Julia10704.jpg',
  'images/RedDevil2.JPG'
];

let currentImageIndex = 0; // Initialize the index to 0

function changeImage1() {
  const displayImage = document.getElementById('image2');
  
  // Update the source of the image to the next image in the array
  displayImage.src = images1[currentImageIndex];

  // Increment the index, and wrap around to 0 when it reaches the end
  currentImageIndex = (currentImageIndex + 1) % images1.length;
}