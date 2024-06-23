<?php
require __DIR__ . '/../vendor/autoload.php';


use  Predis\Client as Redis;
 
$redis = new Redis([
  'host' => getenv('REDIS_HOST'),
  'password' => getenv('REDIS_PASSWORD'),
  'port' => getenv('REDIS_PORT'),
  'scheme' => getenv('REDIS_SCHEME'),
]);

?>