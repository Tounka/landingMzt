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
    height: auto;
    width: 100%;
    gap: 20px;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        height: auto;
    }
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
    @media (max-width: 550px) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`
const ContenedorCard = styled.div`
    height: 100%;
    width: 100%;
    

    background-color: white; 
    padding: 10px;
    border-radius: 10px;
    @media (max-width: 550px) {
        width: 175px;
        height: 200px;
    }  
`
const ContenedorImg = styled.div`
    height: 100%;
    width: 100%;
    clip-path: polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%);
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
    const handleClick = () => {
        window.open('https://sinaloa.travel/destinos/mazatlan', '_blank');
    }
    return (
      <ContenedorGenerico id="Experiencias">
        <ContenedorExperiencias>
            <ContenedorComponentesIzquierda>
                <TxtTitularGenericoH1 color= 'var(--ColorVerdePrincipal)' aling='start' size= '38px' bold > Descubre Mazatlán como nunca antes </TxtTitularGenericoH1>
                <TxtGenerico  aling='start' size= '16px'  > Mazatlán, la Perla del Pacífico, te enamorará con sus hermosas playas, deliciosa gastronomía y animados festivales. Un destino perfecto para disfrutar de cultura, aventura y relajación junto al mar. </TxtGenerico>
                <BtnGenerico onClick={() => handleClick()} size='24px'>Leer mas</BtnGenerico>
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
  
  
  