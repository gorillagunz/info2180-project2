document.addEventListener("DOMContentLoaded", function()
{
	
	var backgrounds=["background1.jpg","background2.jpg","background3.jpg","background4.jpg","background5.jpg"];
	var puzzle= document.getElementById("puzzlearea").querySelectorAll("div");
	var lef=0;
	var tp=0;
	var lefts = 0;
	var t=0;
	var random2 = Math.floor(Math.random() * (4)+1);
console.log(random2);
	for (var x=0; x<puzzle.length; x++)
	{
		
		puzzle[x].className="puzzlepiece";
		puzzle[x].style.backgroundImage = "url("+backgrounds[random2]+")";
		puzzle[x].style.left = lefts.toString()+"px";
		puzzle[x].style.top = t.toString()+"px";
		puzzle[x].style.backgroundRepeat="no-repeat";
		if(lefts/100==4 || lefts/100==8 || lefts/100==12){
			lefts = 0;
			t += 100;
			puzzle[x].style.top = t.toString()+"px";
			puzzle[x].style.left = lefts.toString()+"px";

		}
		puzzle[x].style.backgroundPosition = "-"+lefts.toString()+"px -"+t.toString()+"px";
		lefts += 100;


}

function findpob(x){
		var lef=0;
		var tp=0;
		if (x.offsetParent)
		{
			lef+= x.offsetLeft;
			tp+= x.offsetTop;
		console.log(lef,tp);

		}
	}
	
	var news=document.createElement("div");
	news.style.border="2px solid white";
news.style.height="96px";
news.style.width="96px";
news.style.top="300px";
news.style.left="300px";
news.style.position="absolute";
	var add=document.getElementById("puzzlearea").appendChild(news);

	
    function cright(x)
    {
    	
if (parseInt(x.style.left)-(parseInt(add.style.left))==(-100) && (parseInt(x.style.top)==parseInt(add.style.top))){
		return "true";
    	
    }
}

    function cleft(x){
    		if (parseInt(x.style.left)-parseInt(add.style.left)==100 && (parseInt(x.style.top)==parseInt(add.style.top))){
			return "true";
    	
    	}
    }
    
    function cbottom(x){

if (parseInt(x.style.top)-parseInt(add.style.top)== -100 && (parseInt(x.style.left)==parseInt(add.style.left))){
			return "true";
    
    }
}

    function ctop(x){

if (parseInt(x.style.top)-(parseInt(add.style.top))==100  && (parseInt(x.style.left)==parseInt(add.style.left))){
			return "true";

    }
    }

    function moveb(){
for (var t=0;t<puzzle.length;t++)
{ var m=ctop(puzzle[t]);
var w=cbottom(puzzle[t]);
var u=cleft(puzzle[t]);
var n=cright(puzzle[t]);

if (puzzle[t].innerHTML !=" " && n=="true"|| u=="true" ||w=="true" || m=="true"){
	puzzle[t].className +=" movablepiece";
	console.log(t);
}
	}
	}	
 var shuffle = function () {
        for (var p = 0; p < puzzle.length; p++) {
        	puzzle[p].className=puzzle[p].className.replace(" movablepiece","")
            var random = Math.floor(Math.random() * (14)+1);
           var temp = puzzle[random].style.top;
	puzzle[random].style.top = add.style.top;
	add.style.top = temp;

	temp = puzzle[random].style.left;
	puzzle[random].style.left = add.style.left;
	add.style.left = temp;
        }

    }

    document.getElementById("shufflebutton").onclick = function () {

		
        shuffle();
        moveb();
        select();

    };
function select(){
  			 var puzzle1= document.getElementById("puzzlearea").querySelectorAll("div");
  			var g=new Array();
  			var f;
  			var d=new Array();
  			 for (var i=0;i<puzzle1.length;i++)
  			 {

  			 if (puzzle1[i].className=="puzzlepiece movablepiece"){
  			 	 g.push(puzzle1[i]);
  			 	}}
  			 
  			 	for (var r=0;r<g.length;r++){
  			 		
		f=g[r];
		console.log(f);
		 
  			 
  			 
  			 	d.push(parseInt(f.innerHTML)-1);
  			 	console.log(d);
	  			 	}
	  			 	//for (var i=0;i<d.length;i++){
	  			 		g=d[i];
	  			 		console.log(d[0],d[1],d[2],d[3]);

	puzzle1[d[0]].addEventListener("click",function()
  			 		{
				console.log(g);

  			 var temp = puzzle1[d[0]].style.top;
	puzzle1[d[0]].style.top = add.style.top;
	add.style.top = temp;

	temp = puzzle1[d[0]].style.left;
	puzzle1[d[0]].style.left = add.style.left;
	add.style.left = temp;

	  			});
puzzle1[d[1]].addEventListener("click",function()
  			 		{
				console.log(g);

  			 var temp = puzzle1[d[1]].style.top;
	puzzle1[d[1]].style.top = add.style.top;
	add.style.top = temp;

	temp = puzzle1[d[1]].style.left;
	puzzle1[d[1]].style.left = add.style.left;
	add.style.left = temp;

	  			});
puzzle1[d[2]].addEventListener("click",function()
  			 		{
				console.log(g);

  			 var temp = puzzle1[d[2]].style.top;
	puzzle1[d[2]].style.top = add.style.top;
	add.style.top = temp;

	temp = puzzle1[d[2]].style.left;
	puzzle1[d[2]].style.left = add.style.left;
	add.style.left = temp;

	  			});
puzzle1[d[1]].addEventListener("click",function()
  			 		{
				

  			 var temp = puzzle1[d[3]].style.top;
	puzzle1[d[3]].style.top = add.style.top;
	add.style.top = temp;

	temp = puzzle1[d[3]].style.left;
	puzzle1[d[3]].style.left = add.style.left;
	add.style.left = temp;
  		
for ( p = 0; p < puzzle1.length; p++) {
       	puzzle1[p].className=puzzle1[p].className.replace(" movablepiece","");
       	console.log(puzzl1e[p]);
       }
    	moveb();
	  			});

	  			}

    		

});