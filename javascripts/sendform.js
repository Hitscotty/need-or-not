$(document).ready(function() {
 $('#loading').hide();
 $(document).ajaxSend(function(){
  $('#main_window').fadeOut(500);
  $('#result').fadeOut(500);
  $('#loading').fadeIn(500);
 });

 $(document).ajaxComplete(function(){
  $('#loading').hide();
  $('#second').fadeIn(500);
  $('#second').fadeIn(500);
 });

 $("form").submit(function(event) {
  event.preventDefault();

  var formData = new FormData($(this)[0]);
  $.ajax({
   url: "http://69.164.219.69/File_upload",
   type: "POST",
   data: formData,
   contentType: false,
   processData: false,
   success: function(r) {
    // 'r' IS THE JSON OBJECT, CALL JS STUFF FROM HERE.
   },
   error: function(req, err) {
    console.log("[ERROR] Failed to POST form data.");
   }
  });
 });
});
