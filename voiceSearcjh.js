// Check for browser support
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false; // Stop automatically after a single result
    recognition.interimResults = false; // Don't show interim results

    const searchInput = document.getElementById('searchInput');
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', () => {
        recognition.start();
    });

    recognition.onstart = () => {
        console.log('Voice recognition started. Speak into the microphone.');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript; // Set the input value to the recognized text
        console.log('You said: ', transcript);
    };

    recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ' + event.error);
    };

    recognition.onend = () => {
        console.log('Voice recognition ended.');
    };
} else {
    console.log('Speech recognition not supported in this browser.');
}