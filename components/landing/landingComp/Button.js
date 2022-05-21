import react from "react";
import Button from "@mui/material/Button"
import { popoverClasses } from "@mui/material";

const Buttons = (props) => {
    const btnstyle={margin: '8px 0', backgroundColor:"green"}
    return(
        <div>
            <Button variant="contained" fullWidth style={btnstyle} onChange={props.onClick} >{props.name}</Button>
        </div>

    ); 



}

export default Buttons; 
