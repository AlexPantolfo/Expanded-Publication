document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        document.getElementById('video').style.display = 'none';
        document.getElementById('video2').style.display = 'block';
        video2.play();
    }
});

