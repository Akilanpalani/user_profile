# User Profile

This Project is a user profile management system that indicates user registration,login,profile update, and logout functionalities.
The project uses MySQL for storing user details, Redis for session management, and Mongodb for storing additional profile details.


# Prerequisites

- WAMPP Server with PHP 8.2.18
- Composer
- MySQL
- Redis
- MongoDB

## Setup Instruction

## Step:1 Install Wamp Server

Download and install [WAMP Server](https://wampserver.aviatechno.net/files/install/wampserver3.3.5_x64.exe) from [wampserver.com](https://wampserver.aviatechno.net/).

### Step:2 Install Compser
Composer is a dependency manager for PHP. Follow these steps to install Composer:

### For Windows
Download and run the [Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe) from [getcomposer.org](https://getcomposer.org/download/).

And Add the PHP Path to your Environment Variables.


### Step:3 Install Dependencies
Install the dependencies using Composer:

```bash
composer install
```

# Step:4 Install MongoDB PHP extension


Follow the instructions in the [MongoDB PHP Extension](https://www.php.net/manual/en/set.mongodb.php) documentation to install the MongoDB PHP extension.

- In this Project We Used [php_mongodb-1.19.3-8.2-ts-x64.zip](https://github.com/mongodb/mongo-php-driver/releases/download/1.19.3/php_mongodb-1.19.3-8.2-ts-x64.zip)

- Download it and extract it and Place the DLL file in your PHP ext directory (e.g., C:\wamp64\bin\php\php8.2.18\ext).

- Add the following line to your php.ini file:

  ```php
  extension=php_mongodb.dll
  ```

- Then Restart WAMP Server.

### Step:5 Setup Environment Variables

```bash
DB_HOST="your_database_host"
DB_NAME="your_database_name"
DB_USER="your_database_user"
DB_PASS="your_database_password"

REDIS_HOST="127.0.0.1"
REDIS_PASSWORD="password"
REDIS_PORT=6379
REDIS_SCHEME="tcp"

MONGO_URI="mongodb://localhost:27017"
```


### Step:6 Setup MySQL Database

```bash
CREATE DATABASE database_name;

USE database_name;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

```

### Step:7 Setup Redis & MongoDB

Either download and use local Redis or MongoDB server or use the services provided by Third-party vendors.

For this we used the services provided by Third-party vendors.

- For [MongoDB](https://www.mongodb.com/cloud/atlas/register)
- For [Redis](https://upstash.com/docs/redis/overall/getstarted)


## Running the Project

Just Copy and Paste this Folder into wamp64/www/user-profile and goto http://localhost/user-profile.
