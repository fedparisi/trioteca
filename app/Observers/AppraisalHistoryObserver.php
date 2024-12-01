<?php

namespace App\Observers;

use App\Models\AppraisalHistory;
use App\Notifications\AppraisalStatusChanged;
use Illuminate\Support\Facades\Notification;

class AppraisalHistoryObserver
{
    /**
     * Handle the AppraisalHistory "created" event.
     */
    public function created(AppraisalHistory $appraisalHistory): void
    {
        $appraisalRequest = $appraisalHistory->appraisalRequest;
        $user = $appraisalRequest->user; 
        // Send notification
        Notification::send($user, new AppraisalStatusChanged($appraisalHistory));
    }

    /**
     * Handle the AppraisalHistory "updated" event.
     */
    public function updated(AppraisalHistory $appraisalHistory): void
    {
        //
    }

    /**
     * Handle the AppraisalHistory "deleted" event.
     */
    public function deleted(AppraisalHistory $appraisalHistory): void
    {
        //
    }

    /**
     * Handle the AppraisalHistory "restored" event.
     */
    public function restored(AppraisalHistory $appraisalHistory): void
    {
        //
    }

    /**
     * Handle the AppraisalHistory "force deleted" event.
     */
    public function forceDeleted(AppraisalHistory $appraisalHistory): void
    {
        //
    }
}
