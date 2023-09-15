// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuO98E5pRr2gXCVITEbnkankxXGO3_YZI",
  authDomain: "jets-eeafd.firebaseapp.com",
  projectId: "jets-eeafd",
  storageBucket: "jets-eeafd.appspot.com",
  messagingSenderId: "619913777499",
  appId: "1:619913777499:web:6a9f147a254cdad9a80a7e",
  measurementId: "G-87ZHPHVTMZ"
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
