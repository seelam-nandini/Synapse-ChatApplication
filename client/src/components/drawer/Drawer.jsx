import { styled, Drawer, Box, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

//components
import Profile from './Profile';

const Header = styled(Box)`
background : #565656;
height: 100px;
color: #e2e5de;
display: flex;
& > svg, & > p {
  margin-top: auto;
  padding: 15px;
  font-weight: 700;
}
`;
const Component = styled(Box)`
background: #FAF9F6;
height: 85%;
`;
const Text = styled(Typography)`
    font-size: 18px;
`
const drawerStyle = {
    left: 20,
    top: 16,
    height: '94%',
    width: '33%',
    boxShadow: 'none'
  }

const InfoDrawer = ({ open, setOpen, profile }) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Text>Synapse Profile</Text>
            </Header>
            <Component>
                {profile && <Profile />}
            </Component>
        </Drawer>
    );
}

export default InfoDrawer;