<?php

namespace App\Repositories;

use App\Models\User;
use App\Models\Project;

class AdminRepository
{
    protected $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    // Get all users
    public function getAll()
    {
        return $this->model->all();
    }

    // Find user by ID
    public function find($id)
    {
        return $this->model->findOrFail($id);
    }

    // Create a new user
    public function create(array $data)
    {
        return $this->model->create($data);
    }

    // Update user
    public function update($id, array $data)
    {
        $user = $this->find($id);
        $user->update($data);
        return $user;
    }

    // Delete user
    public function delete($id)
    {
        $user = $this->find($id);
        return $user->delete();
    }

    public function getProjectCount() {
        return Project::count();
    }
}
