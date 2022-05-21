import react from "react";
import Input from "@mui/material/Input"
import { popoverClasses, TextField } from "@mui/material";

const PasswordInput = (props) => {
    const input = {}
    return(
        <div>  
            <TextField id="standard-basic" placeholder= {props.title} variant="standard" 
            fullWidth  value={props.password} label = {props.label} onChange={props.onChange} helperText = {props.helperText} error = {props.error}/>
        </div>

    ); 
    


}

export default PasswordInput; 