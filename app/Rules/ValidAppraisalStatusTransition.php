<?php

namespace App\Rules;

use App\Models\AppraisalRequest;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ValidAppraisalStatusTransition implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $appraisalRequestId = request()->input('appraisal_request_id');
        $appraisalRequest = AppraisalRequest::find($appraisalRequestId);
        if (!$appraisalRequest) {
            return;
        }
        // Get last status in history
        $lastAppraisalHistory = $appraisalRequest->lastAppraisalHistory;
        $currentStatusId = $lastAppraisalHistory ? $lastAppraisalHistory->new_status_id : null;

        // Valid transition 
        if (!$this->isValidTransition($currentStatusId, $value)) {
            $fail('La tasación no puede cambiar a el estado ingresado.');
        }
    }

    /**
     * Check if the state transition is valid.
     *
     * @param  int|null  $currentStatusId
     * @param  int  $newStatusId
     * @return bool
     */
    protected function isValidTransition(?int $currentStatusId, int $newStatusId): bool
    {
        switch ($currentStatusId) {
            case 1: // REQUESTED
                return in_array($newStatusId, [2, 4]);  
            case 2: // IN_PROCESS
                return in_array($newStatusId, [3, 4]); // Can pass to COMPLETED or REJECTED
            case 3: // COMPLETED
                return false; // can't pass
            case 4: // REJECTED
                return false; // can't pass
            default:
                return false;
        }
    }
}
