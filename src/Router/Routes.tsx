import { useRoutes} from "react-router-dom"
import { Homelayout } from "../Components"
import Homepage from "../Pages/Homepage"
import Aboutpage from "../Pages/Aboutpage"

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
                }
            ]
        }
    ])
    return element
}

export default Routes