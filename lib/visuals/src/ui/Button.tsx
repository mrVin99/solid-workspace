import {createSignal} from "solid-js";

export const Button = () => {

    const [state, setState] = createSignal(0)

    return (
        <button
            onclick={() => setState(state() + 1)}
        >
            Click me
        </button>
    )
}