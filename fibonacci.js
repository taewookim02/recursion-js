document.addEventListener("DOMContentLoaded", (e) => {
  const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    // need to get previous num
    return fib(n - 1) + fib(n - 2);
  };

  const form = document.querySelector(".fibonacci-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = +form.querySelector(".fibonacci-input").value;
    const resultTag = form.querySelector(".fibonacci-result");
    try {
      const result = fib(val);
      resultTag.innerHTML = `result: ${result}`;
    } catch (error) {
      resultTag.innerHTML = `error: ${error}`;
    }
  });
});
