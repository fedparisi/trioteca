<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\AppraisalHistory
 *
 * Represents the historical changes in the status of an appraisal request.
 *
 * @property int $id
 * @property int $appraisal_request_id
 * @property int $previous_status_id
 * @property int $new_status_id
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\AppraisalRequest $appraisalRequest
 * @property-read \App\Models\AppraisalStatus $previousStatus
 * @property-read \App\Models\AppraisalStatus $newStatus
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory query()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory whereAppraisalRequestId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory wherePreviousStatusId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory whereNewStatusId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalHistory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AppraisalHistory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'appraisal_request_id',
        'previous_status_id',
        'new_status_id',
        'user_id',
    ];

    /**
     * Get the appraisal request associated with the history record.
     *
     * @return BelongsTo
     */
    public function appraisalRequest(): BelongsTo
    {
        return $this->belongsTo(AppraisalRequest::class);
    }

    /**
     * Get the previous status associated with the history record.
     *
     * @return BelongsTo
     */
    public function previousStatus(): BelongsTo
    {
        return $this->belongsTo(AppraisalStatus::class, 'previous_status_id');
    }

    /**
     * Get the new status associated with the history record.
     *
     * @return BelongsTo
     */
    public function newStatus(): BelongsTo
    {
        return $this->belongsTo(AppraisalStatus::class, 'new_status_id');
    }

    /**
     * Get the user who made the status change.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Load common relations for the appraisal request.
     *
     * @param  Builder $query
     * @return Builder
     */
    public static function withRelations($query): Builder
    {
        return $query->with(
            'appraisalRequest',
            'previousStatus',
            'newStatus',
            'user'
        );
    }
}
