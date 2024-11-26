import educationData from './assets/educationData.json';
import EducationCard from './EducationCard';
import Grid from '@mui/material/Grid2';
import { Typography, Box, Card, CardMedia, CardContent, Avatar } from '@mui/material';
import AwsBadge from '/assets/aws-badge.png';
import KoreaFlag from '/assets/korea-flag.png';
import UsaFlag from '/assets/usa-flag.jpg';
import { motion } from "framer-motion";

export default function Education() {
    return (
        <Box
            id="projects"
            sx={{
                minHeight: '95vh',
                paddingTop: '50px',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 5 }} >Formações</Typography>
            <Grid container spacing={5} >
                {
                    educationData.map((education) => (
                        <EducationCard
                            key={education.institution}
                            education={education}
                        />
                    ))
                }
            </Grid>
            <Grid container spacing={5} >
                <Grid size={{ xs: 12, lg: 6 }} >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Card variant='outlined' sx={{ display: 'flex', borderRadius: 0, flexDirection: { xs: 'column', md: 'row' } }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 200, alignSelf: 'center' }}
                                image={AwsBadge}
                                alt="Live from space album cover"
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ padding: 2 }} color='pink'>
                                    AWS Cloud Foundations
                                </Typography>
                                <Typography variant="body2" sx={{ padding: 2 }}>
                                    Curso introdutório com a visão geral detalhada de conceitos de nuvem, produtos essenciais da AWS, segurança, arquitetura, preço e suporte.
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }} >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Card variant='outlined' sx={{ borderRadius: 0, paddingBottom: { xs: 0, md: 2 } }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ padding: 2 }} color='pink'>
                                    Idiomas
                                </Typography>
                                <Grid
                                    container
                                    spacing={2}
                                    sx={{
                                        marginTop: 3,
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                    }}
                                >
                                    <Grid 
                                        size={{xs: 12, md: 6}} 
                                        sx={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            marginLeft: {xs: 8, sm: 32, md: 0, lg: 0},
                                            justifyContent: {md: 'center'}
                                        }}
                                    >
                                        <Avatar src={KoreaFlag} sx={{ width: 56, height: 56 }} />
                                        <Box sx={{ paddingLeft: 2, textAlign: 'start' }}>
                                            <Typography variant="body1">
                                                Coreano
                                            </Typography>
                                            <Typography variant="body2">
                                                Intermediário
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid 
                                        size={{xs: 12, md: 6}} 
                                        sx={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            marginLeft: {xs: 8, sm: 32, md: 0, lg: 0}, 
                                            marginTop: { xs: 2, lg: 0 },
                                            justifyContent: {md: 'center'}
                                        }}
                                    >

                                        <Avatar src={UsaFlag} sx={{ width: 56, height: 56 }} />
                                        <Box sx={{ paddingLeft: 2, textAlign: 'start' }}>
                                            <Typography variant="body1">
                                                Inglês
                                            </Typography>
                                            <Typography variant="body2">
                                                Avançado
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>

        </Box>
    )
}