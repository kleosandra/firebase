
 var config = {
    apiKey: "AIzaSyCm33gwf9tGTeBVUPDvOe2MsC6tmplo87s",
    authDomain: "train-56f87.firebaseapp.com",
    databaseURL: "https://train-56f87.firebaseio.com",
    projectId: "train-56f87",
    storageBucket: "train-56f87.appspot.com",
    messagingSenderId: "855946456014"
  };
  firebase.initializeApp(config);


  var database = firebase.data


 

  $("#add-train-btn").on("click", function(event) {
  		event.preventDefault();

	
	  var trainName = $("#train-name-input").val().trim();
	  var trainDest = $("#dest-input").val().trim();
	  var firstTrain = $("#firstTrain-input").val().trim();
	  var trainFreq = $("#freq-input").val().trim();

	
	  var newTrain = {
	  	name: trainName,
	  	destination: trainDest,
	  	start: firstTrain,
	  	frequency: trainFreq
	  };

	 
	
	  $("#train-name-input").val("");
	  $("#dest-input").val("");
	  $("#firstTrain-input").val("");
	  $("#freq-input").val("");
  	});

  	
	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

	  console.log(childSnapshot.val());


	  var trainName = childSnapshot.val().name;
	  var trainDest = childSnapshot.val().destination;
	  var firstTrain = childSnapshot.val().start;
	  var trainFreq = childSnapshot.val().frequency

  		var trainFreq = 0;


   		 var firstTime = 0;

	   var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
	    console.log(firstTimeConverted);


	    var currentTime = moment();
	    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

	
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);


	    var tRemainder = diffTime % trainFreq;
	    console.log(tRemainder);

	    var tMinutesTillTrain = trainFreq - tRemainder;
		console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
		
	    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
	    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));


});

  