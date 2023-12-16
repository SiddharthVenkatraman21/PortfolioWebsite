document.addEventListener('DOMContentLoaded', function () {
    const helloSlide = document.getElementById('helloSlide');
    const helloTranslations = [
      'Hello!', // Default
      'Bonjour!', // French
      'Hola!', // Spanish
      'Ciao!', // Italian
      'Hallo!', // German
      '你好!', // Chinese (Simplified)
      'こんにちは!', // Japanese
      '안녕하세요!', // Korean
    ];

    let translationIndex = 0;

    function typeWriter(text, index, callback) {
      if (index < text.length) {
        helloSlide.innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
          typeWriter(text, index, callback);
        }, 75); // Typing speed (milliseconds per character)
      } else {
        // After typing, execute the callback (usually the erasing function)
        setTimeout(callback, 1000);
      }
    }

    function eraseText() {
        const currentText = helloSlide.textContent;
        let index = currentText.length - 1;

        const eraseInterval = setInterval(function () {
          if (index >= 0) {
            helloSlide.textContent = currentText.slice(0, index);
            index--;
          } else {
            clearInterval(eraseInterval);
            // Move to the next translation
            translationIndex = (translationIndex + 1) % helloTranslations.length;
            // Type the next translation
            typeWriter(helloTranslations[translationIndex], 0, eraseText);
          }
        }, 75); // Erasing speed (milliseconds per character)
      }

    // Start the typewriter effect with the default translation
    typeWriter(helloTranslations[translationIndex], 0, eraseText);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const timelineEvents = document.querySelectorAll('.timeline-event');

    timelineEvents.forEach(function (event) {
      event.addEventListener('click', function () {
        // Remove 'active' class from all events
        timelineEvents.forEach(function (otherEvent) {
          otherEvent.classList.remove('active');
        });

        // Add 'active' class to the clicked event
        event.classList.add('active');
      });
    });
  });