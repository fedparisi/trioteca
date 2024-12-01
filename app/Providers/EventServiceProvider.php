<?php

namespace App\Providers;

use App\Models\AppraisalHistory;
use App\Models\AppraisalRequest;
use App\Observers\AppraisalHistoryObserver;
use App\Observers\AppraisalRequestObserver;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $observers = [
        AppraisalRequest::class => [
            AppraisalRequestObserver::class,
        ],
        // AppraisalHistory::class => [
        //     AppraisalHistoryObserver::class,
        // ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
