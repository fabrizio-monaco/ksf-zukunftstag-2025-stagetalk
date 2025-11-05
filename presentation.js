// Holen Sie sich alle Folien
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress-bar');
let currentSlideIndex = 0;
const totalSlides = 7;

/**
 * Zeigt die aktuelle Folie an.
 * @param {number} index Der Index der anzuzeigenden Folie.
 */
function showSlide(index) {
    // Stelle sicher, dass der Index gültig ist
    if (index < 0 || index >= totalSlides) {
        return;
    }

    currentSlideIndex = index;

    // Alle Folien ausblenden, aktuelle anzeigen
    slides.forEach((slide, i) => {
        if (i === currentSlideIndex) {
            slide.classList.remove('hidden');
        } else {
            slide.classList.add('hidden');
        }
    });

    // Fortschrittsbalken aktualisieren
    const progress = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;
}

/**
 * Navigiert zur nächsten oder vorherigen Folie.
 * @param {number} direction -1 für zurück, 1 für weiter.
 */
function navigate(direction) {
    const newIndex = currentSlideIndex + direction;
    if (newIndex >= 0 && newIndex < totalSlides) {
        showSlide(newIndex);
    }
}

// Starte die Präsentation auf der ersten Folie
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
});

// Navigation per Pfeiltasten
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        navigate(1);
    } else if (e.key === 'ArrowLeft') {
        navigate(-1);
    }
});
