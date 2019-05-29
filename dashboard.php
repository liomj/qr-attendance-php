<?php include "inc/header.php" ?>
<main class="container">
  <div class="row marginbottomer">
  <div class="col s12 m6 l6">
    <h5 class="center">Profile Update</h5>
    <form style="margin-top: 45px;">
    <div class="row">
      <div class="col s12 center-align">
        <?php 
        $regno = $_SESSION['student_username'];
        $sql = mysqli_fetch_array(mysqli_query($conn,"SELECT * FROM students where reg_no = '$regno'"));
        $fullname = $sql['fullname'];
        $email = $sql['email'];
        $phone = $sql['phone'];
       ?>
        <img src="images/3.jpg" class="responsive-img" style="width: 10%;height: 10%;border-radius: 5%">
        <h6><?php echo($regno); ?></h6>
      </div>
       <div class="input-field col s12 m12 l6 checkinput">
      <input placeholder="Full Name" type="text" name="fullname" id="fullname" value="<?php echo($fullname); ?>">
      <label for="fullname"><span class="mdi mdi-user"></span></label>
    </div>
    <div class="input-field col s12 m12 l6 checkinput">
      <input placeholder="Email" type="email" name="email" id="email" value="<?php echo($email); ?>">
    </div>
    <div class="input-field col s12 m12 l6 checkinput">
      <input placeholder="Password" type="password" name="password" id="password" >
    </div>
    <div class="input-field col s12 m12 l6 checkinput">
      <input placeholder="Confirm Password" type="password" name="confirm_password" id="password2">
    </div>
    <div class="input-field col s12 m12 l12 checkinput" style="margin-bottom: 30px">
      <input placeholder="Phone Number" type="number" name="phone" id="phone" value="<?php echo($phone); ?>">
    </div>
    <div id="updated" class="center-align"></div>
      <ul class="center-align">
        <button type="submit" class="blue darken-2 btn" id="submit">Update Profile</button>
      </ul>
    </div>
    </form>
  </div>
  <div class="col s12 m6 l6">
    <h5 class="center">Attendance At A Glance</h5>
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
    <div id="graph_donut" class="grapher">
      <p>Select a course to see your percentage attendance for it</p>
    </div>
    <ul class="center-align">
      <a class="btn blue darken-2" href="attendance" id='attender' disabled>View Full Report</a>
    </ul>
</div>
</div>
</main>


<script type="text/javascript">
  $(document).ready(function (){
    $('#course').on('change',function(){

      course = $('#course option:selected').val();
      $('#attender').attr('href','attendance?course='+course);
      $('#attender').removeAttr('disabled');
     $.post('process.php',{getrecords:1,course},function (data) {  
      if (data === 'no records to display') {
        $(".grapher").html(data);
      }else{
        //clearing the div
        $(".grapher").html('');

        var attendance = JSON.parse(data);
         
        // Morris js
       Morris.Donut({
            element: 'graph_donut',
            data: [
              {label: 'Present', value: attendance['present']},
              {label: 'Absent', value: attendance['absent']}
            ],
            colors: ['#4CAF50', '#e51c23'],
            formatter: function (y) {
              return y + "%";
            },
            resize: true
          });
          $MENU_TOGGLE.on('click', function() {
            $(window).resize();
          });
      }

        });
    })
  
  })
</script>
<script type="text/javascript">
$('#submit').click(function (e) {
  e.preventDefault();
  fullname = $("#fullname").val();
  email = $("#email").val();
  phone = $("#phone").val();
  password = $("#password").val();
  password2 = $("#password2").val();
  $.post('process.php',{update:1,fullname:fullname,password:password,email:email,phone:phone,password2:password2},function (data) {
    if (data ==='okay!') {
      $("#updated").html("Great! Profile updated");
    }else{
      $("#updated").html("An error occured");
    }
  });
 })
</script>
<?php include "inc/footer.php" ?>

