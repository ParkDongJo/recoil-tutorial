import { useRecoilState } from 'recoil';
import { textState, useResetText } from "./../store/atom"

function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
}

export default TextInput;
