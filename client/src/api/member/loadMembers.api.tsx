import { useCallback, useEffect } from "react";
import { useHttp } from "../http.hook";

export default function useLoadMembersApi() {
     const { request, error, clearError, loading } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const loadMembers = useCallback(
          async ({ nomination }: { nomination: string }) => {
               const data = await request({
                    url: "/api/member/load-members",
                    method: "POST",
                    body: { nomination },
               });

               return data;
          },
          [request]
     );

     return { loadMembers, loading };
}
