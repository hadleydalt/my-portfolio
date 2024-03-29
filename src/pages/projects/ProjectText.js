import { ColVisuals } from '../ColVisuals' 
import YoutubeEmbed from './YoutubeEmbed'

const dashTitles = ["Create Notes, Move and Resize", "Create Collections and Nested Collections", "Linking Notes Together"]
const dashDescs = [
    "The user is able to populate the screen with 'notes' onto which they can add text, images, videos, or support HTML iFrames (websites with clickable links). ", 
    "The user can also create collections to store additional notes. Collections may be nested inside collections. ", 
    "Finally, the user can link notes by creating and naming 'Folders' which store up to three notes. If a note has been added to a folder, the user has the option to click on and access the other contents that have been stored within that folder."
]
const dashImages= ["dash/dash9", "dash/dash10", "dash/dash11"]

const pgTitles = ["Your Pets", "Be Productive"]
const pgDescs = ["Name pets and view their randomly generated characteristics", "Enter hours of productivity in exchange for currency which you can use to shop for pets"]
const pgImages = ["petgarden/petg1", "petgarden/petg2"]

export const Text = [
    
    <>
        <div className="h1">Design Goals</div>
        <div>Create a game that will offer players a refuge from the stress of everyday life.</div>
        <div className="h1">Video Tour</div>

        <YoutubeEmbed embedId="w_C5BKDNCok" />

        <a style={{color: "black"}} target="_blank" href="https://youtu.be/w_C5BKDNCok">Click here if video is not working</a>
        <div className="h1">Full Game Description</div>
        <div>The game can be played on a PC or in VR. In addition, the user can play 
            the game to explore the city, or partake in the scavenger hunt. Either 
            way, the goal is to find your missing cat! I was inspired to make a 
            lighthearted game that users can enjoy as a refuge from the stress of 
            reality. The game focuses on locations that are peaceful and productive: 
            the <span className="accent">Train Station</span>, the <span className="accent">Marketplace</span>, 
            the <span className="accent">Neighborhood</span>, the <span className="accent">Concert Hall</span>, 
            and the <span className="accent">Pond</span>. <span className="accent">Train Stations</span> provide a relaxing vehicle for users to 
            arrive at the destination of their choice, or escape from a place that 
            is holding them back. <span className="accent">Marketplaces</span> foster creativity (vendors bring 
            their own items to sell), sharing and exchange. <span className="accent">Neighborhoods</span> host 
            communities. <span className="accent">Concert Halls</span> invite the exchange of music and performances,
             while <span className="accent">Ponds</span> encourage reflection. The scape is open to explore only, or
              embark on the scavenger hunt which requires interactions with elements 
              in the game.
        </div>
        <div className="h1">Gameplay/Rules</div>
        <div>The player must find a ticket in the train station and offer it to the 
            boy, who is unable to get home without one. The other tasks similarly 
            encourage the player to perform kind deeds or engage positively with 
            elements of the environment. After the player gives the ticket to the boy,
             the player receives an apple in exchange. Then, the player must board the 
             train to take the apple to the marketplace, find a flower, and exchange 
             the apple for the flower. Then the player must take the flower to the 
             violinist, who gives the player a key and some advice in exchange. The 
             advice: take the key to the concert hall and look for clues there. At the
            concert hall, the player will find sheet music, and must take the sheet 
            music to the piano to play it. After playing it, the player finds a muddy 
            collar, suggesting that their cat is by the pond. The player then goes to 
            the pond and finds the cat!
        </div>
    </>,

    <>
        <div className="h1">Overview</div>
        <div>DASH is an IDE for document-based networks developed by Andy Van Dam at 
            Brown University. I was challenged to code my own version of DASH using TypeScript, 
            React, and SCSS, which I had no prior familiarity with. I used this challenge as an 
            opportunity to propose some suggestions for a <span class="accent">hypothetical redesign of the existing 
            web app</span>. </div>
        <div className="h1">Why this redesign?</div>
        <div>Experimenting with DASH, I noticed several features of the UI which made it difficult 
            to navigate and use. I decided to improve upon this issues by simplifying the 
            functionality of DASH to make it more <span className="accent">user-friendly</span>.</div>
            <div className="h1">Defining the problem</div>
        <div>I began by conducting an analysis of the existing web app and identifying some <span className="accent">pain 
            points"</span> that make usability difficult. Unfortunately, the time limitations did not 
            permit me to garner feedback about DASH from other potential users. However, if I had 
            been given more time, I would have included this step in my analysis. </div>
            <div style={{marginTop: "1vh"}}><span className="accent">→ Note:</span> For your understanding, DASH enables users to populate textual "notes" and files onto an unbounded 2D freeform canvas. </div>
            <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash1.png")} alt=""/>
            <div className="h1">Design Process</div>
            <div className="accent">Design Goals</div>
            <p>I concluded that the primary goal of this redesign should be to</p>
            <div className="dual">
                <div style={{width: "30%", textAlign: "center"}}>Implement the <span className="accent">basic functionalities</span> of DASH</div>
                <div style={{width: "30%", textAlign: "center"}}>Address each of the pain points to make the app <span className="accent">easier to navigate and use</span>.</div>
            </div>
        <p>To tackle Goal 1, I began by breaking up DASH's functionality into four components:</p>
            <img className="project-visual" style={{height: "auto", width: "45%"}}src={require("../../graphics/dash/dash2.png")} alt=""/>
            <p>To address Goal 2, I first created an affinity diagram to map each pain point with its potential solutions.</p>
            <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash3.png")} alt=""/>
            <p className="accent">Wireframe and Prototype</p>
            <div>Synthesizing my findings, I proceeded to make a wireframe sketch that integrated the 
                four goal functionalities of DASH while also addressing the pain points.</div>
            <img className="project-visual" style={{height: "auto", width: "75%"}}src={require("../../graphics/dash/dash4.png")} alt=""/>
            <p>I then transferred the sketch to a prototype in Figma...</p>
            <img className="project-visual" style={{height: "auto", width: "75%"}}src={require("../../graphics/dash/dash5.png")} alt=""/>
            <p>The next step was to code the functional web app using React, TypeScript, and SCSS.</p>
        <div className="h1">The final result</div> 
        <div>These are some screenshots of the final result, and a diagram highlighting how my solution aims to amend to the usability issues posed by the original DASH.</div>
        <p className="accent">Screenshot of result</p>
        <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash6.png")} alt=""/>
        <p className="accent">Diagram of Solution and Functionalities</p>
        <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash7.png")} alt=""/>
        <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/dash/dash8.png")} alt=""/>
        <p className="accent">Video Tours of The Result</p>
        <ColVisuals titles={dashTitles} descs={dashDescs} images={dashImages} video={true} />
        <div className="h1">Live interactive demo coming soon! <span className="accent" style={{fontStyle: "normal"}}>Github: <a style={{color: "black", textDecoration: "none", fontFamily: "Work Sans"}} target="_blank" href="http://github.com/hadleydalt/DASH-project.git">http://github.com/hadleydalt/DASH-project.git</a></span></div>
    </>,

    <>
        <div className="h1">Overview</div>
        <div>I worked as a Mobile Developer for Brown University's Center for Computation and 
            Visualization. I worked on the frontend of an app called Soma. This app enables users to 
            track chronic pain. </div>
        <div className="h1">Responsibilities</div>
        <p>Using <span className="accent">React Native</span>, <span className="accent">JavaScript</span>, <span className="accent">HTML</span>, and <span className="accent">CSS</span> to code responsive iOS and Android app components and screens and simulating in Xcode and Android Studio </p>
        <div>Assessing UI/UX Designs from <span className="accent">Adobe XD</span> to ensure technical feasibility </div>
        <p>Using <span className="accent">Docker Compose</span> to orchestrate the server and database (a <span className="accent">REST API</span> written in <span className="accent">Node.js</span>) </p>
        <div>Submitting work for review from fellow developers and conducting reviews using <span className="accent">Git</span></div>
        <p>Successfully contributed to build and release of the app on the App Store and created an animation in <span className="accent">After Effects</span> to showcase the app, which is also displayed on the App Store.</p>
        <div className="h1">Link to app</div>
        <a style={{textDecoration: "none", color: "black"}} target="_blank" href="https://apps.apple.com/us/app/soma-pain-manager/id6444110898">https://apps.apple.com/us/app/soma-pain-manager/id6444110898</a>
        <p>→ View my After Effects animation below!</p>
        <video style={{width: "25%", height: "auto"}} className="project-visual" controls>
            <source src={require("../../graphics/soma/soma.mp4")} type="video/mp4" style={{objectFit: "cover"}} />
        </video>
        <div className="h1">Full Internship Description</div>
        <p>In this internship, I work alongside other designers, developers and researchers to 
            coordinate the development of the app Soma. This app enables users to track chronic 
            pain. I participate in weekly meetings to discuss project goals, progress, and scope of 
            work, providing feedback pertaining to the User Experience journey associated with the 
            app, user testing, and IRB drafting, documentation, and approval. I also analyze the 
            Adobe Xd files in which the app was designed and drafted, and bring the static design 
            to life using HTML, CSS, and TypeScript, within the React Native coding framework (a 
            version of React optimized for mobile development). Specifically, I code components 
            that can be found throughout the app and organize the components on the app screen, 
            ensuring that the components are customizable so that they can be reused. I submit my 
            work for review and approval from fellow developers. I also review coding submissions 
            from developers and provide feedback. Throughout the process, I am required to make 
            informed design decisions regarding color, layout, readability and other visual aspects 
            to ensure an optimal User Experience journey. I am also required to research and learn 
            the implementation of certain visual features in React (for example, animations), so 
            that they can be integrated into the development of the app as components.</p>
        <div className="h1">Review After One Semester</div>
        <p>Throughout this semester I have enjoyed the honor of working with many amazing designers,
            developers, and researchers working at the Center for Computation and Visualization. I 
            worked under the guidance of Ellen Duong and Bradford Roarr, two research software 
            engineers. Through weekly meetings and check-ins, they helped me to perfect my GitHub 
            and React competencies so that I was able to code functional components and integrate 
            them into user-responsive screens illuminating the different capabilities of the app 
            Soma. Throughout this process, I was able to gain experience with the transcription 
            from static components of an Adobe Xd file to interactive modules accessed via mobile 
            app, within the boundaries posed by the React Native Framework. In response to the tasks 
            I was assigned, I performed extensive research regarding means to correctly implement 
            the designs from the Xd file, which were not originally created with the React Native 
            library in mind as the instrument of their creation. In some cases, the desired 
            implementation strategy was left open-ended. In these cases, I was required to make 
            informed design decisions to bring the specificities to life. During these processes, 
            I prioritized user accessibility while also paying homage to the trademark appearance of 
            the app.</p>
    </>,

    <>
        <div className="h1">Overview</div>
        <div>I designed and coded an original game in Java for a class project. The game provides 
            users with an addictive incentive to study! </div>
        <p>The premise of the game is that the user can log hours of productivity in exchange for 
            currency which can be used to purchase pets, pet toys, and extra features. The pets and 
            toys are then placed into a garden which the user can customize. </p>
        <div className="h1">Design Process</div>
        <p>Because this project was more a test of my coding skills than of my User Research skills, 
            I did not conduct any research prior to designing this project. If I could redo my 
            process, I would go about this by:​​​​​​​</p>
        <p className="accent"><b>1. </b>Conducting a survey geared towards people from elementary-school age to adulthood, because I feel that this game is potentially appealing to a broad age range. </p>
        <div><b>Survey questions would include:</b></div>
        <p>
        <div>1. Do you feel satisfied with your average productivity level? </div>
<div>2. Have you tried any means of boosting your productivity level? (Apps, lifestyle changes, etc.) What are they? Did any of them work? If so, why do you think they worked? </div>
<div>3. Do you feel addicted to any games? If so, what do you think is addicting about them? Why do you prefer them over other games?</div>
<div>4. Would you be interested in using a game which would enable you to track your hours of productivity in exchange for rewards? </div>
<div>5. Would you be interested owning virtual pets and creating a customizable virtual environment for these pets to live in?</div>
<div>6. Have you ever played such a game? What has been your experience with it? </div>
        </p>
        <p className="accent"><b>2.</b> Synthesizing survey results and using an affinity diagram to map responses.</p>
        <div><b>The results of this survey would allow me insight into:</b></div>
        <p>
        <div>1. Which demographics are more affected by a dissatisfaction with their productivity level </div>
        <div>2. Trends in productivity-boosting tactics which have been effective for consumers, that could be implemented into my game</div>
        <div>3. Trends in gamification and other elements that make games addicting to consumers</div>
        <div>4, 5, 6. Which demographics (if any) might be interested in the premise of the game</div>
        </p>
        <div>I would create an affinity diagram to map the responses to determine which tactics I 
            could implement in my game to maximize productivity and addictiveness. </div>
        <p className="accent"><b>3. </b>Wireframing and Prototyping</p>
        <div>I coded the UI for Pet Garden off the top of my head with no design planning. If I 
            could redo this, I would use wireframe sketches and Figma prototypes to devise the best 
            possible design!</div>
        <div className="h1">What it looks like</div>
        <img className="project-visual" 
            style={{height: "auto", width: "55%"}}
            src={require("../../graphics/petgarden/petgarden.gif")} 
            alt="" />
        <div className="h1">Full Demo</div>
        <video style={{width: "95%", height: "auto"}} className="project-visual" controls>
            <source src={require("../../graphics/petgarden/petgarden.mp4")} type="video/mp4" style={{objectFit: "cover"}} />
        </video>
        <div className="h1">How it works</div>
        <ColVisuals titles={pgTitles} descs={pgDescs} images={pgImages} video={false} />
        <p><span className="accent">Github: </span> <a style={{color: "black", textDecoration: "none", fontFamily: "Work Sans"}} target="_blank" href="http://github.com/hadleydalt/Pet-Garden-Original-Game">http://github.com/hadleydalt/Pet-Garden-Original-Game</a></p>
        <p><span className="accent">Extended User Guide: </span>  <a style={{color: "black", textDecoration: "none", fontFamily: "Work Sans"}} href="https://docs.google.com/document/d/1m_1gO6dKCQhSIOTCUyGH6tWd5Uil2Byv7RXS9LrzWdE/edit?usp=sharing">https://docs.google.com/document/d/1m_1gO6dKCQhSIOTCUyGH6tWd5Uil2Byv7RXS9LrzWdE/edit?usp=sharing</a></p>
    </>,

    <>
        <div className="h1">Overview</div>
        <div>A design for the pilot website of Boston AI Labs: a startup company that designs
             AI technology to detect and combat Retinopathy of Prematurity in newborn infants. 
             This disease, dubbed ROP, is one of the leading causes of blindness in newborn 
             infants.</div>
        <div className="h1">My Task</div>
        <div>I was contacted by Degang Wang of Boston AI Labs to design their website from 
            scratch, as the company did not use a website at the time. </div>
        <p>I was given very few guidelines, the only requirement being that the company's 
            solution to ROP is clearly advertised. I was given numerous numerous resources 
            from which to cull for information about ROP.</p>
        <div className="h1">Design Goals</div>
        <div>I concluded that the primary goals of this project should be: </div>
        <div className="dual">
            <div style={{width: "30%", textAlign: "center"}}>Given <span className="accent">verbose blocks of information</span> about the disease, display them to the reader in a <span className="accent">condensed, easily digestible</span> format.</div>
            <div style={{width: "30%", textAlign: "center"}}>Allow the company's solution to ROP to be <span className="accent">clearly presented</span> to the reader.</div>
        </div>
        <div className="h1">Design Process</div>
        <div>I decided to approach these goals by conducting a <span className="accent">competitive analysis</span> of the 
            websites associated with prominent medical companies, and creating a table to 
            gauge the features employed by the websites to: </div>
        <div className="dual">
            <div style={{width: "30%", textAlign: "center"}}>Present the <span className="accent">medical problem</span> that the company aims to combat </div>
            <div style={{width: "30%", textAlign: "center"}}>Present and market the <span className="accent">company's solution</span> to the problem</div>
        </div>
        <div className="h1" style={{fontSize: "1.1vw"}}>→ Competitive analysis</div>
        <div>I investigated the websites of similar companies who are also developing medical AI solutions for eye diseases. I then synthesized my investigation into a table of key features. </div>
        <p>This abbreviated table consists of features found in at least 2 of the 3 websites. </p>
        <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/boston/boston1.png")} alt=""/>
        <div><span className="accent">Note: </span>The websites referenced are <a style={{color: "black"}} target="_blank" href="https://www.eyenuk.com/us-en/">EYENUK</a>, <a style={{color: "black"}} href="https://www.digitaldiagnostics.com/products/eye-disease/lumineticscore/">Digital Diagnostics</a>, and <a target="_blank" style={{color: "black"}} href="https://www.pr3vent.com/website/index.php">PR3VENT</a>.</div>
        <div className="h1" style={{fontSize: "1.1vw"}}>→ Wireframe</div>
        <div>With these key features in mind, I then proceeded to create a wireframe sketch integrating the key features while presenting the problem of ROP alongside the Boston AI Labs solution. </div>
        <img className="project-visual" style={{height: "auto", width: "45%"}}src={require("../../graphics/boston/boston2.png")} alt=""/>
        <div className="h1" style={{fontSize: "1.1vw"}}>→ Prototypes and conclusion</div>
        <div>Through further discussion, we were then able to devise low and high fidelity prototypes. To bring the prototypes to life, we settled on a simple blue color scheme to match the logo of Boston AI Labs. </div>
        <p><span className="accent">View the Low and High Fidelity Prototypes here: </span> <a style={{color: "black"}} target="_blank" href="http://www.figma.com/file/21ZptbJH7dX5l1kgMW9c1Q/Boston-AI-Labs-Website-Design">http://www.figma.com/file/21ZptbJH7dX5l1kgMW9c1Q/Boston-AI-Labs-Website-Design</a></p>
        <div><span className="accent">Note: </span> Use the "Pages" menu to alternate between prototypes: </div>
        <img className="project-visual" style={{height: "auto", width: "35%"}}src={require("../../graphics/boston/boston3.png")} alt=""/>
    </>,

    <>
    <div className="h1">Overview</div>
    <div>For <span className="accent">CSCI 1300: User Interfaces and User Experiences</span> at Brown University, I: </div>
    <p>Completed 5 assignments. For each assignment, I <b>coded a website in React and JavaScript</b> that showcases the assignment. The assignments were
        <div>→ Personas and Storyboarding</div>
        <div>→ Responsive Redesign</div>
        <div>→ Iterative Design </div>
        <div>→ Development </div>
        <div>→ Final Portfolio </div></p>

    <div className="h1">Personas and Storyboarding</div>
    <div>Step into a user's shoes by observing real users interacting with a chosen interface (this can be any interface; it doesn't need to be digital). <b>Interview</b> thee individuals about their experiences, <b>create</b> personas based on these users, and <b>illustrate</b> a storyboard for one of the personas.</div>
    <a target="_blank" href="https://sadunicorn777.github.io/personas-and-storyboarding/" className="click-to-view">Click to view the website →</a>
    <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/fr/fr2.png")} alt=""/>
    
    <div className="h1">Responsive Redesign</div>
    <div>Practice the workflow of redesigning a simple website. <b>Analyze and identify</b> flaws in an existing interface, <b>create</b> low-fidelity and high-fidelity prototypes for various screen sizes, and <b>build</b> a responsive website based on those prototypes.</div>
    <a target="_blank" href="https://sadunicorn777.github.io/rr/" className="click-to-view">Click to view the website →</a>
    <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/fr/fr3.png")} alt=""/>

    <div className="h1">Iterative Design</div>
    <div>In a group of four, <b>design</b> an interactive interface for an emerging startup. <b>Mockup</b> a solution to the startup's concept, <b>conduct</b> user testing, <b>consolidate</b> feedback and <b>develop</b> a final prototype.</div>
    <a target="_blank" href="https://rockyraccoon111.github.io/uiux-assign4/" className="click-to-view">Click to view the website →</a>
    <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/fr/fr4.png")} alt=""/>

    <div className="h1">Development</div>
    <div><b>Develop</b> an interactive interface using interface components, and <b>tie</b> the components to an internal data state. <b>Create</b> a list-based interface in React which allows users to <b>select</b> items out of a list, and then <b>aggregates</b> them.</div>
    <a target="_blank" href="https://sadunicorn777.github.io/dev/" className="click-to-view">Click to view the website →</a>
    <img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/fr/fr5.png")} alt=""/>

    <div className="h1">Final Portfolio</div>
    <div><b>Develop</b> a portfolio in React that showcases your work from this class! <b>Choose</b> 4 assignments to showcase, one may be a UX-related project from another context.</div>
    <a target="_blank" href="https://sadunicorn777.github.io/portfolio/" className="click-to-view">Click to view the website →</a>
    <img className="project-visual" style={{height: "auto", width: "35%"}}src={require("../../graphics/fr/fr1.gif")} alt=""/>
    <p><img className="project-visual" style={{height: "auto", width: "95%"}}src={require("../../graphics/fr/fr6.png")} alt=""/></p>
    <div className="h1">GitHub</div>
    <div>GitHub Link: <a style={{color: "black"}} target="_blank" href="http://github.com/sadunicorn777">http://github.com/sadunicorn777</a></div>
    <div>Please disregard the silly name of the repo, the class required me to choose an adjective, animal, and three-digit number.</div>
    </>,

    <>
    <div className="h1">Overview</div>
    <div>For <span className="accent">CSCI 1230: Intro to Computer Graphics</span> at Brown University, I: </div>
    <p>Implemented ray tracer in C++ which
        <div>→ Parses tree-based scene representations into vector-based "primitive" data</div>
        <div>→ Projects a ray to calculate intersection points with scene "primitives"</div>
        <div>→ Invokes a Phong lighting model to color each pixel of an image based on the material properties of each primitive. </div>
        <div>→ Simulates shadows, reflections, and textures in the scene. </div></p>
    <div className="h1">Scenes Created by the Ray Tracer</div>
    <div>Reading in simple <span className="accent">.xml</span> files, the ray tracer parses location, size, and material data to create scenes, simulating light, shadow, and texture.</div>
    <div className="photo-collection">
        <img className="project-visual" style={{height: "auto", width: "40%"}}src={require("../../graphics/raytracer/rt1.png")} alt=""/>
        <img className="project-visual" style={{height: "auto", width: "40%"}}src={require("../../graphics/raytracer/rt2.png")} alt=""/>
        <img className="project-visual" style={{height: "auto", width: "40%"}}src={require("../../graphics/raytracer/rt3.png")} alt=""/>
        <img className="project-visual" style={{height: "auto", width: "40%"}}src={require("../../graphics/raytracer/rt4.png")} alt=""/>
    </div>
    <div className="h1">Bonus!</div>
    <div>I created an original Scenefile. This is the output produced by my Ray Tracer:</div>
    <img className="project-visual" style={{height: "auto", width: "75%"}}src={require("../../graphics/raytracer/rt5.jpg")} alt=""/>
    <p>If you're curious what the code looks like, here's the link: <a style={{color: "black"}} target="_blank" href="https://github.com/hadleydalt/myscenefile/blob/main/myscenefile.xml">https://github.com/hadleydalt/myscenefile/blob/main/myscenefile.xml</a></p>
    </>
]
