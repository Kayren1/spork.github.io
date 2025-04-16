// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const ticketPreview = document.querySelector('.ticket');
    const dropZone = document.getElementById('formupload');
    const avatarBtn = document.querySelector('.avatarbtn');
    const fileInput = document.getElementById('avatarupload');
    const Preview = document.getElementById('ticketpreview');
    const imagePreview = document.getElementById('userimage');
    const uploadText = document.getElementById('uploadtext');
    const button = document.querySelector('.generate');
    const inputs = document.querySelectorAll('input, textarea');
    const ticketId = document.querySelector('.ticket-id');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const githubError = document.getElementById('githubError');
    const avatarError = document.getElementById('avatarError');
    const infoImage = document.getElementById('infoImage');
    const userIcon = document.getElementById('u-ico');
    const formSection = document.querySelector('.ticket-form');

    let currentFile = null;
    let isUploaded = false;

    // File upload handling
    const handleFile = (file) => {
        if (!file.type.match(/image\/(jpeg|png)/)) {
            showError(avatarError, 'Invalid file format. Please upload JPG or PNG.');
            return;
        }
            
        if (file.size > 500000) { // 500KB
            showError(avatarError, 'File too large. Please upload a photo under 500KB.');
            return;
        }
            
        currentFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            Preview.src = e.target.result
            isUploaded = true;
            dropZone.classList.add('uploaded');
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Avatar Preview">`;
            Preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            if (isUploaded) {
                uploadText.setAttribute('hidden', 'true');
                userIcon.setAttribute('hidden', 'true');
                imagePreview.removeAttribute('hidden', 'true');
                avatarBtn.removeAttribute('hidden', 'true');
            } else {
                userIcon.removeAttribute('hidden', 'true');
                avatarBtn.setAttribute('hidden', 'true');
                uploadText.removeAttribute('hidden', 'true');
                imagePreview.setAttribute('hidden', 'true');
            }
            dropZone.setAttribute('aria-invalid', 'false');
            avatarError.textContent = '';
        };
        reader.readAsDataURL(file);
    };
    
    
    // Drag and drop handlers
    inputs.forEach(input => {
        input.addEventListener('copy', e => e.preventDefault());
        input.addEventListener('paste', e => e.preventDefault());
        input.addEventListener('cut', e => e.preventDefault());
        input.addEventListener('blur', e => {
            e.preventDefault();
            input.value = capitalizeWords(input.value);
        });
        
        function capitalizeWords(str) {
            return str
              .toLowerCase()
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
        }
        
    });
    


    
    
    
    // Drag and drop handlers
    
    button.addEventListener('click', () => {
        const randomID = Math.floor(100000 + Math.random() * 900000);
        ticketId.textContent = randomID;
    });
    
    button.addEventListener('submit', e => {
        e.preventDefault(); // Prevent actual form submission
      
        if (isUploaded === false) {
            uploadText.textContent = 'Please upload a JPG or PNG image.';
            dropZone.classList.add('error-red');
            return;
        } else {
            alert('Ticket generated successfully!');
            return;
        }
    });

    // Drag and drop handlers
    dropZone.addEventListener('dragover', (e) => {
        if (isUploaded) return;
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        if (isUploaded) return;
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        if (isUploaded) return;
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
    });

    // Click to upload
    dropZone.addEventListener('click', () => {
        if (isUploaded) return;
        fileInput.click();
    });
    fileInput.addEventListener('change', (e) => handleFile(e.target.files[0]));



    // Image controls
    document.getElementById('changeimage').addEventListener('click', () => fileInput.click());
    document.getElementById('removeimage').addEventListener('click', () => {
        currentFile = null;
        isUploaded = false;
        avatarBtn.setAttribute('hidden', 'true');
        userIcon.removeAttribute('hidden', 'true');
        imagePreview.setAttribute('hidden', 'true');
        dropZone.classList.remove('uploaded');
        uploadText.removeAttribute('hidden');
        fileInput.value = '';
    });


  // Form validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            showTicket();
            form.reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    function validateForm() {
        let isValid = true;
        const name = document.getElementById('fullName');
        const email = document.getElementById('email');
        const github = document.getElementById('github');

        console.log(nameError, emailError, githubError); // Debugging

        if (!name.value.trim()) {
            showError(nameError, 'Please enter your full name');
            input.classList.add
            isValid = false;
        } else {
            clearError(nameError);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError(emailError, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailError);
        }

        if (!github.value.trim()) {
            showError(githubError, 'Please enter your GitHub username');
            isValid = false;
        } else {
            clearError(githubError);
        }

        return isValid;
    }

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
        infoImage.classList.add('colorized')
        infoImage.removeAttribute('hidden', 'true')
        avatarError.classList.add('error-message')
        element.setAttribute('role', 'alert');
    }

    function clearError(element) {
        element.textContent = '';
        element.style.display = 'none';
        infoImage.classList.remove('colorized')
        infoImage.setAttribute('hidden', 'true')
        avatarError.classList.remove('error-message')
        element.removeAttribute('role');
    }

    function showTicket() {
        const formData = {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            github: document.getElementById('github').value
        };

        document.getElementById('ticketName').textContent = formData.name;
        document.getElementById('ticketEmail').textContent = formData.email;
        document.getElementById('attendeeName').textContent = formData.name;
        document.getElementById('getuser').textContent = `${formData.github}`;
      
        ticketPreview.style.display = 'flex';
        formSection.style.display = 'none';
    }

  // Accessibility: Live error announcements
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('blur', () => validateForm());
    });
});