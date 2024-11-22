import CardCustom from '@/components/Card';
import Grid from '@mui/material/Grid2';
import '@splidejs/react-splide/css';
import projectsData from './assets/projectsData.json';

export default function Projects() {
    return (
        <section id="projects">
            <h2>Projetos</h2>
            <Grid container spacing={3} rowSpacing={3} sx={{ marginTop: '50px' }}>
                {projectsData.map((project) => (

                    <CardCustom
                        key={project.name}
                        projectName={project.name}
                    />

                ))}
            </Grid>
        </section>
    )
}