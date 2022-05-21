import react from "react";
import Input from "@mui/material/Input"
import { popoverClasses, TextField } from "@mui/material";

const Name = (props) => {
    const input = {}
    return(
        <div>  
            <TextField id="standard-basic" label = {props.label} placeholder= {props.title} variant="standard" 
            fullWidth  value={props.name} onChange={props.onChange}/>
        </div>

    ); 
    


}

export default Name; 