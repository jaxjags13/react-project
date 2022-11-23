<?php

include 'Services/UserService.php';
setHeaders();
$user = getUserObject();
$userService = new UserService();

$errors = [];
if (!$userService->isUsernameUnique($user['username'])) {
    $errors['errors'][] = 'Username is taken.';
}

if (!$userService->isEmailUnique($user['email'])) {
    $errors['errors'][] = 'Email is taken.';
}

if (empty($errors)) {
    $userService->insertNewUser($user);
}

$json = json_encode($errors);
print($json);

function setHeaders()
{
    header("Access-Control-Allow-Headers: *");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
}

function getUserObject()
{
    $user = json_decode(file_get_contents("php://input"), true);
    $user['username'] ??= '';
    $user['email'] ??= '';
    $user['password'] ??= '';
    return $user;
}

