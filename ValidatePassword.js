import React from "react";

export const ValidatePassword = password => {
	var password_status = false;
	var password_status1 = false;
	var password_status2 = false;
	var password_status3 = false;
	var password_status4 = false;

	function upperCasePassword(password) {
		var symbols = [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z"
		];
		for (let i = 0; i < password.length; i++) {
			let current_character = password.charAt(i);
			for (let j = 0; j < symbols.length; j++) {
				if (password.indexOf(current_character) === password.indexOf(symbols[j])) {
					password_status1 = true;
				}
			}
		}
	}

	function oneNumberPassword(password) {
		var symbols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
		for (let i = 0; i < password.length; i++) {
			let current_character = password.charAt(i);
			for (let j = 0; j < symbols.length; j++) {
				if (password.indexOf(current_character) === password.indexOf(symbols[j])) {
					password_status3 = true;
				}
			}
		}
	}

	function numberOfCharactersPassword(password) {
		if (password.length >= 8) {
			password_status4 = true;
		}
	}

	function passwordStatusEdit() {
		if (password_status1) {
			if (password_status3) {
				if (password_status4) {
					password_status = true;
				} else {
					password_status = false;
				}
			} else {
				password_status = false;
			}
		} else {
			password_status = false;
		}
	}
	upperCasePassword(password);
	oneNumberPassword(password);
	numberOfCharactersPassword(password);
	passwordStatusEdit();
	return password_status;
};
