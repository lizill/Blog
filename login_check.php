<?php
$id=$_POST['id'];
$pw=$_POST['pw'];

if($id==NULL) {
    // alert('아이디를 입력하세요.');
    
    echo "비밀번호와 비밀번호 확인이 서로 다릅니다.";
    echo "<a href=signUp.html>back page</a>";
    exit();
}
if($pw==NULL) {
    alert('패스워드를 입력하세요.')
    
    echo "비밀번호와 비밀번호 확인이 서로 다릅니다.";
    echo "<a href=signUp.html>back page</a>";
    exit();
}

?>