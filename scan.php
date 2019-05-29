<?php session_start();
if (!isset($_SESSION['student_username'])) {
  header("location: ./");
}
include "admin/inc/functions.inc.php";
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Jayke Attendance System</title>
    <link href="css/materialicons/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
    <script src="js/jquery.js"></script>
    <link href="css/materialize.min.css" media="all" rel="stylesheet" type="text/css" />
    <link href="css/style.css" media="all" rel="stylesheet" type="text/css" />
    <script src="js/materialize.min.js"></script>
    <script src="js/raphael.min.js"></script>
    <script src="js/morris.min.js"></script>

</head>
<body >
<div class="navbar-fixed" style="display: block;">
  <nav class="blue darken-2" style="display: block;">
    <div class="nav-wrapper header">
      <a href="dashboard" class="brand-logo center">Jayke</a>
    </div>
  </nav>
 </div>

<!-- second nav -->
  <nav class="white nav-center marginbottomer" style="display: block">
    <div class="nav-wrapper">
      <ul class="smally">
        <li><a href="dashboard" class="black-text changemargin">Dashboard</a></li>
        <li><a href="scan" class="black-text changemargin">Take Attendance</a></li>
        <li><a href="logout" class="black-text changemargin">logout</a></li>
      </ul>
    </div>
  </nav>

  <div class="card-panel center-align alert brown white-text" style="width: 50%;margin:0 auto;margin-top: 20%;border: 2px solid #eee;padding:20px;">You need a smartphone to access this site and not a Laptop! Thanks</div>

<main class="container" style="display: block;">
  <form class="center-align signin" method="post" action="decode" enctype="multipart/form-data">
    <img src="images/3.jpg" class="responsive-img" style="width: 10%;height: 10%;border-radius: 5%">
    <h6><?php echo($_SESSION['student_username']); ?></h6>
    <h6 class="center">SELECT COURSE TO TAKE ATTENDANCE</h6>

    <select id="course" name="course">
      <option value="" disabled selected>Select Course</option>
      <?php 
        $fetch_courses = mysqli_query($conn,"SELECT * FROM added_courses");
        if (mysqli_num_rows($fetch_courses) > 0 ) {
          while ($row = mysqli_fetch_array($fetch_courses)) {
            $course_code = $row['course_code'];
            echo "<option value='".$course_code."'>".$course_code."</option>";
          }
        }
       ?>
    </select>
    <br>
    <label for="uploadImg" class="btn blue darken-2" >TAKE ATTENDANCE</label>
    <canvas id="out-CQ" style="visibility:hidden"></canvas>
     <input type="file" class="hide" id="uploadImg" name="qrimage" accept="image/*" capture onchange="handleFiles(this.files)">
    
    <canvas id="qr-CQ" style="visibility: hidden;"></canvas>
   </form>
</main>
 <footer class="card-panel blue darken-2" style="display: block;">
    <div class="row">
       <div class="col hide-on-small-only m4 l4"></div>
      <div class="col s12 m4 l4">
        <h6 class="white-text center">&copy; Jayke 2017</h6>
      </div>
      <div class="col hide-on-small-only m4 l4"></div>
    </div>
</footer>
 </script>
</body>
</html>
<script type="text/javascript">
  function sendaction(b){
    var course = $('select').val();
    $.post('process.php',{b,course},function (data) {  
    alert(data);        
  });
  }
</script>
<script type="text/javascript">
  $(document).ready(function(){
    $('select').material_select();
    var screenHeight = screen.height;
    var adjusted = screenHeight - ((15/100)*screenHeight);
    $("main").css('min-height',adjusted+"px");
    var getthis = $("main").css("min-height");
    getthis = parseInt(getthis);
    $(".signin").css('min-height',adjusted+"px");
    var adjusted =((80/100)*getthis);
    var paddingtop = ((15/100)*adjusted);
    $(".signin").css('padding-top',paddingtop+"px");
  });
  
</script>

<script type="text/javascript" src="js/decode.js"></script>

