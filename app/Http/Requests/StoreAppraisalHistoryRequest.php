<?php

namespace App\Http\Requests;

use App\Rules\ValidAppraisalStatusTransition;
use Illuminate\Foundation\Http\FormRequest;

class StoreAppraisalHistoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'appraisal_request_id' => 'required|exists:appraisal_requests,id',
            'new_status_id'        => [
                'required',
                'exists:appraisal_statuses,id',
                new ValidAppraisalStatusTransition()
            ],
        ];
    }
}
