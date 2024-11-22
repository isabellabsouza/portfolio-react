import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { motion } from "framer-motion"

export default function EducationCard({ education }) {

    return (
        // <Grid size={6} >
            <Card
                variant='outlined'
                sx={{
                    paddingInline: 3,
                    paddingY: 2,
                    backgroundColor: 'black',
                    borderRadius: 0,
                    marginBottom: 6,
                    //borderStyle: 'none'
                    // borderLeftStyle: 'solid',
                    // borderLeftWidth: 1,
                    // borderLeftColor: 'white',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Typography variant="body2" >
                        {education.duration}
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Typography variant="h6">
                        {education.type}
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Typography variant="body1">
                        {education.institution}
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Typography variant="body1" color='pink'>
                        {education.title}
                    </Typography>
                </motion.div>
                {/* <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                <Divider sx={{ marginY: 2 }} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <Typography variant="body2">
                        {education.description}
                    </Typography> */}
                {/* </motion.div> */}
            </Card>
        // </Grid>
    )
}