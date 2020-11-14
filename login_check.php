<?php
session_start();
$id=$_POST['id'];
$pw=$_POST['pw'];
$mysqli=mysqli_connect("localhost", "lizill", "kc9452", "login");

$check="SELECT * FROM user_info WHERE userID='$id'";
$result=$mysqli->query($check);
if($result->num_rows==1) {
    $row=$result->fetch_array(MYSQLI_ASSOC);
    if($row['userPW']==$pw) {
        $_SESSION['userID']=$id;
        if(isset($_SESSION['userID'])) {
            header('Location: ./home.html');
        } else {
            echo "세션 저장 실패";
        }
    } else {
        echo "비밀번호 또는 아이디가 틀렸습니다.";
    }
}
else {
    echo "비밀번호 또는 아이디가 틀렸습니다.";
}
?>