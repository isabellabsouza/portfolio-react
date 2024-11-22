import {Button} from '@mui/material';

export default function SecondaryButton({text, onClick}) {
    return (
        <Button 
            variant="outlined" 
            color="pink" 
            onClick={onClick} 
            sx={{
                borderRadius: 0, 
                marginLeft: 3
            }}
        >
            {text}
        </Button>
    )
}