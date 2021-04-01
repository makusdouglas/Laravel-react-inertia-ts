<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AppController extends Controller
{
    public function show(Event $event)
    {
        return Inertia::render('Event/show', [
            'event' => $event->only(
                'id',
                'title',
                'start_date',
                'description'
            )
        ]);
    }
}
