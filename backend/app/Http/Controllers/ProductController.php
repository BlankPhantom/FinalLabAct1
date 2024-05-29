<?php

namespace App\Http\Controllers;

use App\Models\Products;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //view
    public function index() {
        $products = Products::all();
        return response()->json($products);
    }
   
}
