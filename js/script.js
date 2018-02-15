$(document).ready(function(){
  
  var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]; // hardcoded channels for test
  var img_url = 
  ["https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg", 
   "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg",
   "https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_image-12bae34d9765f222-300x300.jpeg", 
   "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png", 
   "https://static-cdn.jtvnw.net/user-default-pictures/49988c7b-57bc-4dee-bd4f-6df4ad215d3a-profile_image-70x70.jpg", 
   "https://static-cdn.jtvnw.net/jtv_user_pictures/habathcx-profile_image-d75385dbe4f42a66-70x70.jpeg", 
   "https://static-cdn.jtvnw.net/jtv_user_pictures/robotcaleb-profile_image-9422645f2f0f093c-70x70.png", 
   "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-70x70.png"
  ]; 

  var client_id = "ezx400mb6nh4y08io0jnkxm6f279cj4";
  var streamer = "freecodecamp"; 
  for(i in channels){
    streamer = channels[i]; 
    var url = 'https://api.twitch.tv/kraken/streams/' + streamer +  '?client_id=' + client_id; 
    console.log(url); 
    var response = ""
    $.getJSON(url, function(data){
      response = data; 
    })

    .done(function(){

      // Extracting Streamer name from JSON response
      var streamer_name = response._links.self; 
      streamer_name = streamer_name.split('/');
      streamer_name = streamer_name[streamer_name.length - 1]; 
      
      var channel_url = "https://www.twitch.tv/ "  + streamer_name;  
      var status; 


      // checking stream status 
      if(response.stream == null){
        status = "<p class='text-muted'>offline</p>"; 
      }else{
        status = "<p style='color: green'>" + response.stream.game + "</p>"
      }
      

      // display in html 
      html_tags = '<div class="col-sm-2 hidden-xs">' + '<img class="logo" width=50px src="' + img_url[channels.indexOf(streamer_name)]+ '"/>' + '</div>'+ 
                  '<div class="col-xs-6 col-sm-5">' + '<a target="_blank" href="' +  channel_url + '">' + streamer_name  + '</a>' +  '</div>' + 
                  '<div class="col-xs-6 col-sm-5">' + status  + '</div>';  

      $("#list_channel").append(html_tags); 




    }); 
  }
}); 