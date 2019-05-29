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
<body onload="checkscreen()">
<div class="navbar-fixed">
  <nav class="blue darken-2">
    <div class="nav-wrapper header">
      <a href="dashboard" class="brand-logo center">Jayke</a>
    </div>
  </nav>
 </div>

<!-- second nav -->
  <nav class="white nav-center marginbottomer">
    <div class="nav-wrapper">
      <ul class="smally">
        <li><a href="dashboard" class="black-text changemargin">Dashboard</a></li>
        <li><a href="scan" class="black-text changemargin">Take Attendance</a></li>
        <li><a href="logout" class="black-text changemargin">logout</a></li>
      </ul>
    </div>
  </nav>
  <script type="text/javascript">
    function checkscreen(){
      var screenwidth = screen.width;
      // if (screenwidth < 800) {
        $(".navbar-fixed").show();
        $("nav").show();
        $("main").show();
        $("footer").show();
        $(".alert").hide();

      // }else{
      //   $(".alert").show();
      // }
    }
  </script>

  <div class="card-panel center-align alert brown white-text" style="width: 50%;margin:0 auto;margin-top: 20%;border: 2px solid #eee;padding:20px;">You need a smartphone to access this site and not a Laptop! Thanks</div>
