document.addEventListener("DOMContentLoaded", () => {
  // function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
  function sumTo(n) {
    if (n == 1) {
      return n;
    }
    return n + sumTo(n - 1);
  }
  const handleSumTo = (e) => {
    e.preventDefault();
    const val = +sumToForm.querySelector(".sumTo-input").value;
    const resultTag = sumToForm.querySelector(".sumTo-result");

    try {
      const result = sumTo(val);
      resultTag.innerHTML = `result: ${result}`;
    } catch (error) {
      resultTag.innerHTML = `error: ${error}`;
    }
  };

  const sumToForm = document.querySelector(".sumTo-form");
  sumToForm.addEventListener("submit", handleSumTo);
});
