(() => {
  const form = document.querySelector(".collatz-form");

  const collatz = (n) => {
    // if n is 1 stop
    if (n == 1) return 0;

    // n even, n / 2
    if (n % 2 === 0) {
      return 1 + collatz(n / 2);
    }

    // n odd, 3n + 1
    if (n % 2 === 1) {
      return 1 + collatz(3 * n + 1);
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = +form.querySelector(".collatz-input").value;
    const resultTag = form.querySelector(".collatz-result");
    try {
      const result = collatz(val);
      resultTag.innerHTML = `result: ${result}`;
    } catch (error) {
      resultTag.innerHTML = `error: ${error}`;
    }
  });
})();
