<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table("products")->insert([
            [
                'name' => 'Hotdog',
                'desc' => 'Mahaba na mainit',
                'price' => 15,
            ],
            [
                'name' => 'Burger',
                'desc' => 'Plat na mainit',
                'price' => 35,
            ],
            [
                'name' => 'Siopao',
                'desc' => 'Bilog na mainit',
                'price' => 25,
            ],
            [
                'name' => 'Footlong',
                'desc' => 'Mas mahaba na mainit',
                'price' => 45,
            ],
            [
                'name' => 'Turon',
                'desc' => 'Mahaba din pero saging',
                'price' => 20,
            ],
            [
                'name' => 'Tao',
                'desc' => 'Mahaba din to kaso buhay',
                'price' => 10000000,
            ],
            [
                'name' => 'Fishball',
                'desc' => 'Maliit na bilog na mainit',
                'price' => 1,
            ],
            [
                'name' => 'KwekKwek',
                'desc' => 'Description',
                'price' => 10,
            ],
            [
                'name' => 'Kikkyam',
                'desc' => 'Description',
                'price' => 2,
            ],
            [
                'name' => 'Shawarma',
                'desc' => 'Description',
                'price' => 80,
            ],
        ]);        
    }
}
