// In jQuery will give the best result: compatibility, smoothness
const btnScrollToToP = document.querySelector("#btnScrollToTop");
btnScrollToToP.addEventListener("click", function(){
    //We can use plane Javascript but JQuery which will give the best result both in compatibility and animation.
    $("html, body").animate({ scrollTop: 0 }, "slow");
});