import react from "react";
import Input from "@mui/material/Input"
import { popoverClasses, TextField } from "@mui/material";

const Email = (props) => {
    const input = {}
    return(
        <div>  
            <TextField id="standard-basic" placeholder= {props.title} variant="standard" label = "Email"
            fullWidth  value={props.email} onChange={props.onChange} helperText={props.helperText} error = {props.error}/>
        </div>

    ); 
    


}

export default Email; 