<?php
include '../vendor/autoload.php';
include "../includes/_dbconnect.php";
include "../includes/redis.php";

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM user_details WHERE username = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if($result->num_rows > 0) {
  $row = $result->fetch_assoc();
    if(password_verify($password, $row['password'])) {
      $token = bin2hex(random_bytes(16));
      $redis->set($token,$username);
    echo json_encode(['success' => true, 'message' => 'Login successful', 'token' => $token]);
  }
  else{
    echo json_encode(['success' => false, 'message' => 'Incorrect password']);
  }
}
else{
  echo json_encode(['success' => false, 'message' => 'User not found']);
}

$stmt->close();
$conn->close();
?>
