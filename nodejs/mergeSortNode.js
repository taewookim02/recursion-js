const merge = (arr, l, m, r) => {
  // get sizes
  let n1 = m - l + 1;
  let n2 = r - m;

  // temp arr
  const L = new Array(n1);
  const R = new Array(n2);

  // put in data
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }

  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  // init idx
  let i = 0;
  let j = 0;
  let k = l;

  // while
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // remainders
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
};

const sort = (arr, l, r) => {
  if (l < r) {
    // get middle
    let m = Math.floor(l + (r - l) / 2);

    // sort 2 halves
    sort(arr, l, m);
    sort(arr, m + 1, r);

    // merge
    merge(arr, l, m, r);
  }
};

const A = [3, 2, 1, 13, 8, 5, 0, 1];
sort(A, 0, A.length - 1);
console.log(A); // [0, 1, 1, 2, 3, 5, 8, 13]

const B = [105, 79, 100, 110];
sort(B, 0, B.length - 1);
console.log(B); // [79, 100, 105, 110]
