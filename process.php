<?php session_start();
include "admin/inc/functions.inc.php";

$regno = $_SESSION['student_username'];
if (isset($_POST['b'])) {
		
	$course = $_POST['course'];
	$qrcode = $_POST['b'];
	if ($qrcode ==="<br><b></b><br><br>") {
		echo "Unable to scan qr code. Make sure you focus your camera on the QR code";
		die();
	}
	$qrcode = str_replace("<br><b>", "", $qrcode);
	$qrcode = str_replace("</b><br><br>", "", $qrcode);

	$getlastcode = mysqli_query($conn,"SELECT * from generated_qr where course = '$course' AND qr_text = '$qrcode' order by `date` desc limit 1");
	if (mysqli_num_rows($getlastcode) > 0) {
		$time = time();
		$qrrow = mysqli_fetch_array($getlastcode);
		$qrtime = $qrrow['date'];
		//check if the student has taken attendance for the class
		$getlastattendance = (mysqli_query($conn,"SELECT * from attendance where course_code = '$course' AND student_reg_no= '$regno'"));
		if (mysqli_num_rows($getlastattendance) > 0) {
			// echo($time);
			$getlastcode = mysqli_fetch_array(mysqli_query($conn,"SELECT * from attendance where course_code = '$course' AND student_reg_no= '$regno' order by `date` desc limit 1"));
			$lastdate = $getlastcode['date'];
			$diff = $time - $lastdate;

			if ($diff > 10800) {
				$sql = mysqli_query($conn,"INSERT INTO attendance (student_reg_no,course_code,`date`,`qrtime`) VALUES ('$regno','$course','$time','$qrtime')");
				if ($sql) {
					echo("okay!");
				}
			}else{
				echo "you have taken attendance today";
			}
		}else{
			$sql = mysqli_query($conn,"INSERT INTO attendance (student_reg_no,course_code,`date`,`qrtime`) VALUES ('$regno','$course','$time','$qrtime')");
			if ($sql) {
				echo("okay!");
			}
		}
	}
	else{
		echo('no');
	}

}

//get attendance records for the student
if (isset($_POST['getrecords'])) {
	$course = $_POST['course'];
	$getalllectures = mysqli_num_rows(mysqli_query($conn,"SELECT * from generated_qr where course = '$course'"));
	$fetchstudentsrecords = mysqli_num_rows(mysqli_query($conn,"SELECT * from attendance where course_code = '$course' AND student_reg_no = '$regno'"));
	if ($fetchstudentsrecords > 0) {
		$percentagePresent = ceil(($fetchstudentsrecords/$getalllectures)*100);
		$percentageabsent = 100 - $percentagePresent;
		$arr = array('present' => $percentagePresent, 'absent' => $percentageabsent);
		echo json_encode($arr);
	}else{
		echo "no records to display";
	}
}


//update user profile details
if (isset($_POST['update'])) {
	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$password = $_POST['password'];
	$password2 = $_POST['password2'];

	if (($password === "" || $password2 === "") || ($password != $password2) ) {
		$passworderr = true;
	}else{
		$password = sha1(md5($password));
	}

	if ($fullname === "") {
		$fullname = NULL;
	}

	if ($phone === "") {
		$phone = NULL;
	}

	if ($email === "") {
		$email = NULL;
	}

	if (!isset($passworderr)) {
		$sql = mysqli_query($conn,"UPDATE students SET fullname = '$fullname', password = '$password', email = '$email', phone = '$phone' WHERE reg_no = '$regno'");
		if ($sql) {
			echo("okay!");
		}else{
			echo("failed");
		}
	}else{
		$sql = mysqli_query($conn,"UPDATE students SET fullname = '$fullname', email = '$email', phone = '$phone'  WHERE reg_no = '$regno'");
		if ($sql) {
			echo("okay!");
		}else{
			echo("failed");
		}
	}
}
?>