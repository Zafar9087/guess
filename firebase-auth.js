import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDtKma7Aft6ccTJD8ezzI_ycr8Q3wX6avA",
  authDomain: "guess-the-number-74fbb.firebaseapp.com",
  projectId: "guess-the-number-74fbb",
  storageBucket: "guess-the-number-74fbb.appspot.com",
  messagingSenderId: "798989013500",
  appId: "1:798989013500:web:74c91f43756c767880e279",
  measurementId: "G-R1S35J12L4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.login = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    alert("Ошибка входа: " + error.message);
  }
};

window.logout = async () => {
  await signOut(auth);
};

onAuthStateChanged(auth, (user) => {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const username = document.getElementById("username");
  const avatar = document.getElementById("avatar");

  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    username.textContent = user.displayName || "Без имени";
    avatar.src = user.photoURL || "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png";
  } else {
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    username.textContent = "Гость";
    avatar.src = "https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png";
  }
});
