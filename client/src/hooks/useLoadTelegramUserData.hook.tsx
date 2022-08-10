import { useEffect, useState } from "react";
import { TelegramUser } from "../types/User";

const useLoadTelegramUserData = () => {
     const [telegramUserData, setTelegramUserData] = useState<TelegramUser>();
     const telegram = window.Telegram.WebApp;
     const rawUser = telegram.initDataUnsafe.user;

     useEffect(() => {
          setTelegramUserData({ name: `${rawUser?.first_name} ${rawUser?.last_name}`, id: rawUser?.id! });
     }, [rawUser?.first_name, rawUser?.last_name, rawUser?.id]);
     if (!rawUser || !rawUser.id) {
          return { telegramUserData: null };
     }

     return { telegramUserData };
};

export default useLoadTelegramUserData;
