<?php

class User
{
    private string $username;
    private string $email;
    private string $password;

    public function __construct($dataObject)
    {
        $this->username = $dataObject->username ?? '';
        $this->email = $dataObject->email ?? '';
        $this->password = $dataObject->password ?? '';
    }

    public function areFieldsValid(): bool
    {
        if(
            $this->isEmptyString($this->username) ||
            $this->isEmptyString($this->email) ||
            $this->isEmptyString($this->password)
        ) {
            return false;
        }
    }

    private function isEmptyString(string $string): bool
    {
        return $string === '';
    }
}