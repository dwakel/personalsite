'use strict';

const e = React.createElement;

// let mainCover = document.getElementById('cover_main');
// mainCover.addEventListener('wheel', () =>{
//     return trans();
// });
// function trans() {
//     console.log("success");
//     let x = document.getElementById('cover_layer');
//     x.classList.add('slide-in');

//     let v = document.getElementById('brand_name');
//     v.classList.remove('m-hide');
//     v.classList.add('m-slide-in');  

//     let k = document.getElementById('cover_desc');
//     k.classList.remove('m-hide');
//     k.classList.add('m-slide-in');  

//     let b = document.getElementById('social-media');
//     b.classList.remove('m-hide');
//     b.classList.add('m-slide-in');  
// }

// class HomeView extends React.Component {
//     constructor() {
//         super();
//     }
//     render() {
//         return (
//             <section id="intro_main">
//                 <div class="head-name-skills">
//                     <h2 class="center-header h-skills">Hi, I'm Selorm. Nice to meet you</h2>
//                     <p class="desc-sub-title">I am a software engineer with a few years of experience developing application with dotnet technology
//                     I have experience in development of API's and infrastructure and also experience with minimalistic user interface designs and domain driven design</p>
//                 </div>
//                 {/* <hr class="hr-skills"/> */}
//                 <div class="skills-block">
//                 <div class="skills-block-1">
//                         <ul class="ul-skills">
//                         <img class="img-skills" src="../src/img/frontend.png"/>
//                                 <h3 class="subhead-skills">Front-end</h3>
//                                 <p class="desc-skills">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
//                                 <h4 class="sub-desc-head">Things I do</h4>
//                             <li class="li-skill">
                                
//                                 <span class="skill-name">HTML</span>
//                                 <span class="ability-score">
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                 </span>
//                             </li>
//                             <li class="li-skill">
//                                 <span class="skill-name">CSS</span>
//                                 <span class="ability-score">
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                 </span>
//                             </li>
//                             <li class="li-skill">
//                                 <span class="skill-name">XAML</span>
//                                 <span class="ability-score">
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                 </span>
//                             </li>
//                             <li class="li-skill">
//                                 <span class="skill-name">Javascript</span>
//                                 <span class="ability-score">
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                 </span>
//                             </li>
//                             <li class="li-skill">
//                                 <span class="skill-name">React</span>
//                                 <span class="ability-score">
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                 </span>
//                             </li>
//                         </ul>
//                 </div>
//                 <div class="skills-block-2">
//                         <ul class="ul-skills">
//                         <img class="img-skills" src="../src/img/backend.png"/>
//                                 <h3 class="subhead-skills">Back-end</h3>
//                                 <p class="desc-skills">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
//                                 <h4 class="sub-desc-head">What I build with</h4>
//                             <li class="li-skill">
                            
//                                 <span class="skill-name">C#/ASP.Net Core</span>
//                                 <span class="ability-score">
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                 </span>
//                             </li>
//                             <li class="li-skill">
                            
//                                 <span class="skill-name">Node JS</span>
//                                 <span class="ability-score">
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                 </span>
//                             </li>
//                             <li class="li-skill">
//                                 <span class="skill-name">PostgreSQL</span>
//                                 <span class="ability-score">
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                     <i class="ion-ios-star-outline text-warning"></i>
//                                 </span>
//                             </li>
//                             <li class="li-skill">
//                                 <h3><em>Others</em></h3>
//                                 <span class="other skill-name">Git</span>
//                                 <span class="skill-name other">XAML</span>
//                                 <span class="skill-name other">UWP</span>
//                                 <span class="skill-name other">WPF</span>
//                                 <span class="skill-name other">Angular</span>
                                
//                             </li>
                            
//                         </ul>
//                 </div>
//                 </div>
//             </section>
           
                
//         );
//     }
// }

class ProjectItems extends React.Component {
    constructor() {
        super();
        this.state = {
            state1: false,
            state2: false
        };
    }
    // states = { state1: {show: false}, state2: {show: false}, state3: {show: false}, state4: {show: false} };
    state = { state1: false, state2: false, state3: false, state4: false };

    modalData = null;
    
    update(e){
        console.log(e);
        switch (e) {
            case 1:
                this.setState({
                    state1: !this.state.state1
                });
                break;
            case 2:
                this.setState({
                    state2: !this.state.state2
                });
                break;
            case 3:
                this.setState({
                    state3: !this.state.state3
                });
                break;
            case 4:
                this.setState({
                    state4: !this.state.state4
                });
                break;
        
            default:
                break;
        }
    }
   
    
    hideModal = () => {
        this.setState({ show: false });
    };
    
    render() {
        
        return (
            <section id="project_main">
                <Modal show={this.state.state1} handleClose={this.update.bind(this, 1)}>
                   {console.log(this.state.state1)}
                   <div class="modal-1">
                       <img class="modal-1-c1" src="../src/img/vchess.png"/>
                       <div class="modal-1-c2">
                           <h2 class="modal-1-header">Voice Chess</h2>
                           <div class="modal-1-text">This Chess game is a voice controlled 2 Player chess game. It still provides the generic mouse click and select method to move chess pieces</div>
                           <div class="modal-1-buttons"><div class="modal-1-button-1"><a class="mb-text" href="https://github.com/dwakel/VoiceChess">GitHub</a></div></div>
                       </div>
                   </div>
                </Modal> 
                <Modal show={this.state.state2} handleClose={this.update.bind(this, 2)}>
                <div class="modal-1">
                       <img class="modal-1-c1" src="../src/img/mapshot.png"/>
                       <div class="modal-1-c2">
                           <h2 class="modal-1-header">GPS Tracker</h2>
                           <div class="modal-1-text">This Chess game is a voice controlled 2 Player chess game. It still provides the generic mouse click and select method to move chess pieces</div>
                           <div class="modal-1-buttons"><div class="modal-1-button-1"><a class="mb-text" href="https://github.com/dwakel/VehicleTrackingAPI">GitHub</a></div></div>
                       </div>
                   </div>
                   {console.log(this.state.state2)}
                </Modal>
                <Modal show={this.state.state3} handleClose={this.update.bind(this, 3)}>
                <div class="modal-1">
                       <img class="modal-1-c1" src="../src/img/wits.png"/>
                       <div class="modal-1-c2">
                           <h2 class="modal-1-header">FayaPay</h2>
                           <div class="modal-1-text">This Chess game is a voice controlled 2 Player chess game. It still provides the generic mouse click and select method to move chess pieces</div>
                           <div class="modal-1-buttons"><div class="modal-1-button-1"><a class="mb-text" href="http://fayapay.io">Visit</a></div></div>
                       </div>
                   </div>
                   {console.log(this.state.state3)}
                </Modal>
                <Modal show={this.state.state4} handleClose={this.update.bind(this, 4)}>
                <div class="modal-1">
                       <img class="modal-1-c1" src="../src/img/personalsite.png"/>
                       <div class="modal-1-c2">
                           <h2 class="modal-1-header">selormavoke.com</h2>
                           <div class="modal-1-text">This Chess game is a voice controlled 2 Player chess game. It still provides the generic mouse click and select method to move chess pieces</div>
                           <div class="modal-1-buttons"><div class="modal-1-button-1"><a class="mb-text" href="https://github.com/dwakel/personalsite">GitHub</a></div></div>
                       </div>
                   </div>
                   {console.log(this.state.state4)}
                </Modal>
                <div class="head-name-skills">
                    <h3 class="center-header black-h h-skills">Things I've made.</h3>
                    <p class="desc-sub-title black-h">Here are some projects I've been working on. </p>
                </div>
                <div class="proj-img project-block-1" onClick={this.update.bind(this, 1)}>
                    <div class="proj-color-cover color-cover-1">
                        <h1>Voice Chess</h1>
                    </div>
                </div>
                <div class="proj-img project-block-2" onClick={this.update.bind(this, 2)}>
                    <div class="proj-color-cover color-cover-2">
                        <h1>GPS Tracker</h1>
                        
                    </div>
                </div>
                <div class="proj-img project-block-3" onClick={this.update.bind(this, 3)}>
                    <div class="proj-color-cover color-cover-3">
                        <h1>FayaPay</h1>
                    </div>
                </div>
                <div class="proj-img project-block-4" onClick={this.update.bind(this, 4)}>
                    <div class="proj-color-cover color-cover-4">
                        <h1>selormavoke.com</h1>
                    </div>
                </div>
            </section>
        );
    }
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return(
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                {/* <button onClick={handleClose}>close</button> */}
            </section>
        </div>
    );
};

const domContainer = document.querySelector('#page_containers');
ReactDOM.render(e(ProjectItems), domContainer);
