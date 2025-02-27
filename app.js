// Initialize Firebase (replace with your own Firebase project credentials)
const firebaseConfig = {
    apiKey:"AIzaSyAILtEAxy_ila0rEdEp5HV6ffH2dkyN7uQ",
    authDomain: "testing-firebase-27166.firebaseapp.com",
    projectId: "testing-firebase-27166",
    storageBucket: "testing-firebase-27166.firebasestorage.app",
    messagingSenderId: "180092044900",
    appId: "1:180092044900:web:c4f2643d10ce33f2f2c171"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm['email'].value;
        const password = loginForm['password'].value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Redirect to a file (e.g., dashboard.html) upon successful login
                window.location.href = 'dashboard.html';
            })
            .catch((error) => {
                console.error('Error during login:', error.message);
                alert('Login failed: ' + error.message);
            });
    });
}

// Admin Login
const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = adminLoginForm['email'].value;
        const password = adminLoginForm['password'].value;

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Redirect to a file (e.g., admin_dashboard.html) upon successful login
                window.location.href = 'admin_dashboard.html';
            })
            .catch((error) => {
                console.error('Error during admin login:', error.message);
                alert('Admin login failed: ' + error.message);
            });
    });
}

// Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = registerForm['username'].value;
        const email = registerForm['email'].value;
        const password = registerForm['password'].value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Optionally set the display name for the user
                userCredential.user.updateProfile({
                    displayName: username
                }).then(() => {
                    // Redirect to login page after successful registration
                    window.location.href = 'login.html';
                });
            })
            .catch((error) => {
                console.error('Error during registration:', error.message);
                alert('Registration failed: ' + error.message);
            });
    });
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('black-and-white');
    });
}