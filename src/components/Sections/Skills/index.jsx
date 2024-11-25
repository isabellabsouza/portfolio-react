import { Box, Card, Typography } from '@mui/material';
import useMeasure from 'react-use-measure';
import { iconsList } from './SkillsIcons';
import styles from './styles.module.css';

export default function Skills() {

    let [ref, { width }] = useMeasure();

    return (
        <Box
            sx={{
                height: '92vh',
                paddingTop: '50px',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 5 }} >Tecnologias</Typography>

            <Box sx={{ overflow: 'hidden', width: '100%', display: 'flex', marginTop: 10 }}>
                <div
                    style={{ display: 'flex' }}
                    ref={ref}
                    className={styles.carousel}
                >

                    {iconsList.map(({ name, component: IconComponent }, index) => (
                        <Box key={index} sx={{ minWidth: '130px', padding: 2 }} className={styles.carouselItem}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
                                <IconComponent />
                                <Typography variant="caption" sx={{ marginTop: 2 }}>{name}</Typography>
                            </Card>
                        </Box>
                    ))}

                    {iconsList.map(({ name, component: IconComponent }, index) => (
                        <Box key={index} sx={{ minWidth: '130px', padding: 2 }} className={styles.carouselItem}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
                                <IconComponent />
                                <Typography variant="caption" sx={{ marginTop: 2 }}>{name}</Typography>
                            </Card>
                        </Box>
                    ))}
                </div>
            </Box>

        </Box>
    )
}