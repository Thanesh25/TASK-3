
let obj1 = {name: "Thaneshwar",age: 23}
let obj2 = {age: 23,name:"Thaneshwar"}

function check(obj1, obj2) {
	for (key in obj2) {
		if (obj1[key] !== obj2[key]) {
			return false;
		}
	}
	return true
}
console.log(check(obj1, obj2));
