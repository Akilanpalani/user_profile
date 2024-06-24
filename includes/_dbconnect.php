<?php
require __DIR__ . '/../vendor/autoload.php';

$app_env = getenv('APP_ENV');

if($app_env !== 'production'){
  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
  $dotenv->load();
}

if($app_env == 'production'){
  //Get Heroku ClearDB connection information
  $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
  $cleardb_server = $cleardb_url["host"];
  $cleardb_username = $cleardb_url["user"];
  $cleardb_password = $cleardb_url["pass"];
  $cleardb_db = substr($cleardb_url["path"],1);
  $active_group = 'default';
  $query_builder = TRUE;
  // Connect to DB
  $conn = mysqli_connect($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
}
else {
  $servername = $_ENV['DB_HOST'];
  $username = $_ENV['DB_USER'];
  $password = $_ENV['DB_PASS'];
  $dbname = $_ENV['DB_NAME'];
  
  $conn = new mysqli($servername,$username,$password,$dbname);
}

if($conn->connect_error){
  die("Connection failed: ".$conn->connect_error);
}

?>