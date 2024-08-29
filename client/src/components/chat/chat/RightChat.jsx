import { Box, styled, Typography, Divider } from '@mui/material';
import { emptyChatImage } from '../../../constants/data';

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 10px 0;
    text-align: center;
    height: 100%;
`;

const Container = styled(Box)`
    padding: 0 100px;
`;
    
const Image = styled('img')({
    marginTop: 20,
    width: 350
})
   
const Title = styled(Typography)`
font-size: 30px;
margin: 4px 0 4x 0;
font-family: inherit;
font-weight: 650;
color: #41525d
`;
const SubTitle = styled(Typography)`
font-family: "Times New Roman", Times, serif;
font-size: 17px;
font-weight: 530;
`;
const EmptyChat = () => {
    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="empty" />
                <Title>Synapse Chat Application</Title>
                <SubTitle>Send and Receive Messages using Synapse.</SubTitle>
                <SubTitle>Happy Chatting || Application developed by Seelam Nandini </SubTitle>
            </Container>
        </Component>
    )
}

export default EmptyChat;