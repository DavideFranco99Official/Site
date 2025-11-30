document.addEventListener('DOMContentLoaded', () => {
    const subTextElement = document.querySelector('.neon-subtext');
    const originalText = subTextElement.textContent;
    const typingSpeed = 100; // Millisecondi per carattere
    let i = 0;

    // Funzione per l'effetto macchina da scrivere
    function typeWriter() {
        if (i < originalText.length) {
            subTextElement.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Pulisce e avvia l'effetto
    subTextElement.textContent = '';
    setTimeout(typeWriter, 1000); // Ritardo di 1 secondo prima di iniziare a scrivere
    
    // Funzione per un leggero effetto di "Glitch casuale" sul titolo
    const heroText = document.querySelector('.neon-text');
    const heroOriginalText = heroText.getAttribute('data-text');

    function randomGlitch() {
        heroText.classList.toggle('glitch-active');
    }

    // Esegue il glitch casuale ad intervalli
    // L'animazione CSS fa già la maggior parte del lavoro
    setInterval(randomGlitch, 5000); // Ogni 5 secondi (5000ms)

});
