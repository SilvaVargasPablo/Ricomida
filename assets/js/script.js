$(function(){

    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
      }
    
      })
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    })
  
  });
