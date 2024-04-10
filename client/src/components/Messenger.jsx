import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';
import LoginDialog from './account/LoginDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #d7d7d7;`
    ;
const Header = styled(AppBar)`
    height: 120px;
    background-color: #5a6a5c;
    box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
height: 130px;
background-color:#2f3020;
box-shadow: none;
`;
const Messenger = () => {
    const { account } = useContext(AccountContext);
    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Component>
    )
}
export default Messenger;