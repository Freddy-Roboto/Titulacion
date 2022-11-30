import { IonAvatar, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonPopover, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { close, pencil} from 'ionicons/icons';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExploreContainer from '../../components/ExploreContainer';
import temonet from '../images/img-temonet-logo-sf.png'
import './TerapiaSuperficial.css'
import { removeCustomer, saveCustomer, searchCustomers } from './TerapiaSuperficialApi';




const TerapiaSuperficial: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<any>([]);
  
  const [customer, setCustomer] = useState<any>({});


  
 
 
    const modal = useRef<HTMLIonModalElement>(null);
    const modal2 = useRef<HTMLIonModalElement>(null);
   
  
    function dismiss() {
      modal.current?.dismiss();
      modal2.current?.dismiss();
    }

    useEffect(() => {
      search();
    }, []);

  
  const search = () => {
      let result = searchCustomers();
      setClientes(result);
  }

  const remove = (id:string) => {
      removeCustomer(id);
      search();
  }

  


  const save = () => {
    customer.id = Math.round(Math.random() * 100000);
    saveCustomer(customer)
    dismiss();
    search()
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonItem>
          <IonTitle><img src= {temonet} width='50' />Crear Terapia Superficial</IonTitle>
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
            <IonTitle size="large">Terapia Superficial</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent fullscreen>
        <ExploreContainer name={name}/>
          <div>
            <div className='nombre'>
              <IonCard>
                <IonInput type='text' placeholder="¿Como se llamara la terapia?"  > </IonInput>
              </IonCard>
            </div>
            <div className='descripcion'>
              <IonCard className='textarea'>
                <IonTextarea className='textarea' placeholder="Breve descripcion de la terapia que estas creando." > </IonTextarea>
              </IonCard>
            </div>
            
          </div>

          <div>
             {clientes.map((cliente:any) =>
             <IonCard>
             <IonGrid>
              <IonRow>
                <IonCol> {cliente.text} 

                  {/* <IonButton onClick={() => remove(cliente.id)} fill='clear' size='small'> 
                    <IonIcon slot='icon-only'icon={pencil} color='success'/> 
                  </IonButton>  */}

                  <IonButton onClick={() => remove(cliente.id)} fill='clear' size='small'> 
                    <IonIcon slot='icon-only'icon={close} color='danger'/> 
                  </IonButton> 
                </IonCol>
              </IonRow>
              </IonGrid>
              </IonCard>

               )}
              </div>
              
       
        </IonContent>
      
      <IonItem className='botones'>
       
          <IonItem>
            <IonButton id="open-custom-dialog" expand="block">
            Ingresar Texto
            </IonButton>
            <IonButton id="open-button-op" expand="block">
            Imagen + opciones
            </IonButton>
            <IonButton id="open-button-check" expand="block">
            Imagen + Check
            </IonButton>
            <IonButton id="open-button-guardar" expand="block">
            Guardar
            </IonButton>
          </IonItem>
          </IonItem>
          
          <IonPopover trigger="open-button-op" reference="trigger" side="top" alignment="center" dismissOnSelect={true}>
        <IonContent  >
          <IonList>
            <IonItem  button={true} id="open-options-dialog">
              
              Imagen + 2 Opciones
            </IonItem>
            <IonItem button={true} detail={false}>
              Imagen + 3 Opciones
            </IonItem>
          </IonList>
          
        </IonContent>
      </IonPopover>
     
      <IonModal className='modal-texto'  id="example-modal" ref={modal2} trigger="open-options-dialog" >        
            
            
            <IonToolbar>
            <IonButton onClick={save} slot='end'>Guardar</IonButton>
            <IonButton onClick={dismiss} slot='end'>Cancelar</IonButton>
            </IonToolbar>
          </IonModal>
     


      <IonPopover trigger="open-button-check" reference="trigger" side="top" alignment="center" dismissOnSelect={true}>
        <IonContent  >
          <IonList>
            <IonItem  button={true} detail={false}>
            Imagen + 2 Opciones
            </IonItem>
            <IonItem button={true} detail={false}>
            Imagen + 3 Opciones
            </IonItem>
          </IonList>
        </IonContent>
      </IonPopover>
          
          <IonModal className='modal-texto'   id="example-modal" ref={modal} trigger="open-custom-dialog" > 
          
          <IonHeader >
          <IonItem >
              <IonTextarea className='textarea-modal' onIonChange={e => customer.text = e.detail.value}  ></IonTextarea>
            </IonItem>
            </IonHeader>       
            
           
            
           
              <IonToolbar>
              
            <IonButton onClick={save} slot='end'>Guardar</IonButton>
            <IonButton onClick={dismiss} slot='end'>Cancelar</IonButton>
            
            </IonToolbar>
           
            
           
            
          </IonModal>

          
          

        
          
         
       
    </IonPage>
  );
};

export default TerapiaSuperficial;


