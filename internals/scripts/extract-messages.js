exports.format = function (msgs) {
  const results = {};
  console.log('messages ', msgs);
  for (const [id, msg] of Object.entries(msgs)) {
    results[id] = msg.defaultMessage;
  }
  return results;
};
