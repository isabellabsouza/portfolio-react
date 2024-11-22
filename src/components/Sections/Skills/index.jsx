import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { animate, motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { iconsList } from './SkillsIcons';
import useMeasure from 'react-use-measure';

export default function Skills() {

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        console.log('ref', ref)
        console.log('width', width)
        let finalPosition = -width;
        console.log('finalPosition', finalPosition)
        const controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        })

        return controls.stop;
    }, [xTranslation, width])


    return (
        <section>
            <h2>Tecnologias</h2>
            <div style={{overflowY: 'hidden'}}>
                <motion.div style={{ display: 'flex', flexDirection: 'row', x: xTranslation }} ref={ref}>
                    {[...iconsList, ...iconsList].map(({ name, component: IconComponent }, index) => (
                        <div key={index} style={{ minWidth: '130px', padding: 2 }}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
                                <IconComponent />
                                <Typography variant="caption" sx={{ marginTop: 2 }}>{name}</Typography>
                            </Card>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    )
}