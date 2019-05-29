<?php include "inc/header.php" ?>
<main>
  
<form style="width: 80%; margin:0 auto; margin-top: 10% " class="signin" id="addcourse">
  <h5 class="center">Add New Course</h5>
  <input type="hidden" name="add_course">
  <select id="course" name="newcourse">
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
      <div class="input-field file-field">
      <div class="btn blue darken-2 checkinput">
        <span class="mdi mdi-upload">Upload Student details in .csv format</span>
        <input type="file" name="file" accept=".csv">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
    <div class="center" id="error"></div>

  <ul class="center-align" style="margin-top: 12px;">
    <input class="btn blue darken-2" type="submit" value="ADD COURSE">
 </ul>
</form>
</main>
<?php include "inc/footer.php" ?>
<script src="js/generate.js"></script>
<script type="text/javascript">
  $(document).ready(function () {
    var form = document.getElementById('addcourse');
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "inc/process.php", true);
    ajax.onload = function(e) {
    $("#error").html(ajax.responseText);
      // if (ajax.responseText.indexOf('successfully!') != -1) {
      //   location.href = 'profile';
      // }
    };
    ajax.send(new FormData(form)); 
      },false);

})
</script>

