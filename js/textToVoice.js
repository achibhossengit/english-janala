function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.5; 
    utterance.pitch = 1; 
    window.speechSynthesis.speak(utterance);
}