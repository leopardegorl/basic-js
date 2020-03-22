const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let a = Math.log(MODERN_ACTIVITY / sampleActivity);
};
