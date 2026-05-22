<?php

use App\Http\Controllers\admin\adminController;
use App\Http\Controllers\dashboard\dashboardController;
use App\Http\Controllers\members\memberController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [dashboardController::class, 'index',
])->middleware(['auth', 'verified'])->name('dashboard.index');

Route::get('/dashboard/create', function () {
    return Inertia::render('dashboard/Create');
})->middleware(['auth', 'verified'])->name('dashboard.Create');

Route::post('/dashboard/create', [dashboardController::class, 'store',
])->name('dashboard.store');

Route::get('/members', [memberController::class, 'index',
])->middleware(['auth', 'verified'])->name('members.index');

Route::post('/members', [memberController::class, 'store',
])->name('members.store');

Route::get('/registration', function () {
    return Inertia::render('Registration');
})->name('registration');

Route::get('/meeting', function () {
    return Inertia::render('Meeting');
})->middleware(['auth', 'verified'])->name('meeting');

Route::get('/admin', [adminController::class, 'index',
])->middleware(['auth', 'verified'])->name('admin.index');

Route::post('/admin/update/{id}', [adminController::class, 'update',
])->middleware(['auth', 'verified'])->name('admin.update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
