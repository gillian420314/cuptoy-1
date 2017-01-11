$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBp-027g6gpsrbOGKTBMjsj3MVACH2jMBc",
    authDomain: "about-putitto.firebaseapp.com",
    databaseURL: "https://about-putitto.firebaseio.com",
    storageBucket: "about-putitto.appspot.com",
    messagingSenderId: "259389602529"
  };
  firebase.initializeApp(config);

  var dbcontactus = firebase.database().ref().child('contactus');

  const $name = $('#name');
  const $email = $('#email');
  const $phone = $('#phone');
  const $message = $('#message');
  const $bottom = $('#bottom');

	$bottom.click(function(){
    console.log("123");
		const name = $name.val();
		const email = $email.val();
		const phone = $phone.val();
		const message = $message.val();
		dbcontactus.push({name:name,email:email,phone:phone,message:message});
	});
});
