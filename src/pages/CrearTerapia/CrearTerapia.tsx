import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useLocation, useParams } from 'react-router-dom';
import ExploreContainer from '../../components/ExploreContainer';
import temonet from '../images/img-temonet-logo-sf.png'
import './CrearTerapias.css'
import { clipboardOutline } from 'ionicons/icons';

interface AppContent {
  url: string;
  title: string;
  mdIcon: string;
  desc: string;
}

const appContent: AppContent[] = [
  {
    title: 'Fonologica',
    url: '/CrearTerapiaFonologica',
    mdIcon: clipboardOutline,
    desc: ' Tipo de dislexia fonologica o indirecta'
  },
  {
    title: 'Superficial',
    url: '/TerapiaSuperficial',
    mdIcon: clipboardOutline,
    desc: ' Dificultad para memorizar'
  },
  {
    title: 'Mixta',
    url: '/TerapiaMixta',
    mdIcon: clipboardOutline,
    desc: ' Tipo de dislexia mixta o profunda'
  },
  {
    title: 'Nueva Dislexia',
    url: '/NuevaDislexia',
    mdIcon: clipboardOutline,
    desc: ' Nuevo tipo de dislexia desconocida'
  },
  {
    title: 'Dislexia Tipo 1',
    url: '/DislexiaTipo1',
    mdIcon: clipboardOutline,
    desc: ' Nuevo tipo de dislexia desconocida'
  }
]


const CrearTerapia: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const location = useLocation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonItem>
          <IonTitle><img src= {temonet} width='50' />Crear Terapia</IonTitle>
          <IonItem>
        <IonAvatar slot="start">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </IonAvatar>
        <IonLabel>Item Avatar</IonLabel>
      </IonItem>
          </IonItem>
        </IonToolbar>
      </IonHeader>

      
        
        <IonHeader collapse="condense">
          <IonToolbar>


            <IonButtons>
              <IonButton>
                <IonIcon slot='icon-only'name='menu'></IonIcon>
              </IonButton>
            </IonButtons>


            <IonTitle size="large">Crear Terapia</IonTitle>
          </IonToolbar>
        </IonHeader>


        <div className='contenedor'>
        {appContent.map((appContents) => {
            return (
            <div className='cont'>
             <IonCard id='cont-cont' className={location.pathname === appContents.url ? 'selected' : 'no-selected'}  routerLink={appContents.url} routerDirection="none" >
                <IonCardHeader>
                   <IonCardTitle > {appContents.title} </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                   <IonIcon slot="start" md={appContents.mdIcon} />{appContents.desc} 
                </IonCardContent>
               </IonCard>
     </       div>
         );
        })}
         </div>
        <IonContent>
        </IonContent>
      
    </IonPage>
  );
};

export default CrearTerapia;
