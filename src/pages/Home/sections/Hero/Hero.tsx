import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh",
    }))
    
    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }))


    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, md:4}}>
                        <StyledImg src={Avatar} />
                    </Grid>
                    <Grid size={{xs: 12, md:8}}>
                        <Typography color="primary" variant="h1" textAlign="center">Gusta Dev</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">I'm a Front-end Developer</Typography>
                        <Grid container display="flex" justifyContent="center">
                            <Grid size={{xs: 12, md:4}} display="flex" justifyContent="center">
                                <Button>
                                    <DownloadIcon/> 
                                    Download CV
                                </Button> 
                            </Grid>                            
                            <Grid size={{xs: 12, md:4}} display="flex" justifyContent="center">                                             
                                <Button>
                                    <MailOutlineIcon/>
                                    Contact Me
                                </Button>
                            </Grid>                                             
                        </Grid>
                    </Grid>
                </Grid>
            </Container>            
        </StyledHero>
      </>
    )
  }
  
  export default Hero  