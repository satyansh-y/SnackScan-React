import react from "react";
import Input from "@mui/material/Input"
import { popoverClasses, TextField } from "@mui/material";

const Number = (props) => {
    const input = {}
    return(
        <div>  
            <TextField id="standard-basic" placeholder= {props.title} variant="standard" 
            fullWidth label = "Phone Number" value={props.value} onChange={props.onChange}/>
        </div>

    ); 
    


}

export default Number; 