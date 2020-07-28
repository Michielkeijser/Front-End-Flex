for (let i = 60; i <= 100; i++) {
	function assignGrade(i) {
		if (i > 90) {
			return 'A';
		} else if (i > 80) {
			return 'B';
		} else if (i > 70) {
			return 'C';
		} else if (i > 65) {
			return 'D';
		} else {
			return 'F';
		}

	}
	console.log('voor '+ i + ' punten' + ' krijg je een ' + assignGrade(i));
}
