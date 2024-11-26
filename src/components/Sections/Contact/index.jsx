import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ContactListItem from './ContactListItem';


export default function Contact() {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center', 
                minHeight: {xs: '92vh', md: '80vh'},
                marginTop: {xs: 10, md: 20} 
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 5 }} >Contato</Typography>
            <List sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
                <ContactListItem 
                    icon="EmailIcon" 
                    text='isabellabicudo@hotmail.com'
                />
                <ContactListItem 
                    icon="PhoneIcon" 
                    text='(11) 97696-9413'
                />
                <ContactListItem 
                    icon="LinkedInIcon" 
                    text='linkedin.com/in/isabella' 
                    link='https://linkedin.com/in/isabella-bicudo-de-souza-1879141bb'
                />
                <ContactListItem 
                    icon="GitHubIcon" 
                    text='github.com/isabellabsouza' 
                    link='https://github.com/isabellabsouza'
                />
            </List>
        </Box>
    )
}