iNbFire = 1;

function Multiplicate(){
	nfire=document.createElement("img");
	nfire.src="fire.png";
	nfire.className ="fire";
	nfire.addEventListener("click", Multiplicate); 
	//nfire.style.id="fire"+ iNbfire; //variable globale a definir correctement
	//iNbfireiNbfire+=1;
	
	// ajoute l'élément qui vient d'être créé et son contenu au DOM
	mon_div = document.getElementById("on-ground");
	document.body.insertBefore(nfire, mon_div);

	//pour le test 
	Burn(document.getElementById("trash"))
}

function Burn(thing){
	var fireplace = document.getElementsByClassName("fire");
	console.log(fireplace);
	t_left = thing.x-thing.width/2;
	t_top = thing.y-thing.height/2;
	t_right = thing.x+thing.width/2;
	t_bottom = thing.y+thing.height/2;

	for ( i in fireplace) {
		fireobj = fireplace[i];
		o_left = fireobj.x-fireobj.width/2;
		o_top = fireobj.y-fireobj.height/2;
		o_right = fireobj.x+fireobj.width/2;
		o_bottom = fireobj.y+fireobj.height/2;

		if( (o_left> t_left) && (o_left < t_right) || (o_right > t_left) && (o_right < t_right) )
		{
			if ( (o_top > t_top) && (o_top < t_bottom) || (o_bottom > t_top) && (o_bottom < t_bottom) )
			{
				width = thing.width;
				height = thing.height;
				thing.src="fire.png";
				thing.width = width;
				thing.height = height;
			}
		}
	}
}