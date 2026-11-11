import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuEIIVtXfXZDKAU90Ia7DzS3f_Ik71hl4",
  authDomain: "seguranca-digital.firebaseapp.com",
  projectId: "seguranca-digital",
  storageBucket: "seguranca-digital.firebasestorage.app",
  messagingSenderId: "34162989578",
  appId: "1:34162989578:web:393512281f057c5bd5ddf3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);