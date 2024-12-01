<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Symfony\Component\HttpFoundation\Response as SymfonyHttpResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Response;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Response::macro('apiResponse', $this->getApiResponseCallable());
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }

     /**
     * Return a callable added at runtime into the Response service.
     * The returned function is used in all endpoints to respond requests.
     *
     * @return callable
     */
    protected function getApiResponseCallable(): callable
    {
        return function (
            mixed $data = null,
            int $status = SymfonyHttpResponse::HTTP_OK,
            ?string $message = null
        ): JsonResponse {
            $message = $message ?? SymfonyHttpResponse::$statusTexts[$status];
            $response = transform($data, function ($data) {
                if ($data instanceof JsonResource) {
                    return $data->response()->getData(true);
                }

                return $data;
            });

            return Response::json([
                'data' => $response,
                'message' => $message,
                'status' => $status
            ])->setStatusCode($status);
        };
    }
}
