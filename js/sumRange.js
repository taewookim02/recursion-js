(() => {
  const sumRange = (n) => {
    if (n === 1) {
      return 1;
    }
    return n + sumRange(n - 1);
  };

  const form = document.querySelector(".sumRange-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = +form.querySelector(".sumRange-input").value;
    const resultTag = form.querySelector(".sumRange-result");
    try {
      const result = sumRange(val);
      resultTag.innerHTML = `result: ${result}`;
    } catch (error) {
      resultTag.innerHTML = `error: ${error}`;
    }
  });
})();
