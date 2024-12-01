import apiSlice from "@js/features/api/slices/apiSlice";

const appraisalHistoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAppraisalHistories: builder.query({
            query: () => ({
                url: "/appraisal-history",
            }),
            providesTags: ['AppraisalHistory'],
        }),
        getAppraisalHistoryById: builder.query({
            query: (appraisalHistoryId) => `/appraisal-history/${appraisalHistoryId}`,
            providesTags: (result, error, appraisalHistoryId) => [
                { type: "AppraisalHistory", id: appraisalHistoryId },
            ],
        }),
        createAppraisalHistory: builder.mutation({
            query: (newAppraisalHistory) => ({
                url: '/appraisal-history',
                method: 'POST',
                body: newAppraisalHistory,
            }),
            invalidatesTags: ['AppraisalHistory', 'AppraisalRequest'], 
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetAppraisalHistoriesQuery,
    useGetAppraisalHistoryByIdQuery,
    useCreateAppraisalHistoryMutation,
} = appraisalHistoryApi;
