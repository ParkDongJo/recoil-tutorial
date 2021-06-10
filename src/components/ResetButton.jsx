import { useResetText } from "../store/atom"

function ResetButton() {
    const resetText = useResetText()

    const onReset = () => {
        resetText()
    }

    return (
        <button onClick={onReset}>초기화</button>
    )
}

export default ResetButton;
