import { Card, Divider, Typography } from '@mui/material';
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid2';

export default function EducationCard({ education }) {

    return (
        <Grid size={{xs: 12, lg: 6}}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <Card
                    variant='outlined'
                    sx={{
                        paddingInline: 3,
                        paddingY: 2,
                        borderRadius: 0,
                        marginBottom: 6,
                    }}
                >

                    <Typography variant="body2" >
                        {education.duration}
                    </Typography>

                    <Typography variant="h6">
                        {education.type}
                    </Typography>

                    <Typography variant="body1">
                        {education.institution}
                    </Typography>

                    <Typography variant="body1" color='pink'>
                        {education.title}
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <Typography variant='body2'>
                        {education.description}
                    </Typography>
                </Card>
            </motion.div>
        </Grid>
    )
}