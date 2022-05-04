<?php
$pdo = new PDO('mysql:dbname=app;host=mysql;port=3306', 'user', 'password');

var_dump($pdo);
$stmt = $pdo->prepare("SELECT * FROM users");
$res = $stmt->execute();
if( $res ) {
	$data = $stmt->fetch();
	var_dump($data);
}

die;