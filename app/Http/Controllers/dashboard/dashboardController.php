<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class dashboardController extends Controller
{
    public function index()
    {

        $posts = Post::latest()->get();

        return Inertia::render('dashboard/Dashboard', [
            'posts' => $posts,
        ]);
    }

    public function store(Request $request)
    {
        $valid = request()->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $post = new Post;

        $post->title = $valid['title'];
        $post->description = $valid['description'];

        $post->image = $request->file('image')->store('uploads', 'public');

        $post->save();

        return redirect(route('dashboard'));

    }
}
