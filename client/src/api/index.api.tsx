import useLoadMembersApi from "./member/loadMembers.api";
import useCheckUserApi from "./profile/checkUser.api";
import useLoadPrizesApi from "./profile/loadPrizes.api";
import useVouteApi from "./profile/voute.api";
import useLoadPresentsApi from "./spin/loadPresents";
import useSpinRouletteApi from "./spin/spinRoulette";

export function api() {
     return {
          useLoadMembersApi,
          useCheckUserApi,
          useVouteApi,
          useSpinRouletteApi,
          useLoadPresentsApi,
          useLoadPrizesApi,
     };
}
