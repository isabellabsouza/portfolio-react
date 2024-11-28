import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, Box, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { TypeAnimation } from "react-type-animation";
import { scroller } from "react-scroll";


export default function Home() {

    const isSmallScreen = useMediaQuery('(max-width:547px)')
    return (
        <Container >
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    px: { xs: 2, sm: 4, md: 6 },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        marginBottom: 2,
                    }}
                >
                    Isabella Bicudo
                </Typography>

                <TypeAnimation
                    sequence={[
                        isSmallScreen
                            ? 'Desenvolvedora\nFront-End'
                            : 'Desenvolvedora Front-End',
                        1000,
                        isSmallScreen
                            ? 'Desenvolvedora\nBack-End'
                            : 'Desenvolvedora Back-End',
                        1000,
                        isSmallScreen
                            ? 'Desenvolvedora\nFull-Stack'
                            : 'Desenvolvedora Full-Stack',
                        1000,
                    ]}
                    wrapper="span"
                    speed={25}
                    style={{
                        fontSize: "2em",
                        display: "inline-block",
                        whiteSpace: "pre-wrap",
                        textAlign: "center", 
                        lineHeight: 1.5,
                    }}
                    repeat={Infinity}
                />


                <Grid>
                    <Grid sx={{ marginY: 3, display: 'flex' }}>
                        <PrimaryButton
                            text="Currículo"
                            onClick={
                                () => window.open('./assets/curriculo.pdf')
                            }
                        />
                        <SecondaryButton
                            text="Projetos"
                            onClick={
                                () => scroller.scrollTo("projects", {
                                    duration: 1000,
                                    delay: 0,
                                    smooth: "easeInOutQuart",
                                })
                            }
                        />
                    </Grid>

                    <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link href="https://github.com/isabellabsouza" target="_blank">
                            <IconButton aria-label="git-hub" size="large" sx={{ marginRight: 2 }}>
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <Link href="https://linkedin.com/in/isabella-bicudo-de-souza-1879141bb" target="_blank">
                            <IconButton aria-label="linkedin" size="large">
                                <LinkedInIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

