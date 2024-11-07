import { boardsReducer } from "../slices/boardSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";
import { userReducer } from "../slices/userSlice";


const reducer = {
    logger : loggerReducer,
    boards : boardsReducer,
    modal : modalReducer,
    user : userReducer
}

// 얘는 불러올 때 변수의 이름 설정이 가능한데,
// 현재 다른 const로 보낸 sub reducer들 같은 경우에는 그 형태 그대로 받아와야함
export default reducer;