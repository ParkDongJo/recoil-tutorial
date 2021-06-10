import { useRecoilValue } from 'recoil';
import { charCountState } from "./../store/selector"

function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
}

export default CharacterCount;
