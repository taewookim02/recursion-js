(() => {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };
  let resultStr = "";
  const printRevList = (list) => {
    if (list.next) {
      printRevList(list.next);
    }
    resultStr += `${list.value} `;
  };

  const printRevBtn = document.querySelector(".printRevList-btn");
  const resultTag = document.querySelector(".printRevList-result");
  printRevBtn.addEventListener("click", () => {
    resultStr = "";
    printRevList(list);
    resultTag.innerHTML = `result: ${resultStr}`;
  });
})();
