import { useCallback, useEffect } from "react";
import { useHttp } from "../http.hook";

export default function useSpinRouletteApi() {
     const { request, error, clearError, loading } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const spinRoulette = useCallback(
          async ({ iduser, idpresent }: { iduser: number; idpresent: number }) => {
               const data = await request({
                    url: "/api/spin/spin",
                    method: "POST",
                    body: { iduser, idpresent },
               });

               return data;
          },
          [request]
     );

     return { spinRoulette, loading };
}
