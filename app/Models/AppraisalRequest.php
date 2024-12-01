<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Models\AppraisalRequest
 *
 * Represents a request for property appraisal, including customer and property details.
 *
 * @property int $id
 * @property string $customer_name
 * @property string $customer_telephone
 * @property string $customer_email
 * @property string $property_address
 * @property float|null $property_base_price
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\AppraisalHistory> $appraisalHistories
 * @property-read \App\Models\AppraisalHistory|null $lastAppraisalHistory
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest query()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest whereCustomerName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest whereCustomerTelephone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest whereCustomerEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest wherePropertyAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest wherePropertyBasePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalRequest whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AppraisalRequest extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'customer_name',
        'customer_telephone',
        'customer_email',
        'property_address',
        'property_base_price',
        'user_id',
    ];

    /**
     * Get the user who created the appraisal request.
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the appraisal histories associated with this request.
     *
     * @return HasMany
     */
    public function appraisalHistories(): HasMany
    {
        return $this->hasMany(AppraisalHistory::class);
    }

    /**
     * Get the most recent appraisal history for this request.
     *
     * @return HasOne
     */
    public function lastAppraisalHistory(): HasOne
    {
        return $this->appraisalHistories()->one()->latestOfMany();
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
            'lastAppraisalHistory.newStatus',
            'appraisalHistories.previousStatus',
            'appraisalHistories.newStatus',
            'appraisalHistories.user',
            'user',
        );
    }
}
