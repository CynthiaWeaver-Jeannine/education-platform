import "../../styles/profile.css"
import '../globals.css'
export default function Home() {
    return(
    <div className="container">
        <h1>Profile</h1>
        
    <div className="topContainer">
        <div className="photoDiv portionDiv" style={{ flex: 0.5 }}>
            <img className="profilePhoto" src="../images/profilePhoto.jpg" alt="profilePhoto" />
    </div>
    <div className="portionDiv"style={{ flex: 0.5 }}>
        <h3>Jan Browser</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="badges">
        <h3>Badges:</h3>
            <img className="greyBubble" src="../images/greyBubble.PNG" alt="greyBubble" />
            <img className="greyBubble" src="../images/greyBubble.PNG" alt="greyBubble" />
            <img className="greyBubble" src="../images/greyBubble.PNG" alt="greyBubble" />
        </div>

    </div>
  
  <div className="portionDiv">
    <h3>Learning Preferences</h3>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="*" className= "link">Link to style quiz</a>
        <div className="stats">
            <h3>Statistics:</h3>
            <img className="greyBubble" style={{width:"70px", height:"70px"}} src="../images/greyBubble.PNG" alt="greyBubble" />
            <img className="greyBubble" style={{width:"70px", height:"70px"}} src="../images/greyBubble.PNG" alt="greyBubble" />
            <img className="greyBubble" style={{width:"70px", height:"70px"}} src="../images/greyBubble.PNG" alt="greyBubble" />
            <img className="greyBubble" style={{width:"70px", height:"70px"}} src="../images/greyBubble.PNG" alt="greyBubble" />
            <img className="greyBubble" style={{width:"70px", height:"70px"}} src="../images/greyBubble.PNG" alt="greyBubble" />
        </div>
  </div>
</div>
    <div className="bottomPortion">
        <h3>My Saved Courses</h3>
        <div className="savedCourses">
            <div className="course">
            <img  style={{width:"300px", height:"250px"}} src="../images/whiteboard.JPG" alt="whiteboard" />
            </div>
            <div className="course">
            <img  style={{width:"300px", height:"250px"}} src="../images/notebook.JPG" alt="notebook" />
            </div>
            <div className="course">
            <img  style={{width:"300px", height:"250px"}} src="../images/computer.JPG" alt="computer" />
            </div>
            <a href="/">
            <div className="chatBot"></div>
            </a>
        </div>
    </div>

</div>
)
  }