// Initialize Firebase
var config = {
	apiKey: "AIzaSyDJuilmP0PcLg22rQEZfnuDwd5Ef48QkEI",
	authDomain: "mercysmart-eb1c6.firebaseapp.com",
	databaseURL: "https://mercysmart-eb1c6.firebaseio.com",
	storageBucket: "mercysmart-eb1c6.appspot.com",
	messagingSenderId: "1032463194214"
};
var database = firebase.database();
firebase.initializeApp(config);

	
var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    right_now = year + '-' + month + '-' + day;

var	child = firebase.database().ref(right_now).push().key;

function submit() {
	'use strict';
	// Inputs
	var id = $('#id').val(),
		grade = $('#class').val(),
		matpel = $('#subject').val();

	child.push().set({
		id: id,
		kelas: grade,
		mata_pelajaran: matpel
	})
}