(() => {
  var nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: "foo2",
            },
          },
        },
      },
    },
  };

  const contains = (obj, value) => {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        return contains(obj[key], value);
      }
      if (obj[key] === value) {
        return true;
      }
    }

    return false;
  };

  let hasIt = contains(nestedObject, 44); // true
  let doesntHaveIt = contains(nestedObject, "foo"); // false

  const form = document.querySelector(".contains-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const resultTag = form.querySelector(".contains-result");
    resultTag.innerHTML = `result: ${hasIt}, ${doesntHaveIt}`;
  });
})();
