import { useCallback, useEffect } from "react";
import { useHttp } from "../http.hook";

export default function useCheckUserApi() {
     const { request, error, clearError, loading } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const checkUser = useCallback(
          async ({ id }: { id: number }) => {
               const data = await request({
                    url: "/api/profile/check-user",
                    method: "POST",
                    body: { id },
               });

               return data;
          },
          [request]
     );

     return { checkUser, loading };
}
