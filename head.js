const fs = require('fs');

module.exports = (done, string) => {
  fs.readFile(string, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    // take first ten lines of split array and
    // then joining back into string for output
    done(data.split('\n').slice(0, 10).join('\n'));
  });
};
