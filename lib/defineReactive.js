export function defineReactive(data) {
	if (!data || Object.prototype.toString.call(data) !== "[object Object]")
		return;

	Object.keys(data).forEach((key) => {
		let currentValue = data[key];
		if (typeof currentValue === "object") {
			defineReactive(currentValue);
			data[key] = new Proxy(currentValue, {
				set(target, property, value, receiver) {
					if (property !== "length") {
					}
					return Reflect.set(target, property, value, receiver);
				},
			});
		} else {
			Object.defineProperty(data, key, {
				enumerable: true,
				configurable: false,
				get() {
					console.log(`getting ${key}:${currentValue}`);
					return currentValue;
				},
				set(newValue) {
					currentValue = newValue;
					console.log(`setting ${key} to ${newValue}`);
				},
			});
		}
	});
}
