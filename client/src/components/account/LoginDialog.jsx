import { useContext } from 'react';
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { addUser } from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';
import { qrCodeImage } from '../../constants/data';

const Component = styled(Box)
`display: flex; `;

const Container = styled(Box)
`padding: 56px 10px 56px 56px;`;

const QRCOde = styled('img')({
    margin: '70px 40px 0 70px',
    height: 264,
    width: 264
});

const Title = styled(Typography)
`font-size: 26px;
color: #525252;
font-weight: 700;
font-family: "Times New Roman", Times, serif;
margin-bottom: 18px;`

const StyledList = styled(List)
` & > li {
    padding: 0;
    margin-top: 10px;
    font-size: 22px;
    line-height: 28px;
    font-family: "Times New Roman", Times, serif;
    color: #4a4a4a;
   }`
const dialogStyle = {
    height: '97%',
    marginTop: '9%',
    marginBottom: '4%',
    width: '85%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden' 
}
const LoginDialog = () => {
    const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);
    const onLoginSuccess = async (res) => {
        let decoded = jwt_decode(res.credential);
        setAccount(decoded);
        setShowloginButton(false);
        setShowlogoutButton(true);
        await addUser(decoded);
    };
    const onLoginFailure = (res) => {
        console.log('Login to Synapse Failed', res);
    };
    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };
    return (
        <Dialog
            open={true}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
        >
            <Component>
            <Container> 
                    <Title>Synapse-Chat Application</Title>
                    <StyledList>
                        <ListItem>Welcome to Synapse Chat! Connect with friends and family in real-time with this secure and user-friendly chat application.</ListItem>
                        <ListItem>This application is developed using React.js and Material-UI for the frontend.</ListItem>
                        <ListItem>On the backend, robust capabilities of Node.js and Express.js are leveraged to ensure efficient data processing and smooth server-client interactions. </ListItem>
                        <ListItem> MongoDB serves as the database and for real-time chatting functionality, socket.io is used, enabling instantaneous communication between users.</ListItem>
                        <ListItem>To access this Synapse application sign in with your Google account</ListItem>  
                    </StyledList>
                    </Container>
                        <Box style={{position:'relative'}}>
                        <QRCOde src={qrCodeImage} alt="QR Code" />
                        <Box style={{position: 'absolute', top: '40%', transform: 'translateX(34%) translateY(-35%)'}}>
                        { showloginButton ?
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            /> : null}
                       </Box>
                   </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;