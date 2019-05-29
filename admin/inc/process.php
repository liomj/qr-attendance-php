<?php session_start();
include "functions.inc.php";
//check login and log admin in
if (isset($_POST['check_login'])) {
	$username = sanitize($_POST['username']);
	$password = sanitize ($_POST['password']);
	$password = sha1(md5($password));
	$checkusser = mysqli_query($conn,"SELECT email from admin where `email` = '$username' and `password` = '$password'");
	if (mysqli_num_rows($checkusser) > 0) {
		$_SESSION['admin_username'] = $username; 
		echo "yes";
		

	}else{
		echo "<div class='red-text'>You don't have any admin priviledges to access the dashboard</div>";
	}
}

//inserting students from .csv file

if (isset($_POST['add_course'])) {
	$admin_username = $_SESSION['admin_username'];
	$course = sanitize($_POST['newcourse']);
	$fetchid = mysqli_fetch_array(mysqli_query($conn,"SELECT * from admin where `email` = '$admin_username'"));
	$admin_id = $fetchid['admin_id'];
	if (mysqli_num_rows(mysqli_query($conn,"SELECT * FROM added_courses where `course_code` = '$course' AND admin_id = '$admin_id'")) > 0) {
		echo "You have already added this course";
	}else{
		$add_course = mysqli_query($conn,"INSERT INTO added_courses (course_code,admin_id) VALUES ('$course','$admin_id')");
		$file = $_FILES['file']['tmp_name'];
		$file_open = fopen($file, "r");
		$c = 0;
		while(($csv = fgetcsv($file_open, 1000, ",")) !== false){
			$fullname = $csv[1];
			$reg_no = $csv[2];
			$department = $csv[3];	
			$password = sha1(md5($reg_no));		
			if (mysqli_num_rows(mysqli_query($conn,"SELECT * FROM students where `reg_no` = '$reg_no'")) > 0) {
				$err = "Some students already exist in the database";
			}else{
				$sql = mysqli_query($conn,"INSERT INTO students (fullname,reg_no,department,password) VALUES ('$fullname','$reg_no','$department','$password')");
				$c= $c+1;
			}
		}

		if(@$sql){
			echo "You have added the new course and inserted ". $c ." students";
		}
	}
	if (isset($err)) {
		echo($err);
	}

}

//saving the generated qr code

if (isset($_POST['post_qr'])) {
	$qrcode = $_POST['qrcode'];
	$course = $_POST['course'];
	$date = time();
	$getlastcode = mysqli_fetch_array(mysqli_query($conn,"SELECT * from generated_qr where course = '$course' order by `date` desc limit 1"));
	$lastdate = $getlastcode['date'];
	$diff = $date - $lastdate;

	if ($diff > 43200) {
		$sql = mysqli_query($conn,"INSERT INTO generated_qr (qr_text,course,`date`) VALUES ('$qrcode','$course','$date')");
		if ($sql) {
			echo("okay!");
		}
	}else{
		$qrcode = $getlastcode['qr_text'];
		echo $qrcode;
	}}


//check login and log student in
if (isset($_POST['checku_login'])) {
	$username = sanitize($_POST['username']);
	$password = sanitize ($_POST['password']);
	$password = sha1(md5($password));
	$checkusser = mysqli_query($conn,"SELECT * from students where `reg_no` = '$username' and `password` = '$password'");
	if (mysqli_num_rows($checkusser) > 0) {
		$_SESSION['student_username'] = $username; 
		echo "yes";
		

	}else{
		echo "<div class='red-text'>You don't have any admin priviledges to access the dashboard</div>";
	}
}

 ?>