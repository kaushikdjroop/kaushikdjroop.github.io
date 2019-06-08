var song,songNo,curID=0,show=0;
	function hideSongs(){	
		song=document.querySelectorAll(".song");
		player=document.querySelectorAll(".player");
		songNo=song.length;
		for(i=0;i<songNo;i++){
			song[i].style.display="none";
			song[i].volume=0.5;
			player[i].classList.remove('playing');
			//$("#songs > ul >li").css("background-color", "black");

		}
	}
		function playSong(songID) {
		hideSongs();
		song[curID].load();
		curID=songID;
		song[curID].style.display="block";
		song[curID].play();
		player[curID].classList.add('playing');
	}

	function loadSongs(){
		hideSongs();
		song[0].style.display="block";
		song[0].load();
	};

    $(document).ready(function(){
    	loadSongs();
    	$("#musicButton").click(function(){
    		if(show==0) {
    			$("#hiddenSongs").slideDown();
    			//$(this).text("Show less songs");
    			$(this).fadeOut(function() {
  					$(this).text("Show less songs").fadeIn();
				});
    			show=1;
    		} else {
    			$("#hiddenSongs").slideUp();
    			//$(this).text("Show more songs").fadeIn();
    			$(this).fadeOut(function() {
  					$(this).text("Show more songs").fadeIn();
				});
    			show=0;
    		}
    	});
    });