$(document).ready(function(){
    var winCount = 0;
    var lossCount = 0;
    var totalScore;
    var targetNum;

    $("#wins").text(winCount);
    $("#losses").text(lossCount);
    $("#target").text(targetNum);
    $("#total").text(totalScore);
    
    function start(){
        totalScore = 0; 
        targetNum = 19 + Math.floor(Math.random() * 120);

        $("#target").text(targetNum);
        $("#total").text(totalScore);
    
        $(".crystal").each(function() {
            var assignedNum = 1 + Math.floor(Math.random() * 12);
            console.log(assignedNum);
            $(this).attr("data-crystalVal", assignedNum);
        });
    
        $(".crystal").on("click", function() {
            var crystalVal = ($(this).attr("data-crystalVal"));
            crystalVal = parseInt(crystalVal);
            
            totalScore += crystalVal;
            $("#total").text(totalScore);
    
          if (totalScore === targetNum) {
              winCount++;
              $("#wins").text(winCount);
              console.log("You win!");
              start();
          }
          
          else if (totalScore >= targetNum) {
              lossCount++;
              $("#losses").text(lossCount);
              console.log("You lose!");
              start();
          }
        });
    }
    start();
});
