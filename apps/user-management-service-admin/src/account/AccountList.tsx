import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="attempts" source="attempts" />
        <TextField label="billingid" source="billingid" />
        <TextField label="billingusers" source="billingusers" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="created_date" source="createdDate" />
        <TextField label="credits" source="credits" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="info" source="info" />
        <TextField label="last_update_date" source="lastUpdateDate" />
        <TextField label="password" source="password" />
        <TextField label="recovery" source="recovery" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
