(() => {
  const sumSquares = (arr) => {
    let total = 0;

    for (let element of arr) {
      if (Array.isArray(element)) {
        total += sumSquares(element);
      } else if (Number.isInteger(element)) {
        total += element * element;
      }
    }

    return total;
  };

  const l = sumSquares([1, 2, 3]);
  const l2 = sumSquares([[1, 2], 3]);
  const l3 = sumSquares([[[[[[[[[1]]]]]]]]]);
  const l4 = sumSquares([10, [[10], 10], [10]]);

  const form = document.querySelector(".sumSquares-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultTag = form.querySelector(".sumSquares-result");
    resultTag.innerHTML = `result: ${l}, ${l2}, ${l3}, ${l4}`;
  });
})();
