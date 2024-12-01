<?php

namespace App\Services\Facades;

use Illuminate\Support\Facades\Facade;
use App\Services\AppraisalRequestService;

class AppraisalRequestFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return AppraisalRequestService::class;
    }
}