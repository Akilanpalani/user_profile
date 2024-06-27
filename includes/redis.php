<?php
require __DIR__ . '/../vendor/autoload.php';

use  Predis\Client as Redis;

$app_env = getenv('APP_ENV');

if($app_env !== 'production'){
  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
  $dotenv->load();
}

if($app_env == "production"){
  $redis_url = getenv('REDISCLOUD_URL');
  $redis = new Redis($redis_url);
}
else {
  $redis = new Redis([
    'host' => $_ENV['REDIS_HOST'],
    'password' => $_ENV['REDIS_PASSWORD'],
    'port' => $_ENV['REDIS_PORT'],
    'scheme' => $_ENV['REDIS_SCHEME'],
  ]);
}

?>