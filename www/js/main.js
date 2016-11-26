// Initialize Firebase
var config = {
	apiKey: "AIzaSyDJuilmP0PcLg22rQEZfnuDwd5Ef48QkEI",
	authDomain: "mercysmart-eb1c6.firebaseapp.com",
	databaseURL: "https://mercysmart-eb1c6.firebaseio.com",
	storageBucket: "mercysmart-eb1c6.appspot.com",
	messagingSenderId: "1032463194214"
};
firebase.initializeApp(config);

var database = firebase.database();
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    right_now = year + '-' + month + '-' + day;

function submit() {
	'use strict';
	// Inputs
	var id = $('#id').val(),
		grade = $('#class').val(),
		matpel = $('#subject').val();

	var today = firebase.database().ref('agenda/' + right_now);
	today.push().set({
		id: id,
		kelas: grade,
		mata_pelajaran: matpel
	})
}