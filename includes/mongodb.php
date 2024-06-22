<?php

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

use MongoDB\Client as MongoDB;

$mongodb_uri = $_ENV['MONGO_URI'];

$client = new MongoDB($mongodb_uri);

$collection = $client->userProfile->user_profiles;

?>