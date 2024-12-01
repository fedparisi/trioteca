<?php

namespace App\Services;

use App\Events\AppraisalRequestUpdating;
use App\Models\AppraisalRequest;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class AppraisalRequestService
 *
 * This service handles the business logic related to AppraisalRequests.
 *
 * @package App\Services
 */
class AppraisalRequestService
{
    use ModelTransactionable;

    /**
     * Get all appraisal requests with related data.
     *
     * @return Builder
     */
    public function findAll(): Builder
    {
        return AppraisalRequest::withRelations(AppraisalRequest::query());
    }

     /**
     * Get a single appraisal request with related data.
     *
     * @param int $id
     * @return Builder
     */
    public function findById(int $id): AppraisalRequest
    {
        return AppraisalRequest::withRelations(AppraisalRequest::query())->find($id);
    }

    /**
     * Create a new appraisal request with the provided data.
     *
     * @param array $data
     * @return \App\Models\AppraisalRequest
     */
    public function create(array $data): AppraisalRequest
    {
        return AppraisalRequest::create([
            ...$data,
            'user_id' => User::DEFAULT_MANAGER_ID,
        ]);
    }

}
