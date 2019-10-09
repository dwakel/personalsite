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
    states = { state1: {show: false}, state2: {show: false}, state3: {show: false}, state4: {show: false} };
    modalData = null;
    setTrueState = function(state){
        state = true;
        return state;
    }
    update(e){
        this.setState({
            state1: this.refs.state1 = true,
            //state2: this.refs.state2 = true
            
        });
        this.modelData = "it worked";
    }
   
    // showModal1 = () => {
        
    //     this.setState(this.setTrueState(this.states.state1.show));
    // };
    // showModal2 = () => {
       
    //     this.setState(this.states[1] = true);
    // };
    // showModal3 = () => {
        
    //     this.setState(this.states[2] = true);
    // };
    // showModal4 = () => {
        
    //     this.setState(this.states[3] = true);
    // };
    hideModal = () => {
        this.setState({ show: false });
    };
    
    render() {
        
        return (
            <section id="project_main">
                <Modal show={this.states.state1.show} handleClose={this.hideModal}>
                   <h1>Case 1</h1>
                   {console.log(this.modelData)}
                </Modal> 
                 <Modal show={this.state.show} handleClose={this.hideModal}>
                   <h1>Case 2</h1>
                </Modal>
                <div class="head-name-skills">
                    <h3 class="center-header black-h h-skills">Things I've made.</h3>
                    <p class="desc-sub-title black-h">Here are some projects I've been working on. </p>
                </div>
                <div class="proj-img project-block-1" onClick={this.update.bind(this)}>
                    <div class="proj-color-cover color-cover-1">
                        <h1>Voice Chess</h1>
                    </div>
                </div>
                <div class="proj-img project-block-2" onClick={this.showModal2}>
                    <div class="proj-color-cover color-cover-2">
                        <h1>GPS Tracker</h1>
                        
                    </div>
                </div>
                <div class="proj-img project-block-3" onClick={this.showModal3}>
                    <div class="proj-color-cover color-cover-3">
                        <h1>FayaPay</h1>
                    </div>
                </div>
                <div class="proj-img project-block-4" onClick={this.showModal4}>
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
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );
};

const domContainer = document.querySelector('#page_containers');
ReactDOM.render(e(ProjectItems), domContainer);
