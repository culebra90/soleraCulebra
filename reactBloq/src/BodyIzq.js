import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BodyIzq = (f) => { 

    const btnEditarProducto = (index) => {        
        f.setTitleInput(f.productosBloq[index].name)
        f.setDescripcionInput(f.productosBloq[index].description)
        f.setProdSelecIndex(index)
    }; 
    const btnEliminarProducto = (index) => {
        f.setConfirmacion({active: true, indice: index});
    };

    return (
        <Container key="contIzq" sx={{maxWidth: '75% !important', mt:5, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly',pl:'0px !important',pr:'0px !important'}}>            
            {f.productosBloq.map((producto,x) => ( 
                (f.activFilfer == 0 || f.activFilfer == producto.type) 
                    ? <Card sx={{ width: 'calc(33% - 30px)', margin: 2, height: 'fit-content', minWidth: '220px' }} key={`Card-${x}`}>            
                            <CardContent key={`CardContent-${x}`}>
                                <Typography gutterBottom variant="h5" component="div" key={`name-${x}`}>
                                    {producto.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{minHeight: '50px'}} key={`description-${x}`}>
                                    {producto.description}
                                </Typography>
                            </CardContent>
                            <CardActions key={`CardActions-${x}`} sx={{backgroundColor: '#efefef'}}>
                                <Button size="small" onClick={()=> btnEditarProducto(x)} key={`editar-${x}`} sx={{textTransform: 'none'}}>Editar</Button>
                                <Button size="small" onClick={()=> btnEliminarProducto(x)} key={`eliminar-${x}`} sx={{textTransform: 'none'}}>Eliminar</Button>
                            </CardActions>
                        </Card>
                    : <></>
            ))}            
        </Container>
    )                    
}

export default BodyIzq;