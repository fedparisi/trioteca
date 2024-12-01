<?php

namespace App\Services;

use App\Models\AppraisalHistory;
use App\Models\AppraisalRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class AppraisalHistoryService
 *
 * This service handles the business logic related to AppraisalHistory.
 *
 * @package App\Services
 */
class AppraisalHistoryService
{
    use ModelTransactionable;

    /**
     * Get all appraisal histories with related data.
     *
     * @return Builder
     */
    public function findAll(): Builder
    {
        return AppraisalHistory::withRelations(AppraisalHistory::query());
    }

     /**
     * Get a single appraisal history with related data.
     *
     * @param int $id
     * @return Builder
     */
    public function findById(int $id): AppraisalHistory
    {
        return AppraisalHistory::withRelations(AppraisalHistory::query())->find($id);
    }

    /**
     * Create a new appraisal history with the provided data.
     *
     * @param array $data
     * @return \App\Models\AppraisalRequest
     */
    public function create(array $data): AppraisalHistory
    {
        /** AppraisalHistory appraisalRequest */
        $appraisalRequest = AppraisalRequest::find($data['appraisal_request_id']);

        return AppraisalHistory::create([
            ...$data,
            'previous_status_id' => $appraisalRequest->lastAppraisalHistory()->first()->new_status_id,
            'user_id' => User::DEFAULT_MANAGER_ID,
        ]);
    }

}
