
import Layout from "@js/components/Layout";
import AppraisalRequestPage from "@js/features/appraisalRequest/pages/AppraisalRequestPage";
import AppraisalHistoryPage from "@js/features/appraisalHistory/pages/AppraisalHistoryPage";
import DashboardPage from "../js/features/dashboard/pages/DashboardPage";
import { AppraisalRequestInfoPage } from "@js/features/appraisalRequest/pages/AppraisalRequestInfoPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "/appraisal-request",
                element: <AppraisalRequestPage />,
            },
            {
                path: "/appraisal-requests/:appraisalRequestId",
                element: <AppraisalRequestInfoPage />,
            },
        ],
    },
];

export default routes;
