import {useState} from "react"
import {auth} from "../firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {addDoc,collection} from "firebase/firestore"  //for creating database
import {db} from "../firebase"
function Signup(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const[loader,setLoader] = useState(false);
    const[error,setError] = useState("");
    const[user,setUser] = useState("");


    async function processSignup(){
       try{
            let userCred = await createUserWithEmailAndPassword(auth,email,password)
            const docRef = await addDoc(collection(db,"users"),{
                //"email":email,
                email,
                name,
                reelsIds:[],
                profileImgUrl:"",
                userId:userCred.user.uid
            });
            setLoader(true);
            
            // console.log(userCred.user);
            setUser(userCred.user);
        }catch(error){
            setError(error.message);
            setTimeout(()=>{
                setError("")
            },2000)
        }
        setLoader(false);
    }

    return(
        <>
            {error!=""?<h1>Error is {error}</h1>:
            loader == true?<h1>...Loading</h1>:
                user!=""? <><h1>Sign up User is {user.uid}</h1> </>:

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

                                        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Full Name"></input><br></br>
                                        <label for="email" class="sr-only">Telefone, nome de usuário ou e-mail</label>
                                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}}  value={email} placeholder="email"></input>

                                        <label for="password" class="sr-only">Senha</label>
                                        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value ={password} placeholder="password"></input>

                                        <button type="click" onClick={processSignup}>Sign up</button>
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
                     </>}

                     </>
                 
                   
    )
}

export default Signup