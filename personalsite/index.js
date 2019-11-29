'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

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

var ProjectItems = function (_React$Component) {
    _inherits(ProjectItems, _React$Component);

    function ProjectItems() {
        _classCallCheck(this, ProjectItems);

        var _this = _possibleConstructorReturn(this, (ProjectItems.__proto__ || Object.getPrototypeOf(ProjectItems)).call(this));

        _this.state = { state1: false, state2: false, state3: false, state4: false };
        _this.modalData = null;

        _this.hideModal = function () {
            _this.setState({ show: false });
        };

        _this.state = {
            state1: false,
            state2: false
        };
        return _this;
    }

    _createClass(ProjectItems, [{
        key: "update",
        value: function update(e) {
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
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "section",
                { id: "project_main" },
                React.createElement(
                    Modal,
                    { show: this.state.state1, handleClose: this.update.bind(this, 1) },
                    console.log(this.state.state1),
                    React.createElement(
                        "div",
                        { "class": "modal-1" },
                        React.createElement("img", { "class": "modal-1-c1", src: "../src/img/vchess.png" }),
                        React.createElement(
                            "div",
                            { "class": "modal-1-c2" },
                            React.createElement(
                                "h2",
                                { "class": "modal-1-header" },
                                "Voice Chess"
                            ),
                            React.createElement(
                                "div",
                                { "class": "modal-1-text" },
                                "This Chess game is a voice controlled 2 Player chess game. It still provides the generic mouse click and select method to move chess pieces"
                            ),
                            React.createElement(
                                "div",
                                { "class": "modal-1-buttons" },
                                React.createElement(
                                    "div",
                                    { "class": "modal-1-button-1" },
                                    React.createElement(
                                        "a",
                                        { "class": "mb-text", href: "https://github.com/dwakel/VoiceChess" },
                                        "GitHub"
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    Modal,
                    { show: this.state.state2, handleClose: this.update.bind(this, 2) },
                    React.createElement(
                        "div",
                        { "class": "modal-1" },
                        React.createElement("img", { "class": "modal-1-c1", src: "../src/img/modal-mapshot.png" }),
                        React.createElement(
                            "div",
                            { "class": "modal-1-c2" },
                            React.createElement(
                                "h2",
                                { "class": "modal-1-header" },
                                "GPS Tracker"
                            ),
                            React.createElement(
                                "div",
                                { "class": "modal-1-text" },
                                "This Chess game is a voice controlled 2 Player chess game. It still provides the generic mouse click and select method to move chess pieces"
                            ),
                            React.createElement(
                                "div",
                                { "class": "modal-1-buttons" },
                                React.createElement(
                                    "div",
                                    { "class": "modal-1-button-1" },
                                    React.createElement(
                                        "a",
                                        { "class": "mb-text", href: "https://github.com/dwakel/VehicleTrackingAPI" },
                                        "GitHub"
                                    )
                                )
                            )
                        )
                    ),
                    console.log(this.state.state2)
                ),
                React.createElement(
                    Modal,
                    { show: this.state.state3, handleClose: this.update.bind(this, 3) },
                    React.createElement(
                        "div",
                        { "class": "modal-1" },
                        React.createElement("img", { "class": "modal-1-c1", src: "../src/img/wits.png" }),
                        React.createElement(
                            "div",
                            { "class": "modal-1-c2" },
                            React.createElement(
                                "h2",
                                { "class": "modal-1-header" },
                                "FayaPay"
                            ),
                            React.createElement(
                                "div",
                                { "class": "modal-1-text" },
                                "This Chess game is a voice controlled 2 Player chess game. It still provides the generic mouse click and select method to move chess pieces"
                            ),
                            React.createElement(
                                "div",
                                { "class": "modal-1-buttons" },
                                React.createElement(
                                    "div",
                                    { "class": "modal-1-button-1" },
                                    React.createElement(
                                        "a",
                                        { "class": "mb-text", href: "http://fayapay.io" },
                                        "Visit"
                                    )
                                )
                            )
                        )
                    ),
                    console.log(this.state.state3)
                ),
                React.createElement(
                    Modal,
                    { show: this.state.state4, handleClose: this.update.bind(this, 4) },
                    React.createElement(
                        "div",
                        { "class": "modal-1" },
                        React.createElement("img", { "class": "modal-1-c1", src: "../src/img/modal-personalsite.jpg" }),
                        React.createElement(
                            "div",
                            { "class": "modal-1-c2" },
                            React.createElement(
                                "h2",
                                { "class": "modal-1-header" },
                                "selormavoke.com"
                            ),
                            React.createElement(
                                "div",
                                { "class": "modal-1-text" },
                                "This Chess game is a voice controlled 2 Player chess game. It still provides the generic mouse click and select method to move chess pieces"
                            ),
                            React.createElement(
                                "div",
                                { "class": "modal-1-buttons" },
                                React.createElement(
                                    "div",
                                    { "class": "modal-1-button-1" },
                                    React.createElement(
                                        "a",
                                        { "class": "mb-text", href: "https://github.com/dwakel/personalsite" },
                                        "GitHub"
                                    )
                                )
                            )
                        )
                    ),
                    console.log(this.state.state4)
                ),
                React.createElement(
                    "div",
                    { "class": "head-name-skills" },
                    React.createElement(
                        "h3",
                        { "class": "center-header black-h h-skills" },
                        "Things I've made."
                    ),
                    React.createElement(
                        "p",
                        { "class": "desc-sub-title black-h" },
                        "Here are some projects I've been working on. "
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "proj-img project-block-1", onClick: this.update.bind(this, 1) },
                    React.createElement(
                        "div",
                        { "class": "proj-color-cover color-cover-1" },
                        React.createElement(
                            "h1",
                            { "class": "proj-text" },
                            "Voice Chess"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "proj-img project-block-2", onClick: this.update.bind(this, 2) },
                    React.createElement(
                        "div",
                        { "class": "proj-color-cover color-cover-2" },
                        React.createElement(
                            "h1",
                            { "class": "proj-text" },
                            "GPS Tracker"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "proj-img project-block-3", onClick: this.update.bind(this, 3) },
                    React.createElement(
                        "div",
                        { "class": "proj-color-cover color-cover-3" },
                        React.createElement(
                            "h1",
                            { "class": "proj-text" },
                            "FayaPay"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "proj-img project-block-4", onClick: this.update.bind(this, 4) },
                    React.createElement(
                        "div",
                        { "class": "proj-color-cover color-cover-4" },
                        React.createElement(
                            "h1",
                            { "class": "proj-text" },
                            "selormavoke.com"
                        )
                    )
                )
            );
        }
    }]);

    return ProjectItems;
}(React.Component);

var Modal = function Modal(_ref) {
    var handleClose = _ref.handleClose,
        show = _ref.show,
        children = _ref.children;

    var showHideClassName = show ? "modal display-block" : "modal display-none";

    return React.createElement(
        "div",
        { className: showHideClassName },
        React.createElement(
            "section",
            { className: "modal-main" },
            React.createElement(
                "span",
                { "class": "modal-close", onClick: handleClose },
                "\xD7"
            ),
            children
        )
    );
};

var domContainer = document.querySelector('#page_containers');
ReactDOM.render(e(ProjectItems), domContainer);