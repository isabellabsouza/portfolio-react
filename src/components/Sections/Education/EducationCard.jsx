import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import { motion } from "framer-motion"

export default function EducationCard({ education }) {

    return (
            <Card
                variant='outlined'
                sx={{
                    paddingInline: 3,
                    paddingY: 2,
                    borderRadius: 0,
                    marginBottom: 6,
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
            </Card>
    )
}