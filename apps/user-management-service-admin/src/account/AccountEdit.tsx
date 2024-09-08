import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="attempts" source="attempts" />
        <TextInput label="billingid" source="billingid" />
        <TextInput label="billingusers" multiline source="billingusers" />
        <DateTimeInput label="created_date" source="createdDate" />
        <NumberInput step={1} label="credits" source="credits" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="info" multiline source="info" />
        <DateTimeInput label="last_update_date" source="lastUpdateDate" />
        <TextInput label="password" source="password" />
        <TextInput label="recovery" source="recovery" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
