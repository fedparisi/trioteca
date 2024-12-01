<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\AppraisalStatus
 *
 * Represents the possible statuses for an appraisal request.
 *
 * @property int $id
 * @property string $name The human-readable name of the status (e.g., "Requested", "In Process").
 * @property string $code A unique code for the status (e.g., "requested", "in_process").
 * @property string|null $description A detailed description of the status.
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\AppraisalStatusFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus query()
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AppraisalStatus whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class AppraisalStatus extends Model
{
    use HasFactory;

    const REQUESTED = 1;
    const IN_PROCESS = 2;
    const COMPLETED = 3;
    const REJECTED = 4;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'code',
        'description',
    ];
}
