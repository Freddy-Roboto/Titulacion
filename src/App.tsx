import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CrearTerapia from './pages/CrearTerapia/CrearTerapia';
import ReportesdeResultado from './pages/ReportesdeResultado/ReportesdeResultado';
import Escritorio from './pages/Escritorio/Escritorio';
import MisPacientes from './pages/MisPacientes/MisPacientes';
import MisTerapias from './pages/MisTerapias/MisTerapias';
import CrearTerapiaFonologica from './pages/CrearTerapiaFonologica/CrearTerapiaFonologica';
import TerapiaSuperficial from './pages/TerapiaSuperficial/TerapiaSuperficial';
import TerapiaMixta from './pages/TerapiaMixta/TerapiaMixta';
import NuevaDislexia from './pages/NuevaDislexia/NuevaDislexia';
import DislexiaTipo1 from './pages/DislexiaTipo1/DislexiaTipo1';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Escritorio" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/page/Escritorio">
              <Escritorio />
            </Route>
            <Route path="/page/Mis Pacientes">
              <MisPacientes/>
            </Route>
            <Route path="/page/Mis Terapias">
              <MisTerapias/>
            </Route>
            <Route path="/page/Crear Terapias">
              <CrearTerapia />
            </Route>


            <Route path="/CrearTerapiaFonologica">
              <CrearTerapiaFonologica />
            </Route>
            <Route path="/TerapiaSuperficial">
              <TerapiaSuperficial />
            </Route>
            <Route path="/TerapiaMixta">
              <TerapiaMixta />
            </Route>
            <Route path="/NuevaDislexia">
              <NuevaDislexia />
            </Route>
            <Route path="/DislexiaTipo1">
              <DislexiaTipo1 />
            </Route>

            
            <Route path="/page/Reportes de Resultado">
              <ReportesdeResultado />
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
