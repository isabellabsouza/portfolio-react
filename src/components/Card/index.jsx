import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import projectsData from '@/components/Sections/Projects/assets/projectsData.json';
import Box from '@mui/material/Box';
import { iconsList } from '../Sections/Skills/SkillsIcons';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid2';
import { motion } from "framer-motion"


export default function CardCustom({ projectName }) {
    const project = projectsData.find(proj => proj.name === projectName);

    if (!project) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <Grid size={6}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <Card sx={{ display: 'flex', borderRadius: 0 }} variant='outlined'>
                    <CardMedia
                        component="img"
                        sx={{ width: 300, height: 200, padding: 1 }}
                        image={project.imagePath}
                        alt="blog"
                    />
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
                                                    technology === name && <IconComponent />
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