import { useCallback, useEffect } from "react";
import { useHttp } from "../http.hook";

export default function useVouteApi() {
     const { request, error, clearError, loading } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const voute = useCallback(
          async ({ id, nomination }: { id: number; nomination: string }) => {
               const data = await request({
                    url: "/api/profile/voute",
                    method: "POST",
                    body: { id, nomination },
               });

               return data;
          },
          [request]
     );

     return { voute, loading };
}
