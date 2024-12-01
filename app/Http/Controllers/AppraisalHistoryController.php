<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAppraisalHistoryRequest;
use App\Http\Resources\AppraisalHistoryResource;
use App\Models\AppraisalHistory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use AppraisalHistoryService;

class AppraisalHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->apiResponse(
            AppraisalHistoryResource::collection(
                AppraisalHistoryService::findAll()->paginate(10)
            )
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAppraisalHistoryRequest $request)
    {
        $appraisalHistory = AppraisalHistoryService::enableTransactions()->create($request->validated());

        return response()->apiResponse(
            new AppraisalHistoryResource($appraisalHistory),
            Response::HTTP_CREATED
        );
    }

   /**
     * Display a single appraisal history.
     *
     * @param \App\Models\AppraisalHistory $appraisalHistory
     * @return \Illuminate\Http\Response
     */
    public function show(AppraisalHistory $appraisalHistory)
    {
        return response()->apiResponse(
            new AppraisalHistoryResource(
                AppraisalHistoryService::findById($appraisalHistory->id)
            )
        );
    }
}
