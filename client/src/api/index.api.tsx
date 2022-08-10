import useLoadShopsApi from "./loadShops.api";
import useCheckUserApi from "./profile/checkUser.api";

export function api() {
     return { useLoadShopsApi, useCheckUserApi };
}
