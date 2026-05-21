<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class dashboardController extends Controller
{
    public function store(Request $request)
    {
        $valid = request()->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $post = new Post;

        $post->title = $valid['title'];
        $post->description = $valid['description'];

        $post->image_path = $request->file('image')->store('uploads', 'public');

        $post->save();

    }
}
