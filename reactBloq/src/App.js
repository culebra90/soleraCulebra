import * as React from 'react';
import Container from '@mui/material/Container';
import Header from "./Header";
import BodyIzq from "./BodyIzq";
import BodyDer from "./BodyDer";
import Alertas from "./Alertas"
import './header.css';

const App = () => {     
    const [activFilfer, setfilter] = React.useState(0);
    const [productosBloq, setProdBloq] = React.useState([
        {name: 'Electricidad', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', type: 3},
        {name: 'Auxilio Mecanico', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', type: 1},  
        {name: 'Chofer reemplazo', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', type: 1},
        {name: 'Medico a domicilio', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', type: 2},
        {name: 'Ambulancia', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', type: 2},
        {name: 'Gasfitero', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', type: 3},
    ]); 
    const [nameInput, setTitleInput] = React.useState("");
    const [descriptionInput, setDescripcionInput] = React.useState("");
    const [productoSelecIndex, setProdSelecIndex] = React.useState(""); 
    const [confirmacion, setConfirmacion] = React.useState({active: false, indice: false}); 
    const [alerta, setAlerta] = React.useState({active: false, message: '', type: ''});
  
    return (
      <>
        <Header setfilter={setfilter} activFilfer={activFilfer}/>        
        <Container maxWidth="xl" sx={{display: 'flex',pl:'0px !important',pr:'0px !important'}}> 
            <BodyIzq productosBloq={productosBloq} activFilfer={activFilfer} setDescripcionInput={setDescripcionInput} 
                setConfirmacion={setConfirmacion} setTitleInput={setTitleInput} setProdSelecIndex={setProdSelecIndex }/> 
            <BodyDer setTitleInput={setTitleInput} setDescripcionInput={setDescripcionInput} productosBloq={productosBloq}
                nameInput={nameInput} descriptionInput={descriptionInput} setAlerta={setAlerta} 
                setProdBloq={setProdBloq} setProdSelecIndex={setProdSelecIndex} productoSelecIndex={productoSelecIndex}/>       
        </Container> 
        <Alertas setConfirmacion={setConfirmacion} setProdBloq={setProdBloq} setAlerta={setAlerta}  
            alerta={alerta} productosBloq={productosBloq} confirmacion={confirmacion} />    
      </>
    );
  }
  export default App;
  