// function writeUserData() {
//   var x = document.getElementById("search").value;
//   var addQuery = firebase.database().ref('query');
//   addQuery.child('disp').set(x);
// }

var adaNameRef = firebase.database().ref('query');

function writeUserData() {
  adaNameRef.set({ val: document.getElementById("search").value })
    .then(function() {
      console.log('Synchronization succeeded');
    })
    .catch(function(error) {
      console.log('Synchronization failed');
    });
}


var splitText = "hello_world";

window.onload = function() {
  firebase.database().ref('query/val').once('value').then(function(snapshot) {
    var Value = snapshot.val();
    document.getElementById("qry").innerHTML=Value;
    // ...
  });
       //when the document is finished loading, replace everything
       //between the <a ...> </a> tags with the value of splitText

}
