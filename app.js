// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxGsamEeraE_hPm0bnWFncXTWJEmI3YjU",
  authDomain: "github-projects-3736e.firebaseapp.com",
  projectId: "github-projects-3736e",
  storageBucket: "github-projects-3736e.firebasestorage.app",
  messagingSenderId: "706442576194",
  appId: "1:706442576194:web:deaf6abfe141eb16ea48db",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("signup-btn").addEventListener("click", signup);
document.getElementById("show-signup").addEventListener("click", showSignup);
document.getElementById("show-login").addEventListener("click", showLogin);

// Login function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Logged in successfully!");
      // Redirect to the main page after successful login
      window.location.href = "main.html";  // Redirects to main.html
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Signup function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Store user data in Firestore
      return db.collection("users").doc(user.uid).set({
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    })
    .then(() => {
      alert("Signed up successfully!");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Show Signup form
function showSignup() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

// Show Login form
function showLogin() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}
