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

        _this.states = { state1: { show: false }, state2: { show: false }, state3: { show: false }, state4: { show: false } };
        _this.modalData = null;

        _this.setTrueState = function (state) {
            state = true;
            return state;
        };

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
            this.setState({
                state1: this.state1 = true
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

    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "section",
                { id: "project_main" },
                React.createElement(
                    Modal,
                    { show: this.states.state1.show, handleClose: this.hideModal },
                    React.createElement(
                        "h1",
                        null,
                        "Case 1"
                    ),
                    console.log(this.modelData)
                ),
                React.createElement(
                    Modal,
                    { show: this.state.show, handleClose: this.hideModal },
                    React.createElement(
                        "h1",
                        null,
                        "Case 2"
                    )
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
                    { "class": "proj-img project-block-1", onClick: this.update.bind(this) },
                    React.createElement(
                        "div",
                        { "class": "proj-color-cover color-cover-1" },
                        React.createElement(
                            "h1",
                            null,
                            "Voice Chess"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "proj-img project-block-2", onClick: this.showModal2 },
                    React.createElement(
                        "div",
                        { "class": "proj-color-cover color-cover-2" },
                        React.createElement(
                            "h1",
                            null,
                            "GPS Tracker"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "proj-img project-block-3", onClick: this.showModal3 },
                    React.createElement(
                        "div",
                        { "class": "proj-color-cover color-cover-3" },
                        React.createElement(
                            "h1",
                            null,
                            "FayaPay"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { "class": "proj-img project-block-4", onClick: this.showModal4 },
                    React.createElement(
                        "div",
                        { "class": "proj-color-cover color-cover-4" },
                        React.createElement(
                            "h1",
                            null,
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
            children,
            React.createElement(
                "button",
                { onClick: handleClose },
                "close"
            )
        )
    );
};

var domContainer = document.querySelector('#page_containers');
ReactDOM.render(e(ProjectItems), domContainer);