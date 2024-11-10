import styled from "styled-components";
import { ContenedorGenerico, ContenedorVerde } from "../componentesGenerales/Displays";
import { TxtGenerico, TxtTitularGenericoH1 } from "../componentesGenerales/Txt";
import { ImgPicture } from "../componentesGenerales/ImgPicture";
import ImgRecorrido from '../src/img/imgRecorridoMazatlan.jpg'
const ContenedorSeccionPrecios = styled(ContenedorGenerico)`
    display: flex;
    flex-direction: column;
    height: 500px;
    height: auto;
    padding: 30px 0;
    gap: 10px;
`

const ContenedorCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 400px;
    width: 300px;
    gap: 10px;
    padding: 20px;

    border: solid 3px var(--ColorBlancoPrincipal);
    border-radius: 30px;
    overflow: hidden;
`
const ContenedorImg = styled.div `
    height: 100px;
    width: 100%;
    background-color: var(--ColorVerdePrincipal);
    border-radius: 20px;
    object-fit: cover;
    overflow: hidden;

    img{
        object-fit: cover;
        height: 100px;
        width: 100%;
    }
`
const TxtSeccionRecorrido = styled(TxtGenerico)`
    font-weight: bold;
    font-size: 22px;
    color: var(--ColorBlancoPrincipal);
`
const TxtSeccionRecorridoSecundario = styled(TxtGenerico)`
    
    font-size: 14px;
    color: var(--ColorBlancoPrincipal);
`
const ContenedorInferiorRecorridos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ContenedorSubseccion = styled(ContenedorInferiorRecorridos)`
    flex-direction: column;
    gap: 10px;
`
const ContenedorCupon = styled(TxtGenerico)`
    background-color: var(--ColorBlancoPrincipal);
    color: var(--ColorVerdePrincipal) ;
    padding: 5px;
    border-radius: 5px;
`
const ContenedorCards = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`
const CardRecorridos = ({titulo, txt, img, tituloInferior, txtBtn}) =>{
    return(
        <ContenedorCardStyled>
            <ContenedorSubseccion>
                <ContenedorImg>
                    <ImgPicture src={img}   alt='Imagen de recorridos Mazatlan, Sinaloa ' />
                </ContenedorImg>
                <TxtSeccionRecorrido>{titulo}</TxtSeccionRecorrido>
                <TxtSeccionRecorridoSecundario>{txt}</TxtSeccionRecorridoSecundario>
            </ContenedorSubseccion>
       
            <ContenedorInferiorRecorridos>
                <TxtGenerico bold size='18px' color='var(--ColorBlancoPrincipal)' > {tituloInferior}  </TxtGenerico>
                <ContenedorCupon bold size='18px' color='var(--ColorBlancoPrincipal)' > {txtBtn}  </ContenedorCupon>
            </ContenedorInferiorRecorridos>
        </ContenedorCardStyled>
    )
}
export const SeccionPrecios = () => {
    return (
    <ContenedorVerde>
        <ContenedorSeccionPrecios id="precios">
            <TxtTitularGenericoH1 size= '38px' bold color= 'var(--ColorBlancoPrincipal)'> Recorridos </TxtTitularGenericoH1> 
            <TxtGenerico size= '24px' color= 'var(--ColorBlancoPrincipal)'> Descubre nuestros recorridos. Si buscas recorridos personalizados, no dudes en contactarnos.  </TxtGenerico>
            <ContenedorCards>
                <CardRecorridos titulo= 'Recorrido por Mazatlan' txt='Descubre Mazatlán en el Centro Histórico. Pasea por la Plazuela Machado, visita la Catedral y el Teatro Ángela Peralta, y termina con una cena de mariscos y música en vivo.' img={ImgRecorrido} tituloInferior='10% descuento:' txtBtn='Mazatlan2024' />
            </ContenedorCards>
        </ContenedorSeccionPrecios>
    </ContenedorVerde>

    
    );
  }
  
  
  