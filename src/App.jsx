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

    return (
        <ThemeProvider theme={theme}>
            <Home />

            <Projects />
            <Skills />
            <Education />
            <Contact />
        </ThemeProvider>
    )
}

export default App
