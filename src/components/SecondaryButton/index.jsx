import styles from './styles.module.css';
import {Button} from '@mui/material';

export default function SecondaryButton({text}) {
    return (
        <Button variant="outlined" color="pink" sx={{borderRadius: 0}}>
            {text}
        </Button>
    )
}