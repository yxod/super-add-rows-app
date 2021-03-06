import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import { button as classButton } from "./Table.module.css";

export const RowsList = ({ deleteRow, rows }) => {
  return (
    <List>
      {rows &&
        rows.map(rowData => (
          <div key={rowData.id}>
            <ListItem>
              <ListItemText primary={rowData.row} />
              <div className={classButton}>
                <Button
                  onClick={() => {
                    deleteRow(rowData.id);
                  }}
                  color="secondary"
                >
                  Delete row
                </Button>
              </div>
            </ListItem>
            <Divider></Divider>
          </div>
        ))}
    </List>
  );
};
