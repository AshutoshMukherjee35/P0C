import { useAuth0 } from "@auth0/auth0-react"
import Error from "./Error";

const Admin = () => {
    const {user} = useAuth0();
    let role = user?.["http://localhost:1234"];

    return role!=='Admin' ? (<Error/>) : (
        <div>
            <h1>Admin Access Page</h1>
        </div>
    )
}
export default Admin