var firebaseConfig = {
    apiKey: "AIzaSyCf4o2_gvmUYOhnhgecbzFc-mkNk4dWpyI",
    authDomain: "the-kwitter-revamp-part2.firebaseapp.com",
    projectId: "the-kwitter-revamp-part2",
    storageBucket: "the-kwitter-revamp-part2.appspot.com",
    messagingSenderId: "770959961711",
    appId: "1:770959961711:web:b416b744944a640386679a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  useer=localStorage.getItem("Uname");
  document.getElementById("user").innerHTML="welcome "+useer+"!";
  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    row="<div class='roomname' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML=row;
    //End code
    });});}
getData();
function addroom(){
  r=document.getElementById("room").value;
  firebase.database().ref("/").child(r).update({
        purpose:"adding room name"
  });
  localStorage.setItem("rname",r);
  window.location="kwitterpage.html";
}
function redirect(name){
localStorage.setItem("roomname",name);
window.location="kwitterrevamp_page.html";
}
function logout(){
  localStorage.removeItem("Uname");
  localStorage.removeItem("rname");
  window.location="index.html";
}