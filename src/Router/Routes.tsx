import { useRoutes} from "react-router-dom"
import { Homelayout } from "../Components"
import Homepage from "../Pages/Homepage"
import Aboutpage from "../Pages/About/Aboutpage"
import Contactus from "../Pages/Contactus"

const Routes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Homelayout />,
            children: [
                {
                    index: true,
                    element: <Homepage/>
                },
                {
                    path: "/about",
                    element: <Aboutpage />
                },
                {
                    path: "/contact-us",
                    element: <Contactus />
                }
            ]
        }
    ])
    return element
}

export default Routes