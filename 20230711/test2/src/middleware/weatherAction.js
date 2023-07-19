import axios from "axios";
// 요청 응답을 처리할때
// axios
// npm i axios

function getWeather(city){
    return async (dispatch)=>{
        // api 데이터 요청
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c5fef0dacf87c72039436e6a426e8f4`);
        // 요청에 대한 처리가 끝나면
        dispatch({
            type : "GET_WEATHER",
            payload : data
        })
    }
};

export const weather = {getWeather};