import { useRouteError } from "react-router-dom";
import MainHeading from "../Components/MainHeading";
import Wrapper from "../Components/Wrapper";

function ErrorPage(){
    const error = useRouteError()
    console.error(error)

    return(
        <Wrapper>
            <MainHeading>
                Oops!
            </MainHeading>
            <p>
                Sorry, an unvexpected error has occurred.
            </p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </Wrapper>
    )
}

export default ErrorPage