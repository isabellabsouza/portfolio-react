import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ContactListItem from '../../EducationCard/contactListItem';


export default function Contact() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height:'80vh' }}>
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