

function TextBox(props) {
    return (
        <div className={"TextBox"}>
            <form>
                <label>
                    {props.label}
                </label>
                <input type="text" onChange={(e) => props.change(e.target.value)}/>
            </form>
        </div>
    )
}

export default TextBox;