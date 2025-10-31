import 'aos/dist/aos.css';

import dress from '../assets/esmeralda/dressCodeIcon.svg'
import CountdownCircles from "./CountdownCircles";
import InstagramWall from "./InstagramWall";
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import decoracionImagenes from "../assets/esmeralda/decoracionImagenes.svg";
import decoracionDressCode from "../assets/esmeralda/decoracionDressCode.svg";
import song from '../assets/song.mp3'
import butterfly from '../assets/butterfly.svg'
import butterfly2 from '../assets/butterfly2.svg'

import DressCodeEsmeralda from "./DressCodeEsmeralda";

const Invitacion = () => {

  const targetDate = new Date("2026-03-14T20:30:00-03:00");

  const colorPrincipal = "#9c7cb5";
  const colorSecundario = "#b599c8";



  return (
    <div className="w-full font-libre relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

      <div className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-fondo-esmeralda bg-center bg-cover font-eleganteText space-y-5 overflow-hidden"
        style={{backgroundImage: `url('https://res.cloudinary.com/dfschbyq2/image/upload/v1742341160/Fondo_de_Pantalla_Computador_Simple_Beige_18_gyfe4i.png')`}}
      >
        <div data-aos="fade-in">
            <p className="text-xl mb-5 tracking-widest font-libre">Te invito a mis 15</p>
            <h1 className="text-8xl md:text-[10rem] font-brushNames text-[#3b3b3b] z-10 italic">
            Keyla
            </h1>

            <div className="flex items-center justify-center py-2 px-4 mt-5">
            <p className="font-bold text-gray-900 text-base tracking-widest font-libre">
                1 4 . 0 3 . 2 0 2 6
            </p>
            </div>
        </div>
      </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#b599c8]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#b599c8"
              textColor="black"
              valueClassName="text-2xl font-light"
              labelClassName="text-base font-thin"
            />
          </section>

        <section id="lugares" className="relative text-center bg-white">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            salon="Maquiabello Eventos"
            hora_civil="20:30hs"
            hora_inicio="20:30hs"
            hora_fin="05:30hs"
          />
          <a href="https://maps.app.goo.gl/qdpDtD4TeEfEEjHj9" target="_blank" rel="noopener noreferrer">
            <button className=" text-sm border-2 border-gray-700 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

          <div className="relative bg-white">
            <img
              src={decoracionImagenes}
              alt="Decoración lateral"
              className="hidden md:block absolute -left-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",

              }}
            />
            <img
              src={decoracionImagenes}
              alt="Decoración lateral invertida"
              className="hidden md:block absolute -right-44 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                 width: "30rem" ,
                }}
            />
            <section className="pb-16">
                <FocusCardsDemo
                    texto=""
                  images={[
                    {
                      index: 1,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761924033/08f0226b-6d22-4b4d-b8f2-900c4f82150e_2_uu8h7y.webp",
                    },
                    // {
                    //   index: 2,
                    //   img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862666/6ba0d5df-bf5e-46a6-aa5c-286b899e1205_npwd6t.jpg",
                    // },
                    // {
                    //   index: 3,
                    //   img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862672/639bd82f-360b-4fbe-894a-18960373fb88_p66dkp.jpg",
                    // },
                    // {
                    //   index: 4,
                    //   img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862678/9d3c68a5-5b63-472b-8b5f-f078f1c50374_v68yjv.jpg",
                    // },
                  ]}
                />
            </section>
          </div>

          <div className="bg-white border-b border-[#6a4e8a]">
            <InstagramWall
              userClass="text-[#6a4e8a]"
              logoClass="text-[#6a4e8a]"
              user="@keeylaailinn"
            />
          </div>

          <div className="bg-[#9c7cb5] text-center relative text-white">
            <GoogleCalendarButton
              imgClass="text-white"
              buttonClass="border-[#6a4e8a] bg-white text-gray-800 text-sm rounded-full"
              titleCalendar="XV de Keyla"
              salon="Maquiabello Eventos, FIC, Riglos 5513, B1758 González Catán, Provincia de Buenos Aires"
              fechaComienzo="20260314T203000"
              fechaFin="20260315T053000"
            />
          </div>

          <div className="relative bg-white py-10">
            <img
              src={decoracionDressCode}
              alt="Decoración DressCode Izq"
              className="hidden md:block absolute -left-40 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
              }}
            />
            <img
              src={decoracionDressCode}
              alt="Decoración DressCode Der"
              className="hidden md:block absolute -right-40 top-1/2 transform -translate-y-1/2 pointer-events-none"
              style={{
                width: "30rem",
                transform: "translateY(-50%) scaleX(-1)",

              }}
            />

            <DressCodeEsmeralda dressCode="Elegante Sport" icon={dress}/>
          </div>

          <DatosBancarios
            claseIcon="text-white"
            texto="Si deseas hacerme un regalo, te dejo los datos"
            claseContenedor="bg-[#6a4e8a] text-white"
            claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
            textSize="text-base"
            background={{ backgroundColor: colorPrincipal }}
            styleBotonModal={{
              backgroundColor: "white",
              borderColor: "#d4bfe2",
            }}
            claseBotonModal={{
              backgroundColor: "#6a4e8a",
              borderColor: "#6a4e8a",
            }}
            styleModal={{ backgroundColor: colorSecundario }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            styleTextColor={{ color: colorPrincipal }}
            cbu="0000003100080139171857"
            alias="keyla12.mp"
            banco="Mercado Pago"
            nombre="Keyla Ailin Roldan"
            claseModal="bg-[#6a4e8a]"
            borderModal="border-[#6a4e8a]"
            textColor="text-[#6a4e8a]"
          />

          <Asistencia
            clase="py-10 bg-white bg-fixed border-b-4 border-[#6a4e8a]"
            claseTitle="text-[#6a4e8a]"
            claseButton="border-2 border-[#6a4e8a] text-sm font-semibold hover:bg-[#6a4e8a]  text-gray-700 hover:text-white rounded-full"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSeQSQW-DQQ6GXRFQDGt5wkzQwBBZlPAgUoXC6svZmd1vN7cUw/viewform?usp=publish-editor"
          />

        <div className="font-libre text-sm bg-white py-16">
          <div className="relative flex justify-center items-center">
            <img
              src={butterfly}
              alt="Decoración mariposa izquierda"
              className="absolute -top-10 left-50 md:left-20 w-12 md:w-20 opacity-70 transform -rotate-12 scale-x-[-1]"
            />
            <TextoFinal textoFinal="Existen momentos en la vida que imaginamos, soñamos, y esperamos, uno de esos momentos es este... Deseo compartirlo con las personas que siempre están presentes en mi vida y vos sos una de ellas." />
            <img
              src={butterfly}
              alt="Decoración mariposa derecha"
              className="absolute bottom-0 left-10 md:left-20 w-10 md:w-20 opacity-70 transform rotate-12"
            />
            <img
            src={butterfly2}
            alt="Decoración mariposa derecha"
            className="absolute bottom-0 right-10 md:right-20 w-14 md:w-20 opacity-70 transform rotate-12"
          />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
