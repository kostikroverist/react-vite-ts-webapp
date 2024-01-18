import { FC } from "react"

type Props = {
    text: string,
    disabled?: boolean,
    onClick?: () => void
}
const Button: FC<Props> = ({ text, disabled, onClick }) => {
    return (
        <button style={{ minWidth: '80px' }} disabled={disabled} onClick={onClick} className="btn btn-primary m-2 p-2" >
            {text}
        </button>
    )
}

export default Button
