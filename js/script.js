console.log('npm-grunt'); // to check if script is working

$(document).ready(function(){

  //to check if jquery node_module is working
  $('body').click(function(){
    $(this).css('background','cyan');
  });
});

$.getJSON('http://api.unsplash.com/users/brianhaferkamp/photos/?client_id=a2b1c2dfb235cdf6342519d09311b85c0a2bf52b2460f3cd7ebca041a44e59f5',
function(data){
  console.log(data);

  $.each(data, function(index, value) {
    console.log(value);

    var name = value.user.name;
    var bio = value.user.bio;
    var imageURL = value.urls.regular;
    console.log(imageURL);
  });
});
