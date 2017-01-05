<?php

date_default_timezone_set('America/Sao_Paulo');

$servername = getenv("IP");
$username = "root";
$password = "";
$db = "thierryrenematos";

try {
    
    $conn = new PDO("mysql:host=$servername; dbname=thierryrenematos", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<span class='alert alert-success'>Conexão efetuada com sucesso.</span>"; 
    
    } catch(PDOException $e) {
        
    echo "Falha: " . $e->getMessage();
    
    }
    
?>