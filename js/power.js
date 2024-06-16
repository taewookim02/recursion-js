(() => {
  const form = document.querySelector(".power-form");

  const power = (base, exponent) => {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const base = +form.querySelector(".base-input").value;
    const exponent = +form.querySelector(".exponent-input").value;
    const resultTag = form.querySelector(".power-result");
    try {
      const result = power(base, exponent);
      resultTag.innerHTML = `result: ${result}`;
    } catch (error) {
      resultTag.innerHTML = `error: ${error}`;
    }
  });
})();
