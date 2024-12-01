import apiSlice from "@js/features/api/slices/apiSlice";

const appraisalRequestApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAppraisalRequests: builder.query({
            query: () => ({
                url: "/appraisal-requests",
            }),
            providesTags: ['AppraisalRequest'],
        }),
        getAppraisalRequestById: builder.query({
            query: (appraisalRequestId) => `/appraisal-requests/${appraisalRequestId}`,
            providesTags: (result, error, appraisalRequestId) => [
                { type: "AppraisalRequest", id: appraisalRequestId },
            ],
        }),
        createAppraisalRequest: builder.mutation({
            query: (newAppraisal) => ({
                url: '/appraisal-requests',
                method: 'POST',
                body: newAppraisal,
            }),
            invalidatesTags: ['AppraisalRequest'], 
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetAppraisalRequestsQuery,
    useGetAppraisalRequestByIdQuery,
    useCreateAppraisalRequestMutation,
} = appraisalRequestApi;
