document.addEventListener('DOMContentLoaded', function () {
    // Array of translations for "Hello" in different languages
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
  
    // Function to update the hello slide text
    function updateHelloSlide() {
        const helloSlide = document.getElementById('helloSlide');
        const currentHelloIndex = helloTranslations.indexOf(helloSlide.innerText);
        const nextHelloIndex = (currentHelloIndex + 1) % helloTranslations.length;
        helloSlide.innerText = helloTranslations[nextHelloIndex];
      }
    
      // Update the hello slide every second
      setInterval(updateHelloSlide, 1000);
    });
  