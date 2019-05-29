<?php include "inc/header.php" ?>
<main>
  
<form style="width: 80%; margin:0 auto; margin-top: 10% " class="signin" id="addcourse" method="get" action="view-attendance">
  <h5 class="center">SELECT COURSE TO VIEW ATTENDANCE RECORDS</h5>
  <select id="course" name="course">
    <option value="" disabled selected>Select Course</option>
    <?php 
      $fetch_courses = mysqli_query($conn,"SELECT * FROM courses");
      if (mysqli_num_rows($fetch_courses) > 0 ) {
        while ($row = mysqli_fetch_array($fetch_courses)) {
          $course_code = $row['course_code'];
          echo "<option value='".$course_code."'>".$course_code."</option>";
        }
      }
     ?>
  </select>
    <div class="center" id="error"></div>

  <ul class="center-align" style="margin-top: 12px;">
    <input class="btn blue darken-2" type="submit" value="VIEW ATTENDANCE">
 </ul>
</form>
</main>
<?php include "inc/footer.php" ?>
<script src="js/generate.js"></script>

