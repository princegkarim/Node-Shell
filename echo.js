module.exports = (done, cmd) => {
  let array = cmd.split(' ');
  done(array.slice(1).join(' '));
};
