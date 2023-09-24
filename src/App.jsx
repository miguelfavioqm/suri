import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Menu from "./components/Menu";
import { Main } from "./components/Main";
import Features from "./components/Features";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Form from "./components/Form";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <Main />
      <Features />
      <CardContainer
        title="Productos mas seleccionados"
        product={[
          {
            title: "Anhelo",
            descripcion:
              'Cuando anhelas aquello que ya no está, ese tiempo que no volvera y aquellos recuerdos inexistentes. Pensar en aquellas sonrisas, pero no recordar sus voces. Anhelo ese calor maternal alguien a quien decir "mamá".(Serigrafía)',
            precio: 15,
            imagen:
              "https://64ed64d57eea5d08d3d3c6ce--aquamarine-parfait-1892ca.netlify.app/Anhelo.jpg",
          },
          {
            title: "Collita",
            descripcion:
              "Coleccion: Colgante realizados en Cerámica y esmaltados a mano.",
            precio: 25,
            imagen:
              "https://64ed64d57eea5d08d3d3c6ce--aquamarine-parfait-1892ca.netlify.app/Collita.jpg",
          },
          {
            title: "Sentir",
            descripcion:
              "Siento que nunca te fuiste y estas presente, pero no fisicamente (Ilustracion realizada en vectores).",
            precio: 25,
            imagen:
              "https://64ed64d57eea5d08d3d3c6ce--aquamarine-parfait-1892ca.netlify.app/Sentir.jpg",
          },
          {
            title: "Chuquiago Marka",
            descripcion:
              "#Ilustración , inspirada en el @encuentrochuquiagomarka ✨",
            precio: 0,
            imagen:
              "https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/376775885_3729798530599470_4477490359446998815_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=jX1GKquSeP0AX8L1hh3&_nc_oc=AQkoflJ0YpyOEz9C-moPSmQuXkbmnJfRhfgWSAYqOkyNwwWGiU_lIDkwOnqb-4P_6Gw&_nc_ht=scontent.flpb1-1.fna&oh=00_AfBdWI_J_Y8l3JFEWN9V3ZmN0GUxulgm_hajwgDj7jsxkA&oe=6515F7CA",
          },
        ]}
      />
      <CardContainer
        title="Productos nuevos"
        product={[
          {
            title: "La Santísima Trinidad",
            descripcion:
              "#Técnica: Grabado en linóleo Quiero compartir uno de mis grabados, lo realicé el año pasado para el Salón Anual del #ANBA",
            precio: 0,
            imagen:
              "https://scontent.flpb1-2.fna.fbcdn.net/v/t39.30808-6/332347532_529483335994156_6435208128794905151_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=49d041&_nc_ohc=aWUMNrzRazkAX-LCDt7&_nc_ht=scontent.flpb1-2.fna&oh=00_AfDAxO2tZFM3GmBUC7YVKj45Cjb4yu9_SaZWVGZw7hdQgQ&oe=6515E7C1",
          },
          {
            title: "Chuquiago Marka",
            descripcion:
              "#Ilustración , inspirada en el @encuentrochuquiagomarka ✨",
            precio: 0,
            imagen:
              "https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/376775885_3729798530599470_4477490359446998815_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=jX1GKquSeP0AX8L1hh3&_nc_oc=AQkoflJ0YpyOEz9C-moPSmQuXkbmnJfRhfgWSAYqOkyNwwWGiU_lIDkwOnqb-4P_6Gw&_nc_ht=scontent.flpb1-1.fna&oh=00_AfBdWI_J_Y8l3JFEWN9V3ZmN0GUxulgm_hajwgDj7jsxkA&oe=6515F7CA",
          },
          {
            title: "Sentir",
            descripcion: "Grabado #Art #Suri #Arte #Alasitas",
            precio: 0,
            imagen:
              "https://scontent.flpb1-2.fna.fbcdn.net/v/t39.30808-6/327453667_2456734184489690_8402276993186704739_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=JuvJZ0BGwQYAX9NFATc&_nc_ht=scontent.flpb1-2.fna&oh=00_AfB7n3353YMsaMe_a_zbve7IkWwqX1kk68-HUWtGhyx4dA&oe=65158FA2",
          },
          {
            title: "Sentir",
            descripcion: "Grabado #Art #Suri #Arte #Alasitas",
            precio: 0,
            imagen:
              "https://scontent.flpb1-2.fna.fbcdn.net/v/t39.30808-6/299930536_3433015660277760_4238095281061167207_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5614bc&_nc_ohc=jE_-PuKDUEkAX90wSdZ&_nc_ht=scontent.flpb1-2.fna&oh=00_AfCw5tiCURd4S_QSx3o_U4p3NHnszQdr8g0fHDC-cDAYlg&oe=651657B8",
          },
        ]}
      />
      <Form />
      <Footer />
    </>
  );
}

export default App;
