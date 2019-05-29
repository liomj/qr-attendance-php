<?php session_start();
if (isset($_SESSION['student_username'])) {
  header("location: ./dashboard");
}?>
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

</head>
<body>
<form class="signin" style="margin-top: 10%;">
  <h5 class="center">Log In To Jayke</h5>
  <p class="center red-text">If this is your first time of logging in or you have not changed your password, Your password is the same as your registration number</p>
  <div class="row center-align">
    <div class="input-field s12" >
      <input placeholder="Registration Number" type="text" name="regno" id="regno" required>
    </div>
    <div class="input-field s12" >
      <input placeholder="password" type="password" name="password" required id="password">
    </div>
    <div class="center" id="available"></div>
    <div class="input-field s12" >
      <input class="btn blue darken-2" type="submit" id="submit" value="Login">
    </div>
  </div>
  <ul class="center-align">
    <h6>&copy; Jayke 2017</h6>
    <small>All Rights Reserved</small>
  </ul>
</form>
<script src="js/login.js"></script>
</body>
</html>