<?php
include 'Base/Database.php';

class UserService extends Database
{
    private const USER_TABLE = 'user';

    private const USERNAME = 'username';
    private const EMAIL = 'email';
    private const PASSWORD = 'password';

    function __construct()
    {
        parent::__construct();
    }

    public function isUsernameUnique(string $username): bool
    {
        if ($this->select([self::USERNAME], self::USER_TABLE, self::USERNAME, $username) != []) {
            return false;
        }
        return true;
    }

    function isEmailUnique(string $email): bool
    {
        if ($this->select([self::EMAIL], self::USER_TABLE, self::EMAIL, $email) != []) {
            return false;
        }
        return true;
    }

    public function insertNewUser(array $user)
    {
        $this->insert($user, self::USER_TABLE);
    }
    
}
