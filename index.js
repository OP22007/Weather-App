import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { access } from "fs";
import browserEnv from 'browser-env';
browserEnv(['navigator']);
const app = express();
const port = 3000;
const API_Key = "openuv-19g0jorlm1jpqac-io";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
// var symbol ;
const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
const shortday = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
app.post("/", async(req, res)=>{
    try{
        const lat = req.body.lat
        const long = req.body.long
        const result = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=e184c87585904ab38ddd24906dfbe967`)
        res.render("index.ejs", { content:result.data.symbol,price:result.data.price_24h,volume:result.data.volume_24h,lastprice:result.data.last_trade_price});
        const date = new Date(result.data.data[0].datetime)
        let day = weekday[date.getDay()];
    let name = month[date.getMonth()];
        const date2 = new Date(result.data.data[0].moonrise_ts * 1000);
        const date3 = new Date(result.data.data[0].moonset_ts*1000)
let formattedTimeRise = date2.toLocaleTimeString("en-US");
let formattedTimeSet = date3.toLocaleTimeString("en-US");
        const curr = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=e184c87585904ab38ddd24906dfbe967&include=minutely`);
        const imgurl0 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[0].weather.icon}.png`
        const imgurl1 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[1].weather.icon}.png`
        const imgurl2 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[2].weather.icon}.png`
        const imgurl3 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[3].weather.icon}.png`
        const imgurl4 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[4].weather.icon}.png`
        const imgurl5 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[5].weather.icon}.png`
        const imgurl6 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[6].weather.icon}.png`
        const uv = result.data.data[0].uv
        let day1 = shortday[date.getDay()];
        let day2 = shortday[date.getDay()+1];
        let day3 = shortday[date.getDay()+2];
        let day4 = shortday[date.getDay()+3];
        let day5 = shortday[date.getDay()+4];
        let day6 = shortday[date.getDay()+5];
        let maxtemp1 = result.data.data[0].max_temp
        let maxtemp2 = result.data.data[1].max_temp
        let maxtemp3 = result.data.data[2].max_temp
        let maxtemp4 = result.data.data[3].max_temp
        let maxtemp5 = result.data.data[4].max_temp
        let maxtemp6 = result.data.data[5].max_temp
        let mintemp1 = result.data.data[0].min_temp
        let mintemp2 = result.data.data[1].min_temp
        let mintemp3 = result.data.data[2].min_temp
        let mintemp4 = result.data.data[3].min_temp
        let mintemp5 = result.data.data[4].min_temp
        let mintemp6 = result.data.data[5].min_temp
    const curr2 = await axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${long}&key=e184c87585904ab38ddd24906dfbe967&hours=6 `);
        let time1 = curr2.data.data[0].timestamp_local.slice(11,16)
        let time2 = curr2.data.data[1].timestamp_local.slice(11,16)
        let time3 = curr2.data.data[2].timestamp_local.slice(11,16)
        let time4 = curr2.data.data[3].timestamp_local.slice(11,16)
        let time5 = curr2.data.data[4].timestamp_local.slice(11,16)
        let time6 = curr2.data.data[5].timestamp_local.slice(11,16)
        let himg1 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[0].weather.icon}.png`
        let himg2 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[1].weather.icon}.png`
        let himg3 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[2].weather.icon}.png`
        let himg4 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[3].weather.icon}.png`
        let himg5 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[4].weather.icon}.png`
        let himg6 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[5].weather.icon}.png`
        let ctemp1 = curr2.data.data[0].temp
        let ctemp2 = curr2.data.data[1].temp
        let ctemp3 = curr2.data.data[2].temp
        let ctemp4 = curr2.data.data[3].temp
        let ctemp5 = curr2.data.data[4].temp
        let ctemp6 = curr2.data.data[5].temp
        res.render("index.ejs", {date:`${day}, ${name} ${date.getDate()}`,loc:`${result.data.city_name}, ${result.data.country_code}`,wind:result.data.data[0].wind_spd,humidity:result.data.data[0].rh,atm:result.data.data[0].pres,water:result.data.data[0].dewpt,moonrise:formattedTimeRise,moonset:formattedTimeSet,temp:curr.data.data[0].temp,desc:curr.data.data[0].weather.description,wrimg0:imgurl0,wrimg1:imgurl1,wrimg2:imgurl2,wrimg3:imgurl3,wrimg4:imgurl4,wrimg5:imgurl5,wrimg6:imgurl6,uv:uv,day1:day1,day2:day2,day3:day3,day4:day4,day5:day5,day6:day6,mintemp1:mintemp1,mintemp2:mintemp2,mintemp3:mintemp3,mintemp4:mintemp4,mintemp5:mintemp5,mintemp6:mintemp6,maxtemp1:maxtemp1,maxtemp2:maxtemp2,maxtemp3:maxtemp3,maxtemp4:maxtemp4,maxtemp5:maxtemp5,maxtemp6:maxtemp6,time1:time1,time2:time2,time3:time3,time4:time4,time5:time5,time6:time6,himg1:himg1,himg2:himg2,himg3:himg3,himg4:himg4,himg5:himg5,himg6:himg6,ctemp1:ctemp1,ctemp2:ctemp2,ctemp3:ctemp3,ctemp4:ctemp4,ctemp5:ctemp5,ctemp6:ctemp6})  
    }catch(error){
        console.error("Failed to make request", error.message);
    }
})
app.post("/city",async(req, res)=>{
    try{
    const city = req.body.city
    const result = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=e184c87585904ab38ddd24906dfbe967`)
    const date = new Date(result.data.data[0].datetime)
        let day = weekday[date.getDay()];
    let name = month[date.getMonth()];
        const date2 = new Date(result.data.data[0].moonrise_ts * 1000);
        const date3 = new Date(result.data.data[0].moonset_ts*1000)
let formattedTimeRise = date2.toLocaleTimeString("en-US");
let formattedTimeSet = date3.toLocaleTimeString("en-US");
const curr = await axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=e184c87585904ab38ddd24906dfbe967&include=minutely`);
const imgurl0 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[0].weather.icon}.png`
        const imgurl1 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[1].weather.icon}.png`
        const imgurl2 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[2].weather.icon}.png`
        const imgurl3 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[3].weather.icon}.png`
        const imgurl4 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[4].weather.icon}.png`
        const imgurl5 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[5].weather.icon}.png`
        const imgurl6 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[6].weather.icon}.png`
        const uv = result.data.data[0].uv
        let day1 = shortday[date.getDay()];
        let day2 = shortday[date.getDay()+1];
        let day3 = shortday[date.getDay()+2];
        let day4 = shortday[date.getDay()+3];
        let day5 = shortday[date.getDay()+4];
        let day6 = shortday[date.getDay()+5];
        let maxtemp1 = result.data.data[0].max_temp
        let maxtemp2 = result.data.data[1].max_temp
        let maxtemp3 = result.data.data[2].max_temp
        let maxtemp4 = result.data.data[3].max_temp
        let maxtemp5 = result.data.data[4].max_temp
        let maxtemp6 = result.data.data[5].max_temp
        let mintemp1 = result.data.data[0].min_temp
        let mintemp2 = result.data.data[1].min_temp
        let mintemp3 = result.data.data[2].min_temp
        let mintemp4 = result.data.data[3].min_temp
        let mintemp5 = result.data.data[4].min_temp
        let mintemp6 = result.data.data[5].min_temp
        const curr2 = await axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=e184c87585904ab38ddd24906dfbe967&hours=6 `);
        let time1 = curr2.data.data[0].timestamp_local.slice(11,16)
        let time2 = curr2.data.data[1].timestamp_local.slice(11,16)
        let time3 = curr2.data.data[2].timestamp_local.slice(11,16)
        let time4 = curr2.data.data[3].timestamp_local.slice(11,16)
        let time5 = curr2.data.data[4].timestamp_local.slice(11,16)
        let time6 = curr2.data.data[5].timestamp_local.slice(11,16)
        let himg1 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[0].weather.icon}.png`
        let himg2 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[1].weather.icon}.png`
        let himg3 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[2].weather.icon}.png`
        let himg4 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[3].weather.icon}.png`
        let himg5 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[4].weather.icon}.png`
        let himg6 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[5].weather.icon}.png`
        let ctemp1 = curr2.data.data[0].temp
        let ctemp2 = curr2.data.data[1].temp
        let ctemp3 = curr2.data.data[2].temp
        let ctemp4 = curr2.data.data[3].temp
        let ctemp5 = curr2.data.data[4].temp
        let ctemp6 = curr2.data.data[5].temp
        res.render("index.ejs", {date:`${day}, ${name} ${date.getDate()}`,loc:`${result.data.city_name}, ${result.data.country_code}`,wind:result.data.data[0].wind_spd,humidity:result.data.data[0].rh,atm:result.data.data[0].pres,water:result.data.data[0].dewpt,moonrise:formattedTimeRise,moonset:formattedTimeSet,temp:curr.data.data[0].temp,desc:curr.data.data[0].weather.description,wrimg0:imgurl0,wrimg1:imgurl1,wrimg2:imgurl2,wrimg3:imgurl3,wrimg4:imgurl4,wrimg5:imgurl5,wrimg6:imgurl6,uv:uv,day1:day1,day2:day2,day3:day3,day4:day4,day5:day5,day6:day6,mintemp1:mintemp1,mintemp2:mintemp2,mintemp3:mintemp3,mintemp4:mintemp4,mintemp5:mintemp5,mintemp6:mintemp6,maxtemp1:maxtemp1,maxtemp2:maxtemp2,maxtemp3:maxtemp3,maxtemp4:maxtemp4,maxtemp5:maxtemp5,maxtemp6:maxtemp6,time1:time1,time2:time2,time3:time3,time4:time4,time5:time5,time6:time6,himg1:himg1,himg2:himg2,himg3:himg3,himg4:himg4,himg5:himg5,himg6:himg6,ctemp1:ctemp1,ctemp2:ctemp2,ctemp3:ctemp3,ctemp4:ctemp4,ctemp5:ctemp5,ctemp6:ctemp6})  
    }catch(error){
        console.error("Failed to make request", error.message);
    }
    // res.redirect("/");
})
app.post("/locn", async(req, res)=>{
    try{
        const response = await axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=d9dbdd1b4d564b04b7732b9bec3045e8`)
        const lat = response.data.location.latitude
        const long = response.data.location.longitude
        const result = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${long}&key=e184c87585904ab38ddd24906dfbe967`)
       const date = new Date(result.data.data[0].datetime)
        let day = weekday[date.getDay()];
    let name = month[date.getMonth()];
        const date2 = new Date(result.data.data[0].moonrise_ts * 1000);
        const date3 = new Date(result.data.data[0].moonset_ts*1000)
let formattedTimeRise = date2.toLocaleTimeString("en-US");
let formattedTimeSet = date3.toLocaleTimeString("en-US");
        console.log( formattedTimeRise)
        const curr = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=e184c87585904ab38ddd24906dfbe967&include=minutely`);
        const imgurl0 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[0].weather.icon}.png`
        const imgurl1 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[1].weather.icon}.png`
        const imgurl2 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[2].weather.icon}.png`
        const imgurl3 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[3].weather.icon}.png`
        const imgurl4 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[4].weather.icon}.png`
        const imgurl5 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[5].weather.icon}.png`
        const imgurl6 = `https://cdn.weatherbit.io/static/img/icons/${result.data.data[6].weather.icon}.png`
        const uv = result.data.data[0].uv
        let day1 = shortday[date.getDay()];
        let day2 = shortday[date.getDay()+1];
        let day3 = shortday[date.getDay()+2];
        let day4 = shortday[date.getDay()+3];
        let day5 = shortday[date.getDay()+4];
        let day6 = shortday[date.getDay()+5];
        let maxtemp1 = result.data.data[0].max_temp
        let maxtemp2 = result.data.data[1].max_temp
        let maxtemp3 = result.data.data[2].max_temp
        let maxtemp4 = result.data.data[3].max_temp
        let maxtemp5 = result.data.data[4].max_temp
        let maxtemp6 = result.data.data[5].max_temp
        let mintemp1 = result.data.data[0].min_temp
        let mintemp2 = result.data.data[1].min_temp
        let mintemp3 = result.data.data[2].min_temp
        let mintemp4 = result.data.data[3].min_temp
        let mintemp5 = result.data.data[4].min_temp
        let mintemp6 = result.data.data[5].min_temp
        const curr2 = await axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${long}&key=e184c87585904ab38ddd24906dfbe967&hours=6 `);
        let time1 = curr2.data.data[0].timestamp_local.slice(11,16)
        let time2 = curr2.data.data[1].timestamp_local.slice(11,16)
        let time3 = curr2.data.data[2].timestamp_local.slice(11,16)
        let time4 = curr2.data.data[3].timestamp_local.slice(11,16)
        let time5 = curr2.data.data[4].timestamp_local.slice(11,16)
        let time6 = curr2.data.data[5].timestamp_local.slice(11,16)
        let himg1 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[0].weather.icon}.png`
        let himg2 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[1].weather.icon}.png`
        let himg3 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[2].weather.icon}.png`
        let himg4 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[3].weather.icon}.png`
        let himg5 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[4].weather.icon}.png`
        let himg6 = `https://cdn.weatherbit.io/static/img/icons/${curr2.data.data[5].weather.icon}.png`
        let ctemp1 = curr2.data.data[0].temp
        let ctemp2 = curr2.data.data[1].temp
        let ctemp3 = curr2.data.data[2].temp
        let ctemp4 = curr2.data.data[3].temp
        let ctemp5 = curr2.data.data[4].temp
        let ctemp6 = curr2.data.data[5].temp
        res.render("index.ejs", {date:`${day}, ${name} ${date.getDate()}`,loc:`${result.data.city_name}, ${result.data.country_code}`,wind:result.data.data[0].wind_spd,humidity:result.data.data[0].rh,atm:result.data.data[0].pres,water:result.data.data[0].dewpt,moonrise:formattedTimeRise,moonset:formattedTimeSet,temp:curr.data.data[0].temp,desc:curr.data.data[0].weather.description,wrimg0:imgurl0,wrimg1:imgurl1,wrimg2:imgurl2,wrimg3:imgurl3,wrimg4:imgurl4,wrimg5:imgurl5,wrimg6:imgurl6,uv:uv,day1:day1,day2:day2,day3:day3,day4:day4,day5:day5,day6:day6,mintemp1:mintemp1,mintemp2:mintemp2,mintemp3:mintemp3,mintemp4:mintemp4,mintemp5:mintemp5,mintemp6:mintemp6,maxtemp1:maxtemp1,maxtemp2:maxtemp2,maxtemp3:maxtemp3,maxtemp4:maxtemp4,maxtemp5:maxtemp5,maxtemp6:maxtemp6,time1:time1,time2:time2,time3:time3,time4:time4,time5:time5,time6:time6,himg1:himg1,himg2:himg2,himg3:himg3,himg4:himg4,himg5:himg5,himg6:himg6,ctemp1:ctemp1,ctemp2:ctemp2,ctemp3:ctemp3,ctemp4:ctemp4,ctemp5:ctemp5,ctemp6:ctemp6})  
    } 
    catch(error){
            console.error("Failed to make request", error.message);
        }
})
app.post("/locn2",async(req,res)=>{
    try{
    const response = await axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=d9dbdd1b4d564b04b7732b9bec3045e8`)
    const lat = response.data.location.latitude
    const long = response.data.location.longitude
    const result = await axios.get(`https://api.weatherbit.io/v2.0/current/airquality?lat=${lat}&lon=${long}&key=e184c87585904ab38ddd24906dfbe967&include=minutely`);
    res.render("air.ejs",{aqi:result.data.data[0].aqi,loc:`${result.data.city_name}, ${result.data.country_code}`,o3:result.data.data[0].o3,so2:result.data.data[0].so2,no2:result.data.data[0].no2,co:result.data.data[0].co,pm10:result.data.data[0].pm10,pm25:result.data.data[0].pm25})   
}
    catch(error){
        console.error("Failed to make request", error.message);
    }
})
app.post("/city2",async(req,res)=>{
    try{
    const city = req.body.city
    const result = await axios.get(`https://api.weatherbit.io/v2.0/current/airquality?city=${city}&key=e184c87585904ab38ddd24906dfbe967&include=minutely`);
    res.render("air.ejs",{aqi:result.data.data[0].aqi,loc:`${result.data.city_name}, ${result.data.country_code}`,o3:result.data.data[0].o3,so2:result.data.data[0].so2,no2:result.data.data[0].no2,co:result.data.data[0].co,pm10:result.data.data[0].pm10,pm25:result.data.data[0].pm25})   
}
    catch(error){
        console.error("Failed to make request", error.message);
    }
})
app.get("/", async(req,res)=>{
    try {   
        res.render("index.ejs")
    }catch(error){
        console.error("Failed to make request", error.message);
    }    
})
app.get("/air-quality", async(req,res)=>{
    try {   
        res.render("air.ejs")
    }catch(error){
        console.error("Failed to make request", error.message);
    }    
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });       