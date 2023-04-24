export { rps, rpsls }

let rps_moves = ['rock', 'paper', 'scissors']
let rpsls_moves = ['rock', 'paper', 'scissors', 'lizard', 'spock']

function get_random(list) {
	return list[Math.floor((Math.random()*list.length))]
}

function rps(shot) {

	if (shot == null){
		return {player:get_random(rps_moves)}
	}
	let computer = get_random(rps_moves);
	let move = shot.toLowerCase();

	if(!rps_moves.includes(move)){
		console.error("Error:Move must be either rock, paper, or scissors.")
		throw new RangeError()
	}

