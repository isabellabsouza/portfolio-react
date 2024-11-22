import educationData from './assets/educationData.json';
import EducationCard from '../../EducationCard';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export default function Education() {
    return (
        <section>
            <Typography variant="h4" sx={{marginBottom:5}} >Formação</Typography>
            <Grid container spacing={6} >
                <Grid size={7} >

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

        </section>
    )
}