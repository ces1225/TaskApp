import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer/reducer";

const store = configureStore({
    reducer
})

// store.getState로 현재 스토어의 상태를 반환, 이후, RetrunType으로 반환값 타입을 추출
export type RootState = ReturnType<typeof store.getState>
// 상태 변경
export type AppDisPatch = typeof store.dispatch;

export default store;