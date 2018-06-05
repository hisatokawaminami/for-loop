$(document).ready(function() {
  $("#submit").click(function(){
    var countTo = $("input#countTo").val();
    var countBy = $("input#countBy").val();
    var arr = [];

    if (isNaN(countTo) || isNaN(countBy)) {
      arr.push("Please enter real numbers only");
    } else if (countTo === "" || countBy === "") {
      arr.push("please enter both a count to and count by")
    } else if (countTo <= 0 || countBy <= 0) {
      arr.push("please enter positive numbers only");
    } else if (parseInt(countTo) < parseInt(countBy)) {
      arr.push("the count by number can't be larger than the count to number");
    } else if (countTo % countBy === 0) {
      for (var i = 0; i < countTo/countBy; i++) {
        arr.push((i+1) * countBy);
      }
    } else {
      for (var i = 1; i < countTo/countBy; i++) {
        arr.push(i * countBy);
      }
    }
    $(".output").text(arr);
  });
});
