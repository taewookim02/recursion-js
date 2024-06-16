(() => {
  const productOfArray = (array) => {
    var copy = copy || array.slice();

    if (copy.length === 0) {
      return 1;
    }

    return copy.shift() * productOfArray(copy);
  };
  var sixty = productOfArray([1, 2, 3, 10]); // 60

  const form = document.querySelector(".product-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultTag = form.querySelector(".product-result");
    resultTag.innerHTML = `result: ${sixty}`;
  });
})();
