const imageWrappers = document.querySelectorAll('.image-wrapper');

imageWrappers.forEach((wrapper) => {
  const images = wrapper.querySelectorAll('.image');
  const description = wrapper.querySelector('.image-description');

  wrapper.addEventListener('mouseenter', () => {
    images[0].style.zIndex = "1"; // Bring the edited image to the front
    description.style.opacity = "1"; // Show the description on hover
  });

  wrapper.addEventListener('mouseleave', () => {
    images[0].style.zIndex = "2"; // Bring the original image to the front
    description.style.opacity = "0"; // Hide the description on hover
  });
});
