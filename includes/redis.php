<?php
require __DIR__ . '/../vendor/autoload.php';


use  Predis\Client as Redis;
 
$redis = new Redis([
  'host' => $_ENV['REDIS_HOST'],
  'password' => $_ENV['REDIS_PASSWORD'],
  'port' => $_ENV['REDIS_PORT'],
  'scheme' => $_ENV['REDIS_SCHEME'],
]);

?>