import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config/query.config";
import type { ReactNode } from "react";

interface Provider {
    children: ReactNode;
}

export const QueryProvider = ({ children }: Provider) => {
    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    );
};