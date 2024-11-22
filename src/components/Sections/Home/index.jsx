import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import styles from './styles.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import ParticlesBg from "@/components/Particles/ParticlesBg";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

export default function Home() {

    return (
        <Container >
            <ParticlesBg />
            <Box>
                <Typography variant="h2">Isabella Bicudo</Typography>
                <TypeAnimation
                    sequence={[
                        "Desenvolvedora Front-End",
                        1000,
                        "Desenvolvedora Back-End",
                        1000,
                        "Desenvolvedora Full-Stack",
                        1000,
                    ]}
                    wrapper="span"
                    speed={25}
                    style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                />
                <Grid>
                    <Grid>
                        <PrimaryButton text="Currículo" onClick={() => window.open('./assets/curriculo.pdf')} />
                        <SecondaryButton text="Projetos" />
                    </Grid>


                    <IconButton aria-label="git-hub" size="large">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="linkedin" size="large">
                        <LinkedInIcon />
                    </IconButton>

                </Grid>
            </Box>
        </Container>
    );
}

