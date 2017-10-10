// $(window).load(function(){
//  $("#barbarian").addClass("barbarian");
// });

const jump = function() {
  console.log('jump');
  $("#gatico").addClass("jump");
  setTimeout(function(){
    $("#gatico").removeClass("jump");
  }, 900 );
}


$(window).keyup(function(e){
   if(e.keyCode == 32){
       // user has pressed space
       jump();
   }
});
