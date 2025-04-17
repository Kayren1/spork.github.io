document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const ticketPreview = document.querySelector('.ticket');
    const dropZone = document.getElementById('formupload');
    const avatarBtn = document.querySelector('.avatarbtn');
    const fileInput = document.getElementById('avatarupload');
    const preview = document.getElementById('ticketpreview');
    const imagePreview = document.getElementById('userimage');
    const uploadText = document.getElementById('uploadtext');
    const generateBtn = document.querySelector('.generate');
    const inputs = document.querySelectorAll('input, textarea');
    const ticketId = document.querySelector('.ticket-id');
    const formSection = document.querySelector('.ticket-form');
  
    // Error elements
    const errors = {
      name: document.getElementById('nameError'),
      email: document.getElementById('emailError'),
      github: document.getElementById('githubError'),
      avatar: document.getElementById('avatarError')
    };
    const infoImage = document.getElementById('infoImage');
    const userIcon = document.getElementById('u-ico');
  
    let currentFile = null;
    let isUploaded = false;
  
    // Upload Handling
    const handleFile = (file) => {
      if (!file.type.match(/image\/(jpeg|png)/)) {
        showError(errors.avatar, 'Invalid file format. Please upload JPG or PNG.');
        return;
      }
  
      if (file.size > 500000) {
        showError(errors.avatar, 'File too large. Please upload a photo under 500KB.');
        return;
      }
  
      currentFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        imagePreview.src = imageData;
        preview.src = imageData;
        isUploaded = true;
  
        dropZone.classList.add('uploaded');
        uploadText.hidden = true;
        userIcon.hidden = true;
        imagePreview.hidden = false;
        avatarBtn.hidden = false;
  
        dropZone.setAttribute('aria-invalid', 'false');
        clearError(errors.avatar);
      };
      reader.readAsDataURL(file);
    };
  
    // Drag & Drop
    dropZone.addEventListener('dragover', e => {
      if (!isUploaded) {
        e.preventDefault();
        dropZone.classList.add('dragover');
      }
    });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    dropZone.addEventListener('drop', e => {
      if (!isUploaded) {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        handleFile(e.dataTransfer.files[0]);
      }
    });
  
    dropZone.addEventListener('click', () => !isUploaded && fileInput.click());
    fileInput.addEventListener('change', e => handleFile(e.target.files[0]));
  
    document.getElementById('changeimage').addEventListener('click', () => fileInput.click());
    document.getElementById('removeimage').addEventListener('click', () => {
      currentFile = null;
      isUploaded = false;
      avatarBtn.hidden = true;
      userIcon.hidden = false;
      imagePreview.hidden = true;
      dropZone.classList.remove('uploaded');
      uploadText.hidden = false;
      fileInput.value = '';
    });
  
    // Capitalize, remove spaces and disable copy/paste
    inputs.forEach(input => {
      input.addEventListener('copy', e => e.preventDefault());
      input.addEventListener('paste', e => e.preventDefault());
      input.addEventListener('cut', e => e.preventDefault());
      input.addEventListener('blur', () => {
        input.value = input.value.trim().replace(/\s+/g, ' ').toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      });
    });
  
    // Generate ID
    generateBtn.addEventListener('click', () => {
      ticketId.textContent = Math.floor(100000 + Math.random() * 900000);
    });
  
    // Form submission
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (validateForm()) {
        showTicket();
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  
    // Validation logic
    function validateForm() {
      const name = document.getElementById('fullName');
      const email = document.getElementById('email');
      const github = document.getElementById('github');
  
      let isValid = true;
  
      if (!currentFile) {
        showError(errors.avatar, 'Please upload a JPG or PNG image.');
        dropZone.classList.add('error-red');
        isValid = false;
      } else {
        clearError(errors.avatar);
      }
  
      if (!name.value.trim()) {
        showError(errors.name, 'Please enter your full name');
        isValid = false;
      } else {
        clearError(errors.name);
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        showError(errors.email, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearError(errors.email);
      }
  
      if (!github.value.trim()) {
        showError(errors.github, 'Please enter your GitHub username');
        isValid = false;
      } else {
        clearError(errors.github);
      }
  
      return isValid;
    }
  
    // Error Handling
    function showError(element, message) {
      element.textContent = message;
      element.style.display = 'block';
      element.setAttribute('role', 'alert');
      avatarBtn?.classList.add('error-message');
      infoImage?.classList.add('colorized');
      infoImage?.removeAttribute('hidden');
    }
  
    function clearError(element) {
      element.textContent = '';
      element.style.display = 'none';
      element.removeAttribute('role');
      avatarBtn?.classList.remove('error-message');
      infoImage?.classList.remove('colorized');
      infoImage?.setAttribute('hidden', 'true');
    }
  
    // Show ticket
    function showTicket() {
      const name = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const github = document.getElementById('github').value;
  
      document.getElementById('ticketName').textContent = name;
      document.getElementById('ticketEmail').textContent = email;
      document.getElementById('attendeeName').textContent = name;
      document.getElementById('getuser').textContent = github;
  
      alert('Ticket generated successfully!');
      ticketPreview.style.display = 'flex';
      formSection.style.display = 'none';
    }
  
    // Auto validate on blur (accessibility)
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('blur', () => validateForm());
    });
});
  