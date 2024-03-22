import { List, ListItem,  ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
const Todo = ({ arr }) => {
  return (
    <List className="flex items-center w-[800px] border border-solid border-black mb-3 mt-5 rounded-md whitespace-normal">
      <ListItem alignItems="flex-start">
        <ListItemText secondary={arr.item.todo}/>
      </ListItem>
      <DeleteIcon
        fontSize="large"
        style={{ opacity: 0.7 ,marginRight:50}}
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </List>
  );
};
export default Todo;