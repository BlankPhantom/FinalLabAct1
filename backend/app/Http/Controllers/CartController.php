<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Checkout;
use Illuminate\Http\Request;

class CartController extends Controller
{
    //
    public function checkout(Request $request)
    {
        // Validate the incoming request data if needed
        $validatedData = $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'amount' => 'required|numeric',
            'change' => 'required|numeric',
        ]);

        // Insert data into database
        $checkout = new Checkout();
        $checkout->name = $validatedData['name'];
        $checkout->address = $validatedData['address'];
        $checkout->city = $validatedData['city'];
        $checkout->amount = $validatedData['amount'];
        $checkout->change = $validatedData['change'];
        $checkout->save();

        // Optionally, you can return a response if needed
        return response()->json(['message' => 'Order placed successfully'], 201);
    }
    
}
