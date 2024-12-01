<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AppraisalRequestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'customer_name' => $this->customer_name,
            'customer_telephone' => $this->customer_telephone,
            'customer_email' => $this->customer_email,
            'property_address' => $this->property_address,
            'property_base_price' => $this->property_base_price,
            'user' => new UserResource($this->whenLoaded('user')),
            'last_appraisal_history' => new AppraisalHistoryResource($this->whenLoaded('lastAppraisalHistory')), 
            'appraisal_histories' => AppraisalHistoryResource::collection($this->whenLoaded('appraisalHistories')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
