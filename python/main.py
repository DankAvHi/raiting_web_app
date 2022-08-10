from aiogram import Bot, Dispatcher, executor, types
from aiogram.types import (InlineKeyboardButton, InlineKeyboardMarkup,
                           ReplyKeyboardMarkup, ReplyKeyboardRemove)
from aiogram.types.web_app_info import WebAppInfo

API_TOKEN = '5537845742:AAEITa2V7OpeEjiXWjSG53ZLfj_7gS1MfTc'

bot = Bot(token=API_TOKEN)
dp = Dispatcher(bot)


@dp.message_handler(commands="start")
async def cmd_start(message: types.Message):

    await message.answer("test",
                         reply_markup=ReplyKeyboardMarkup().add(InlineKeyboardButton(text="test",
                                                                                     web_app=WebAppInfo(url="https://4eb6-185-3-34-68.eu.ngrok.io/"))))

if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)
