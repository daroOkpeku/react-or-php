<?php

namespace App\Http\Controllers;

use App\search;
use Illuminate\Http\Request;

class searchController extends Controller
{
    public function search()
    {
       return view("search");
    }

     public function find (Request  $request)
    {
      // $data = search::search($request->get("CustomerName"))->get();
     // Search_query  this to filter all the data from the database
     if ($request->has("customerName")) {
       
         $data = Search::search($request->get("customerName"))->take(7)->get();
          return response()->json($data);
         //   return $data;
        
     }
    }
}
