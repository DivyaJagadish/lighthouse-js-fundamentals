const calculateChange = function (total, cash) {
	// Your code here
	const balanceCash = {};
	let balance = cash - total;

	if (balance >= 2000) {
		newbalance = balance % 2000;
		twentyDollar = balance / 2000;
		balanceCash["twentyDollar"] = parseInt(twentyDollar);
		balance = newbalance;
	}

	if (balance >= 1000) {
		newbalance = balance % 1000;
		tenDollar = balance / 1000;
		balanceCash["tenDollar"] = parseInt(tenDollar);
		balance = newbalance;
	}

	if (balance >= 500) {
		newbalance = balance % 500;
		fiveDollar = balance / 500;
		balanceCash["fiveDollar"] = parseInt(fiveDollar);
		balance = newbalance;
	}

	if (balance >= 200) {
		newbalance = balance % 200;
		twoDollar = balance / 200;
		balanceCash["twoDollar"] = parseInt(twoDollar);
		balance = newbalance;
	}

	if (balance >= 100) {
		newbalance = balance % 100;
		oneDollar = balance / 100;
		balanceCash["oneDollar"] = parseInt(oneDollar);
		balance = newbalance;
	}

	if (balance >= 25) {
		newbalance = balance % 25;
		quarter = balance / 25;
		balanceCash["Quarter"] = parseInt(quarter);
		balance = newbalance;
	}

	if (balance >= 10) {
		newbalance = balance % 10;
		Dime = balance / 10;
		balanceCash["Dime"] = parseInt(Dime);
		balance = newbalance;
	}

	if (balance >= 5) {
		newbalance = balance % 5;
		Nickel = balance / 5;
		balanceCash["Nickel"] = parseInt(Nickel);
		balance = newbalance;
	}

	if (balance >= 1) {
		Penny = balance;
		balanceCash["Penny"] = parseInt(Penny);
	}

	return balanceCash;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
