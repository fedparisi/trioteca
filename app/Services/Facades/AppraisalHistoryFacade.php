<?php

namespace App\Services\Facades;

use App\Services\AppraisalHistoryService;
use Illuminate\Support\Facades\Facade;

class AppraisalHistoryFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return AppraisalHistoryService::class;
    }
}