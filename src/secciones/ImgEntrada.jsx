import styled from "styled-components";
import { ContenedorGenerico } from "../componentesGenerales/Displays";
import { ImgPicture } from "../componentesGenerales/ImgPicture";
import imgPrincipal from '../src/img/imgRandomPrincipal.jpg'
const ContenedorImg = styled.div`
    height: 400px;
    width: 100%;
    margin-top: 90px;
    overflow: hidden;
    border-radius: 10px;
    background-color: var(--ColorVerdePrincipal);



    img{
        width: 100%;
        height: 100%;
        object-fit:inherit;
    }

`
export const ImgEntrada = () => {
    return (
      <ContenedorGenerico id="inicio">
            <ContenedorImg>
                <ImgPicture src={imgPrincipal} alt='Imagen de entrada, mar de Mazatlán'  />
            </ContenedorImg>
      </ContenedorGenerico>
    
    );
  }
  
  
  