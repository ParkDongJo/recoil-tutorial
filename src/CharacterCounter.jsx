import TextInput from "./components/TextInput"
import CharacterCount from "./components/CharacterCount"
import ResetButton from "./components/ResetButton"

function CharacterCounter() {
    return (
      <div>
        <TextInput />
        <CharacterCount />
        <ResetButton />
      </div>
    );
}

export default CharacterCounter;
  