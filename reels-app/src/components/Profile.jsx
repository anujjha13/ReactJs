
import './Profile.css'
function Profile(){
    return ( 

        <>


                <main class="flex align-items-center justify-content-center">
                            <section id="mobile" class="flex">
                            </section>
                            <section id="auth" class="flex direction-column">
                                <div class="panel login flex direction-column">
                                    <h1 title="Instagram" class="flex justify-content-center">
                                        <img src="./logo.svg" alt="Instagram logo" title="Instagram logo"/>
                                        <h4 ><strong>Profile</strong></h4>
                                    </h1>
                                    <div className="main">
                                        <div className="pimg_container">
                                            <img src="data:image/png;base64,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" alt="" className="pimg" />
                                        </div>
                                        <div className="details">
                                            <div className="content"><strong>Anuj</strong></div>
                                            <div className="content">No of Posts: <span className="bold_text">Posts</span></div>
                                            <div className="content">Email <span className="bold_text">Email.com</span></div>
                                        </div>
                                </div>
                                   </div>
                                
                            </section>
                        </main>
       {/*<div className="header"></div>
        <div className="main">
            <div className="pimg_container">
                <img src="data:image/png;base64,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" alt="" className="pimg" />
            </div>
            <div className="details">
                <div className="content">Aman</div>
                <div className="content">No of Posts: <span className="bold_text">Posts</span></div>
                <div className="content">Email <span className="bold_text">Email.com</span></div>
            </div>
    </div>*/}

        </>
            /* <main>
            <div class="container">
                <div class="row m-b-r m-t-3">
                    <div class="col-md-2 offset-md-1">
                        <img src="https://mdbootstrap.com/images/avatars/img%20(1).jpg" alt="" class="img-circle img-fluid"></img>
                    </div>
                    <div class="col-md-9 p-t-2">
                        <h2 class="h2-responsive">@janedoe <button type="button" class="btn btn-info-outline waves-effect">Follow</button></h2>
                        <p>Jane Doe</p>

                        <ul class="flex-menu">
                            <li><strong>41</strong> posts</li>
                            <li><strong>47k</strong> followers</li>
                            <li><strong>208</strong> following</li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="view overlay hm-black-light m-b-2">
                            <img src="https://mdbootstrap.com/images/regular/nature/img%20(1).jpg" class="img-fluid " alt=""></img>
                            <div class="mask flex-center">
                                <ul class="flex-menu">
                                    <li><p class="white-text"><i class="fa fa-comment" aria-hidden="true"></i> 32</p></li>
                                    <li><p class="white-text"><i class="fa fa-heart" aria-hidden="true"></i> 1.2K</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 m-b-2">
                        <div class="view overlay hm-black-light">
                            <img src="https://mdbootstrap.com/images/regular/nature/img%20(2).jpg" class="img-fluid " alt=""></img>
                            <div class="mask flex-center">
                                <ul class="flex-menu">
                                    <li><p class="white-text"><i class="fa fa-comment" aria-hidden="true"></i> 32</p></li>
                                    <li><p class="white-text"><i class="fa fa-heart" aria-hidden="true"></i> 1.2K</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 m-b-2">
                        <div class="view overlay hm-black-light">
                            <img src="https://mdbootstrap.com/images/regular/nature/img%20(3).jpg" class="img-fluid " alt=""></img>
                            <div class="mask flex-center">
                                <ul class="flex-menu">
                                    <li><p class="white-text"><i class="fa fa-comment" aria-hidden="true"></i> 32</p></li>
                                    <li><p class="white-text"><i class="fa fa-heart" aria-hidden="true"></i> 1.2K</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>				
                
            </div>
            </main>
                     */
           
        
    )
}

export default Profile