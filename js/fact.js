(() => {
  const fact = (n) => {
    if (n === 1) {
      return 1;
    }
    return n * fact(n - 1);
  };

  const form = document.querySelector(".fact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = +form.querySelector(".fact-input").value;
    const resultTag = form.querySelector(".fact-result");
    try {
      const result = fact(val);
      resultTag.innerHTML = `result: ${result}`;
    } catch (error) {
      resultTag.innerHTML = `error: ${error}`;
    }
  });
})();
