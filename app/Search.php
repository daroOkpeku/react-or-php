<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Nicolaslopezj\Searchable\SearchableTrait;

class Search extends Model
{
 use Notifiable;
 use SearchableTrait;
 protected $searchable  = [
      "columns"=>[
          "searches.customerName"=>10,
          "searches.gender"=>10,
          "searches.address"=>10,
          "searches.city"=>10,
          "searches.postalCode"=>10,
          "searches.country"=>10,
          "searches.id"=> 10,
      ]
    ];

    protected $fillable = [
   "customerName", "gender", "address", "city", "postalCode", "country",
    ];


}
