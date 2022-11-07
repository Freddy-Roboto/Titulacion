import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { apps, appsOutline, body, bodyOutline, construct, constructOutline, home, homeOutline,  statsChart, statsChartOutline } from 'ionicons/icons';
import './Menu.css';
import temonet from './images/img-temonet-sf.png'

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Escritorio',
    url: '/page/Escritorio',
    iosIcon: homeOutline,
    mdIcon: home
  },
  {
    title: 'Mis Pacientes',
    url: '/page/Mis Pacientes',
    iosIcon: bodyOutline,
    mdIcon: body
  },
  {
    title: 'Mis Terapias',
    url: '/page/Mis Terapias',
    iosIcon: appsOutline,
    mdIcon: apps
  },
  {
    title: 'Crear Terapias',
    url: '/page/Crear Terapias',
    iosIcon: constructOutline,
    mdIcon: construct
  },
  {
    title: 'Reportes de Resultados',
    url: '/page/Reportes de Resultado',
    iosIcon: statsChartOutline,
    mdIcon: statsChart
  }
];



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      
      <IonContent>
       
        
        <IonList id="inbox-list">
        <img src= {temonet} width="200" />
          <IonListHeader></IonListHeader>
          {appPages.map((appPage, index) => {
            return (
      
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''}  routerLink={appPage.url} routerDirection="none" lines="none" detail={false}> 
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
              
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
