<?php include "inc/header.php" ?>
<?php 
  $student_reg_no = $_GET['reg_no'];
  $course = $_GET['course'];
  $totallectures = mysqli_query($conn,"SELECT * from generated_qr where course = '$course' order by `date`");
  $nolectures = mysqli_num_rows($totallectures);
  $fetchstudentsrecords = mysqli_num_rows(mysqli_query($conn,"SELECT * from attendance where course_code = '$course' AND student_reg_no = '$student_reg_no'"));
        if ($fetchstudentsrecords > 0) {
          $noofattendance = $fetchstudentsrecords;
          $noofabsence = (mysqli_num_rows($totallectures)) - $noofattendance;
          $percentagepresent = ceil(($noofattendance/$nolectures)*100);
          $percentageabsent = 100-$percentagepresent;
        }else{
          $noofattendance = 0;
          $noofabsence = mysqli_num_rows($totallectures);
          $percentagepresent = 0;
          $percentageabsent = 100;
        }
        $getotherdetails = mysqli_fetch_array(mysqli_query($conn,"SELECT * FROM students where `reg_no` = '$student_reg_no'"));
        $name = $getotherdetails['fullname'];
        $department = $getotherdetails['department'];
        $email = $getotherdetails['email'];
        $phone = $getotherdetails['phone'];
 ?>
<main>
<h5 class="center"><b>Detailed Attendance</b></h5>
    <div class="signin lol">
    <div class="row">
      <div class="col s12 center-align">
         <img src="../images/3.jpg" class="responsive-img" style="width: 10%;height: 10%;border-radius: 5%">
      </div>
      <div class="col s12">
        <div class="row center-align blue darken-2 white-text">
          <div class="col s12 m6 l6">
            <h6>Name: <?php echo($name); ?></h6>
          </div>
          <div class="col s12 m6 l6">
            <h6>Reg No.: <?php echo($student_reg_no); ?></h6>
          </div>  
          <div class="col s12 m6 l6">
            <h6>Email: <?php echo($email); ?></h6>
          </div>
          <div class="col s12 m6 l6">
            <h6>Phone Number: <?php echo($phone); ?></h6>
          </div> 
          <div class="col s12 m6 l6">
            <h6>Number of Classes Attended: <?php echo($noofattendance); ?></h6>
          </div>
          <div class="col s12 m6 l6">
            <h6>Number of Classes Absent: <?php echo($noofabsence); ?></h6>
          </div>         
        </div>
      </div>
       <div class="col l6 m6 s12">
        <h6 class="center-align"><b>Attendance by Percentage</b></h6>
         <div id="attendance"></div>
       </div>
       <div class="col l6 m6 s12">
        <h6 class="center-align"><b>Attendance by days</b></h6>
         <table class="center striped bordered" >
           <thead>
             <tr>
              <th>Date</th>
              <th>Status</th>
             </tr>
           </thead>
           <tbody>
            <?php 
    $totallectures = mysqli_query($conn,"SELECT * from generated_qr where course = '$course' order by `date`");
    if (mysqli_num_rows($totallectures) > 0) {
      
   while($row = mysqli_fetch_array($totallectures)){
        $lecturetime=$row['date'];
        $lecturedate =  date('jS F, Y', $row['date']);
        $course =  $row['course'];
        $attendances = mysqli_query($conn,"SELECT * FROM attendance where `student_reg_no` = '$student_reg_no' and `course_code` = '$course'");
        $attendancerow = mysqli_fetch_array($attendances);
        $attendancedate = $attendancerow['qrtime'];
        if ($lecturetime === $attendancedate) {
          $present = 'yes';
          $absent = 'no';
        }else{
          $absent= 'yes';
          $present = 'no';
        }
  ?>
  <tr>
    <td><?php echo($lecturedate); ?></td>
    <td><?php 
    if ($present === 'yes'){
      echo("Present");
    }else{
      echo('Absent');
    }?></td>
  </tr>
  <?php
      }
    }
  ?>
           </tbody>
          </table>

       </div>
    </div>
    <ul class="center-align">
      <a href="view-attendance?course=<?php echo($course); ?>" class="btn blue darken-2">Go Back</a>
    </ul>
    </div>
</main>
<?php include "inc/footer.php" ?>
<script type="text/javascript">
  $(document).ready(function (){

    // Morris js
     Morris.Donut({
          element: 'attendance',
          data: [
            {label: 'Present', value: <?php echo($percentagepresent); ?>},
            {label: 'Absent', value: <?php echo($percentageabsent); ?>}
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
  })
</script>