import './App.css';
import Home from "@/components/Sections/Home";
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Education from './components/Sections/Education';
import Contact from './components/Sections/Contact';
import {
    createTheme,
    ThemeProvider,
    alpha,
    getContrastRatio,
} from '@mui/material/styles';
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import ParticlesBg from "@/components/Particles/ParticlesBg";
import { useState, useEffect } from "react";


const pinkBase = '#D72483';
const pinkMain = alpha(pinkBase, 0.7);

let theme = createTheme({
    palette: {
        pink: {
            main: pinkMain,
            light: alpha(pinkBase, 0.5),
            dark: alpha(pinkBase, 0.9),
            contrastText: getContrastRatio(pinkMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
});
theme = createTheme({
    palette: {
        mode: 'dark',
        pink: theme.palette.augmentColor({
            color: {
                main: '#D72483',
            },
            name: 'pink'
        })
    },
})

function App() {

    const { scrollYProgress } = useScroll();

    const starOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1], // Posições do scroll: início (0) até o fim (1)
        [0.7, 0, 0, 0, 0, 0.7] // Opacidade correspondente para cada ponto
    );

    return (
        <ThemeProvider theme={theme}>

            <motion.div 
                style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                    opacity: starOpacity, // Opacidade controlada dinamicamente
                }}
            >
                <ParticlesBg />
            </motion.div>

            <Home />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </ThemeProvider>
    )
}

export default App
