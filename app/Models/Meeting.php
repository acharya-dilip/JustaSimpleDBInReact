<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model
{
    protected $table = 'meetings';

    protected $primaryKey = 'id';

    protected $fillable = ['agenda', 'description', 'time', 'date', 'location', 'latitude', 'longitude'];
}
