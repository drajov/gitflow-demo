import { i18n } from "../config/i18n";

export interface IMessage {
  code: string | number;
  message: string;
}

export interface IMessageData {
  invalid_request: () => IMessage;
}

export const messages: IMessageData = {
  invalid_request: () => ({
    code: "INVALID_REQUEST",
    message: i18n.__("invalid_request"),
  }),
};
