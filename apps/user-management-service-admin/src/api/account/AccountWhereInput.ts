import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  attempts?: IntNullableFilter;
  billingid?: StringNullableFilter;
  billingusers?: StringNullableFilter;
  createdDate?: DateTimeNullableFilter;
  credits?: IntNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  info?: StringNullableFilter;
  lastUpdateDate?: DateTimeNullableFilter;
  password?: StringNullableFilter;
  recovery?: StringNullableFilter;
  status?: StringNullableFilter;
};
