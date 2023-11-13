document.getElementById('animateButton').addEventListener('click', function() {
    var teddy = document.getElementById('teddy');
    
    // Remove existing animation classes
    teddy.classList.remove('wave-hand', 'smile');
    
    // Trigger reflow before adding classes to restart animations
    void teddy.offsetWidth;
    
    // Add animation classes
    teddy.classList.add('animated', 'wave-hand', 'smile');
});


document.getElementById('animateButton').addEventListener('click', function() {
    var teddy = document.getElementById('teddy');
    
    // Remove existing animation classes
    teddy.classList.remove('wave-hand', 'smile');
    
    // Trigger reflow before adding classes to restart animations
    void teddy.offsetWidth;
    
    // Add animation classes
    teddy.classList.add('animated', 'wave-hand', 'smile');
});

document.getElementById('animateButton').addEventListener('click', function() {
    var teddy = document.getElementById('teddy');

    // Remove existing animation classes
    teddy.classList.remove('wave-hand', 'smile', 'dance');

    // Trigger reflow before adding classes to restart animations
    void teddy.offsetWidth;

    // Add dance animation class
    teddy.classList.add('animated', 'dance');
});


document.getElementById('animateButton').addEventListener('click', function() {
    var teddy = document.getElementById('teddy');

    // Remove existing animation classes
    teddy.classList.remove('wave-hand', 'smile', 'dance', 'speak');

    // Remove existing speech bubble
    var existingSpeechBubble = document.querySelector('.speech-bubble');
    if (existingSpeechBubble) {
        existingSpeechBubble.remove();
    }

    // Trigger reflow before adding classes to restart animations
    void teddy.offsetWidth;

    // Add speak animation class
    teddy.classList.add('animated', 'speak');

    // Create and append speech bubble
    var speechBubble = document.createElement('div');
    speechBubble.textContent = "Hi!";
    speechBubble.className = 'speech-bubble';
    teddy.appendChild(speechBubble);

    // Display the speech bubble
    setTimeout(function() {
        speechBubble.style.opacity = '1';
    }, 100);

    // Hide the speech bubble after a short duration
    setTimeout(function() {
        speechBubble.style.opacity = '0';
    }, 1500);
});



