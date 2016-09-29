/*global $ albumPicasso albumMarconi albumPurpleRain :true*/

var currentAlbum = null;
var currentlyPlayingSongNumber = null;
var currentSongFromAlbum = null;
var currentSongFile = null;
var currentVolume = 80;

var $previousButton = $(".main-controls .previous");
var $nextButton = $(".main-controls .next");
var $playPauseToggle = $(".main-controls .play-pause");

var albumList = [albumPicasso, albumMarconi, albumPurpleRain];
var counter = 0;
var playButtonTemplate = "<a class='album-song-button'><span class='ion-play'></span></a>";
var pauseButtonTemplate = "<a class='album-song-button'><span class='ion-pause'></span></a>";
var playerBarPlayButton = "<span class='ion-play'></span>";
var playerBarPauseButton = "<span class='ion-pause'></span>";


var createSongRow = function(songNumber, songName, songLength){
  var template = 
      "<tr class='album-view-song-item'>" + 
      "  <td class='song-item-number' data-song-number='" + songNumber + "'>" + songNumber + "</td>" + 
      "  <td class='song-item-title'>" + songName + "</td>" + 
      "  <td class='song-item-duration'>" + songLength + "</td>" + 
      "</tr>";

  var $row = $(template);

  var clickHandler = function(){
    var songNumber = $(this).attr("data-song-number");

    if(currentlyPlayingSongNumber !== null){
      var currentlyPlayingContainer = getSongNumberContainer(currentlyPlayingSongNumber);
      currentlyPlayingContainer.html(currentlyPlayingSongNumber);
    }
    if(currentlyPlayingSongNumber !== songNumber){
      $(this).html(pauseButtonTemplate);
      setSong(songNumber);
      updatePlayerBarSong();
      currentSongFile.play();
    } else if (currentlyPlayingSongNumber === songNumber){
      if(currentSongFile.isPaused()){
        $(this).html(pauseButtonTemplate);
        $playPauseToggle.html(playerBarPauseButton);
        currentSongFile.play();
      } else {
        $(this).html(playButtonTemplate);
        $playPauseToggle.html(playerBarPlayButton);
        currentSongFile.pause();        
      }
    }

  };

  var onHover = function(event){
    var songNumberContainer = $(this).find(".song-item-number");
    var songNumber = songNumberContainer.attr("data-song-number");

    if(songNumber !== currentlyPlayingSongNumber){
      songNumberContainer.html(playButtonTemplate);
    }
  };

  var offHover = function(event){
    var songNumberContainer = $(this).find(".song-item-number");
    var songNumber = songNumberContainer.attr("data-song-number");

    if(songNumber !== currentlyPlayingSongNumber){
      songNumberContainer.html(songNumber);
    }
  };

  $row.find(".song-item-number").click(clickHandler);
  $row.hover(onHover, offHover);
  return $row;
};

var setCurrentAlbum = function(album) {
  currentAlbum = album;

  var $albumTitle = $(".album-view-title");
  var $albumArtist = $(".album-view-artist");
  var $albumReleaseInfo = $(".album-view-release-info");
  var $albumImage = $(".album-cover-art");
  var $albumSongList = $(".album-view-song-list");

  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + " " + album.label);
  $albumImage.attr("src", album.albumArtUrl);

  $albumSongList.empty();

  for (var i = 0; i < album.songs.length; i++) {
    var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    $albumSongList.append($newRow);
  }
};

var updatePlayerBarSong = function(){
  $playPauseToggle.html(playerBarPauseButton);
};

var trackIndex = function(album, song){
  return album.songs.indexOf(song);
};

var nextSong = function(){
  var getLastSongNumber = function(index){
    return index === 0 ? currentAlbum.songs.length : index;
  };

  var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
  currentSongIndex++;

  if(currentSongIndex >= currentAlbum.songs.length){
    currentSongIndex = 0;
  }

  setSong(currentSongIndex + 1);
  currentSongFile.play();
  updatePlayerBarSong();

  var lastSongNumber = getLastSongNumber(currentSongIndex);
  var $nextSongNumberCell = getSongNumberContainer(currentlyPlayingSongNumber);
  var $lastSongNumberCell = getSongNumberContainer(lastSongNumber);

  $nextSongNumberCell.html(pauseButtonTemplate);
  $lastSongNumberCell.html(lastSongNumber);
};

var previousSong = function(){
  var getLastSongNumber = function(index){
    return index == (currentAlbum.songs.length - 1) ? 1 : index + 2;
  };

  var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
  currentSongIndex--;

  if(currentSongIndex < 0) {
    currentSongIndex = currentAlbum.songs.length - 1;
  }

  setSong(currentSongIndex + 1);
  currentSongFile.play();
  updatePlayerBarSong();

  var lastSongNumber = getLastSongNumber(currentSongIndex);
  var $previousSongNumberCell = getSongNumberContainer(currentlyPlayingSongNumber);
  var $lastSongNumberCell = getSongNumberContainer(lastSongNumber);

  $previousSongNumberCell.html(pauseButtonTemplate);
  $lastSongNumberCell.html(lastSongNumber);  
};

var setSong = function(songNumber){
  if(currentSongFile){
    currentSongFile.stop();
  }
  currentlyPlayingSongNumber = songNumber;
  currentSongFromAlbum = currentAlbum.songs[songNumber - 1];

  currentSongFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
    formats: ['mp3'],
    preload: true
  });

  setVolume(currentVolume);

  $(".currently-playing .song-name").text(currentSongFromAlbum.title);
  $(".currently-playing .artist-name").text(currentSongFromAlbum.artist);
  $(".currently-playing .artist-song-mobile").text(currentSongFromAlbum.title + " - " + currentAlbum.title);

  $playPauseToggle.html(playerBarPauseButton);
};

var getSongNumberContainer = function(number){
  return $(".song-item-number[data-song-number='" + number + "']");
};

var setVolume = function(volume){
  if(currentSongFile){
    currentSongFile.setVolume(volume);
  }
};

var togglePlayFromPlayerBar = function() {
  if(currentSongFile.isPaused()){
    $playPauseToggle.html(playerBarPauseButton);
    getSongNumberContainer(currentlyPlayingSongNumber).html(pauseButtonTemplate);
    currentSongFile.play();
  } else {
    $playPauseToggle.html(playerBarPlayButton);
    getSongNumberContainer(currentlyPlayingSongNumber).html(currentlyPlayingSongNumber);
    currentSongFile.pause();
  }
};

$(document).ready(function() { 
  setCurrentAlbum(albumPicasso);
  $previousButton.click(previousSong);
  $nextButton.click(nextSong);
  $playPauseToggle.click(togglePlayFromPlayerBar);
  var albumCover = document.getElementById("album-cover"); 
});

