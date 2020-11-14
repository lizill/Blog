<?php
session_start();
if(!isset($_SESSION['userID'])) {
    header('Location: ./login.html');
} else {
    header('Location: ./home.html');
}

// echo "홈(로그인 성공)";

// echo "<a href=logout.php>로그아웃</a>";
?>