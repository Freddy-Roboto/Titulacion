import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonModal, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
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
          <IonTitle><img src= {temonet} width='50' />Crear Terapia Superficial</IonTitle>
        </IonToolbar>
      </IonHeader>

      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Terapia Superficial</IonTitle>
          </IonToolbar>
        </IonHeader>


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

               )}
              </div>

       <IonContent>
        </IonContent>
      
      <IonItem className='botones'>
        <div>
        <IonItem>
          <IonButton id="open-custom-dialog" expand="block">
          Ingresar Texto
          </IonButton>
          <IonButton id="open-imagen-dialog" expand="block">
          Ingresar Imagen
          </IonButton>
          </IonItem>
          <IonModal  id="example-modal" ref={modal} trigger="open-custom-dialog" >        
            
            <IonItem>
              <IonTextarea onIonChange={e => customer.text = e.detail.value}  ></IonTextarea>
            </IonItem>
            <IonButton onClick={save}>Guardar</IonButton>
            <IonButton onClick={dismiss} slot='end'>Cancelar</IonButton>
          </IonModal>

        
          <IonModal  id="example-modal" ref={modal2} trigger="open-imagen-dialog" >        
            
            <IonItem>
             {/*  <IonTextarea onIonChange={e => customer.text = e.detail.value}  ></IonTextarea> */}
            </IonItem>
            <IonButton onClick={save}>Guardar</IonButton>
            <IonButton onClick={dismiss} slot='end'>Cancelar</IonButton>
          </IonModal>
       </div>
       </IonItem>
    </IonPage>
  );
};

export default TerapiaSuperficial;


