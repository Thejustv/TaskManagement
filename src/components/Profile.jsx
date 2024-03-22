import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

const Profile=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');

    useEffect(()=>{

        const name = JSON.parse(localStorage.getItem('name'));
        const email=JSON.parse(localStorage.getItem('email'));
        if (name) {
         setName(name);
         setEmail(email);
        }
      /*  const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            const displayName = user.displayName;
            const email = user.email;
            setName(displayName);
            setEmail(email);
        }*/
    },[]);


    return (
        <div className="flex justify-center">
        <div className="mt-5">
            <div className="flex h-10 ">
                    <h1 className="mr-2 text-2xl">Name :</h1>
                    <h1 className="text-red-600 text-2xl">{name}</h1>
            </div>
            <div className="flex h-10 ">
                <h1 className="mr-2 text-2xl">Email :</h1>
                <h1 className="text-red-600 text-2xl">{email}</h1>
            </div>
        </div>
        </div>
        
    )
}

export default Profile;