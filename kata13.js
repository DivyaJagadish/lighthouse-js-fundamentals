const talkingCalendar = function (date) {
	const splitDate = date.split("/");
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const month = parseInt(splitDate[1]);
	let day = parseInt(splitDate[2]);
	if (day === 1 || day === 21 || day === 31) {
		day = day + "st";
	} else if (day === 2 || day === 22) {
		day = day + "nd";
	} else if (day === 3 || day === 23) {
		day = day + "rd";
	} else {
		day = day + "th";
	}
	const expandedDate = months[month - 1] + " " + day + ", " + splitDate[0];
	return expandedDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
