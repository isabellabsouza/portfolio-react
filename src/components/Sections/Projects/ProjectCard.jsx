import projectsData from '@/components/Sections/Projects/assets/projectsData.json';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { motion } from "framer-motion";
import { iconsList } from '../Skills/SkillsIcons';


export default function ProjectCard({ projectName }) {
    const project = projectsData.find(proj => proj.name === projectName);

    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <Grid size={{ xs: 12, lg: 6 }} >

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <Card
                    variant='outlined'
                    sx={{
                        display: 'flex',
                        borderRadius: 0,
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box
                        sx={{
                            padding: 1, 
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: '100%', md: 200 },
                                height: { xs: 150, sm: 250, md: 200 },
                            }}
                            image={project.imagePath}
                            alt={project.title}
                        />
                    </Box>

                    <CardContent sx={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', paddingBottom: '0px !important' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'start' }}>
                            {project.description}
                        </Typography>
                        {project.technologies && (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: 2 }}>
                                {project.technologies.map((technology) => (
                                    <Tooltip
                                        key={technology}
                                        title={technology}
                                        componentsProps={{
                                            tooltip: {
                                                sx: {
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    padding: 0.75,
                                                },
                                            },
                                        }}
                                        slotProps={{
                                            popper: {
                                                modifiers: [
                                                    {
                                                        name: 'offset',
                                                        options: {
                                                            offset: [0, -12],
                                                        },
                                                    },
                                                ],
                                            },
                                        }}
                                    >
                                        <Box sx={{ width: 25, height: 25, mx: 1 }}>
                                            {
                                                iconsList.map(({ name, component: IconComponent }) => (
                                                    technology === name && <IconComponent key={name} />
                                                ))
                                            }
                                        </Box>
                                    </Tooltip>
                                ))}
                            </Box>
                        )

                        }
                        <CardActions sx={{ marginTop: 3 }}>
                            {Object.entries(project.links).map(([linkType, url]) => (
                                url && (
                                    <Button
                                        key={linkType}
                                        size="small"
                                        color="pink"
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {linkType}
                                    </Button>
                                )
                            ))}
                        </CardActions>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
    )
}