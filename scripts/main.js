var positions = JSON.parse(localStorage.positions || "{}");
$(function () {
    var d = $("[id=draggable]").attr("id", function (i) {
        return "draggable_" + i
    })
    $.each(positions, function (id, pos) {
        $("#" + id).css(pos)
    })

    d.draggable({
        containment: "#containment-wrapper",
        scroll: false,
        stop: function (event, ui) {
            positions[this.id] = ui.position
            localStorage.positions = JSON.stringify(positions)
        }
    });
            
});

$(function() {
    $( ".draggable" ).draggable();
  });

var chestCounter=0;
function openChest(folder){
    chest = document.getElementById("chest");
    hidden=document.getElementsByClassName("hidden");
    tips=document.getElementById("tips");
    if(chestCounter==0){
        chest.src=folder+"assets/treasureChest/chest2.png";
        for (var i=0;i<hidden.length;i++){
            hidden[i].style.animation="appear 0.5s";
            hidden[i].style.animationTimingFunction="ease-in";
            hidden[i].style.animationFillMode="forwards";
        }
        tips.style.display="none";
        chestCounter++;
    }else if(chestCounter==1){
        chest.src=folder+"assets/treasureChest/chest1.png";
        for (var i=0;i<hidden.length;i++){
            hidden[i].style.animationDirection="reverse"
        }
        tips.style.display="block";
        chestCounter=0;
    }
}

