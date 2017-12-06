// on click, 'button' is deleted and 'number' span is created
$('#sunaAcum').on('click',function(){
  let number=$('<span>0760 552 164</span>');
  $(this).closest('.buton').append(number);
  $(this).remove();
});
// animates images on articles
$('.artImg').mouseenter(function() {
    $(this).css("cursor","pointer");
    $(this).animate({width: "75%", height: "35%"}, 'slow');
});
$('.artImg').mouseleave(function() {
    $(this).animate({width: "70%",height:"30%"}, 'slow');
});
