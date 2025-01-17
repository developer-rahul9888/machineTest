<?php

namespace Database\Seeders;
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Employee;

class EmployeeSeeder extends Seeder
{
    public function run()
    {
        $ramesh = Employee::create(['name' => 'Ramesh']);
        $ramesh->children()->createMany([
            ['name' => 'Gaurav'],
            ['name' => 'Shalu'],
        ]);

        $deepu = Employee::create(['name' => 'Deepu']);
        $deepu->children()->createMany([
            ['name' => 'Amit'],
            ['name' => 'Kapil'],
        ]);

        Employee::create(['name' => 'Sham Lal', 'parent_id' => 3]); // Amit's child
    }
}
