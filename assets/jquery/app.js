// Initialize Firebase
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCoNx4RXfP-kHP85g1Wlh4SpeOe3NL92E4",
    authDomain: "classass-49baa.firebaseapp.com",
    databaseURL: "https://classass-49baa.firebaseio.com",
    storageBucket: "classass-49baa.appspot.com",
  };
  firebase.initializeApp(config);


var database = firebase.database();


var trainName = "";
var destination = "";
var time = 0;
var frequency = "";


$('#addTrain').on("click", function() {

	trainName = $('#nameinput').val().trim();
	destination = $('#destinationinput').val().trim();
	time = $('#timeinput').val().trim();
	frequency = $('#frequencyinput').val().trim();


	database.ref().set({
		trainName: trainName,
		destination: destination,
		time: time,
		frequency: frequency,
		dateAdded: firebase.database.ServerValue.TIMESTAMP

	});

	return false;
});

//Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function(snapshot) {

	// Log everything that's coming out of snapshot
	console.log(snapshot.val());
	console.log(snapshot.val().trainName);
	console.log(snapshot.val().destination);
	console.log(snapshot.val().time);
	console.log(snapshot.val().frequency);

	// Change the HTML to reflect
	$("#namedisplay").html(snapshot.val().trainName);
	$("#destinationdisplay").html(snapshot.val().destination);
	$("#frequencydisplay").html(snapshot.val().frequency);
	$("#timedisplay").html(snapshot.val().time);


// Handle the errors
}, function(errorObject) {

	console.log("Errors handled: " + errorObject.code);
});
