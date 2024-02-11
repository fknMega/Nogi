document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "You're the sun for me because I wait for you when I wake up.",
        "Your smile lights up my world more than the sun ever could.",
        "Being with you feels like home, no matter where we are.",
        "I never knew what love was until I met you.",
        "Just like the stars and the moon, I feel lost without you.",
        "With every beat of my heart, I love you more and more.",
        "You're not my number one; you're my only one.",
        "Our love story is my favorite, now and forever.",
        "I choose you. And I'll choose you, over and over.",
        "You have this incredible way of making my heart happy.",
        "Every day with you is a wonderful addition to my life's journey.",
        "You're my paradise, and I'd happily get stranded with you forever.",
        "Meeting you was fate, becoming your friend was a choice, but falling in love with you was beyond my control.",
        "Thank you for being my rainbow after the storm.",
        "To the world, you may be one person, but to me, you are the world.",
        "I've fallen in love many times… but always with you.",
        "Loving you is not just my right, but my duty, my joy, and my ultimate purpose.",
        "You are my today and all of my tomorrows.",
        "In a sea of people, my eyes will always search for you.",
        "I love you for all that you are, all that you have been, and all you're yet to be.",
        "Your love shines in my heart as the sun that shines upon the earth.",
        "Each day I love you more, today more than yesterday and less than tomorrow.",
        "My love for you is a journey; starting at forever and ending at never.",
        "If I had a flower for every time I thought of you, I could walk in my garden forever.",
        "I could start fires with what I feel for you."
    ];
    
    
    let currentIndex = 0;
    const messageElement = document.getElementById('love-message');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    const updateMessage = () => {
        messageElement.textContent = messages[currentIndex];
    };

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + messages.length) % messages.length;
        updateMessage();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % messages.length;
        updateMessage();
    });

    updateMessage(); // Initialize with the first message
});
