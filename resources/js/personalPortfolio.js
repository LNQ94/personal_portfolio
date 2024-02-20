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
            }, 400); // Adjust typing speed here (milliseconds)
        } else {
            document.getElementById("cursor").style.display = "none"; // Hide cursor when typing is done
        }
    }
    
    var text = "Programmiererin";
    typeWriter(text, 0);
});










