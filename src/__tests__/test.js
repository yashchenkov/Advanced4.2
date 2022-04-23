import sort from '../sort.js';

test('testing sort func', () => {
	const arr = [
	  {name: 'мечник', health: 10},
	  {name: 'маг', health: 100},
	  {name: 'лучник', health: 80},
	];
	const expected = [
	  {name: 'маг', health: 100},
	  {name: 'лучник', health: 80},
	  {name: 'мечник', health: 10},
	];
	const recieved = sort(arr);

	expect(recieved).toEqual(expected);

})