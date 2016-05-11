var hue= 0;
var speed = 0.1;
var saturation = 0;

function animate(){
        
        requestAnimationFrame(animate);

        var allText = document.getElementsByTagName( "p" );

        for (var i = 0; i < allText.length; i++) {
            allText[i].style.color = "hsl("+ hue +", 80%, 50%)";
        
         
        };

        hue++;
        

    };

animate();