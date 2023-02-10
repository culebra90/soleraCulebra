import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './header.css';

const Header = (f) => { 

    const productosFilter = ['Todos','Autos','Salud','Hogar'];
    const handleActProd = (index) => f.setfilter(index); 

    return (<>
            <Typography gutterBottom variant="h4" component="div" sx={{width: 'fit-content', margin: 'auto', mt:1,mb:1}}>
                Servicios
            </Typography>        
            <AppBar position="static" sx={{background: '#efefef'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters> 
                <Box sx={{ flexGrow: 1, display: 'flex' }}>            
                    {productosFilter.map((producto,x) => (              
                        <Button variant="text" key={producto} onClick={()=>handleActProd(x)} 
                            className={(f.activFilfer == x) ? 'botonA' : 'botonD'}>
                            {producto}
                        </Button>
                    ))}
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
        </>        
   );
}
export default Header;
  