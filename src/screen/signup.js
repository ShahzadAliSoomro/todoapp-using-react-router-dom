import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../config/firebasemethods";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
     
    const signupuser=()=>{
        navigate("/login")
        signUpUser({
            email,
            password,
            userName: "Shahzad Ali",
            contact: "123sahza",
        })
            .then((success) => {
                console.log(success);
            })
            .catch((error) => {
                console.log(error);
            });
    }
   

    return (
        <>
            <h1>Signup</h1>
            <Box>
                <Box>
                    <TextField
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        variant="standard"
                    />
                </Box>
                <Box>
                    <TextField
                        label="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        variant="standard"
                    />
                </Box>
            </Box>
            <button onClick={signupuser}>Sign Up</button>
        </>
    );
}
export default Signup;