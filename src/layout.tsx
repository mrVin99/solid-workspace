import {Button} from "visuals/src";

export default (props: any) => {

    return (
        <div>
            <h1>Layout</h1>
            <Button/>
            {props.children}
        </div>
    )
}