import React, { useState, useEffect } from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonIcon
} from '@ionic/react';
import { trash } from 'ionicons/icons';

const ListNote: React.FC = () => {
    const [notes, setNotes] = useState<any[]>([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = () => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    };

    const deleteNote = (index: number) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index, 1);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Notas</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {notes.map((note, index) => (
                    <IonCard key={index}>
                        <IonCardHeader>
                            <IonCardTitle>{note.title}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {note.content}
                            {note.image && <img src={note.image} alt="Nota" />}
                        </IonCardContent>
                        <IonButton fill="clear" onClick={() => deleteNote(index)}>
                            <IonIcon slot="icon-only" icon={trash} />
                        </IonButton>
                    </IonCard>
                ))}


            </IonContent>
        </IonPage>
    );
};

export default ListNote;
