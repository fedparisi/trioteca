<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;

/**
 * trait ModelTransactionable
 * This trait provides methods for run db transactions only when enable it.
 * 
 * @package App\Service
 */
trait ModelTransactionable
{
    protected $useTransactions = false;

    public function enableTransactions(): static
    {
        $this->useTransactions = true;

        return $this;
    }

    public function disableTransactions(): static
    {
        $this->useTransactions = false;

        return $this;
    }

    public function runTransaction(callable $callable): mixed
    {
        return $this->useTransactions ? DB::transaction($callable) : $callable();
    }
}
