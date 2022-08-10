import { useCallback, useEffect } from "react";
import { useHttp } from "./http.hook";

export default function useLoadShopsApi() {
     const { request, error, clearError, loading } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const loadShops = useCallback(
          async ({ nomination }: { nomination: string }) => {
               const data = await request({
                    url: "/api/load-shops",
                    method: "POST",
                    body: { nomination },
               });

               return data;
          },
          [request]
     );

     return { loadShops, loading };
}
