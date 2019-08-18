$(document).ready(function(){
 $(".change").click(function(){
   $(".change").toggle( "blind",1000 );
   $("#bottom").hide(0);
 })
  
 $('#inp').on('keyup', function(e) {
    if (e.keyCode === 13) {
$("#stuff").empty();
      $.get("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&list=search&inprop=url%7Cdisplaytitle&srsearch="+$("input").val(), function(data){
    
    for(i=0;i<data.query.search.length;i++){
      if(i>1){$("#stuff").append("<a href='https://en.wikipedia.org/wiki/"+data.query.search[i].title+"' target=_blank><div class='articles'><p><b><i>"+data.query.search[i].title+"</i></b></p><p class='t'>"+data.query.search[i].snippet+"</p></div></a>");} else if(i===0){
        $("#stuff").append("<a href='https://en.wikipedia.org/wiki/"+data.query.search[i].title+"' target=blank><div class='articles first'><p><b><i>"+data.query.search[i].title+"</i></b></p><p class='t'>"+data.query.search[i].snippet+"</p></div></a>");
      }
    
        
    }
},"jsonp");
      
    }
});

});