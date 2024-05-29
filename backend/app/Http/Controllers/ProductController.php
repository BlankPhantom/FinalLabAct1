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

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'desc' => 'required|string',
        ]);

        $product = Products::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->name = $validatedData['name'];
        $product->price = $validatedData['price'];
        $product->desc = $validatedData['desc'];
        $product->save();

        return response()->json(['message' => 'Product updated successfully'], 200);
    }
   
}
