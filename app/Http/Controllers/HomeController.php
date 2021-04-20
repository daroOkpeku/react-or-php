<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function one()
    {
        return view('one');
        
    }

     public function send(Request $request)
    {
        /**response()->json this get the data from axios */
        // return response()->json([$request->all()]);
         User::create($request->all());
    }
}
