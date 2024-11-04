import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDisPatch , RootState } from "../store";

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDisPatch>();

// interface Obj<T> {
//     name : T;
// }

// interface State {
//     state : {
//         data : string,
//         loading : boolean
//     }
// }

// const obj: Obj<State> = {
//     name : {
//         state : {
//             data:'abcd',
//             loading:false
//         }
//     }
// }