import styles from './styles.module.css'; 
import {Button} from '@mui/material';
export default function PrimaryButton({ text, onClick }) {
    return (
        <Button variant="contained" color="pink" onClick={onClick} sx={{borderRadius: 0}}>
            {text}
        </Button>
    )
}