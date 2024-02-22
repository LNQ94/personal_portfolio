// cursor
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

// Erscheinen von Tennis-Info
document.addEventListener('DOMContentLoaded', function() {
    var tennisIcon = document.getElementById('tennis');
    var tennisInfo = document.getElementById('tennis-info');

    tennisIcon.addEventListener('mouseover', function() {
        tennisInfo.style.display = 'block';
        tennisIcon.style.height = '5rem';
    });

    tennisIcon.addEventListener('mouseout', function() {
        tennisInfo.style.display = 'none';
        tennisIcon.style.height = '3rem';
    });
});

// Erscheinen von Schulinfo
document.addEventListener('DOMContentLoaded', function() {
    var schuleIcon = document.getElementById('schule');
    var schuleInfo = document.getElementById('schule-info');

    schuleIcon.addEventListener('mouseover', function() {
        schuleInfo.style.display = 'block';
        schuleIcon.style.height = '5rem';
    });

    schuleIcon.addEventListener('mouseout', function() {
        schuleInfo.style.display = 'none';
        schuleIcon.style.height = '3rem';
    });
});

// Erscheinen von Uni-Info
document.addEventListener('DOMContentLoaded', function() {
    var uniIcon = document.getElementById('uni');
    var uniInfo = document.getElementById('uni-info');

    uniIcon.addEventListener('mouseover', function() {
        uniInfo.style.display = 'block';
        uniIcon.style.height = '5rem';
    });

    uniIcon.addEventListener('mouseout', function() {
        uniInfo.style.display = 'none';
        uniIcon.style.height = '3rem';
    });
});

// Erscheinen von Arbeit-Info
document.addEventListener('DOMContentLoaded', function() {
    var arbeitIcon = document.getElementById('arbeit');
    var arbeitInfo = document.getElementById('arbeit-info');

    arbeitIcon.addEventListener('mouseover', function() {
        arbeitInfo.style.display = 'block';
        arbeitIcon.style.height = '5rem';
    });

    arbeitIcon.addEventListener('mouseout', function() {
        arbeitInfo.style.display = 'none';
        arbeitIcon.style.height = '3rem';
    });
});

// Erscheinen von Coding-Info
document.addEventListener('DOMContentLoaded', function() {
    var codingIcon = document.getElementById('coding');
    var codingInfo = document.getElementById('coding-info');

    codingIcon.addEventListener('mouseover', function() {
        codingInfo.style.display = 'block';
        codingIcon.style.height = '5rem';
    });

    codingIcon.addEventListener('mouseout', function() {
        codingInfo.style.display = 'none';
        codingIcon.style.height = '3rem';
    });
});