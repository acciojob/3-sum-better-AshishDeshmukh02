function threeSum(S, target) {
  S.sort(function(a, b) {
    return a - b;
  });
  var closestSum = S[0] + S[1] + S[2];

  for (var i = 0; i < S.length - 2; i++) {
    var j = i + 1;
    var k = S.length - 1;
    while (j < k) {
      var currentSum = S[i] + S[j] + S[k];
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
      if (currentSum < target) {
        j++;
      } else {
        k--;
      }
    }
  }
  return closestSum;
}

module.exports = threeSum;
