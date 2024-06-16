(() => {
  const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
  };

  const optimizedFib = (n) => {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  };

  const form = document.querySelector(".fibonacci-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = +form.querySelector(".fibonacci-input").value;
    const resultTag = form.querySelector(".fibonacci-result");
    try {
      // const result = fib(val);
      const result = optimizedFib(val);
      resultTag.innerHTML = `result: ${result}`;
    } catch (error) {
      resultTag.innerHTML = `error: ${error}`;
    }
  });
})();
