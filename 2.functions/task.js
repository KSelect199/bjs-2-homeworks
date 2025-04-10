function getArrayParams(...arr) {
  if (!arr.length) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  let avg = Number(
    (arr.reduce((acc, cur) => acc + cur, sum) / arr.length).toFixed(2)
  );
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  return (
    arr.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc), 0) -
    arr.reduce((acc, cur) => (cur % 2 !== 0 ? acc + cur : acc), 0)
  );
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }
  let count = 0;
  return (
    arr.reduce((acc, cur) => {
      if (cur % 2 === 0) {
        count++;
        return acc + cur;
      } else {
        return acc;
      }
    }, 0) / count
  );
}

function makeWork(arrOfArr, func) {
  return Math.max(...arrOfArr.map((value) => func(...value)));
}
