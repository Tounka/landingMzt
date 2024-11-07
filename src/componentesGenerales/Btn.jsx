import styled from "styled-components";
import { FaWhatsapp } from 'react-icons/fa';
import { TxtGenerico } from "./Txt";
import { ContenedorHorizontal } from "./Displays";

export const BtnGenerico = styled.button`
    height: auto;
    width: auto;
    background-color: var(--ColorVerdePrincipal);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-weight: bold;
    padding: 10px;

    cursor: pointer;
    font-size: ${props => props.size ? props.size : '40px' } ;
    border-radius: 10px;
    color: var(--ColorBlancoPrincipal);
    transition:  background-color 0.3s;

    &:hover{
        background-color: var(--ColorVerdePrincipalHover);
      
        transition:  background-color 0.3s;

    }
`

const ContenedorNumeroTelefonico = styled(ContenedorHorizontal)`
    justify-content: start;
    align-items: center;
    cursor: pointer;
`
const BtnCircularWhatsapp = styled(BtnGenerico)`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    font-size: 46px;
    background-color: #25D366;
    color: white;
    border: none;

    &:hover{
        background-color: #27e46c;
      
        transition:  background-color 0.3s;

    }

`

export const BtnWhatsapp = () => {
    const numeroTelefonico = '6691382961';
    const handleClick = () => {
      window.open(`https://wa.me/${numeroTelefonico}`, '_blank');
    };
  
    return (
        <ContenedorNumeroTelefonico onClick={handleClick}>
            <BtnCircularWhatsapp  >
                <FaWhatsapp  />
    
            </BtnCircularWhatsapp>
            <TxtGenerico  color = 'var(--ColorBlancoPrincipal)' size='26px' >{numeroTelefonico}</TxtGenerico>
        </ContenedorNumeroTelefonico>

    );
  };
  