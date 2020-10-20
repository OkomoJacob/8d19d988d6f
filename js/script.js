// In jQuery will give the best result: compatibility, smoothness
const btnScrollToToP = document.querySelector("#btnScrollToTop");
btnScrollToToP.addEventListener("click", function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
});