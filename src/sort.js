export default function (arr) {
	return arr.sort((a, b) => {
		return b.health - a.health;
	});
}