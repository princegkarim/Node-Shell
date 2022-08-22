//Output a prompt
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
// The stdin 'data' event fires after a user types in a line
// pwd();
// ls();

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
	const cmd = data.toString().trim(); //remove the newline
	process.stdout.write('You typed: ' + cmd);
	pwd(cmd);
	ls(cmd);
	cat(cmd);
	process.stdout.write('\nprompt > ');
});
