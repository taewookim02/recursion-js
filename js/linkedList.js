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
  // function to print list items one by one
  const printList = (list) => {
    resultStr += list.value + " ";

    if (list.next) {
      printList(list.next);
    }
  };

  const printBtn = document.querySelector(".printList-btn");
  const resultTag = document.querySelector(".printList-result");
  printBtn.addEventListener("click", () => {
    resultStr = ""; // reset str
    printList(list);
    resultTag.innerHTML = `result: ${resultStr}`;
  });
})();
