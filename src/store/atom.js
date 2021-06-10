import {
    atom,
    useSetRecoilState
} from 'recoil';

export const textState = atom({
    key: 'textState',
    default: '',
});

export const useResetText = () => {
    const setText = useSetRecoilState(textState)
    return () => {
        setText("")
    }
}
