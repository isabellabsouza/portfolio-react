import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { iconsList } from './SkillsIcons';
import useMeasure from 'react-use-measure';
import styles from './styles.module.css';

export default function Skills() {

    const controls = useAnimation();
    let [ref, {width}] = useMeasure();
    useEffect(() => {
        console.log(iconsList.length * 130 );
        let finalPosition = iconsList.length * 130 * -1;

        controls.start({
            x: ["0%", finalPosition],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: 10,
                },
            },
        });
    }, [controls]);


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
                    className={styles.carrossel}
                >

                    {iconsList.map(({ name, component: IconComponent }, index) => (
                        <Box key={index} sx={{ minWidth: '130px', padding: 2 }}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
                                <IconComponent />
                                <Typography variant="caption" sx={{ marginTop: 2 }}>{name}</Typography>
                            </Card>
                        </Box>
                    ))}

                    {iconsList.map(({ name, component: IconComponent }, index) => (
                        <Box key={index} sx={{ minWidth: '130px', padding: 2 }}>
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