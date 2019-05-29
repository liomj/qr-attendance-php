<?php session_start();
if (!isset($_SESSION['admin_username'])) {
  header("location: ./");
}
$admin_username = $_SESSION['admin_username'];

// echo($admin_username);
include "functions.inc.php";
$fetchid = mysqli_fetch_array(mysqli_query($conn,"SELECT * from admin where `email` = '$admin_username'"));
$admin_id = $fetchid['admin_id'];
 ?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Jayke Attendance System</title>
    <link href="../css/materialicons/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
    <script src="js/jquery.js"></script>
    <script src="js/jquery.js"></script>
    <script src="js/jquery.qrcode.js"></script>
    <script src="js/qrcode.js"></script>
    <link href="../css/materialize.min.css" media="all" rel="stylesheet" type="text/css" />
    <link href="css/style.css" media="all" rel="stylesheet" type="text/css" />
    <script src="../js/materialize.min.js"></script>
    <script src="../js/raphael.min.js"></script>
    <script src="../js/morris.min.js"></script>
</head>
<body>
<ul id="slide-out" class="side-nav fixed" style="padding-top: 60px; width: 20% !important">
  <li class="bold"><a href="dashboard" class=" mdi mdi-home mdi-24px collapsible-header borderbottom"> &nbsp; Dashboard</a></li>
  <li class="bold"><a href="add-course" class=" mdi mdi-plus mdi-24px collapsible-header borderbottom"> &nbsp; ADD COURSE</a></li>
  <li class="bold"><a href="generate-attendance" class=" mdi mdi-qrcode-scan mdi-24px collapsible-header borderbottom"> &nbsp; Generate QR code</a></li>

  <li class="bold"><a href="select-course" class=" mdi mdi-account mdi-24px collapsible-header borderbottom"> &nbsp; View Attendance Records</a></li>
  <li class="bold"><a href="logout" class=" mdi mdi-power mdi-24px collapsible-header borderbottom"> &nbsp; Logout</a></li>
</ul>
<header>
  <div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper header blue darken-2">
      <a href="dashboard" class="brand-logo marginner">Jayke</a>
      <a href="#" data-activates="slide-out" class="button-collapse top-nav full hide-on-large-only"><i class="mdi mdi-menu"></i></a>
    </div>
  </nav>
</div>
</header>