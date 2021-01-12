import React from "react";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const AdminPanel = (props) => {
  return (
    <Paper>
      <div>
        <IconButton>
          <EditIcon />
        </IconButton>
      </div>
      <div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default AdminPanel;
