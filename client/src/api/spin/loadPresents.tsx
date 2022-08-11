import { useCallback, useEffect } from "react";
import { useHttp } from "../http.hook";

export default function useLoadPresentsApi() {
     const { request, error, clearError, loading } = useHttp();

     useEffect(() => {
          if (error) {
               setTimeout(() => clearError(), 2000);
          }
     }, [error, clearError]);

     const loadPresents = useCallback(async () => {
          const data = await request({
               url: "/api/spin/load-presents",
               method: "GET",
          });

          return data;
     }, [request]);

     return { loadPresents, loading };
}
