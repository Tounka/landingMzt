import styled from "styled-components";
import { ContenedorComponentes, ContenedorGenerico } from "../componentesGenerales/Displays";
import { ImgPicture } from "../componentesGenerales/ImgPicture";
import { TxtGenerico,TxtTitularGenericoH1 } from "../componentesGenerales/Txt";
import { BtnGenerico } from "../componentesGenerales/Btn";
import img1 from '../src/img/imgExperiencias1Ram.webp'
import img2 from '../src/img/imgExperiencias2Ram.jpg'
import img3 from '../src/img/imgExperiencias3Ram.webp'

const ContenedorExperiencias = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    height: 300px;
    width: 100%;
    gap: 20px;
`
const ContenedorComponentesIzquierda = styled(ContenedorComponentes)`
    flex-direction: column;
    align-items: start;
    gap: 10px;
`

const ContenedorComponentesDerecha = styled(ContenedorComponentes)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`
const ContenedorCard = styled.div`
    height: 100%;
    width: 100%;

    background-color: white; 
    padding: 10px;
    border-radius: 10px;
`
const ContenedorImg = styled.div`
    height: 100%;
    width: 100%;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const CardExperiencias = ({src, alt}) =>{
    console.log(src)
    console.log(alt)
    return(
        <ContenedorCard>
            <ContenedorImg>
                <ImgPicture src = {src} alt={alt} />
            </ContenedorImg>
        </ContenedorCard>
    )
}
export const Experiencias = () => {
    return (
      <ContenedorGenerico id="Experiencias">
        <ContenedorExperiencias>
            <ContenedorComponentesIzquierda>
                <TxtTitularGenericoH1 color= 'var(--ColorVerdePrincipal)' aling='start' size= '38px' bold > Descubre Mazatlán como nunca antes </TxtTitularGenericoH1>
                <TxtGenerico  aling='start' size= '16px'  > Mazatlán, la Perla del Pacífico, te enamorará con sus hermosas playas, deliciosa gastronomía y animados festivales. Un destino perfecto para disfrutar de cultura, aventura y relajación junto al mar. </TxtGenerico>
                <BtnGenerico size='24px'>Leer mas</BtnGenerico>
            </ContenedorComponentesIzquierda>

            <ContenedorComponentesDerecha>
                <CardExperiencias src = {img1} alt='Imagen experiencia 1 Mazatlán' />
                <CardExperiencias src = {img2} alt='Imagen experiencia 2 Mazatlán' />
                <CardExperiencias src = {img3} alt='Imagen experiencia 3 Mazatlán' />
            </ContenedorComponentesDerecha>
        </ContenedorExperiencias>
      </ContenedorGenerico>
    
    );
  }
  
  
  