<?php
include '../includes/_dbconnect.php';


$username = $_POST['username'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

$sql = "INSERT INTO user_details (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $password);
$stmt->execute();

echo json_encode(["success" => true, "message" => "User registered successfully"]);

$conn->close();

?>