<?php

namespace App\Http\Controllers\members;

use App\Http\Controllers\Controller;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;

class memberController extends Controller
{
    public function store(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'dob' => 'required',
            'number' => 'required',
            'techStack' => 'required',
        ]);

        $member = new Member;

        $member->name = $validate['name'];
        $member->email = $validate['email'];
        $member->password = $validate['password'];
        $member->dob = $validate['dob'];
        $member->techStack = $validate['techStack'];
        $member->number = $validate['number'];

        $member->image = $request->file('image')->store('uploads', 'public');

        $member->save();

        return redirect(route('registration'));

    }

    public function index()
    {

        $members = Member::select('id', 'name', 'email', 'role', 'techStack', 'number', 'dob', 'image')->oldest()->get();

        return Inertia::render('members/Members', ['members' => $members], []);

    }
}
