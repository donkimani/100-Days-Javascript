// ===========================
// DOM Element Selections
// ===========================

const form = document.getElementById('reminderForm');
const patientNameInput = document.getElementById('patientName');
const appointmentDateInput = document.getElementById('appointmentDate');
const appointmentTimeInput = document.getElementById('appointmentTime');
const clinicNameInput = document.getElementById('clinicName');
const smsBtn = document.getElementById('smsBtn');
const emailBtn = document.getElementById('emailBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const previewBox = document.getElementById('previewBox');
const charCount = document.getElementById('charCount');
const dateError = document.getElementById('dateError');
const copySuccess = document.getElementById('copySuccess');

// ===========================
// State Management
// ===========================

let messageType = 'sms'; // Default message type

// ===========================
// Utility Functions
// ===========================

/**
 * Format date to readable string (e.g., "Monday, March 15, 2024")
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Format time to 12-hour format (e.g., "2:30 PM")
 */
function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes} ${ampm}`;
}

/**
 * Validate that the selected date is not in the past
 */
function validateDate(dateString) {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to midnight for comparison
    
    return selectedDate >= today;
}

/**
 * Generate SMS message template
 */
function generateSMSMessage(patientName, date, time, clinicName) {
    if (!patientName || !date || !time || !clinicName) {
        return '';
    }
    
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);
    
    return `Hi ${patientName}, this is a reminder of your appointment at ${clinicName} on ${formattedDate} at ${formattedTime}. Reply CONFIRM or call us if you need to reschedule.`;
}

/**
 * Generate Email message template
 */
function generateEmailMessage(patientName, date, time, clinicName) {
    if (!patientName || !date || !time || !clinicName) {
        return '';
    }
    
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(time);
    
    return `Subject: Appointment Reminder - ${formattedDate}

Dear ${patientName},

This is a friendly reminder of your upcoming appointment:

📅 Date: ${formattedDate}
🕐 Time: ${formattedTime}
🏥 Location: ${clinicName}

If you need to reschedule or have any questions, please contact us as soon as possible.

We look forward to seeing you!

Best regards,
${clinicName} Team`;
}

/**
 * Update the message preview
 */
function updatePreview() {
    const patientName = patientNameInput.value.trim();
    const appointmentDate = appointmentDateInput.value;
    const appointmentTime = appointmentTimeInput.value;
    const clinicName = clinicNameInput.value.trim();
    
    let message = '';
    
    if (messageType === 'sms') {
        message = generateSMSMessage(patientName, appointmentDate, appointmentTime, clinicName);
    } else {
        message = generateEmailMessage(patientName, appointmentDate, appointmentTime, clinicName);
    }
    
    // Update preview box
    if (message) {
        previewBox.textContent = message;
        previewBox.classList.remove('preview-placeholder');
    } else {
        previewBox.innerHTML = '<p class="preview-placeholder">Fill in the appointment details to see your message preview...</p>';
    }
    
    // Update character count (only for SMS)
    if (messageType === 'sms') {
        updateCharacterCount(message.length);
    } else {
        charCount.parentElement.style.display = 'none';
    }
}

/**
 * Update character count with color coding
 */
function updateCharacterCount(count) {
    charCount.parentElement.style.display = 'block';
    charCount.textContent = count;
    
    // Remove all classes
    charCount.classList.remove('warning', 'error');
    
    // Add appropriate class based on count
    if (count > 160) {
        charCount.classList.add('error');
    } else if (count > 140) {
        charCount.classList.add('warning');
    }
}

/**
 * Copy message to clipboard
 */
async function copyToClipboard() {
    const message = previewBox.textContent;
    
    // Check if there's a message to copy
    if (!message || message.includes('Fill in the appointment details')) {
        alert('Please fill in all appointment details first.');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(message);
        showCopySuccess();
    } catch (err) {
        // Fallback for older browsers
        fallbackCopyToClipboard(message);
    }
}

/**
 * Fallback copy method for older browsers
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        alert('Failed to copy message. Please try again.');
    }
    
    document.body.removeChild(textArea);
}

/**
 * Show copy success message
 */
function showCopySuccess() {
    copySuccess.classList.add('show');
    
    setTimeout(() => {
        copySuccess.classList.remove('show');
    }, 3000);
}

/**
 * Clear the form
 */
function clearForm() {
    form.reset();
    previewBox.innerHTML = '<p class="preview-placeholder">Fill in the appointment details to see your message preview...</p>';
    charCount.textContent = '0';
    charCount.classList.remove('warning', 'error');
    dateError.classList.remove('show');
    dateError.textContent = '';
}

/**
 * Toggle between SMS and Email
 */
function toggleMessageType(type) {
    messageType = type;
    
    // Update button states
    if (type === 'sms') {
        smsBtn.classList.add('active');
        emailBtn.classList.remove('active');
    } else {
        emailBtn.classList.add('active');
        smsBtn.classList.remove('active');
    }
    
    // Update preview
    updatePreview();
}

/**
 * Handle date validation
 */
function handleDateValidation() {
    const dateValue = appointmentDateInput.value;
    
    if (dateValue && !validateDate(dateValue)) {
        dateError.textContent = 'Please select a date in the future';
        dateError.classList.add('show');
        appointmentDateInput.style.borderColor = 'var(--error-color)';
    } else {
        dateError.classList.remove('show');
        dateError.textContent = '';
        appointmentDateInput.style.borderColor = '';
    }
}

// ===========================
// Event Listeners
// ===========================

// Update preview on any input change
patientNameInput.addEventListener('input', updatePreview);
appointmentDateInput.addEventListener('input', () => {
    handleDateValidation();
    updatePreview();
});
appointmentTimeInput.addEventListener('input', updatePreview);
clinicNameInput.addEventListener('input', updatePreview);

// Date validation on blur (when user leaves the field)
appointmentDateInput.addEventListener('blur', handleDateValidation);

// Message type toggle
smsBtn.addEventListener('click', () => toggleMessageType('sms'));
emailBtn.addEventListener('click', () => toggleMessageType('email'));

// Copy button
copyBtn.addEventListener('click', copyToClipboard);

// Clear button
clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear the form?')) {
        clearForm();
    }
});

// Prevent form submission (since we're not actually submitting anywhere)
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// ===========================
// Initialization
// ===========================

/**
 * Set minimum date to today
 */
function initializeDatePicker() {
    const today = new Date().toISOString().split('T')[0];
    appointmentDateInput.setAttribute('min', today);
}

/**
 * Load saved templates from localStorage (Stretch Feature)
 */
function loadSavedTemplates() {
    const savedTemplates = localStorage.getItem('appointmentTemplates');
    if (savedTemplates) {
        // This is a placeholder for the stretch feature
        // You can expand this to implement custom template saving/loading
        console.log('Saved templates available:', savedTemplates);
    }
}

/**
 * Initialize the application
 */
function init() {
    initializeDatePicker();
    loadSavedTemplates();
    
    // Set initial character count display
    charCount.parentElement.style.display = 'block';
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===========================
// Keyboard Shortcuts (Bonus)
// ===========================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to copy
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        copyToClipboard();
    }
    
    // Ctrl/Cmd + Shift + C to clear
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        if (confirm('Are you sure you want to clear the form?')) {
            clearForm();
        }
    }
});