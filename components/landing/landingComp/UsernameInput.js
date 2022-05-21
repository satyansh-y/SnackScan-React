import react from "react";
import Input from "@mui/material/Input"
import { popoverClasses, TextField } from "@mui/material";

const UsernameInput = (props) => {
    const input = {}
    return(
        <div>  
            <TextField id="standard-basic" placeholder= {props.title} variant="standard" 
            fullWidth  value={props.username} onChange={props.onChange}/>
        </div>

    ); 
    


}

export default UsernameInput; 