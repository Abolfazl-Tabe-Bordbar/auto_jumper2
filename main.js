let father = document.getElementById("father");
let inputs = father.querySelectorAll("input");
inputs.forEach((items, index) => {
  items.addEventListener("input", function () {
    let a = items.value;
    let b = inputs.length;
    let i = index + 1;
    if (a.length == 4) {
      if (i < b) {
        let f = index + 1;
        inputs[f].focus();
      } else {
        inputs[b - 1].blur();
        show_close_timer.classList.remove("hidden");
        show_close_timer.classList.add("block");
        let i = 10;
        show_close_timer.innerHTML = "Thanks,Close Browser in : " + i + "s.";
        setInterval(() => {
          if (i > 0) {
            i--;
            show_close_timer.innerHTML = "Thanks,Close Browser in : " + i + "s.";
          } else {
            clearInterval();
            window.close();
          }
        }, 1000);
      }
    }else{

    }
  })
});