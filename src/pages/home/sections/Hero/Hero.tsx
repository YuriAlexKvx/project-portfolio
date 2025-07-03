import { styled } from "@mui/material/styles";
import Avatar from "../../../../assets/imgs/avatar.jpg";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const StyledHero = styled("div")({
  backgroundColor: "black",
  height: "100vh",
});

const StyledAvatar = styled("img")({
  width: "100%",
  borderRadius: "50%",
});

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
      <StyledAvatar src={Avatar} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
         <Typography color="primary" variant="h1" textAlign="center"> Yuri Oliveira </Typography>
         <Typography color="primary" variant="h2" textAlign="center"> I'm a Fullstack Software Engineer! </Typography>
         <Grid container display="flex" justifyContent="center">

        <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">

         <Button>
          <EmailIcon />
           Contact Me
          </Button>

        </Grid>

        <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
         <Button>
          <DownloadIcon />
           Download CV
          </Button>

        </Grid>

          </Grid>
        </Grid>
      </Grid>

      </Container>
    </StyledHero>
  );
};

export default Hero;
