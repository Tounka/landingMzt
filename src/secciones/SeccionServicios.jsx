import styled from "styled-components";
import { ContenedorGenerico } from "../componentesGenerales/Displays";
import { ImgPicture } from "../componentesGenerales/ImgPicture";
import { TxtGenerico } from "../componentesGenerales/Txt";
import imgBan from '../src/img/imgBan.jpg'

const ContenedorServicios = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    height: 100%;
    width: 100%;
    padding: 20px 0;
`;

const ContenedorSeccionsStyled = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    gap: 20px;

    display: grid;
    grid-template-columns: ${({ reverse }) => reverse ? '1fr 2fr' : '2fr 1fr'};

    grid-template-areas: ${({ reverse }) => reverse ? '"image text"' : '"text image"'};

    @media (max-width: 600px) { 
        display: flex;
        flex-direction: column;
        
    }
`;

const ContenedorIzquierdo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TituloPrincipal = styled.h2`
    font-size: 38px;
    color: white;
    font-weight: bold;
    margin: 0;
`;

const Titulo = styled(TxtGenerico)`
    font-size: 20px;
    color: white;
    font-weight: bold;
    user-select: text;
`;

const TxtServicio = styled(TxtGenerico)`
    font-size: ${props => props.size  ? props.size : '16px'};
    text-align: ${props => props.center  ? 'center' : 'justify'};
    color: white;
    user-select: text;
`;

const ContenedorImg = styled(ContenedorIzquierdo)`
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    object-fit: cover;
    grid-area: image;
    
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 600px) { 
        max-height: 300px;
        
    }
`;

const ContenedorSeccionServicio = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--ColorVerdePrincipal);
`;

const Servicio = ({titulo, txt, src, reverse}) => {
    return (
        <ContenedorSeccionsStyled reverse={reverse}>
            <div style={{ gridArea: "text" }}>
                <ContenedorIzquierdo> 
                    <Titulo> {titulo} </Titulo>
                    <TxtServicio>{txt}</TxtServicio>
                </ContenedorIzquierdo>
            </div>
            <ContenedorImg>
                <ImgPicture src={src} alt='Imagen servicio' />
            </ContenedorImg>
        </ContenedorSeccionsStyled>
    );
};

export const SeccionServicios = () => {
    return (
        <ContenedorSeccionServicio>
            <ContenedorGenerico id="servicios">
                <ContenedorServicios>
                    <TituloPrincipal>Servicio</TituloPrincipal>
                    <Servicio 
                        src={imgBan} 
                        titulo='Transporte' 
                        txt='Ofrecemos un servicio de transporte cómodo y seguro para que disfrutes de tu visita a Mazatlán sin preocupaciones. Con vehículos modernos y conductores profesionales, te llevamos a los principales puntos de interés de la ciudad, ya sea para un paseo relajante o para explorar las zonas turísticas más populares. ¡Viaja con nosotros y descubre Mazatlán de manera fácil y accesible!' 
                    />
                    <Servicio 
                        reverse 
                        src={imgBan} 
                        titulo='Guía Turístico' 
                        txt='Nuestro servicio de guía turística te permitirá conocer a fondo la rica historia y cultura de Mazatlán. Guiados por expertos locales, recorrerás los lugares más emblemáticos de la ciudad, desde sus playas hasta sus tradiciones. Nuestros guías te brindarán una experiencia personalizada, compartiendo contigo los secretos y tesoros ocultos de este hermoso puerto. ¡Haz que tu visita sea inolvidable con una guía especializada!' 
                    />

                    <TxtServicio size= '28px' center> Servicio de <b> transporte </b> y guía <b> turística </b> en el hermoso puerto de Mazatlán </TxtServicio>
                </ContenedorServicios>
            </ContenedorGenerico>
        </ContenedorSeccionServicio>
    );
};
