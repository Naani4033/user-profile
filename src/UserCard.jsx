
import propTypes, { string } from "prop-types";
const userData=[{
   name:"Arul Kumaran",
   city:"Erode",
  descr:"Full Stack Developer",
   skills:["HTML","CSS","JS","C","JAVA","MYSQL"],
   profile:"/public/images/generic-user-icon-9.jpg",

},
{
  name:"Divakar",
  city:"Erode",
  descr:"Back End Developer",
  skills:["JS","C","JAVA","MYSQL"],
  profile:"/public/images/generic-user-icon-9.jpg",

},
{
  name:"Naani",
  city:"Erode",
  descr:"Front End Developer",
  skills:["HTML","CSS","JS","PYTHON","MYSQL,REACT,"],
  profile:"/public/images/generic-user-icon-9.jpg",

}

];

function User(props) {
  return (
    <div className="card-container">
    <span className="pro">ONLINE</span>
    <img src={props.profile}className="images"alt="user"/>
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.descr}</p>
    
    <div className="button">
      <button className="primary">Message</button>
      <button  className="primary outline">Following</button>
    </div>
    
      <div className="skills">
        <h5>skills</h5>
        <ui>
          {
            props.skills.map((skills,index)=>(
              <li key ={index}> {skills}  </li>
         )) }
        </ui>
      </div>
       </div>
    
  );
}
export const UserCard = () => {
  return  (
    <>
     {
     userData.map((user,index) =>(
      <User key={index} name={user.name} city={user.city} descr={user.descr} profile={user.profile}skills={user.skills}/>
    ))}
    </>
  ) ;
  
  
  
  /*<User name="Divakar"city="Erode"descr="Back end developer"skills={["UI/UX","HTML","CSS","JS","JAVA","REACT","NODE"]}/>*/

};

{
  User .propTypes= {
    name:propTypes.string.isRequired,
    city : propTypes.string.isRequired,
    descr: propTypes.string.isRequired,
    skills: propTypes.arrayOf(propTypes.string).isRequired,
    profile: propTypes.string.isRequired,
  };
}

