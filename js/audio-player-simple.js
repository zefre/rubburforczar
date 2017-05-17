$(document).ready(function(){
	var __AUDIO_PLAYER_2 = $('#player-2-player-object');
	var __AUDIO_PLAYER_SONGS_LIST_OBJ = $('#player-songs-list');
	var __AUDIO_PLAYER_NEXT = $('#player-2-next');
	var __AUDIO_PLAYER_PREVIOUS = $('player-2-previous');
	var playlist = [];
	var songHistory = [];
	__AUDIO_PLAYER_SONGS_LIST_OBJ.children('.list-song').each(function(){
		var song = {};
		song['name'] = $(this).find('.player-song-name').text();
		song['description'] = $(this).find('.player-song-description').text();
		song['source'] = $(this).attr('data-file-name');
		playlist.push(song);
	});
	
	$('#audio-source-for-player-2').attr('src', playlist[0]['source']);


	//click listeners
	__AUDIO_PLAYER_SONGS_LIST_OBJ.children('.list-song').click(function(){
		var filenameToPlay = $(this).attr('data-file-name');
	    playSong(__AUDIO_PLAYER_2[0],$('#audio-source-for-player-2'),filenameToPlay);
	    songHistory.push(playlist[getIndexSongIndex(filenameToPlay, playlist)]);
	    console.log("Last history item: " + JSON.stringify(history[history.length-1]));
	});
	__AUDIO_PLAYER_PREVIOUS.click(function(){
		
	})

});
function playSong(player, source, filename){
	source.attr('src', filename);
	player.pause();
	player.load();
	player.oncanplaythrough = player.play();
}
function getIndexSongIndex(filename, playlist){
	for(var i = 0; i < playlist.length;i++){
		if(playlist[i].hasOwnProperty('filename')){
			if(playlist[i]['filename'] == filename)
				return i;
		}
	}
	return -1;
}