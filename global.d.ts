// global.d.ts

import en from "./public/locales/en/messages.json";

type Messages = typeof en;

declare global {
  type IntlMessages = Messages;
}
