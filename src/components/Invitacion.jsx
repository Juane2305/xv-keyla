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

import DressCodeEsmeralda from "./DressCodeEsmeralda";

const Invitacion = () => {

  const targetDate = new Date("2026-03-14T20:30:00-03:00");

  const colorPrincipal = "#69795d";
  const colorSecundario = "#69795d";



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
            <h1 className="text-8xl md:text-[10rem] font-brushNames text-[#4b5147] z-10 italic">
            Keyla
            </h1>

            <div className="flex items-center justify-center py-2 px-4 mt-5">
            <p className="font-bold text-[#4b5147] text-base tracking-widest font-libre">
                1 4 . 0 3 . 2 0 2 6
            </p>
            </div>
        </div>
      </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#8b908c]"
          >
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#8b908c"
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
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862659/149f5c86-f91f-4c5f-84fc-5e3b37a50cc3_tdwvac.jpg",
                    },
                    {
                      index: 2,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862666/6ba0d5df-bf5e-46a6-aa5c-286b899e1205_npwd6t.jpg",
                    },
                    {
                      index: 3,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862672/639bd82f-360b-4fbe-894a-18960373fb88_p66dkp.jpg",
                    },
                    {
                      index: 4,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761862678/9d3c68a5-5b63-472b-8b5f-f078f1c50374_v68yjv.jpg",
                    },
                  ]}
                />
            </section>
          </div>

          <div className="bg-white border-b border-[#4b5147]">
            <InstagramWall
              userClass="text-[#4b5147]"
              logoClass="text-[#4b5147]"
              user="@keeylaailinn"
            />
          </div>

          <div className="bg-[#69795d] text-center relative text-white">
            <GoogleCalendarButton
              imgClass="text-white"
              buttonClass="border-[#4b5147] bg-white text-gray-800 text-sm rounded-full"
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
            claseContenedor="bg-[#4b5147] text-white"
            claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
            textSize="text-base"
            background={{ backgroundColor: colorPrincipal }}
            styleBotonModal={{
              backgroundColor: "white",
              borderColor: "#9eba8a",
            }}
            claseBotonModal={{
              backgroundColor: "#4b5147",
              borderColor: "#4b5147",
            }}
            styleModal={{ backgroundColor: colorSecundario }}
            styleBorderModal={{ borderColor: colorPrincipal }}
            styleTextColor={{ color: colorPrincipal }}
            cbu="0000003100080139171857"
            alias="keyla12.mp"
            banco="Mercado Pago"
            nombre="Keyla Ailin Roldan"
            claseModal="bg-[#4b5147]"
            borderModal="border-[#4b5147]"
            textColor="text-[#4b5147]"
          />

          <Asistencia
            clase="py-10 bg-white bg-fixed border-b-4 border-[#4b5147]"
            claseTitle="text-[#4b5147]"
            claseButton="border-2 border-[#4b5147] text-sm font-semibold hover:bg-[#4b5147]  text-gray-700 hover:text-white rounded-full"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSeQSQW-DQQ6GXRFQDGt5wkzQwBBZlPAgUoXC6svZmd1vN7cUw/viewform?usp=publish-editor"
          />

        <div className="font-libre text-sm bg-white">
          <TextoFinal textoFinal="Existen momentos en la vida que imaginamos, soñamos, y esperamos, uno de esos momentos es este... Deseo compartirlo con las personas que siempre están presentes en mi vida y vos sos una de ellas." />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
