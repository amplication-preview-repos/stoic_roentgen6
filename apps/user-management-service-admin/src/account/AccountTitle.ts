import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "billingid";

export const AccountTitle = (record: TAccount): string => {
  return record.billingid?.toString() || String(record.id);
};
