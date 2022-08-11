"use strict";

function solution(list) {
  let out = "";
  let isChain = false;
  out += list[0];
  list.forEach((el, i, arr) => {
    if (i === 0) return;
    if (i === arr.length - 1) {
      out += `-${el}`;
      return;
    }
    if (Math.abs(el - arr[i - 1]) != 1) {
      console.log(arr[i - 1]);
      if (isChain) {
        out += `-${arr[i - 1]}`;
      }
      out += `,${el}`;
      isChain = false;
    } else {
      isChain = true;
    }
  });

  return out;
}

console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
