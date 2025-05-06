function checkthescore() {
	var ssGrade = parseInt(document.getElementById('ssGrade').value);
	var sciGrade = parseInt(document.getElementById('sciGrade').value);
	var engGrade = parseInt(document.getElementById('engGrade').value);	

	var average = (ssGrade + sciGrade + engGrade) / 3;
	var rounded = Math.round(average)

	if (rounded >= 94 && rounded <= 100) {
		window.alert("Your average amounts to " + rounded + ", which is considered Excellent.")
	} else if (rounded >= 87) {
		window.alert("Your average amounts to " + rounded + ", which is considered Above Satisfactory.")
	} else if (rounded >= 80) {
		window.alert("Your average amounts to " + rounded + ", which is considered  Satisfactory.")
	} else if (rounded >= 75) {
		window.alert("Your average amounts to " + rounded + ", which is considered Needs Improvement.")
	} else if (rounded >= 70) {
		window.alert("Your average amounts to " + rounded + ", which is considered Poor.")
	} else {
		window.alert("Your average amounts to " + rounded + ", which is considered Failing.")
	}
}
