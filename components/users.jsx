import { func } from "prop-types";
import userData from "../../userData";
function Users(){
    return(
        <>
        {
            userData.map((user) => {
                return <div key = {user.id}>
                <h3>{user.firstname}{user.lastname}</h3>
                <p>{user.email}</p>
                <a href={user.website}>Webstie</a>
                </div>
            })
        }
        
        </>
    );
} 
export default Users;