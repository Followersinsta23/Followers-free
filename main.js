
var firebaseConfig = {
    apiKey: "FindItOnFirebase",
    authDomain: "FindItOnFirebase",
    databaseURL: "FindItOnFirebase",
    projectId: "FindItOnFirebase",
    storageBucket: "FindItOnFirebase",
    messagingSenderId: "FindItOnFirebase",
    appId: "FindItOnFirebase",
    measurementId: "FindItOnFirebase"
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
