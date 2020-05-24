var config = {
    apiKey: "AIzaSyAIl-EpAdZmjnEJAmWyUR2VaeTsD2mup_w",
    authDomain: "portfolio-1cfc2.firebaseapp.com",
    databaseURL: "https://portfolio-1cfc2.firebaseio.com",
    projectId: "portfolio-1cfc2",
    storageBucket: "portfolio-1cfc2.appspot.com",
    messagingSenderId: "345848544510",
  };
  firebase.initializeApp(config);
  var i=1;
  // Reference messages collection
  var messagesRef = firebase.database().ref('RubiX');
  
  // Listen for form submit
  document.getElementById('form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    // document.querySelector('.dots_container').style.display = 'none';
  
    // // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.dots_container').style.display = 'block';
    // },3000);
  
    // Clear form
    document.getElementById('form').reset();
    alert("Message Sent!");
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.child(name).push();
    i=i+1;
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }