import { useContext } from "react";
import { Box, styled, Typography } from "@mui/material"
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;
const Image = styled('img') ({
    width: 165,
    height: 165,
    borderRadius: '50%',
    padding: '9px 0'
});
const BoxWrapper = styled(Box)`
background: #fff;
padding: 12px 30px 2px;
box-shadow: 0 1px 3px rgba(0,0,0,0.08);
& :first-child {
    font-size: 16px;
    font-family: "Times New Roman", Times, serif;
    color: #2553342;
    font-weight: 750;
   }
   & :last-child {
    margin:  3px 0;
    color: #4a4a4a;
   }
`
const DescriptionContainer = styled(Box)`
padding: 15px 15px 10px 15px;
& > p {
    font-size: 16px;
    font-family: Cambria, Georgia, serif;
    color: #8896a0;
}
`
const Profile = () => {
    const { account } = useContext(AccountContext);
    return (
        <>
            <ImageContainer>
                <Image src={account.picture} alt="DisplayPic" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Display Name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>This name will be visible to your Synapse Contacts</Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>Bio</Typography>
                <Typography>A silent canvas with a heart that blooms in a spectrum of emotions!!</Typography>
            </BoxWrapper>
        </>
    )
}

export default Profile;