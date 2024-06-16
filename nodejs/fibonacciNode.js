const fibs = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

const fibsRec = (n) => {
  const generateFibs = (n, arr) => {
    // base
    if (arr.length >= n) return arr;
    const nextFib = arr[arr.length - 1] + arr[arr.length - 2];

    // pushing towards base
    arr.push(nextFib);
    return generateFibs(n, arr);
  };

  if (n <= 0) return [];
  if (n === 1) return [0];
  const initialArray = [0, 1];

  return generateFibs(n, initialArray);
};

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
