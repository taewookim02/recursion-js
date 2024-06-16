document.addEventListener("DOMContentLoaded", () => {
  const factorial = (n) => {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  const form = document.querySelector(".factorial-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = +form.querySelector(".factorial-input").value;
    const resultTag = form.querySelector(".factorial-result");
    try {
      const result = factorial(val);
      resultTag.innerHTML = `result: ${result}`;
    } catch (error) {
      resultTag.innerHTML = `error: ${error}`;
    }
  });
});
