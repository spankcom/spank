document.addEventListener("DOMContentLoaded", function() {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('background-music');
    const typingText = document.getElementById('typing-text');
    const text = "Apenas terrores digitais...";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            introScreen.addEventListener('click', function() {
                introScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                audio.play();
                audio.volume = 0.4;  // Ajuste o volume conforme necessário
            });
        }
    }

    type();
});
