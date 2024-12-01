<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class StoreAppraisalRequestRequest
 *
 * This class handles the validation of the appraisal request data.
 *
 * @package App\Models
 */
class StoreAppraisalRequestRequest extends FormRequest
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
            'customer_name' => 'required|string|max:255',
            'customer_telephone' => 'required|numeric|min:10',
            'customer_email' => 'required|email|max:255',
            'property_address' => 'required|string|max:255',
            'property_base_price' => 'nullable|numeric|min:0',
            'comments' => 'nullable|string|max:500',
        ];
    }

}
