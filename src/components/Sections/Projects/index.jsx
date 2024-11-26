import ProjectCard from './ProjectCard';
import Grid from '@mui/material/Grid2';
import '@splidejs/react-splide/css';
import projectsData from './assets/projectsData.json';
import {Box, Typography } from '@mui/material';

export default function Projects() {
    return (
        <Box 
            id="projects"
            sx={{
                minHeight: '92vh',
                paddingTop: '50px',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" sx={{marginBottom:5}} >Projetos</Typography>

            <Grid container spacing={3} rowSpacing={3} sx={{ marginTop: '50px' }}>
                {projectsData.map((project) => (

                    <ProjectCard
                        key={project.id}
                        projectName={project.name}
                    />

                ))}
            </Grid>
        </Box>
    )
}