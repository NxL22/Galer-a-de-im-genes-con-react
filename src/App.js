import './App.css';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './footer';
import Card from './components/Card'


function App() {
  return (
    <>

      <Header titulo="React" />

      <Card
        ruta="./imgs/Serpiente Taipán.jpg"
        titulo="Serpiente Taipán"
        descripcion="¡Esta serpiente australiana es tan venenosa que puede matar
        a un elefante en menos de tres horas! ¡Así que imagina lo que podría hacer
        con un humano! Además, su veneno es tan poderoso que se ha utilizado en 
        medicinas para tratar el dolor y la hipertensión."
        descripcionDeimg="Serpiente Taipán, tan venenosa que puede matar
        a un elefante."
        habitat="Hábitat: Australia."
        tipoDeVeneno="Tipo de veneno: Neurotóxico."
      />

      <Card
        ruta="./imgs/Rana Flecha Dorada.jpg"
        titulo="Rana Flecha Dorada"
        descripcion="Esta pequeña y colorida ranita puede ser linda a simple vista,
        pero no te dejes engañar, ¡su veneno es mortal! Tanto así, que los pueblos
        indígenas de América del Sur lo usaban para envenenar sus flechas y cazar."
        descripcionDeimg="Rana Flecha Dorada, tan venenosa que su veneno se usaba en 
        flechas para cazar animales."
        habitat="Hábitat: Colombia."
        tipoDeVeneno="Tipo de veneno: Alcaloide."
      />

      <Card
        ruta="./imgs/Pez Piedra.jpg"
        titulo="Pez Piedra"
        descripcion=" No te dejes engañar por su nombre, este pez no es inofensivo
        como una piedra, ¡es extremadamente venenoso! Su veneno es tan poderoso 
        que puede causar parálisis, fallo cardíaco y en algunos casos incluso 
        la muerte."
        descripcionDeimg="Pez Piedra, no es inonfensivo como piedra pero su veneno te 
        dejara paralizado como una."
        habitat="Hábitat: Norte de África y Oriente Medio."
        tipoDeVeneno="Tipo de veneno: Neurotóxico."
      />

      <Card
        ruta="./imgs/cono de mar.jpg"
        titulo="Cono De Mar"
        descripcion="Esta criatura marina parece inofensiva, 
        pero en realidad es una de las más venenosas del mundo. 
        Su veneno es tan potente que puede matar a un humano en menos de una hora.
        Y si eso no es suficiente, ¡no hay antídoto conocido"
        descripcionDeimg="Cono De Mar, este caracol es el mas venenoso del mundo te mataria 
        en menos de una hora."
        habitat="Hábitat: Océanos tropicales y subtropicales."
        tipoDeVeneno="Tipo de veneno: Conotoxinas."
      />

      <Card
        ruta="./imgs/Araña de Sídney embudo.jpg"
        titulo="Araña de Sídney embudo"
        descripcion="Esta araña australiana aunque es muy timida tiene una mordida 
        venenosa que puede causar sudores fríos y temblores, seguido de una muerte
        dolorosa en menos de una hora."
        descripcionDeimg="Araña de Sídney embudo, esta araña tiene un veneno super 
        doloroso."
        habitat="Hábitat: América del Sur."
        tipoDeVeneno="Tipo de veneno: Neurotóxico."
      />

      <Card
        ruta="./imgs/medusa caja.jpg"
        titulo="Medusa Caja"
        descripcion="Esta hermosa medusa se encuentra en las aguas tropicales de
        todo el mundo y puede ser fácilmente confundida con una medusa común. 
        Pero no te dejes engañar, ¡su veneno es tan poderoso que puede matar a 
        un humano en minutos!"
        descripcionDeimg="Medusa Caja, esta hermosa medusa se parece a las que son
        inonfensivas pero esta te mataria en minutos."
        habitat="Hábitat:  Océano Pacífico Norte."
        tipoDeVeneno="Tipo de veneno: Cardiovascular y neurotóxico."
      />

      <Card
        ruta=""
        titulo="Escorpión de cola gorda"
        descripcion="Este escorpión es una de las criaturas más venenosas del mundo.
        Su veneno es tan potente que puede causar parálisis y en algunos casos, 
        la muerte. Así que asegúrate de mantener tus manos y pies alejados de estos 
        bichos peligrosos."
        descripcionDeimg="Escorpión de cola gorda, luce tan amenazante como lo es."
        habitat="Hábitat: Norte de África y Oriente Medio."
        tipoDeVeneno="Tipo de veneno: Neurotóxico."
      />

      <Footer />

    </>

  );
}


export default App;
