import "./styles/Projects.css";

function Projects() {

    return (
        // <div className="projects">
        //     <div className="first">
        //         <div className="top-f">
        //             <div className="title">
        //                 The Catalog
        //             </div>
        //             <div className="subtitle">
        //                 Made with C++, MySQL, React.js.
        //             </div>
        //         </div>
        //         <div className="bottom-f">
        //             <div className="detail">
        //                 Its first purpose was to keep track of informations about other people that I couldn't keep by myself.
        //                 On the first try the code was designed to mimic a database format but it proved to be much less efficient than expected.
        //             </div>
        //             <div className="final">
        //                 As a whole the project states my knowledge with the languages, DBs and framworks presentet above.
        //             </div>
        //         </div>
        //     </div>
        //     <div className="second">
        //         <div className="top-s">
        //             <div className="title">
        //                 This Website
        //             </div>
        //             <div className="subtitle">
        //                 Made using React.js and PHP.
        //             </div>
        //         </div>
        //         <div className="bottom-s">
        //                 <div className="detail">
        //                     Made in the first place as a quick example to showcase how React.js differentiate between pure HTML with CSS, evolved into an actual project to train myself.
        //                 </div>
        //                 <div className="final">
        //                     Its final purpose is to quickly showcase some of my aptitudes with React.js.
        //                 </div>
        //             </div>
        //     </div>
        //     <div className="third">
        //         Covid Reporting
        //     </div>
        // </div>

        <div className="projects">
            <div className="card">
                <div className="first">
                    <div className="title">
                        The Catalog
                    </div>
                    <div className="subtitle">
                        Made with C++, MySQL, React.js.
                    </div>
                    <div className="detail">
                        Its first purpose was to keep track of informations about other people that I couldn't keep by myself.
                        On the first try the code was designed to mimic a database format but it proved to be much less efficient than expected.<br />
                        Now, as a private project, it became more efficient and gained a number of new functions.
                    </div>
                    <div className="final">
                        This project is a personal tool and states my knowledge with C++.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="second">
                    <div className="title">
                        This Website
                    </div>
                    <div className="subtitle">
                        Made using React.js and PHP.
                    </div>
                    <div className="detail">
                        Made in the first place as a quick example to showcase how React.js differentiate between pure HTML with CSS, evolved into an actual project to train myself.
                    </div>
                    <div className="final">
                        Its final purpose is to go in depth with what React.js can do.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="third">
                    <div className="title">
                        Covid Reporting
                    </div>
                    <div className="subtitle">
                        Made with Python.
                    </div>
                    <div className="detail">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects