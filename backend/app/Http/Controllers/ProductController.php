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
   
    public function destroy($id)
    {
        $product = Products::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'Product removed successfully']);
    }
    public function addProduct(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'desc' => 'required|string',
        ]);

        // Create a new product instance and save it to the database
        $product = new Products();
        $product->name = $validatedData['name'];
        $product->price = $validatedData['price'];
        $product->desc = $validatedData['desc'];
        $product->save();

        // Optionally, you can return a response if needed
        return response()->json(['message' => 'Product added successfully'], 201);
    }

}
