import styled from "styled-components";
import { ContenedorGenerico, ContenedorHorizontal, ContenedorVertical } from "../componentesGenerales/Displays";
import { ImgPicture } from "../componentesGenerales/ImgPicture";
import imgContacto from '../src/img/imgContacto.webp'
import { ContenedorVerde } from "../componentesGenerales/Displays";
import { TxtGenerico } from "../componentesGenerales/Txt";
import { BtnWhatsapp } from "../componentesGenerales/Btn";
import { useState } from "react";
import emailjs from "emailjs-com"; 


// Estilos para la sección de contacto
const ContenedorSeccionContactoStyled = styled(ContenedorGenerico)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    height: 500px;
    padding: 10px;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 300px;
        height: auto;
    }
`;

const ContenedorSubseccion = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
`;

const TituloFormulario = styled.h2`
    font-size: 32px;
    color: var(--ColorVerdePrincipal);
    text-align: center;
    margin-top: 0;
    margin-bottom: 5px;
    @media (max-width: 900px) {

        font-size: 28px;
    }
`;

const InputFormulario = styled.input`
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    margin-bottom: 10px;
    
    @media (max-width: 900px) {
        padding: 8px;
        font-size: 14px;
    }
 
`;

const TextAreaFormulario = styled.textarea`
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    height: 120px;
    resize: vertical;
`;
const ContenedorHorizontalContacto = styled(ContenedorHorizontal)`
    @media (max-width: 900px) {
        flex-direction: column;
    }
`
const BotonEnviar = styled.button`
    padding: 12px 20px;
    margin-top: 20px;
    background-color: #4CAF50;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #45a049;
    }
`;

const LabelFormularioStyled = styled.label`
    color: var(--ColorVerdePrincipal);
    font-size: 22px;
    @media (max-width: 900px) {
        font-size: 18px;
    }
`
const ContenedorForm = styled.form`
    display: flex;
    flex-direction: column;
    
`
const FormularioContacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
    });

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar los datos del formulario utilizando EmailJS
        emailjs
            .sendForm(
                "service_v7dqnfn", // Aquí va tu Service ID
                "template_hq4mzln", // Aquí va tu Template ID
                e.target, // El formulario que estamos enviando
                "I3FWcjsDSBM6m8K0v" // Aquí va tu User ID
            )
            .then(
                (result) => {
                    console.log(result.text); // Esto se imprime si el correo se envía correctamente
                    alert("¡Correo enviado, te estaremos contactando :D!");
                    setFormData({
                        nombre: "",
                        email: "",
                        telefono: "",
                        mensaje: "",
                    });
                },
                (error) => {
                    console.log(error.text); // Esto se imprime si hay un error al enviar el correo
                    alert("Hubo un error al enviar el correo. Intenta nuevamente.");
                }
            );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <ContenedorForm onSubmit={handleSubmit}>
            <TituloFormulario>Formulario de Contacto</TituloFormulario>
            
                <LabelFormularioStyled htmlFor="nombre"> Nombre </LabelFormularioStyled>
                <InputFormulario
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre Completo"
                    required
                />
           
      

            <ContenedorHorizontalContacto>
                <ContenedorVertical>
                    <LabelFormularioStyled htmlFor="email"> Correo </LabelFormularioStyled>
                    <InputFormulario
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Correo Electrónico"
                        required
                    />
                </ContenedorVertical>
                <ContenedorVertical>
                    <LabelFormularioStyled htmlFor="telefono"> Teléfono </LabelFormularioStyled>
                    <InputFormulario
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Número de Teléfono"
                        required
                    />
                </ContenedorVertical>
            </ContenedorHorizontalContacto>

            <LabelFormularioStyled htmlFor="txt"> Mensaje </LabelFormularioStyled>
            <TextAreaFormulario
                id="txt"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                required
            />
            <BotonEnviar type="submit">Enviar</BotonEnviar>
        </ContenedorForm>
    );
};

const ContenedorImg = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    padding: 10px;
    ::after{
       content: '';
       width: 100%;
       height: 100%;
       position: absolute;
       background-color: #0000005f ;  
    }
    img{
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`

const ContenedorTxtContacto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    gap: 10px;
    width: 100%;
    height: 100%;
    z-index: 100;
`


const ContenedorTxtImgInterno = styled(ContenedorVertical)`
    gap: 20px;
`


export const SeccionContacto = () => {
    return (
            <ContenedorSeccionContactoStyled id="contacto">
                
                <ContenedorSubseccion>
                    <FormularioContacto />
                </ContenedorSubseccion>

               
                <ContenedorSubseccion>
                    <ContenedorImg>
                        <ImgPicture bg={true} src={imgContacto} alt='Imagen playa Mazatlan, contenedor de texto contacto' />
                    </ContenedorImg>
                    <ContenedorTxtContacto>
                        <ContenedorTxtImgInterno >
                            <TxtGenerico  color = 'var(--ColorBlancoPrincipal)' size='32px' >ENVÍANOS UN MENSAJE </TxtGenerico>
                            <TxtGenerico aling='start' color = 'var(--ColorBlancoPrincipal)' size='20px' >Te invitamos a enviarnos un mensaje a través de nuestro formulario o por WhatsApp para obtener más información sobre nuestras cotizaciones y reservar tus fechas. </TxtGenerico>
                        </ContenedorTxtImgInterno>
                        
                        <BtnWhatsapp />
                            
                        
                    </ContenedorTxtContacto>
                </ContenedorSubseccion>
            </ContenedorSeccionContactoStyled>
        
    );
};
