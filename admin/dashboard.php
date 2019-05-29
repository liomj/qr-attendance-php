<?php include "inc/header.php" ?>
<?php 
  $admin_name = $fetchid['fullname'];
  $admin_department = $fetchid['department'];
 ?>
<main style="max-height: 200px">
  <div class="row" style="margin-top: 13%;">

    <div class="col s12 m8 l8">
      <div class="center-align">
        <img src="../images/3.jpg" class="center" style="width: 30%;height: 30%;border-radius: 5%">
        <h5 class="center">Welcome, <?php echo($admin_name); ?> To Electronic Engineering Attendance Portal</h5>
      </div>
    </div>
    <div class="col s12 m4 l4">
      <div class="center-align" style="border-left: 1px solid black;border-right: 1px solid black">
        <h5 class="center">Admin Details</h5>
        <ul class="collection">
          <li class="collection-item changefont" style="margin-top: 22px"><span class="blue-text" style="font-family: cursive;">Name:</span> <?php echo($admin_name); ?></li>
          <li class="collection-item changefont" style="margin-top: 22px"><span class="blue-text" style="font-family: cursive;">Department:</span> <?php echo($admin_department); ?></li>
          <li class="collection-item changefont" style="margin-top: 22px"><span class="blue-text" style="font-family: cursive;">Courses Taught:</span> <?php 
            $selectcourses = mysqli_query($conn,"SELECT * FROM added_courses WHERE admin_id = '$admin_id'");
            while ($row = mysqli_fetch_array($selectcourses)) {
              echo($row['course_code']." , ");
            }
           ?></li>
        </ul>
      </div>
    </div>
  </div>
</main>
<?php include "inc/footer.php" ?>
