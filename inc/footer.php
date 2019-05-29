<footer class="card-panel blue darken-2">
    <div class="row">
       <div class="col hide-on-small-only m4 l4"></div>
      <div class="col s12 m4 l4">
        <h6 class="white-text center">&copy; Jayke 2017</h6>
      </div>
      <div class="col hide-on-small-only m4 l4"></div>
    </div>
</footer>
 </script>
 <script type="text/javascript">
  $(document).ready(function(){
    $(".button-collapse").sideNav();
    $('select').material_select();
    var screenHeight = screen.height;
    var adjusted = screenHeight - ((15/100)*screenHeight);
    $("main").css('min-height',adjusted+"px");
     var getthis = $("main").css("min-height");
    getthis = parseInt(getthis);
    $(".signin").css('min-height',adjusted+"px");
  });
</script>
</body>
</html>