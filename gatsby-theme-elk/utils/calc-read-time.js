const calculateReadTime = (rawString, readWordPerMin = 350) => {
  return Math.floor(rawString.length / readWordPerMin);
};

module.exports = calculateReadTime;