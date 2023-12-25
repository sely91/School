const toggleButton = document.getElementById('toggleBackground');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

let isBackgroundWhite = true;

toggleButton.addEventListener('click', function() {
  const body = document.body;

  if (isBackgroundWhite) {
    body.style.backgroundColor = 'black';
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline-block';
  } else {
    body.style.backgroundColor = 'white';
    moonIcon.style.display = 'inline-block';
    sunIcon.style.display = 'none';
  }

  isBackgroundWhite = !isBackgroundWhite;
});
