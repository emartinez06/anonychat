<?php
/**
 * Created by: E. Martinez
 * Date: 3/8/2018
 * Time: 8:56 PM
 */

require_once ('../config.php');
$user = $_GET['username'];

function registerUser($user){
    $table = 'usernames';
    $registerSQL = "INSERT INTO `{$table}` (`usernick`) VALUES('{$user}')";
    //$query = mysqli_query($conn, $registerSQL);

}