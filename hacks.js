// /* const gibberishStrings = [
//     "XXXXXXX XXXXX",
//     "IXXXXXX XXXXX",
//     "INXXXXX XXXXX",
//     "INNXXXX XXXXX",
//     "INNEXXX XXXXX",
//     "INNERXX XXXXX",
//     "INNERVX XXXXX",
//     "INNERVE XXXXX",
//     "INNERVE HXXXX",
//     "INNERVE HAXXX",
//     "INNERVE HACXX",
//     "INNERVE HACKX",
//     "INNERVE HACKS"
// ]; */

// /*
// ["I", "IN", "INN", "INNE", "INNER", "INNERV", "INNERVE", 
// "INNERVE H", "INNERVE HA", "INNERVE HAC", "INNERVE HACK", 
// "INNERVE HACKS", "INNERVE HACKS.", "INNERVE HACKS..", 
// "INNERVE HACKS..."]
// */

document.addEventListener("DOMContentLoaded", function () {
    const titleText = document.getElementById("title-text");
    const gibberishStrings = [
        "GKQWZTX VFJKO",
        "HKLSKDB BDWEP",
        "ILZJDBH QPLRV",
        "INTQNSP WXRDF",
        "INNSTLZ IOFKB",
        "INNEVNJ YSMCL",
        "INNERRW GNFME",
        "INNERVS VURSO",
        "INNERVE MLCVT",
        "INNERVE HPYVX",
        "INNERVE HADEF",
        "INNERVE HACJK",
        "INNERVE HACKX",
        "INNERVE HACKS",
        "INNERVE HACKS.",
        "INNERVE HACKS..",
        "INNERVE HACKS..."
    ];

    let currentIndex = 0;
    let currentStringIndex = 0;
    let isHovered = false;

    function animateText() {
        if (currentStringIndex < gibberishStrings.length) {
            titleText.textContent = gibberishStrings[currentStringIndex];
            currentStringIndex++;
            if (isHovered) {
                setTimeout(animateText, 150); // Change to a new gibberish string every 0.12 seconds
            } else {
                setTimeout(animateText, 150); // Change to a new gibberish string every 0.5 seconds when not hovered
            }
        } else if (currentIndex === 0) {
            transformText();
        }
    }

    function transformText() {
        const transformedText = titleText.textContent;
        if (currentIndex < originalText.length) {
            titleText.textContent = transformedText + originalText[currentIndex];
            currentIndex++;
            if (isHovered) {
                setTimeout(transformText, 150); // Adjust the delay as needed
            } else {
                setTimeout(transformText, 150); // Change to a new character every 0.5 seconds when not hovered
            }
        }
    }

    titleText.addEventListener("mouseenter", function () {
        isHovered = true;
        currentStringIndex = 0;
        currentIndex = 0;
        animateText();
    });

    animateText(); // Start the animation on page load
    
});

document.addEventListener('DOMContentLoaded', function () {
    const heroContainer = document.querySelector('.hero-container');
    heroContainer.classList.add('reveal-hero-container');
});
