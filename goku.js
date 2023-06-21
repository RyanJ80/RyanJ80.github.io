const gokuImage = document.getElementById('goku-image');
const originalSrc = gokuImage.src;
const superGokuSrc = 'gokusuper.png';

gokuImage.addEventListener('mouseover', () => {
  gokuImage.src = superGokuSrc;
});

gokuImage.addEventListener('mouseout', () => {
  gokuImage.src = originalSrc;
});


