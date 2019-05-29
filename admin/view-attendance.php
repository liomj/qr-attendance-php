<?php include "inc/header.php" ?>

<main>
	<table class="responsive-table striped bordered" >
		<h5 class="center">All Students</h5>
 <thead>
	 <tr>
	 	<th>Student's Reg No.</th>
	 	<th>Name</th>
	 	<th>Email</th>
	 	<th>Phone Number</th>
    <th>No. of classes attended</th>
	 	<th>View More Details</th>
	 </tr>
 </thead>
 <tbody>
  <?php 
    $course = $_GET['course'];
    $get_attendances= mysqli_query($conn,"SELECT distinct student_reg_no FROM attendance where `course_code` = '$course'");
    $totallectures = mysqli_query($conn,"SELECT * from generated_qr where course = '$course' order by `date`");
    if (mysqli_num_rows($get_attendances) > 0) {
      while($row = mysqli_fetch_array($get_attendances)){
        $student_reg_no = $row['student_reg_no']; 
        $fetchstudentsrecords = mysqli_num_rows(mysqli_query($conn,"SELECT * from attendance where course_code = '$course' AND student_reg_no = '$student_reg_no'"));
        if ($fetchstudentsrecords > 0) {
          $noofattendance = $fetchstudentsrecords;
          $noofabsence = (mysqli_num_rows($totallectures)) - $noofattendance;
        }else{
          $noofattendance = 0;
          $noofabsence = mysqli_num_rows($totallectures);
        }
        $getotherdetails = mysqli_fetch_array(mysqli_query($conn,"SELECT * FROM students where `reg_no` = '$student_reg_no'"));
        $name = $getotherdetails['fullname'];
        $department = $getotherdetails['department'];
        $email = $getotherdetails['email'];
        $phone = $getotherdetails['phone'];
  ?>
  <tr>
    <td><?php echo($student_reg_no); ?></td>
    <td><?php echo($name); ?></td>
    <td><?php echo($email); ?></td>
    <td><?php echo($phone); ?></td>
    <td><?php echo($noofattendance); ?></td>
    <td><a href="view-more?reg_no=<?php echo($student_reg_no); ?>&course=<?php echo($course); ?>" class="btn btn brown">View More</a></td>
  </tr>
  <?php
      }
    }
  ?>
 	
  
 </tbody>
 </table>
 <ul class="pagination center-align">
          <li class="waves-effect brown" ><a href="#!" class="white-text"><i class="mdi mdi-chevron-left"></i></a></li>
          <li class="waves-effect brown"><a href="#!" class="white-text">1</a></li>
          <li class="waves-effect brown" ><a href="#!" class="white-text">2</a></li>
          <li class="waves-effect brown" ><a href="#!" class="white-text">3</a></li>
          <li class="waves-effect brown" ><a href="#!" class="white-text">4</a></li>
          <li class="waves-effect brown" ><a href="#!" class="white-text">5</a></li>
          <li class="waves-effect brown" ><a href="#!" class="white-text"><i class="mdi mdi-chevron-right"></i></a></li>
        </ul>
</main>
<footer class="brown">
	<p class="center-align white-text">&copy; Jakomita</p>
</footer>
<script type="text/javascript">
 	$(document).ready(function(){
 		$(".button-collapse").sideNav();
 	})
 </script>
</body>
</html>