module.exports = function warmup(temperature) {
  // your implementation here
  if(isFinite(temperature)){
    return 1.8*temperature + 32;
  }
};
