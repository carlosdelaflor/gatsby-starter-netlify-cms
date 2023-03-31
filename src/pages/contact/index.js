import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Icon } from '@iconify/react';
import { Stack, Typography } from "@mui/material";

const ContactPage = () => (
  <Layout>
    <div className="main-content-container">
      <section className="section">
        <Helmet title={`Contacto`} />
        <div className="container content">
          <Stack>
            <Box>
              <Typography variant="h1" sx={{marginLeft: '3rem'}}>
                  Contactanos:
              </Typography>
            </Box>
            <Box sx={{ width: '100%', maxWidth: 360 }}>
                <List >
                  <ListItem disablePadding>
                    <ListItemButton href="https://wa.me/51992780348?textInformacion"  target="_blank" rel="noopener">
                      <ListItemIcon >
                        <Icon icon="logos:whatsapp-icon" height={30}/>
                      </ListItemIcon>
                      <ListItemText primary="Chat en WhatsApp" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="https://m.me/tuguitarra.pe" target="_blank" rel="noopener">
                      <ListItemIcon>
                        <Icon icon="logos:messenger" height={25}/>
                      </ListItemIcon>
                      <ListItemText primary="Chat con fb:tuguitarra.pe" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="https://ig.me/m/tuguitarra.peru" target="_blank" rel="noopener">
                      <ListItemIcon>
                        <Icon icon="skill-icons:instagram" height={25}/>
                      </ListItemIcon>
                      <ListItemText primary="Chat con ig:tuguitarra.peru" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="mailto:tuguitarra.peru@gmail.com">
                      <ListItemIcon>
                        <Icon icon="logos:google-gmail" height={20}/>
                      </ListItemIcon>
                      <ListItemText primary="tuguitarra.peru@gmail.com" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton href="tel:+51992780348">
                      <ListItemIcon>
                        <Icon icon="mingcute:phone-call-fill" color="green" height={25}/>
                      </ListItemIcon>
                      <ListItemText primary="+51 992780348" />
                    </ListItemButton>
                  </ListItem>
                </List>
            </Box> 
          </Stack>
   
        </div>
      </section>
      <section className="section">
      </section>
    </div>
  </Layout>
);

export default ContactPage;