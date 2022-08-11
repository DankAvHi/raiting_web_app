import useLoadShopsApi from "./loadShops.api";
import useCheckUserApi from "./profile/checkUser.api";
import useVouteApi from "./profile/voute.api";

export function api() {
     return { useLoadShopsApi, useCheckUserApi, useVouteApi };
}
