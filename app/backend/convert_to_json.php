<?php

session_start();

require_once('config.php');
require_once('pdo_connect.php');

$db = new Database();
$db->query("SELECT * FROM restaurants");
$result = $db->resultSet();

// write to json file
// $fp = fopen('movie_data.json', 'w');
// $fp = fopen('tv_show_data.json', 'w');
$fp = fopen('restaurant_data.json', 'w');
fwrite($fp, json_encode($result, JSON_PRETTY_PRINT));
fclose($fp);