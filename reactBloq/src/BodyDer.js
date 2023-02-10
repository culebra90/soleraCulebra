import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const BodyDer = (f) => {

    const handleChangeTitle = (e) => f.setTitleInput(e.target.value);
    const handleChangeDescripcion = (e) => f.setDescripcionInput(e.target.value);

    const btnEditar = () => {        
        if(f.productoSelecIndex>=0 && typeof f.productoSelecIndex==='number'){
            let productosTmp = [];
            f.productosBloq.map((producto,x) => {
                if(x==f.productoSelecIndex) 
                    productosTmp=[...productosTmp, {name: f.nameInput, description: f.descriptionInput, type: producto.type}];
                else 
                    productosTmp=[...productosTmp, producto];            
            })
            f.setProdBloq(productosTmp);
            btnCancelar();
            f.setAlerta({active: true, message: 'Editado Correctamente', type: 'success'});
            f.setProdSelecIndex(""); 
        }else{
            f.setAlerta({active: true, message: 'No puede Editar sin seleccionar antes', type: 'warning'});
            return;
        }               
    }

    const btnCancelar = () => {
        f.setTitleInput("");
        f.setDescripcionInput("");
        f.setProdSelecIndex("");
    }

    return (
        <Container sx={{maxWidth: '25% !important',mt:5,pl:'0px !important',pr:'0px !important'}}>
            <Card sx={{width: '100%',mt: 2, height: 'fit-content'}}>
                <CardContent sx={{mt: 2,pt:0}}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ml:1, fontWeight:700}}>
                        Servicio
                    </Typography>                        
                    <Typography variant="body2" color="text.secondary" sx={{m:1, fontWeight:700}}>
                        Nombre
                    </Typography>
                    <TextField fullWidth  size="small" variant="outlined" value={f.nameInput} onChange={(e) => handleChangeTitle(e)} />                        
                    <Typography variant="body2" color="text.secondary" sx={{m:1, fontWeight:700}}>
                        Descripcion
                    </Typography>
                    <TextField fullWidth size="small" variant="outlined" value={f.descriptionInput} onChange={(e) => handleChangeDescripcion(e)}/>
                    <TextField value={f.productoSelecIndex} sx={{display: 'none'}}/>
                </CardContent>
                <CardActions sx={{backgroundColor: '#efefef'}}>
                    <Button size="small" color="success" variant="outlined" onClick={btnEditar} sx={{textTransform: 'none'}}>Grabar</Button>
                    <Button size="small" variant="outlined" color="error" onClick={btnCancelar} sx={{textTransform: 'none'}}>Cancelar</Button>
                </CardActions>
            </Card>                
        </Container>
    )
}

export default BodyDer;