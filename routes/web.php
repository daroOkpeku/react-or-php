<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::post("/send", "HomeController@send");
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/one', 'HomeController@one')->name('one');


Route::get('/search', 'searchController@search');
Route::post('/search/find', 'searchController@find')->name('search.find');