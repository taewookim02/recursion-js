(() => {
  const totalIntegers = (arr) => {
    if (arr.length === 0) return 0;

    let total = 0;
    let first = arr.shift();

    if (Array.isArray(first)) {
      total += totalIntegers(first);
    } else if (Number.isInteger(first)) {
      total++;
    }

    return total + totalIntegers(arr);
  };
  var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7
  const form = document.querySelector(".totalIntegers-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultTag = form.querySelector(".totalIntegers-result");
    resultTag.innerHTML = `result: ${seven}`;
  });
})();
