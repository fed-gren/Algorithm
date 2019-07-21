function findOutlier(integers) {
  let evenCnt = (oddCnt = 0);
  let evenAns = (oddAns = null);

  integers.forEach(cur => {
    if (cur % 2 === 0) {
      evenCnt += 1;
      evenAns = cur;
    } else if (cur % 2 === 1 || cur % 2 === -1) {
      oddCnt += 1;
      oddAns = cur;
    }
  });

  return evenCnt === 1 ? evenAns : oddAns;
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
console.log(
  findOutlier([
    -120218719,
    -170087772,
    -181086408,
    -124271928,
    -53772388,
    -45757682,
    -42525464,
    -48203260,
    39139992,
    -45636888,
    52667134,
    150247508,
    12940010,
    93552868,
    -100993492,
    -112907874,
    33296544,
    160187222,
    -122058518,
    -145791210,
    65385212,
    108754242,
    -57714880,
    104925482,
    190441924,
    -176556714,
    -64810688,
    142462376,
    -92012846,
    -15557148,
    -109296512,
    -180844392,
    34455304,
    11087800,
    -78166348,
    30073156,
    -13913696,
    111614472,
    122535776,
    -150037848,
    -163344588,
    105217066
  ])
); //-120218719, instead got: -170087772
