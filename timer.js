window.onload = function () {
    var displayWrapper = document.querySelector('#timerWrapper');
    var display = document.querySelector('#timer');
    var startButton = document.querySelector('#start-button');
    var stopButton = document.querySelector('#stop-button');
    var radios = document.querySelectorAll('input[type="radio"][name="duration"]');
    var timer;
    var selectedDuration = null;
    var results = document.querySelector('#results');
    var messageResults = document.querySelector('#message-results');

    function startTimer(duration) {
        var hours, minutes, seconds;
        var totalSeconds = duration;
        timer = setInterval(function () {
            hours = parseInt(totalSeconds / 3600, 10);
            minutes = parseInt((totalSeconds % 3600) / 60, 10);
            seconds = parseInt(totalSeconds % 60, 10);
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = hours + ":" + minutes + ":" + seconds;
            if (--totalSeconds < 0) {
                clearInterval(timer);
                alert("Le minuteur est terminé !");
            }
        }, 1000);
        displayWrapper.style.display = 'block';
    }

    function stopTimer() {
        clearInterval(timer);
        display.textContent = "00:00:00";
        startButton.removeAttribute('disabled');
        stopButton.setAttribute('disabled', 'disabled');
        displayWrapper.style.display = 'none';
        results.innerHTML = '';
        var image1 = document.createElement('img');
        image1.src = './assets/plancha-electrique.jpg';
        var image2 = document.createElement('img');
        image2.src = './assets/sac-a-main.jpg';
        var image3 = document.createElement('img');
        image3.src = './assets/scooter.jpg';
        results.appendChild(image1);
        results.appendChild(image2);
        results.appendChild(image3);
        messageResults.innerHTML = 'Le temps est écoulé, faite votre choix !';
    }

    function updateStartButton() {
        if (selectedDuration !== null) {
            startButton.removeAttribute('disabled');
        } else {
            startButton.setAttribute('disabled', 'disabled');
        }
    }

    radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            selectedDuration = parseInt(this.value, 10);
            updateStartButton();
        });
    });

    startButton.addEventListener('click', function () {
        startTimer(selectedDuration);
        startButton.setAttribute('disabled', 'disabled');
        stopButton.removeAttribute('disabled');
    });

    stopButton.addEventListener('click', function () {
        stopTimer();
    });
};