import { useSelector } from "react-redux"


export default function Toast() {

    const { ui: { toastMsg, toastErr } } = useSelector(state => state);

    return (
        <div className={`toast ${toastErr && 'error'} `}>
            {toastMsg}
        </div>
    )
}

