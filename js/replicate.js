(() => {
  const replicate = (times, value) => {
    if (times <= 0) return [];

    return [value].concat(replicate(times - 1, value));
  };
  const a = replicate(3, 5); // [5, 5, 5]
  const b = replicate(1, 69); // [69]
  const c = replicate(-2, 6); // []

  const form = document.querySelector(".replicate-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultTag = form.querySelector(".replicate-result");
    resultTag.innerHTML = `result: [${a}], [${b}], [${c}]`;
  });
})();
