import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import Todo from './Todo';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, where } from 'firebase/firestore';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { getAuth } from "firebase/auth"; // Assuming you have an AuthContext for managing user authentication

function Home() {
        const auth = getAuth();
        const currentUser = auth.currentUser;
   // const { currentUser } = useAuth(); // Get the currently logged-in user from the AuthContext

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (currentUser) {
            const q = query(collection(db, 'todos'), where('userId', '==', currentUser.uid), orderBy('timestamp', 'desc'));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                setTodos(snapshot.docs.map(doc => ({
                    id: doc.id,
                    item: doc.data()
                })))
            });

            return unsubscribe; // Cleanup function to unsubscribe from the snapshot listener when component unmounts
        }
    }, [currentUser]); // Listen for changes in currentUser

    const addTodo = () => {
        if (input === '') {
            setShowError(true);
        } else {
            addDoc(collection(db, "todos"), {
                todo: input,
                timestamp: serverTimestamp(),
                userId: currentUser.uid // Associate todo with the current user's UID
            });
            setInput('');
        }
    };

    return (
        <>
            <div className="flex justify-center mt-5">
                <div className='mr-2'>
                    <TextField id="outlined-basic" label="Add task here" variant="outlined" size="small" value={input}
                        onChange={e => setInput(e.target.value)} />
                </div>
                <div>
                    <Button variant="contained" color="success" onClick={addTodo} endIcon={<SendIcon />} >Add</Button>
                </div>
            </div>
            <div className='flex flex-col items-center mt-5 mb-5'>
                {showError && <Snackbar open={open} onClose={() => setShowError(false)} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Alert severity="warning" variant="filled" sx={{ width: '100%' }}>
                        Enter Task First
                    </Alert>
                </Snackbar>}
                {todos.map(item => <Todo key={item.id} arr={item} />)}
            </div>
        </>
    );
}
export default Home;
