document.addEventListener("DOMContentLoaded", () => {
  // function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
  function sumTo(n) {
    if (n == 1) {
      return n;
    }
    return n + sumTo(n - 1);
  }

  const sumToForm = document.querySelector(".sumTo-form");
  sumToForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = +sumToForm.querySelector(".sumTo-input").value;
    const resultTag = sumToForm.querySelector(".sumTo-result");
    const result = sumTo(val);
    resultTag.innerHTML = `result: ${result}`;
  });
});
