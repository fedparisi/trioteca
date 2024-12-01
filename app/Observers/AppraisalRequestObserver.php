<?php

namespace App\Observers;

use App\Models\AppraisalHistory;
use App\Models\AppraisalRequest;
use App\Models\AppraisalStatus;
use App\Models\User;

class AppraisalRequestObserver
{
    /**
     * Handle the AppraisalRequest "created" event.
     */
    public function created(AppraisalRequest $appraisalRequest): void
    {
        AppraisalHistory::create([
            'appraisal_request_id' => $appraisalRequest->id,
            'previous_status_id' => null,
            'new_status_id' => AppraisalStatus::REQUESTED, 
            'user_id' => User::DEFAULT_MANAGER_ID, 
        ]);
    }

    /**
     * Handle the AppraisalRequest "updated" event.
     */
    public function updated(AppraisalRequest $appraisalRequest): void
    {
        //
    }

    /**
     * Handle the AppraisalRequest "deleted" event.
     */
    public function deleted(AppraisalRequest $appraisalRequest): void
    {
        //
    }

    /**
     * Handle the AppraisalRequest "restored" event.
     */
    public function restored(AppraisalRequest $appraisalRequest): void
    {
        //
    }

    /**
     * Handle the AppraisalRequest "force deleted" event.
     */
    public function forceDeleted(AppraisalRequest $appraisalRequest): void
    {
        //
    }
}
