
var firebaseConfig = {
    apiKey: "AIzaSyBd6m5jnvj_mLtGSrEFH-fhVflinEECjys",
  authDomain: "fourth-buffer-324708.firebaseapp.com",
  projectId: "fourth-buffer-324708",
  storageBucket: "fourth-buffer-324708.appspot.com",
  messagingSenderId: "773872772446",
  appId: "1:773872772446:web:176b2b4a8e243dcaa95bcf",
  measurementId: "G-ZFB1HQ5HK1"
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
