<?php

require __DIR__ . '/../vendor/autoload.php';

use MongoDB\Client as MongoDB;

$mongodb_uri = getenv('MONGODB_URI');

$client = new MongoDB($mongodb_uri);

$collection = $client->userProfile->userDetails;

?>