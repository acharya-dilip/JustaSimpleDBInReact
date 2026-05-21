<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\User;
use Illuminate\Http\Request;

class adminController extends Controller
{
    public function index()
    {

        $members = Member::latest()->get();

        //        return view('admin.app',compact('members'));

    }

    public function update(Request $request)
    {

        $id = $request->id;

        $member = Member::find($id);
        $member->name = $request->name;
        $member->email = $request->email;
        $member->password = $request->password;
        $member->image = $request->image;
        $member->techStack = $request->techStack;
        $member->number = $request->number;
        $member->dob = $request->dob;
        $member->role = $request->role;
        $member->save();

        if (User::find($id) == null) {
            if ($member->role != null) {
                $user = new User;
                $user->id = $request->id;
                $user->name = $request->name;
                $user->email = $request->email;
                $user->role = $request->role;
                $user->password = $request->password;
                $user->save();
            }

        } elseif (User::find($id) != null) {
            $user = User::find($id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->role = $request->role;
            $user->password = $request->password;
            $user->save();
        }

        //        return redirect(route('admin.index'));

    }

    public function destroy($id)
    {

        $member = Member::findorfail($id);
        if ($member) {
            $member->delete();

            User::find($id)->delete();
        }

        //        return redirect(route('admin.index'));

    }
}
