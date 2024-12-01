import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost/api",
        prepareHeaders: (headers) => {
            headers.set("accept", "application/json");
            headers.set("content-type", "application/json");
            return headers;
        },
    }),
    endpoints: () => ({}), // Define los endpoints aquí
});

export const { endpoints } = apiSlice;

export default apiSlice;
