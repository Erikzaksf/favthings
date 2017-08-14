$(document).ready(function () {
  var favarray = [];
  var newArray = [];
  var inputs;
  $('button').click(function(){
    $('form :input').each(function(){
      inputs = $(this).val();
      console.log(favarray);
      favarray.push(inputs);
    });
    favarray.pop();
    for(var i = 0; i < favarray.length; i++){
      newArray.push('<li>' + favarray[i] + '</li>');
      console.log(newArray);
    };
    $('.output ul').html(newArray.join());
  });
});
