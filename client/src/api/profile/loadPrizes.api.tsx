import { useCallback, useEffect } from "react";
import { useHttp } from "../http.hook";

export default function useLoadPrizesApi() {
     const { request, error, clearError, loading } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const loadPrizes = useCallback(
          async ({ id }: { id: number }) => {
               const data = await request({
                    url: "/api/profile/load-prizes",
                    method: "POST",
                    body: { id },
               });

               return data;
          },
          [request]
     );

     return { loadPrizes, loading };
}
