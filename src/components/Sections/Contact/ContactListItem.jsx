import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Avatar from '@mui/material/Avatar';

export default function ContactListItem({ icon, text, link }) {
    return (
        <ListItem sx={{
            '&:hover': {
                color: 'pink',
                fontSize: '1.1rem',
            },
            transition: 'all 0.2s ease-in-out',
        }}>
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#D72483' }}>
                    {icon === 'GitHubIcon' ? <GitHubIcon /> : icon === 'LinkedInIcon' ? <LinkedInIcon /> : icon === 'EmailIcon' ? <EmailIcon /> : <PhoneIcon />}
                </Avatar>
            </ListItemAvatar>
            <Link
                href={link}
                underline="none"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </Link>
        </ListItem>
    )
}