import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import ExploreContainer from '../../components/ExploreContainer';
import temonet from '../images/img-temonet-logo-sf.png'

const CrearTerapiaFonologica: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle><img src= {temonet} width='50' />Crear Terapia Fonologica</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Terapia Fonologica</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
        <IonContent>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CrearTerapiaFonologica;
