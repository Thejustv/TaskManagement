import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';

const Header=()=>{

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <div className="h-20 flex justify-between items-center bg-gray-100 shadow-md p-4">
            <Link to={'/home'}><div className="font-bold text-xl ml-5 text-red-500 cursor-pointer">Task Manager</div></Link>
            <div >
                <ul className="flex gap-12 font-semibold text-md cursor-pointer">
                <Link to={'/profile'}> <li><AccountCircleIcon className='mr-1'/>Profile</li></Link>
                <li><button onClick={handleLogout}><LogoutIcon className='mr-1'/>Logout</button></li> 
                </ul>
            </div>
        </div>
    )
}

export default Header;