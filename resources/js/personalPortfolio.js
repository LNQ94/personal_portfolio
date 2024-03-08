// cursor
if (window.innerWidth > 700) {
    document.addEventListener("DOMContentLoaded", function() {
        function typeWriter(text, i) {
            if (i < text.length) {
                document.getElementById("typing-text").innerHTML += text.charAt(i);
                if (i === 6 || i === 7) {
                    console.log(text.charAt(i))
                    document.getElementById("cursor").style.left = i + 1 + "rem";
                } else if (i === 8 || i=== 13 || i === text.length-1) {
                    document.getElementById("cursor").style.left = i + "rem";
                } else {
                    document.getElementById("cursor").style.left = i + 0.6 + "rem";
                }           
                i++;
                setTimeout(function() {
                    typeWriter(text, i);
                }, 400);
            } else {
                document.getElementById("cursor").style.display = "none";
            }
        }
        
        var text = "Programmiererin";
        typeWriter(text, 0);
    });
}

// Erscheinen von Tennis-Info
document.addEventListener('DOMContentLoaded', function() {
    var tennisIcon = document.getElementById('tennis');
    var tennisInfo = document.getElementById('tennis-info');

    tennisIcon.addEventListener('mouseover', function() {
        tennisInfo.style.display = 'block';
        if (window.innerWidth > 700) {
            tennisIcon.style.height = '5rem';
        } else {
            tennisIcon.style.height = '3rem';
        }        
    });

    tennisIcon.addEventListener('mouseout', function() {
        tennisInfo.style.display = 'none';
        if (window.innerWidth > 700) {
            tennisIcon.style.height = '3rem';
        } else {
            tennisIcon.style.height = '1.5rem';
        }
        
    });
});

// Erscheinen von Schulinfo
document.addEventListener('DOMContentLoaded', function() {
    var schuleIcon = document.getElementById('schule');
    var schuleInfo = document.getElementById('schule-info');

    schuleIcon.addEventListener('mouseover', function() {
        schuleInfo.style.display = 'block';
        if (window.innerWidth > 700) {
            schuleIcon.style.height = '5rem';
        } else {
            schuleIcon.style.height = '3rem';
        } 
    });

    schuleIcon.addEventListener('mouseout', function() {
        schuleInfo.style.display = 'none';
        if (window.innerWidth > 700) {
            schuleIcon.style.height = '3rem';
        } else {
            schuleIcon.style.height = '1.5rem';
        }        
    });
});

// Erscheinen von Uni-Info
document.addEventListener('DOMContentLoaded', function() {
    var uniIcon = document.getElementById('uni');
    var uniInfo = document.getElementById('uni-info');

    uniIcon.addEventListener('mouseover', function() {
        uniInfo.style.display = 'block';
        if (window.innerWidth > 700) {
            uniIcon.style.height = '5rem';
        } else {
            uniIcon.style.height = '3rem';
        }        
    });

    uniIcon.addEventListener('mouseout', function() {
        uniInfo.style.display = 'none';
        if (window.innerWidth > 700) {
            uniIcon.style.height = '3rem';
        } else {
            uniIcon.style.height = '1.5rem';
        }
    });
});

// Erscheinen von Arbeit-Info
document.addEventListener('DOMContentLoaded', function() {
    var arbeitIcon = document.getElementById('arbeit');
    var arbeitInfo = document.getElementById('arbeit-info');

    arbeitIcon.addEventListener('mouseover', function() {
        arbeitInfo.style.display = 'block';
        if (window.innerWidth > 700) {
            arbeitIcon.style.height = '5rem';
        } else {
            arbeitIcon.style.height = '3rem';
        }
    });

    arbeitIcon.addEventListener('mouseout', function() {
        arbeitInfo.style.display = 'none';
        if (window.innerWidth > 700) {
            arbeitIcon.style.height = '3rem';
        } else {
            arbeitIcon.style.height = '1.5rem';
        }
    });
});

// Erscheinen von Coding-Info
document.addEventListener('DOMContentLoaded', function() {
    var codingIcon = document.getElementById('coding');
    var codingInfo = document.getElementById('coding-info');

    codingIcon.addEventListener('mouseover', function() {
        codingInfo.style.display = 'block';
        if (window.innerWidth > 700) {
            codingIcon.style.height = '5rem';
        } else {
            codingIcon.style.height = '3rem';
        }
    });

    codingIcon.addEventListener('mouseout', function() {
        codingInfo.style.display = 'none';
        if (window.innerWidth > 700) {
            codingIcon.style.height = '3rem';
        } else {
            codingIcon.style.height = '1.5rem';
        }
    });
});

// scrollen von skills
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".all-skills");
    const buttonNext = document.querySelector(".swiper-button.vorwärts");
    const buttonBack = document.querySelector(".swiper-button.rückwärts");
    const containerWidth = container.offsetWidth;
    // Breite .skill-container inklusive Margin
    const skillWidth = document.querySelector(".skill-container").offsetWidth +
                        parseFloat(window.getComputedStyle(document.querySelector('.skill-container')).marginLeft) +
                        parseFloat(window.getComputedStyle(document.querySelector('.skill-container')).marginRight);
    // Anzahl der sichtbaren .skill-container-Elemente
    const visibleSkills = Math.floor(containerWidth / (3*skillWidth));
    // Handler für Klick auf den Vorwärtspfeil
    buttonNext.addEventListener("click", function() {
        // Anzahl der verschobenen .skill-container-Elemente
        const scrollAmount = skillWidth * visibleSkills;
        // Scrolle Container nach rechts
        container.scrollLeft += scrollAmount;
    });
    // Handler für Klick auf den Rückwärtspfeil
    buttonBack.addEventListener("click", function() {
        // Anzahl der verschobenen .skill-container-Elemente
        const scrollAmount = skillWidth * visibleSkills;
        // Scrolle Container nach links
        container.scrollLeft -= scrollAmount;
    });
});

