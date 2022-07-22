import {useState} from "react" //first step
import {auth,db} from "../firebase" //first step
import {createUserWithEmailAndPassword} from "firebase/auth"//second step for creating user using auth and this function
import {addDoc,collection} from "firebase/firestore"  //for creating database
function Signup(){

    const [email,setEmail] = useState("");  //first step
    const [password,setPassword] = useState("");//first step
    const [name,setName] = useState("");//first step
    const[loader,setLoader] = useState(false);  //second and logical step we require loader state while it is checking user is logged in or not
    const[error,setError] = useState(""); //second and logical step (if after filling details some error caused while creating new user)
    const[user,setUser] = useState(""); //second and logical step (to check if you are logged in or not)


    async function processSignup(){
       try{
             setLoader(true);
            let userCred = await createUserWithEmailAndPassword(auth,email,password)  //function used for creating the user
           //now we usee firestore for creating db and use addDocccollection for that

           const docRef = await addDoc(collection(db,"users"),{
            //"email":email,
                    email, //yha ya to hum keyvalue pair dete since yha hmara email name ka hi key h and usko email state as a value bhejni h to ek baar likhenge tab bhi chlagea
                    name,
                    reelsIds:[],
                    profileImgUrl:"",
                    userId:userCred.user.uid
            });
            
            
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
                                        <div class="or">OR</div>
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
                                    <p>Already have an account?</p>
                                    <a href="./Login">Log-In here</a>
                                </div>
                                
                            </section>
                        </main>
                     </>}

                     </>
                 
                   
    )
}

export default Signup