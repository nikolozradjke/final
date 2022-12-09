import {useSelector} from "react-redux";

export function PageNotFound(){
    const weather = useSelector(state => state.weather)

    return (
        <>
            <div id="sticky-div">
                <p>Tbilisi:</p>
                <p>{weather}&#8451;</p>
            </div>

            <h1>Page not found!</h1>
        </>
    )
}