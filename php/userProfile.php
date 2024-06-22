<?php
include "../vendor/autoload.php";
include "../includes/redis.php";
include "../includes/mongodb.php";
include "../includes/_dbconnect.php";

$token = $_POST['token'];
$action = $_POST['action'];

if($action === "validate"){
  $username = $redis->get($token);

  if($username){
    echo json_encode(["success" => true]);
  }  else {
    echo json_encode(["success" => false]);
  }
} else if($action === "update"){
  $age = $_POST['age'];
  $dob = $_POST['dob'];
  $contact = $_POST['contact'];

  $username = $redis->get($token);

  if($username){
    $result = $collection->updateOne(
      ['username' => $username],
      ['$set'=>['age' => $age, 'dob' => $dob, 'contact' => $contact]],
      ['upsert' => true]
    );

    if($result->getMatchedCount() > 0 || $result->getUpsertedCount() > 0){
      echo json_encode(["success" => true, "message" => "Profile updated successfully"]);
  }
    else {
      echo json_encode(["success" => false, "message" => "Failed to update profile"]);
    }
} else {
  echo json_encode(["success" => false, "message" => "Failed to update profile"]);
}
} else if ($action === "logout") {
  $redis->del($token);
  echo json_encode(["success" => true,"message" => "Logged out successfully"]);
}

?>