<?php 
  if (!isset($_GET['course'])) {
    header('Location: ./');
    die();
  }
 ?>
<?php include "inc/header.php" ?>
<?php 

$course = $_GET['course'];
$regno = $_SESSION['student_username'];
 ?>
<main class="container">
   <div class="center-align">
     <h5><b>Your <?php echo($course); ?> Attendance History </b></h5>
   </div>
   <div>
     <table class="center striped bordered" >
		<h5 class="center">Attendance for <?php echo($regno) ?></h5>
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
        $attendances = mysqli_query($conn,"SELECT * FROM attendance where `student_reg_no` = '$regno' and `course_code` = '$course'");
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

 <table>
 	<h6 class="center-align"><b>Summary Of Attendance</b></h6>
 	<thead>
 		<tr class="center-align">
 			<th >Total Number of Lectures</th>
	 		<th >Present</th>
	 		<th >Absent</th>
 		</tr>
 	</thead>
 	<tbody>
 		<tr>
 			<td><?php echo mysqli_num_rows($totallectures); ?></td>
      <?php 
        $fetchstudentsrecords = mysqli_num_rows(mysqli_query($conn,"SELECT * from attendance where course_code = '$course' AND student_reg_no = '$regno'"));
        if ($fetchstudentsrecords > 0) {
          $noofattendance = $fetchstudentsrecords;
          $noofabsence = (mysqli_num_rows($totallectures)) - $noofattendance;
        }else{
          $noofattendance = 0;
          $noofabsence = mysqli_num_rows($totallectures);
        }
       ?>
 			<td><?php echo($noofattendance) ?></td>
 			<td><?php echo($noofabsence) ?></td>
 		</tr>
 	</tbody>
 </table>
 </div>

</main>
 
<?php include "inc/footer.php" ?>

