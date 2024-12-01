<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AppraisalHistoryResource extends JsonResource
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
            'appraisal_request' => new AppraisalRequestResource($this->whenLoaded('appraisalRequest')), 
            'previous_status' => new AppraisalStatusResource($this->whenLoaded('previousStatus')),  
            'new_status' => new AppraisalStatusResource($this->whenLoaded('newStatus')), 
            'user' => new UserResource($this->whenLoaded('user')), 
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
