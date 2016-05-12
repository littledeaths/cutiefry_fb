/*

sarah rooney x little_deaths
PR353NT5 ...................


    ░▒███████▒  ▒██▓   ░███░ ░▓█████████▒ ▓██████▓ ░░███████░  ▒████▓████ ░▒████████▒░ ▓███░ ░████░          ░▓███░  ░██▒        
   ░█░░░░░░░░█ ░█░░█░  █▒░░█ █▒░░░░░░░░▒█ █▒░░░░░█ ▒█░░░▒▒▒█▓ ▒█░░▒██▓▓▓█ ▓▓░▒███░░░▓█ █░░█▒ ▒█░░█░         ▓█░░░░█ ░█░░█░       
   █▒░▓█░  ░░  ░█░░█░  █▒░▓█  ░▒▒█▒░█░░░   ░▓▓░█░░ █▒░█░      ▒█░█░       █▒░█▓▓█▒░░▒█ █▒░█▒ ▒█░░█░        ░█░░█▓░░ ░█░░█░       
  ░█░░█░       ░█░░█░  █▒░█▒     █▒░█▒      ▓▓░█░  █▒░█░      ▒█░█▓▒▒▓▓░  █▒░░▒▓▓▓▓█▓░ ▓█░▒█░▓█░▒█░         █▒░█░   ░█░░█▓██▒░   
  ░█░░█░        █▒░█░  █▒░█▒     █▒░█▓      ▓▓░█░  ▓▓░░▒▒▒▒█▓ ▒█░░░░░░░█░ █▒░▓░█▒      ░█▓░░░░░▒█░        ░▒██░████ ██▒░▒░░░░▓█░ 
   ▓█░░█████▓░  ▒█░▒█▒▒█░░█▒     █▒░▓█    ░▓█▓░█▒░ ▓▓░█▓▓██▓░ ░█░░█░▒▒░░  █▒░██░▒█░      ░░█░█▓░          █▓░░░░▒▒▒ █▒█░░█▒█░░█▒ 
   ░▓█░░░░░░▓█  ░█▓░░░░░░▒█░     █▒░▒█    ▓█░░░░░█ ▒█░░▒▒▒▓█░ ░█░░█░      █▓░█▒█░░█▒      ░█░▒█   ░██████   ░█░▓▓     ▓█░░░░░█▓  
     ░░▓███▓░     ░░████▒░       ░▓██░     ░▓███▒░  ░░▒▓███▓░  ░██▓░      ░██░ ░▒█▓░       ░██░   ░████▓░    ░█▓░      ░░▓▓▓░░   


*/



//animate words color
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

/* IMAGES!! THNK U NICK BRIZ~*~*~* */

function heartify(){

  var heartGif = "http://rs255.pbsrc.com/albums/hh123/WhyYuwie/Animated%20Clip%20Art/AniPinkHearts.gif~c200"

  var pics = document.getElementsByTagName("img");

  var oldpics = [];
    for (var i = 0; i < pics.length; i++) {
      oldpics.push( pics[i] );
    };

  for( var i = 0; i < oldpics.length; i++ ) {

      if( oldpics[i].getAttribute('data-hearted')!=="true" ){

        /*pics[i].setAttribute("src","");*/

        var picWrap = oldpics[i].parentNode;
        picWrap.style.position = "relative";

        oldpics[i].style.position = "relative";
        oldpics[i].style.top = "0px";
        oldpics[i].style.left = "0px";
        oldpics[i].style.display = "block";
        oldpics[i].setAttribute('data-hearted','true');
        var tall = oldpics[i].offsetHeight;
        var wide = oldpics[i].offsetWidth;

        var hrt = document.createElement('img');
        hrt.setAttribute("src",heartGif);
        hrt.style.position = "relative";
        hrt.style.top = "-"+tall+"px";
        hrt.style.left = "0px";
        hrt.style.display = "block";
        hrt.style.height = tall+"px";
        hrt.style.width = wide+"px";
        hrt.setAttribute('data-hearted','true');
        picWrap.appendChild( hrt );

      }
    }
}

document.addEventListener("scroll",heartify);


/* navbar */
var blueColor = document.querySelector("._2t-a._26aw._50ti._2s1y");
  blueColor.style.backgroundColor = "#FF00D1";
	blueColor.style.backgroundImage = "none";
  blueColor.style.borderBottom = "2px solid #E6A2FE";
  //blueColor.style.boxShadow = "0 1px 1px 1px rgba(190,2,255, .8)";
	blueColor.style.fontFamily = "monospace";
  blueColor.style.color = "#FFFFFF";
  //blueColor.style.textShadow = "3px 3px 3px #A72335";

var notificationBg = document.querySelector("._4u91");
  notificationBg.style.backgroundColor = "#FF0000";

//var sidebarHover = document.querySelector(".linkWrap");
//  sidebarHover.style.backgroundColor = "#ffffff";


/* status box before its CLICKED */
var contentBoxes = document.querySelector("._4-u2._1qby.focus_target._4-u8");
  contentBoxes.style.backgroundColor = "#F9E9FF";
var headerStatusBox = document.querySelector("._4d6h._1kvc");
  headerStatusBox.style.backgroundColor = "#F9E9FF";

var timelineContent = document.querySelector("._1dwg");
  timelineContent.style.backgroundColor = "#F9E9FF";

var timelineContentBlah = document.querySelector("._4-u2._5v6e.cardRightCol._4-u8");
  timelineContent.style.backgroundColor = "#F9E9FF";


/* all-over font change */
var fontBody = document.querySelector(".fb_content.clearfix ");
	fontBody.style.fontFamily = "monospace";
  fontBody.style.fontSize = "11px";


/* background color */
var fbBackground = document.querySelector("body");
  fbBackground.style.backgroundColor = "#F4D4FF";

var fbBackground = document.querySelector("._5vb_._5vb_ #contentCol");
  fbBackground.style.backgroundColor = "#F4D4FF";


// palatte
//#BFF1F5
//#FFFDBA
//#40FF43
//#F0BBE8
// primary colors: red #FF0000 rgb(255, 0, 0)
// primary colors: blue #0000FF
// primary colors: yellow #FFFB00 rgb(255, 251, 0)

//pinks!!!!!!!
// saturated fuschia: #FF00D1 rgb(255,0,209)
// purple: #BE02FF rgb(190,2,255)
