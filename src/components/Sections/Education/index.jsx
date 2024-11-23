import educationData from './assets/educationData.json';
import EducationCard from './EducationCard';
import Grid from '@mui/material/Grid2';
import { Typography, Box } from '@mui/material';
import DeskModel from './DeskModel';

export default function Education() {
    return (
        <Box
            id="projects"
            sx={{
                height: '92vh',
                paddingTop: '50px',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 5 }} >Formações</Typography>
            <Grid container spacing={6} >
                <Grid size={7} >
                    <DeskModel />
                </Grid>
                <Grid size={5}>
                    {
                        educationData.map((education) => (
                            <EducationCard
                                key={education.institution}
                                education={education}
                            />
                        ))
                    }
                </Grid>
            </Grid>

        </Box>
    )
}