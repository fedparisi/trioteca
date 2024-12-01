<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAppraisalRequestRequest;
use App\Http\Resources\AppraisalRequestResource;
use App\Models\AppraisalRequest;
use Illuminate\Http\Response;

use AppraisalRequestService;

class AppraisalRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->apiResponse(
            AppraisalRequestResource::collection(
                AppraisalRequestService::findAll()->paginate(10)
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAppraisalRequestRequest $request)
    {
        $appraisalRequest = AppraisalRequestService::enableTransactions()->create($request->validated());

        return response()->apiResponse(
            new AppraisalRequestResource($appraisalRequest),
            Response::HTTP_CREATED
        );
    }

    /**
     * Display a single appraisal request.
     *
     * @param \App\Models\AppraisalRequest $appraisalRequest
     * @return \Illuminate\Http\Response
     */
    public function show(AppraisalRequest $appraisalRequest)
    {
        return response()->apiResponse(
            new AppraisalRequestResource(
                AppraisalRequestService::findById($appraisalRequest->id)
            )
        );
    }

}
