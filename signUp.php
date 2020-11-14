<?php
$id=$_POST['id'];
$pw=$_POST['pw'];
$pwc=$_POST['pwc'];
$name=$_POST['name'];
$email=$_POST['email'];

if($pw!=$pwc) {
    echo "비밀번호와 비밀번호 확인이 서로 다릅니다.";
    echo "<a href=signUp.html>back page</a>";
    exit();
}

if($id==NULL || $pw==NULL || $name==NULL || $email==NULL) {
    echo "빈 칸을 모두 채워주세요.";
    echo "<a href=signUp.html>back page</a>";
    exit();
}

$mysqli=mysqli_connect("localhost", "lizill", "kc9452", "login");

$check="SELECT * from user_info WHERE userID='$id'";
$result=$mysqli->query($check);
if($result->num_rows==1) {
    echo "중복된 id입니다.";
    echo "<a href=signUp.html>back page</a>";
    exit;
}

$signup=mysqli_query($mysqli, "INSERT INTO user_info (userID, userPW, userName, userEmail)
VALUES ('$id', '$pw', '$name', '$email')");
if($signup) {
    echo "회원가입이 완료 되었습니다.";
    echo "<a href=login.html>back page</a>";
    exit;
} 

?>