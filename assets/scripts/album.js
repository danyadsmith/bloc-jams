var currentAlbum=null,currentlyPlayingSongNumber=null,currentSongFromAlbum=null,currentSongFile=null,currentVolume=80,$previousButton=$(".main-controls .previous"),$nextButton=$(".main-controls .next"),$playPauseToggle=$(".main-controls .play-pause"),albumList=[albumPicasso,albumMarconi,albumPurpleRain],counter=0,playButtonTemplate="<a class='album-song-button'><span class='ion-play'></span></a>",pauseButtonTemplate="<a class='album-song-button'><span class='ion-pause'></span></a>",playerBarPlayButton="<span class='ion-play'></span>",playerBarPauseButton="<span class='ion-pause'></span>",createSongRow=function(n,t,e){var r="<tr class='album-view-song-item'>  <td class='song-item-number' data-song-number='"+n+"'>"+n+"</td>  <td class='song-item-title'>"+t+"</td>  <td class='song-item-duration'>"+e+"</td></tr>",u=$(r),l=function(){var n=$(this).attr("data-song-number");if(null!==currentlyPlayingSongNumber){var t=getSongNumberContainer(currentlyPlayingSongNumber);t.html(currentlyPlayingSongNumber)}currentlyPlayingSongNumber!==n?($(this).html(pauseButtonTemplate),setSong(n),updatePlayerBarSong(),currentSongFile.play()):currentlyPlayingSongNumber===n&&(currentSongFile.isPaused()?($(this).html(pauseButtonTemplate),$playPauseToggle.html(playerBarPauseButton),currentSongFile.play()):($(this).html(playButtonTemplate),$playPauseToggle.html(playerBarPlayButton),currentSongFile.pause()))},a=function(n){var t=$(this).find(".song-item-number"),e=t.attr("data-song-number");e!==currentlyPlayingSongNumber&&t.html(playButtonTemplate)},o=function(n){var t=$(this).find(".song-item-number"),e=t.attr("data-song-number");e!==currentlyPlayingSongNumber&&t.html(e)};return u.find(".song-item-number").click(l),u.hover(a,o),u},setCurrentAlbum=function(n){currentAlbum=n;var t=$(".album-view-title"),e=$(".album-view-artist"),r=$(".album-view-release-info"),u=$(".album-cover-art"),l=$(".album-view-song-list");t.text(n.title),e.text(n.artist),r.text(n.year+" "+n.label),u.attr("src",n.albumArtUrl),l.empty();for(var a=0;a<n.songs.length;a++){var o=createSongRow(a+1,n.songs[a].title,n.songs[a].duration);l.append(o)}},updatePlayerBarSong=function(){$playPauseToggle.html(playerBarPauseButton)},trackIndex=function(n,t){return n.songs.indexOf(t)},nextSong=function(){var n=function(n){return 0===n?currentAlbum.songs.length:n},t=trackIndex(currentAlbum,currentSongFromAlbum);t++,t>=currentAlbum.songs.length&&(t=0),setSong(t+1),currentSongFile.play(),updatePlayerBarSong();var e=n(t),r=getSongNumberContainer(currentlyPlayingSongNumber),u=getSongNumberContainer(e);r.html(pauseButtonTemplate),u.html(e)},previousSong=function(){var n=function(n){return n==currentAlbum.songs.length-1?1:n+2},t=trackIndex(currentAlbum,currentSongFromAlbum);t--,t<0&&(t=currentAlbum.songs.length-1),setSong(t+1),currentSongFile.play(),updatePlayerBarSong();var e=n(t),r=getSongNumberContainer(currentlyPlayingSongNumber),u=getSongNumberContainer(e);r.html(pauseButtonTemplate),u.html(e)},setSong=function(n){currentSongFile&&currentSongFile.stop(),currentlyPlayingSongNumber=n,currentSongFromAlbum=currentAlbum.songs[n-1],currentSongFile=new buzz.sound(currentSongFromAlbum.audioUrl,{formats:["mp3"],preload:!0}),setVolume(currentVolume),$(".currently-playing .song-name").text(currentSongFromAlbum.title),$(".currently-playing .artist-name").text(currentSongFromAlbum.artist),$(".currently-playing .artist-song-mobile").text(currentSongFromAlbum.title+" - "+currentAlbum.title),$playPauseToggle.html(playerBarPauseButton)},getSongNumberContainer=function(n){return $(".song-item-number[data-song-number='"+n+"']")},setVolume=function(n){currentSongFile&&currentSongFile.setVolume(n)},togglePlayFromPlayerBar=function(){currentSongFile.isPaused()?($playPauseToggle.html(playerBarPauseButton),getSongNumberContainer(currentlyPlayingSongNumber).html(pauseButtonTemplate),currentSongFile.play()):($playPauseToggle.html(playerBarPlayButton),getSongNumberContainer(currentlyPlayingSongNumber).html(currentlyPlayingSongNumber),currentSongFile.pause())};$(document).ready(function(){setCurrentAlbum(albumPicasso),$previousButton.click(previousSong),$nextButton.click(nextSong),$playPauseToggle.click(togglePlayFromPlayerBar);document.getElementById("album-cover")});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsYnVtLmpzIl0sIm5hbWVzIjpbImN1cnJlbnRBbGJ1bSIsImN1cnJlbnRseVBsYXlpbmdTb25nTnVtYmVyIiwiY3VycmVudFNvbmdGcm9tQWxidW0iLCJjdXJyZW50U29uZ0ZpbGUiLCJjdXJyZW50Vm9sdW1lIiwiJHByZXZpb3VzQnV0dG9uIiwiJCIsIiRuZXh0QnV0dG9uIiwiJHBsYXlQYXVzZVRvZ2dsZSIsImFsYnVtTGlzdCIsImFsYnVtUGljYXNzbyIsImFsYnVtTWFyY29uaSIsImFsYnVtUHVycGxlUmFpbiIsImNvdW50ZXIiLCJwbGF5QnV0dG9uVGVtcGxhdGUiLCJwYXVzZUJ1dHRvblRlbXBsYXRlIiwicGxheWVyQmFyUGxheUJ1dHRvbiIsInBsYXllckJhclBhdXNlQnV0dG9uIiwiY3JlYXRlU29uZ1JvdyIsInNvbmdOdW1iZXIiLCJzb25nTmFtZSIsInNvbmdMZW5ndGgiLCJ0ZW1wbGF0ZSIsIiRyb3ciLCJjbGlja0hhbmRsZXIiLCJ0aGlzIiwiYXR0ciIsImN1cnJlbnRseVBsYXlpbmdDb250YWluZXIiLCJnZXRTb25nTnVtYmVyQ29udGFpbmVyIiwiaHRtbCIsInNldFNvbmciLCJ1cGRhdGVQbGF5ZXJCYXJTb25nIiwicGxheSIsImlzUGF1c2VkIiwicGF1c2UiLCJvbkhvdmVyIiwiZXZlbnQiLCJzb25nTnVtYmVyQ29udGFpbmVyIiwiZmluZCIsIm9mZkhvdmVyIiwiY2xpY2siLCJob3ZlciIsInNldEN1cnJlbnRBbGJ1bSIsImFsYnVtIiwiJGFsYnVtVGl0bGUiLCIkYWxidW1BcnRpc3QiLCIkYWxidW1SZWxlYXNlSW5mbyIsIiRhbGJ1bUltYWdlIiwiJGFsYnVtU29uZ0xpc3QiLCJ0ZXh0IiwidGl0bGUiLCJhcnRpc3QiLCJ5ZWFyIiwibGFiZWwiLCJhbGJ1bUFydFVybCIsImVtcHR5IiwiaSIsInNvbmdzIiwibGVuZ3RoIiwiJG5ld1JvdyIsImR1cmF0aW9uIiwiYXBwZW5kIiwidHJhY2tJbmRleCIsInNvbmciLCJpbmRleE9mIiwibmV4dFNvbmciLCJnZXRMYXN0U29uZ051bWJlciIsImluZGV4IiwiY3VycmVudFNvbmdJbmRleCIsImxhc3RTb25nTnVtYmVyIiwiJG5leHRTb25nTnVtYmVyQ2VsbCIsIiRsYXN0U29uZ051bWJlckNlbGwiLCJwcmV2aW91c1NvbmciLCIkcHJldmlvdXNTb25nTnVtYmVyQ2VsbCIsInN0b3AiLCJidXp6Iiwic291bmQiLCJhdWRpb1VybCIsImZvcm1hdHMiLCJwcmVsb2FkIiwic2V0Vm9sdW1lIiwibnVtYmVyIiwidm9sdW1lIiwidG9nZ2xlUGxheUZyb21QbGF5ZXJCYXIiLCJkb2N1bWVudCIsInJlYWR5IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUVBLEdBQUlBLGNBQWUsS0FDZkMsMkJBQTZCLEtBQzdCQyxxQkFBdUIsS0FDdkJDLGdCQUFrQixLQUNsQkMsY0FBZ0IsR0FFaEJDLGdCQUFrQkMsRUFBRSw0QkFDcEJDLFlBQWNELEVBQUUsd0JBQ2hCRSxpQkFBbUJGLEVBQUUsOEJBRXJCRyxXQUFhQyxhQUFjQyxhQUFjQyxpQkFDekNDLFFBQVUsRUFDVkMsbUJBQXFCLGtFQUNyQkMsb0JBQXNCLG1FQUN0QkMsb0JBQXNCLGlDQUN0QkMscUJBQXVCLGtDQUd2QkMsY0FBZ0IsU0FBU0MsRUFBWUMsRUFBVUMsR0FDakQsR0FBSUMsR0FDQSxxRkFDc0RILEVBQWEsS0FBT0EsRUFBYSxzQ0FDcERDLEVBQVcseUNBQ1JDLEVBQWEsYUFHbkRFLEVBQU9qQixFQUFFZ0IsR0FFVEUsRUFBZSxXQUNqQixHQUFJTCxHQUFhYixFQUFFbUIsTUFBTUMsS0FBSyxtQkFFOUIsSUFBa0MsT0FBL0J6QiwyQkFBb0MsQ0FDckMsR0FBSTBCLEdBQTRCQyx1QkFBdUIzQiwyQkFDdkQwQixHQUEwQkUsS0FBSzVCLDRCQUU5QkEsNkJBQStCa0IsR0FDaENiLEVBQUVtQixNQUFNSSxLQUFLZCxxQkFDYmUsUUFBUVgsR0FDUlksc0JBQ0E1QixnQkFBZ0I2QixRQUNQL0IsNkJBQStCa0IsSUFDckNoQixnQkFBZ0I4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U0FBUyxJQUdYQyxVQUFVNUUsZUFFVkUsRUFBRSxpQ0FBaUMyQyxLQUFLL0MscUJBQXFCZ0QsT0FDN0Q1QyxFQUFFLG1DQUFtQzJDLEtBQUsvQyxxQkFBcUJpRCxRQUMvRDdDLEVBQUUsMENBQTBDMkMsS0FBSy9DLHFCQUFxQmdELE1BQVEsTUFBUWxELGFBQWFrRCxPQUVuRzFDLGlCQUFpQnFCLEtBQUtaLHVCQUdwQlcsdUJBQXlCLFNBQVNxRCxHQUNwQyxNQUFPM0UsR0FBRSx1Q0FBeUMyRSxFQUFTLE9BR3pERCxVQUFZLFNBQVNFLEdBQ3BCL0UsaUJBQ0RBLGdCQUFnQjZFLFVBQVVFLElBSTFCQyx3QkFBMEIsV0FDekJoRixnQkFBZ0I4QixZQUNqQnpCLGlCQUFpQnFCLEtBQUtaLHNCQUN0QlcsdUJBQXVCM0IsNEJBQTRCNEIsS0FBS2QscUJBQ3hEWixnQkFBZ0I2QixTQUVoQnhCLGlCQUFpQnFCLEtBQUtiLHFCQUN0QlksdUJBQXVCM0IsNEJBQTRCNEIsS0FBSzVCLDRCQUN4REUsZ0JBQWdCK0IsU0FJcEI1QixHQUFFOEUsVUFBVUMsTUFBTSxXQUNoQjNDLGdCQUFnQmhDLGNBQ2hCTCxnQkFBZ0JtQyxNQUFNZ0MsY0FDdEJqRSxZQUFZaUMsTUFBTXlCLFVBQ2xCekQsaUJBQWlCZ0MsTUFBTTJDLHdCQUNOQyxVQUFTRSxlQUFlIiwiZmlsZSI6ImFsYnVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgJCBhbGJ1bVBpY2Fzc28gYWxidW1NYXJjb25pIGFsYnVtUHVycGxlUmFpbiA6dHJ1ZSovXG5cbnZhciBjdXJyZW50QWxidW0gPSBudWxsO1xudmFyIGN1cnJlbnRseVBsYXlpbmdTb25nTnVtYmVyID0gbnVsbDtcbnZhciBjdXJyZW50U29uZ0Zyb21BbGJ1bSA9IG51bGw7XG52YXIgY3VycmVudFNvbmdGaWxlID0gbnVsbDtcbnZhciBjdXJyZW50Vm9sdW1lID0gODA7XG5cbnZhciAkcHJldmlvdXNCdXR0b24gPSAkKFwiLm1haW4tY29udHJvbHMgLnByZXZpb3VzXCIpO1xudmFyICRuZXh0QnV0dG9uID0gJChcIi5tYWluLWNvbnRyb2xzIC5uZXh0XCIpO1xudmFyICRwbGF5UGF1c2VUb2dnbGUgPSAkKFwiLm1haW4tY29udHJvbHMgLnBsYXktcGF1c2VcIik7XG5cbnZhciBhbGJ1bUxpc3QgPSBbYWxidW1QaWNhc3NvLCBhbGJ1bU1hcmNvbmksIGFsYnVtUHVycGxlUmFpbl07XG52YXIgY291bnRlciA9IDA7XG52YXIgcGxheUJ1dHRvblRlbXBsYXRlID0gXCI8YSBjbGFzcz0nYWxidW0tc29uZy1idXR0b24nPjxzcGFuIGNsYXNzPSdpb24tcGxheSc+PC9zcGFuPjwvYT5cIjtcbnZhciBwYXVzZUJ1dHRvblRlbXBsYXRlID0gXCI8YSBjbGFzcz0nYWxidW0tc29uZy1idXR0b24nPjxzcGFuIGNsYXNzPSdpb24tcGF1c2UnPjwvc3Bhbj48L2E+XCI7XG52YXIgcGxheWVyQmFyUGxheUJ1dHRvbiA9IFwiPHNwYW4gY2xhc3M9J2lvbi1wbGF5Jz48L3NwYW4+XCI7XG52YXIgcGxheWVyQmFyUGF1c2VCdXR0b24gPSBcIjxzcGFuIGNsYXNzPSdpb24tcGF1c2UnPjwvc3Bhbj5cIjtcblxuXG52YXIgY3JlYXRlU29uZ1JvdyA9IGZ1bmN0aW9uKHNvbmdOdW1iZXIsIHNvbmdOYW1lLCBzb25nTGVuZ3RoKXtcbiAgdmFyIHRlbXBsYXRlID0gXG4gICAgICBcIjx0ciBjbGFzcz0nYWxidW0tdmlldy1zb25nLWl0ZW0nPlwiICsgXG4gICAgICBcIiAgPHRkIGNsYXNzPSdzb25nLWl0ZW0tbnVtYmVyJyBkYXRhLXNvbmctbnVtYmVyPSdcIiArIHNvbmdOdW1iZXIgKyBcIic+XCIgKyBzb25nTnVtYmVyICsgXCI8L3RkPlwiICsgXG4gICAgICBcIiAgPHRkIGNsYXNzPSdzb25nLWl0ZW0tdGl0bGUnPlwiICsgc29uZ05hbWUgKyBcIjwvdGQ+XCIgKyBcbiAgICAgIFwiICA8dGQgY2xhc3M9J3NvbmctaXRlbS1kdXJhdGlvbic+XCIgKyBzb25nTGVuZ3RoICsgXCI8L3RkPlwiICsgXG4gICAgICBcIjwvdHI+XCI7XG5cbiAgdmFyICRyb3cgPSAkKHRlbXBsYXRlKTtcblxuICB2YXIgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgc29uZ051bWJlciA9ICQodGhpcykuYXR0cihcImRhdGEtc29uZy1udW1iZXJcIik7XG5cbiAgICBpZihjdXJyZW50bHlQbGF5aW5nU29uZ051bWJlciAhPT0gbnVsbCl7XG4gICAgICB2YXIgY3VycmVudGx5UGxheWluZ0NvbnRhaW5lciA9IGdldFNvbmdOdW1iZXJDb250YWluZXIoY3VycmVudGx5UGxheWluZ1NvbmdOdW1iZXIpO1xuICAgICAgY3VycmVudGx5UGxheWluZ0NvbnRhaW5lci5odG1sKGN1cnJlbnRseVBsYXlpbmdTb25nTnVtYmVyKTtcbiAgICB9XG4gICAgaWYoY3VycmVudGx5UGxheWluZ1NvbmdOdW1iZXIgIT09IHNvbmdOdW1iZXIpe1xuICAgICAgJCh0aGlzKS5odG1sKHBhdXNlQnV0dG9uVGVtcGxhdGUpO1xuICAgICAgc2V0U29uZyhzb25nTnVtYmVyKTtcbiAgICAgIHVwZGF0ZVBsYXllckJhclNvbmcoKTtcbiAgICAgIGN1cnJlbnRTb25nRmlsZS5wbGF5KCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50bHlQbGF5aW5nU29uZ051bWJlciA9PT0gc29uZ051bWJlcil7XG4gICAgICBpZihjdXJyZW50U29uZ0ZpbGUuaXNQYXVzZWQoKSl7XG4gICAgICAgICQodGhpcykuaHRtbChwYXVzZUJ1dHRvblRlbXBsYXRlKTtcbiAgICAgICAgJHBsYXlQYXVzZVRvZ2dsZS5odG1sKHBsYXllckJhclBhdXNlQnV0dG9uKTtcbiAgICAgICAgY3VycmVudFNvbmdGaWxlLnBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykuaHRtbChwbGF5QnV0dG9uVGVtcGxhdGUpO1xuICAgICAgICAkcGxheVBhdXNlVG9nZ2xlLmh0bWwocGxheWVyQmFyUGxheUJ1dHRvbik7XG4gICAgICAgIGN1cnJlbnRTb25nRmlsZS5wYXVzZSgpOyAgICAgICAgXG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgdmFyIG9uSG92ZXIgPSBmdW5jdGlvbihldmVudCl7XG4gICAgdmFyIHNvbmdOdW1iZXJDb250YWluZXIgPSAkKHRoaXMpLmZpbmQoXCIuc29uZy1pdGVtLW51bWJlclwiKTtcbiAgICB2YXIgc29uZ051bWJlciA9IHNvbmdOdW1iZXJDb250YWluZXIuYXR0cihcImRhdGEtc29uZy1udW1iZXJcIik7XG5cbiAgICBpZihzb25nTnVtYmVyICE9PSBjdXJyZW50bHlQbGF5aW5nU29uZ051bWJlcil7XG4gICAgICBzb25nTnVtYmVyQ29udGFpbmVyLmh0bWwocGxheUJ1dHRvblRlbXBsYXRlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9mZkhvdmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgIHZhciBzb25nTnVtYmVyQ29udGFpbmVyID0gJCh0aGlzKS5maW5kKFwiLnNvbmctaXRlbS1udW1iZXJcIik7XG4gICAgdmFyIHNvbmdOdW1iZXIgPSBzb25nTnVtYmVyQ29udGFpbmVyLmF0dHIoXCJkYXRhLXNvbmctbnVtYmVyXCIpO1xuXG4gICAgaWYoc29uZ051bWJlciAhPT0gY3VycmVudGx5UGxheWluZ1NvbmdOdW1iZXIpe1xuICAgICAgc29uZ051bWJlckNvbnRhaW5lci5odG1sKHNvbmdOdW1iZXIpO1xuICAgIH1cbiAgfTtcblxuICAkcm93LmZpbmQoXCIuc29uZy1pdGVtLW51bWJlclwiKS5jbGljayhjbGlja0hhbmRsZXIpO1xuICAkcm93LmhvdmVyKG9uSG92ZXIsIG9mZkhvdmVyKTtcbiAgcmV0dXJuICRyb3c7XG59O1xuXG52YXIgc2V0Q3VycmVudEFsYnVtID0gZnVuY3Rpb24oYWxidW0pIHtcbiAgY3VycmVudEFsYnVtID0gYWxidW07XG5cbiAgdmFyICRhbGJ1bVRpdGxlID0gJChcIi5hbGJ1bS12aWV3LXRpdGxlXCIpO1xuICB2YXIgJGFsYnVtQXJ0aXN0ID0gJChcIi5hbGJ1bS12aWV3LWFydGlzdFwiKTtcbiAgdmFyICRhbGJ1bVJlbGVhc2VJbmZvID0gJChcIi5hbGJ1bS12aWV3LXJlbGVhc2UtaW5mb1wiKTtcbiAgdmFyICRhbGJ1bUltYWdlID0gJChcIi5hbGJ1bS1jb3Zlci1hcnRcIik7XG4gIHZhciAkYWxidW1Tb25nTGlzdCA9ICQoXCIuYWxidW0tdmlldy1zb25nLWxpc3RcIik7XG5cbiAgJGFsYnVtVGl0bGUudGV4dChhbGJ1bS50aXRsZSk7XG4gICRhbGJ1bUFydGlzdC50ZXh0KGFsYnVtLmFydGlzdCk7XG4gICRhbGJ1bVJlbGVhc2VJbmZvLnRleHQoYWxidW0ueWVhciArIFwiIFwiICsgYWxidW0ubGFiZWwpO1xuICAkYWxidW1JbWFnZS5hdHRyKFwic3JjXCIsIGFsYnVtLmFsYnVtQXJ0VXJsKTtcblxuICAkYWxidW1Tb25nTGlzdC5lbXB0eSgpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxidW0uc29uZ3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgJG5ld1JvdyA9IGNyZWF0ZVNvbmdSb3coaSArIDEsIGFsYnVtLnNvbmdzW2ldLnRpdGxlLCBhbGJ1bS5zb25nc1tpXS5kdXJhdGlvbik7XG4gICAgJGFsYnVtU29uZ0xpc3QuYXBwZW5kKCRuZXdSb3cpO1xuICB9XG59O1xuXG52YXIgdXBkYXRlUGxheWVyQmFyU29uZyA9IGZ1bmN0aW9uKCl7XG4gICRwbGF5UGF1c2VUb2dnbGUuaHRtbChwbGF5ZXJCYXJQYXVzZUJ1dHRvbik7XG59O1xuXG52YXIgdHJhY2tJbmRleCA9IGZ1bmN0aW9uKGFsYnVtLCBzb25nKXtcbiAgcmV0dXJuIGFsYnVtLnNvbmdzLmluZGV4T2Yoc29uZyk7XG59O1xuXG52YXIgbmV4dFNvbmcgPSBmdW5jdGlvbigpe1xuICB2YXIgZ2V0TGFzdFNvbmdOdW1iZXIgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgcmV0dXJuIGluZGV4ID09PSAwID8gY3VycmVudEFsYnVtLnNvbmdzLmxlbmd0aCA6IGluZGV4O1xuICB9O1xuXG4gIHZhciBjdXJyZW50U29uZ0luZGV4ID0gdHJhY2tJbmRleChjdXJyZW50QWxidW0sIGN1cnJlbnRTb25nRnJvbUFsYnVtKTtcbiAgY3VycmVudFNvbmdJbmRleCsrO1xuXG4gIGlmKGN1cnJlbnRTb25nSW5kZXggPj0gY3VycmVudEFsYnVtLnNvbmdzLmxlbmd0aCl7XG4gICAgY3VycmVudFNvbmdJbmRleCA9IDA7XG4gIH1cblxuICBzZXRTb25nKGN1cnJlbnRTb25nSW5kZXggKyAxKTtcbiAgY3VycmVudFNvbmdGaWxlLnBsYXkoKTtcbiAgdXBkYXRlUGxheWVyQmFyU29uZygpO1xuXG4gIHZhciBsYXN0U29uZ051bWJlciA9IGdldExhc3RTb25nTnVtYmVyKGN1cnJlbnRTb25nSW5kZXgpO1xuICB2YXIgJG5leHRTb25nTnVtYmVyQ2VsbCA9IGdldFNvbmdOdW1iZXJDb250YWluZXIoY3VycmVudGx5UGxheWluZ1NvbmdOdW1iZXIpO1xuICB2YXIgJGxhc3RTb25nTnVtYmVyQ2VsbCA9IGdldFNvbmdOdW1iZXJDb250YWluZXIobGFzdFNvbmdOdW1iZXIpO1xuXG4gICRuZXh0U29uZ051bWJlckNlbGwuaHRtbChwYXVzZUJ1dHRvblRlbXBsYXRlKTtcbiAgJGxhc3RTb25nTnVtYmVyQ2VsbC5odG1sKGxhc3RTb25nTnVtYmVyKTtcbn07XG5cbnZhciBwcmV2aW91c1NvbmcgPSBmdW5jdGlvbigpe1xuICB2YXIgZ2V0TGFzdFNvbmdOdW1iZXIgPSBmdW5jdGlvbihpbmRleCl7XG4gICAgcmV0dXJuIGluZGV4ID09IChjdXJyZW50QWxidW0uc29uZ3MubGVuZ3RoIC0gMSkgPyAxIDogaW5kZXggKyAyO1xuICB9O1xuXG4gIHZhciBjdXJyZW50U29uZ0luZGV4ID0gdHJhY2tJbmRleChjdXJyZW50QWxidW0sIGN1cnJlbnRTb25nRnJvbUFsYnVtKTtcbiAgY3VycmVudFNvbmdJbmRleC0tO1xuXG4gIGlmKGN1cnJlbnRTb25nSW5kZXggPCAwKSB7XG4gICAgY3VycmVudFNvbmdJbmRleCA9IGN1cnJlbnRBbGJ1bS5zb25ncy5sZW5ndGggLSAxO1xuICB9XG5cbiAgc2V0U29uZyhjdXJyZW50U29uZ0luZGV4ICsgMSk7XG4gIGN1cnJlbnRTb25nRmlsZS5wbGF5KCk7XG4gIHVwZGF0ZVBsYXllckJhclNvbmcoKTtcblxuICB2YXIgbGFzdFNvbmdOdW1iZXIgPSBnZXRMYXN0U29uZ051bWJlcihjdXJyZW50U29uZ0luZGV4KTtcbiAgdmFyICRwcmV2aW91c1NvbmdOdW1iZXJDZWxsID0gZ2V0U29uZ051bWJlckNvbnRhaW5lcihjdXJyZW50bHlQbGF5aW5nU29uZ051bWJlcik7XG4gIHZhciAkbGFzdFNvbmdOdW1iZXJDZWxsID0gZ2V0U29uZ051bWJlckNvbnRhaW5lcihsYXN0U29uZ051bWJlcik7XG5cbiAgJHByZXZpb3VzU29uZ051bWJlckNlbGwuaHRtbChwYXVzZUJ1dHRvblRlbXBsYXRlKTtcbiAgJGxhc3RTb25nTnVtYmVyQ2VsbC5odG1sKGxhc3RTb25nTnVtYmVyKTsgIFxufTtcblxudmFyIHNldFNvbmcgPSBmdW5jdGlvbihzb25nTnVtYmVyKXtcbiAgaWYoY3VycmVudFNvbmdGaWxlKXtcbiAgICBjdXJyZW50U29uZ0ZpbGUuc3RvcCgpO1xuICB9XG4gIGN1cnJlbnRseVBsYXlpbmdTb25nTnVtYmVyID0gc29uZ051bWJlcjtcbiAgY3VycmVudFNvbmdGcm9tQWxidW0gPSBjdXJyZW50QWxidW0uc29uZ3Nbc29uZ051bWJlciAtIDFdO1xuXG4gIGN1cnJlbnRTb25nRmlsZSA9IG5ldyBidXp6LnNvdW5kKGN1cnJlbnRTb25nRnJvbUFsYnVtLmF1ZGlvVXJsLCB7XG4gICAgZm9ybWF0czogWydtcDMnXSxcbiAgICBwcmVsb2FkOiB0cnVlXG4gIH0pO1xuXG4gIHNldFZvbHVtZShjdXJyZW50Vm9sdW1lKTtcblxuICAkKFwiLmN1cnJlbnRseS1wbGF5aW5nIC5zb25nLW5hbWVcIikudGV4dChjdXJyZW50U29uZ0Zyb21BbGJ1bS50aXRsZSk7XG4gICQoXCIuY3VycmVudGx5LXBsYXlpbmcgLmFydGlzdC1uYW1lXCIpLnRleHQoY3VycmVudFNvbmdGcm9tQWxidW0uYXJ0aXN0KTtcbiAgJChcIi5jdXJyZW50bHktcGxheWluZyAuYXJ0aXN0LXNvbmctbW9iaWxlXCIpLnRleHQoY3VycmVudFNvbmdGcm9tQWxidW0udGl0bGUgKyBcIiAtIFwiICsgY3VycmVudEFsYnVtLnRpdGxlKTtcblxuICAkcGxheVBhdXNlVG9nZ2xlLmh0bWwocGxheWVyQmFyUGF1c2VCdXR0b24pO1xufTtcblxudmFyIGdldFNvbmdOdW1iZXJDb250YWluZXIgPSBmdW5jdGlvbihudW1iZXIpe1xuICByZXR1cm4gJChcIi5zb25nLWl0ZW0tbnVtYmVyW2RhdGEtc29uZy1udW1iZXI9J1wiICsgbnVtYmVyICsgXCInXVwiKTtcbn07XG5cbnZhciBzZXRWb2x1bWUgPSBmdW5jdGlvbih2b2x1bWUpe1xuICBpZihjdXJyZW50U29uZ0ZpbGUpe1xuICAgIGN1cnJlbnRTb25nRmlsZS5zZXRWb2x1bWUodm9sdW1lKTtcbiAgfVxufTtcblxudmFyIHRvZ2dsZVBsYXlGcm9tUGxheWVyQmFyID0gZnVuY3Rpb24oKSB7XG4gIGlmKGN1cnJlbnRTb25nRmlsZS5pc1BhdXNlZCgpKXtcbiAgICAkcGxheVBhdXNlVG9nZ2xlLmh0bWwocGxheWVyQmFyUGF1c2VCdXR0b24pO1xuICAgIGdldFNvbmdOdW1iZXJDb250YWluZXIoY3VycmVudGx5UGxheWluZ1NvbmdOdW1iZXIpLmh0bWwocGF1c2VCdXR0b25UZW1wbGF0ZSk7XG4gICAgY3VycmVudFNvbmdGaWxlLnBsYXkoKTtcbiAgfSBlbHNlIHtcbiAgICAkcGxheVBhdXNlVG9nZ2xlLmh0bWwocGxheWVyQmFyUGxheUJ1dHRvbik7XG4gICAgZ2V0U29uZ051bWJlckNvbnRhaW5lcihjdXJyZW50bHlQbGF5aW5nU29uZ051bWJlcikuaHRtbChjdXJyZW50bHlQbGF5aW5nU29uZ051bWJlcik7XG4gICAgY3VycmVudFNvbmdGaWxlLnBhdXNlKCk7XG4gIH1cbn07XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkgeyBcbiAgc2V0Q3VycmVudEFsYnVtKGFsYnVtUGljYXNzbyk7XG4gICRwcmV2aW91c0J1dHRvbi5jbGljayhwcmV2aW91c1NvbmcpO1xuICAkbmV4dEJ1dHRvbi5jbGljayhuZXh0U29uZyk7XG4gICRwbGF5UGF1c2VUb2dnbGUuY2xpY2sodG9nZ2xlUGxheUZyb21QbGF5ZXJCYXIpO1xuICB2YXIgYWxidW1Db3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxidW0tY292ZXJcIik7IFxufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
