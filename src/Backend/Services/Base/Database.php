<?php

class Database {
    private string $host;
    private string $database;
    private string $user;
    private string $password;
    private string $characterSet;
    private string $dsn;
    private $pdo;

    private array $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false
    ];

    function __construct()
    {
        $this->host = '127.0.0.1';
        $this->database = 'react';
        $this->user = 'root';
        $this->password = '';
        $this->characterSet = 'utf8mb4';
        $this->dsn = "mysql:host=$this->host;dbname=$this->database;charset=$this->characterSet";
    }

    private function connect()
    {
        try {
            $this->pdo = new PDO($this->dsn, $this->user, $this->password, $this->options);
        } catch (PDOException $e) {
            $this->pdo = null;
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    private function disconnect()
    {
        $this->pdo = null;
    }


    protected function select(array $fieldNames, string $table, string $whereField = '', string $whereCondition = ''): array
    {
        $selectQuery = 'SELECT (';
        foreach ($fieldNames as $fieldName) {
            $selectQuery .= "$fieldName, ";
        }
        $selectQuery = mb_substr($selectQuery, 0, -2);
        $selectQuery .= ") FROM ($table)";
        if ($whereField != '' && $whereCondition != '') {
            $selectQuery .= " WHERE $whereField = \"$whereCondition\"";
        }

        $this->connect();
        $statement = $this->pdo->prepare($selectQuery);
        $statement->execute();
        $data = $statement->fetchAll();
        $this->disconnect();
        return $data;
    }

    protected function insert(array $fields, string $table): void
    {
        $values = [];
        $insertQuery = "INSERT INTO $table (";
        $replaceString = '';
        foreach($fields as $fieldName => $value) {
            $insertQuery .= "$fieldName, ";
            $replaceString .= '?, ';
            $values[] = $value;
        }
        $insertQuery = mb_substr($insertQuery, 0, -2);
        $replaceString = mb_substr($replaceString, 0, -2);
        $insertQuery .= ") VALUES ($replaceString)";

        $this->connect();
        $statement = $this->pdo->prepare($insertQuery);
        $statement->execute($values);
        $this->disconnect();
    }
}
?>