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

class HomeView extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section id="intro_main">
            <div class="head-name-skills">
                <h2 class="center-header h-skills">Hi, I'm Selorm. Nice to meet you</h2>
                <p class="desc-sub-title">I am a software engineer with a few years of experience developing application with dotnet technology
                I have experience in development of API's and infrastructure and also experience with minimalistic user interface designs and domain driven design</p>
            </div>
                {/* <hr class="hr-skills"/> */}
                <div class="skills-block">
                <div class="skills-block-1">
                        <ul class="ul-skills">
                        <img class="img-skills" src="./img/frontend.png"/>
                                <h3 class="subhead-skills">Front-end</h3>
                                <p class="desc-skills">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                <h4 class="sub-desc-head">Things I do</h4>
                            <li class="li-skill">
                                
                                <span class="skill-name">HTML</span>
                                <span class="ability-score">
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                </span>
                            </li>
                            <li class="li-skill">
                                <span class="skill-name">CSS</span>
                                <span class="ability-score">
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                </span>
                            </li>
                            <li class="li-skill">
                                <span class="skill-name">XAML</span>
                                <span class="ability-score">
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                </span>
                            </li>
                            <li class="li-skill">
                                <span class="skill-name">Javascript</span>
                                <span class="ability-score">
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                </span>
                            </li>
                            <li class="li-skill">
                                <span class="skill-name">React</span>
                                <span class="ability-score">
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                </span>
                            </li>
                        </ul>
                </div>
                <div class="skills-block-2">
                        <ul class="ul-skills">
                        <img class="img-skills" src="./img/backend.png"/>
                                <h3 class="subhead-skills">Back-end</h3>
                                <p class="desc-skills">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                <h4 class="sub-desc-head">What I build with</h4>
                            <li class="li-skill">
                            
                                <span class="skill-name">C#/ASP.Net Core</span>
                                <span class="ability-score">
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                </span>
                            </li>
                            <li class="li-skill">
                            
                                <span class="skill-name">Node JS</span>
                                <span class="ability-score">
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                </span>
                            </li>
                            <li class="li-skill">
                                <span class="skill-name">PostgreSQL</span>
                                <span class="ability-score">
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                    <i class="ion-ios-star-outline text-warning"></i>
                                </span>
                            </li>
                            <li class="li-skill">
                                <h3><em>Others</em></h3>
                                <span class="other skill-name">Git</span>
                                <span class="skill-name other">XAML</span>
                                <span class="skill-name other">UWP</span>
                                <span class="skill-name other">WPF</span>
                                <span class="skill-name other">Angular</span>
                                
                            </li>
                            
                        </ul>
                </div>
                </div>
            </section>
           
                
        );
    }
}

class GalleryView extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section id="gallery_main">
                <div id="gallery_card">
                
                    <div id="gallery_layer">
                        
                        <div class="gallery-dets">
                            <div class="gallery-head gallery-item-head">
                                <h4 class="gallery-subheading">Photos from my work</h4>
                                <h2 class="gallery-heading">See & Explore</h2>
                            </div>
                            <div class="gallery-item gallery-item-1">
                                <img class="gallery-image" src="img/1.png" alt="warrior"/>
                                <img class="gallery-image" src="img/10.jpg" alt="warrior"/>
                                <img class="gallery-image" src="img/8.png" alt="warrior"/>
                                <img class="gallery-image" src="img/5.png" alt="warrior"/>                    
                            </div>
                            <div class="gallery-item gallery-item-2">
                                <img class="gallery-image" src="img/3.png" alt="warrior"/>
                                <img class="gallery-image" src="img/3.png" alt="warrior"/>
                                <div class="gallery-video">
                                    <video class="gallery-image" muted loop autoplay="autoplay">
                                        <source src="img/cover-vid.mp4" type="video/mp4"/>
                                    </video>
                                </div>
                                <img class="gallery-image" src="img/3.png" alt="warrior"/>
                            </div>
                            <div class="gallery-item gallery-item-3">
                                <img class="gallery-image" src="img/10.jpg" alt="warrior"/>
                                <img class="gallery-image" src="img/4.jpg" alt="warrior"/>
                                <img class="gallery-image" src="img/7.jpg" alt="warrior"/>
                                <img class="gallery-image" src="img/3.png" alt="warrior"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }  
}

const domContainer = document.querySelector('#page_containers');
ReactDOM.render(e(HomeView), domContainer);
