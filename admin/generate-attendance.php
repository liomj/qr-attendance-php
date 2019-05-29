<?php include "inc/header.php" ?>
<main>
  
<form style="width: 80%; margin:0 auto; margin-top: 10% " class="signin">
  <h5 class="center">Generate New QR Code</h5>

  <select id="course">
    <option value="" disabled selected>Select Course</option>
    <?php 
      $fetch_courses = mysqli_query($conn,"SELECT * FROM added_courses where admin_id = '$admin_id'");
      if (mysqli_num_rows($fetch_courses) > 0 ) {
        while ($row = mysqli_fetch_array($fetch_courses)) {
          $course_code = $row['course_code'];
          echo "<option value='".$course_code."'>".$course_code."</option>";
        }
      }
     ?>
  </select>
  <input type="text" name="title" placeholder="Random Text E.g. Loremdkdkdkk" id="random">
  <ul class="center-align" style="margin-top: 12px;">
    <div class="btn blue darken-2 modal-trigger" id="generate" data-target="modal1">Generate</div>
 </ul>
</form>
</main>
 <div class="modal" id="modal1" style="min-height: auto;">
  <div class="modal-content">
   <div class="center-align"><h5 id="checker"></h5></div>
   <div id="viewer" class="center-align"></div>
   </div>
   <div class="modal-footer">
    <a href="#!" class="modal-action modal-close btn blue darken-2">close</a>
   </div>

 </div>
<?php include "inc/footer.php" ?>
<script src="js/generate.js"></script>

