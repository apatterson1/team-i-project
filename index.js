$(function() {
    //16 cards in total, 4x4 id: c1-c16
    var flipped="";
    var score = 0;
    
    for(var i = 1; i<=16; i++){

        $("#card-" + i).flip({
          trigger: 'manual'
        });
        
        $("#card-" + i).on("click", function(event){
            $(this).flip(true);
            var cardType = $(this).attr("data");

            if (!flipped){
                // this means if no card has been flipped
                flipped = cardType;
                //this takes the value 
            } else{
                if (flipped == cardType){
                    $("[data="+ cardType + "]").unbind("click");
                    score = score + 125;
                    if(score == 1000) {
                        $( ".container" ).remove();
                        alert("YOU HAVE WON THE UNIVERSE!!!!!!");
                        $("body").append("<img id='winning' width = '200px;' src = 'http://i.giphy.com/k7nUblXRPCsc8.gif'/>");
                        $("body").append("<img id='winning' src = 'https://i.imgur.com/rfFWukr.gif'/>");
                        $("body").append("<img id='winning' src = 'http://i.giphy.com/OTOXNsMqmoNEI.gif'/>");
                        $("body").append("<img id='winning' src = 'http://i.giphy.com/3rgXBFFa1uk6ChdJVm.gif'/>");
                    }
                    $("#score").text(score);
                    flipped = "";
                } else {
                    setTimeout(function(){
                        $(this).flip(false);
                        $("[data=" + flipped + "]").flip(false);
                        flipped = "";
                    }.bind(this), 1000);
                }
            }
        });
    }
});

