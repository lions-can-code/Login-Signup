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

// Handle Login
document.getElementById("login-btn")?.addEventListener("click", login);
document.getElementById("signup-btn")?.addEventListener("click", signup);

// Login function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Logged in successfully!");
      // Redirect to the main page after successful login
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Signup function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Validate input
  if (email === "" || password === "") {
    alert("Please enter both email and password");
    return;
  }

  // Firebase user creation
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Store additional user data in Firestore
      return db.collection("users").doc(user.uid).set({
        email: user.email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    })
    .then(() => {
      alert("Signed up successfully!");
      // Redirect to the main page after successful signup
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}
