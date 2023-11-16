function changeImage() {
    let displayImage = document.getElementById('image1');
    if (displayImage.src.match('Images/20230622-145956.JPG')) {
      displayImage.src = 'Images/HawaiiWater.JPG'
    }
    else
    {
        displayImage.src = 'Images/20230622-145956.JPG'
    }
  }