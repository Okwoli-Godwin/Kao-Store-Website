import { useRoutes} from "react-router-dom"
import { Homelayout } from "../Components"
import Homepage from "../Pages/Homepage"

const Routes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Homelayout />,
            children: [
                {
                    index: true,
                    element: <Homepage/>
                }
            ]
        }
    ])
    return element
}

export default Routes