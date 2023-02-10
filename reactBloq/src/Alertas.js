import * as React from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from "@mui/material/Snackbar";

const Alertas = (f) => {

    const handleCloseConfirmacion = () => f.setConfirmacion({active: false, indice: false});

    const confirmarEliminacion = () => {
        let productosTmp = [];
        f.productosBloq.map((producto,x) => {
            if(x!=f.confirmacion.indice) 
                productosTmp=[...productosTmp, {name: producto.name, description: producto.description, type: producto.type}];                        
        })
        console.log(productosTmp)
        f.setProdBloq(productosTmp);
        f.setAlerta({active: true, message: 'Eliminado Correctamente', type: 'success'});
        f.setConfirmacion({active: false, indice: false});
    }     

    return (
        <>
            <Snackbar open={f.alerta.active} autoHideDuration={5000} onClose={() => f.setAlerta({active: false, message: '', type: ''})}>                        
                <Alert severity={(f.alerta.type) ? f.alerta.type : 'info'}
                    action={
                        <IconButton aria-label="close" color="inherit" size="small"
                            onClick={() => f.setAlerta({active: false, message: '', type: ''})}>
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}>
                    {f.alerta.message}
                </Alert>                        
            </Snackbar>
            <Dialog open={f.confirmacion.active} onClose={handleCloseConfirmacion}
                aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {`Se eliminara: "${(f.confirmacion.indice>=0 && typeof f.confirmacion.indice==='number') ? f.productosBloq[f.confirmacion.indice].name : ''}"`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Estas seguro de eliminar este articulo?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirmacion}>No</Button>
                    <Button onClick={confirmarEliminacion} autoFocus>
                        Si
                    </Button>
                </DialogActions>
            </Dialog> 
        </>     
    )
}

export default Alertas;