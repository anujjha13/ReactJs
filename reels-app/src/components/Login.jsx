import { useState } from "react"
import {auth} from "../firebase"
import {signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";  //onauth added for remain logeed in
import './Login.css';
import { useEffect } from "react"  //for use coomponent update
function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loader, setLoader] = useState(false);
    const [user,setUser] = useState(null);
    const [mainLoader,setMainLoader] = useState(true);  //TO REMAIN LOGED IN THERE IS SHOWING FORM AS WELL FOR THAT WE USE ONE LOADER MORE

    const trackemail =function(ele){
        setEmail(ele.target.value);
        setUser(null);
    }
    const trackpassword =function(ele){
        setPassword(ele.target.value);
    }  
  
    const printdetails = async function(){
        // alert(email + " " + password)
        try{
            setLoader(true);
            let userCred = await signInWithEmailAndPassword(auth,email,password)
            setUser(userCred.user)
        }catch(err){
            setError("INVALID USER");
            setTimeout(()=>{
                setError("")
            },6000)
        }
        setLoader(false);
    }

    const logOut = async function(){
        await signOut(auth);
        setUser(null);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
              setUser(user);
              // ...
            } else {
              // User is signed out
              // ...
              setUser(null);
            }
            setMainLoader(false);
        })
    },[])
    return (
        <>
            {mainLoader == true?<h1>Page is Loading..</h1>:
            error != "" ? <h1> {error}</h1>:
             loader == true?<h1>...Loading</h1>:
                user != null ? <><h1>User is {user.uid}</h1> <button type="click" onClick={logOut}>Logout</button> </>: 
                <>

<main class="flex align-items-center justify-content-center">
        <section id="mobile" class="flex">
        </section>
        <section id="auth" class="flex direction-column">
            <div class="panel login flex direction-column">
                <h1 title="Instagram" class="flex justify-content-center">
                    <img src="./logo.svg" alt="Instagram logo" title="Instagram logo" />
                </h1>
                <h2 class="flex justify-content-center">#INSTAREELS</h2>
                <form>
                    <label for="email" class="sr-only">Telefone, nome de usuário ou e-mail</label>
                    <input type="email" onChange={trackemail} placeholder="Enter email"/>

                    <label for="password" class="sr-only">Senha</label>
                    <input type="password" onChange={trackpassword} placeholder="Enter password"/>

                     <button type="click" onClick={printdetails}>Login</button> 
                </form>
                <div class="flex separator align-items-center">
                    <span></span>
                    <div class="or">OU</div>
                    <span></span>
                </div>
                <div class="login-with-fb flex direction-column align-items-center">
                    <div>
                        <img />
                        <a>Login using Google</a>
                    </div>
                    <a href="#">Forgot Your Password?</a>
                </div>
            </div>
            <div class="panel register flex justify-content-center">
                <p>Don't you have an account?</p>
                <a href="#">Sign-Up</a>
            </div>
            
        </section>
    </main>
     </> }
        </>
    )
}

export default Login