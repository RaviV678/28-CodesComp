import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../Styling/Forms.module.css";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {Avatar} from "@mui/material";

function SignUpforms() {
   
    return (
        
        <form>    
             <Box 
                display="flex" flexDirection='column' maxWidth={400} alignItems='center' justifyContent='center'
                margin='auto'
                marginTop={5}
                padding={5}
                borderRadius={5}
                boxShadow={" 5px 5px 10px #ccc"}
                sx={{
                    ":hover": {
                        boxShadow: '10px 10px 20px #ccc'
                    }
                }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar>
            
                <Typography variant="h3" padding={3} textAlign='center'>SignUp</Typography>
                <TextField  sx={{ marginBottom: 3 }}
                label="Name"
                fullWidth
                />
                <TextField label="Email" sx={{ marginBottom: 3 }} fullWidth />
                <TextField label="" fullWidth sx={{ marginBottom: 3 }} />
                <TextField  placeholder="Password" fullWidth sx={{ marginBottom: 3 }} />
                <TextField  placeholder="Confirm password" sx={{ marginBottom: 3 }} fullWidth />
                <Button variant="contained" fullWidth>SignIn</Button>
            </Box>
        </form>

    );
}
export default SignUpforms;