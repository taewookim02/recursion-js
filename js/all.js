(() => {
  // Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
  const all = (arr, callback) => {
    var copy = copy || arr.slice(); // shallow copy

    if (copy.length === 0) return true;

    if (callback(copy[0])) {
      copy.shift(); // remove first elem from arr
      return all(copy, callback);
    } else {
      return false;
    }
  };

  let allAreLessThanSeven = all([1, 2, 6], function (n) {
    return n < 7;
  });

  const form = document.querySelector(".all-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultTag = form.querySelector(".all-result");
    resultTag.innerHTML = `result: ${allAreLessThanSeven}`;
  });
})();
