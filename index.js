function produceDrivingRange(range) {
	return function(from, to) {
		const distance = Math.abs(parseInt(from) - parseInt(to));

		if (distance >= range) {
			return `${distance - range} blocks out of range`;
		} else {
			return `within range by ${range - distance}`;
		}
	}
}

function produceTipCalculator(percent) {
	return price => percent * price;
}

function createDriver() {
	let driverId = 0;

	return class {
		constructor(name) {
			this.name = name;
			this.id = ++driverId;
		}
	}
}