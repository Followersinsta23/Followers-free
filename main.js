// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDRHfwn2yE8VL_WuXqkrXozMGv8uCfSUQ",
  authDomain: "followers-c2e76.firebaseapp.com",
  projectId: "followers-c2e76",
  storageBucket: "followers-c2e76.appspot.com",
  messagingSenderId: "1050483012186",
  appId: "1:1050483012186:web:f5c52621e59f66ded4de63",
  measurementId: "G-CEC951PXCR"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



var contactInfo = firebase.database().ref("Messages");


document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();


  document.getElementById('dis').style.visibility ='visible';

  setTimeout(function(){
  document.getElementById('dis').style.visibility ='visible';
  },3000);
}

function saveContactInfo(name, email, message) {
  var newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
