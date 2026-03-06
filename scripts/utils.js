// Confetti Animation Utility
function createConfetti(count = 100) {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#667eea', '#764ba2', '#ffd700', '#ff6b6b', '#51cf66', '#4dabf7', '#ff922b'];

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';

        // Random shape
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }

        confetti.classList.add('fall', 'spin');
        container.appendChild(confetti);
    }

    // Remove container after animation
    setTimeout(() => {
        container.remove();
    }, 5000);
}

// Loading State Utilities
function showLoading(containerId, message = 'Loading...') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <div class="loading-text">${message}</div>
        </div>
    `;
}

function hideLoading(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const loadingEl = container.querySelector('.loading-container');
    if (loadingEl) {
        loadingEl.remove();
    }
}

// Error Handling Utilities
function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (!container) {
        alert(message);
        return;
    }
    
    // Remove existing error messages
    const existingError = container.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <span>⚠️</span>
        <span>${message}</span>
    `;
    
    container.insertBefore(errorDiv, container.firstChild);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorDiv.style.opacity = '0';
        errorDiv.style.transition = 'opacity 0.3s ease';
        setTimeout(() => errorDiv.remove(), 300);
    }, 5000);
}

function showSuccess(containerId, message) {
    const container = document.getElementById(containerId);
    if (!container) {
        alert(message);
        return;
    }
    
    // Remove existing messages
    const existingMsg = container.querySelector('.success-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <span>✅</span>
        <span>${message}</span>
    `;
    
    container.insertBefore(successDiv, container.firstChild);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        successDiv.style.opacity = '0';
        successDiv.style.transition = 'opacity 0.3s ease';
        setTimeout(() => successDiv.remove(), 300);
    }, 3000);
}

function clearMessages(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.querySelectorAll('.error-message, .success-message').forEach(el => el.remove());
}

// Smooth screen transitions
function transitionScreen(fromId, toId, callback) {
    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    
    if (!fromEl || !toEl) return;
    
    // Fade out
    fromEl.classList.add('fade-out');
    
    setTimeout(() => {
        fromEl.classList.remove('active');
        fromEl.classList.remove('fade-out');
        
        // Fade in
        toEl.classList.add('active');
        
        if (callback) callback();
    }, 300);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Dark mode is always enabled - no toggle needed
});
