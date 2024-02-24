function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Randomize speed
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, 7000); // Remove after 5 seconds to avoid overflow
}

setInterval(createSnowflake, 300);