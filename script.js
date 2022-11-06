
console.log('hello')

const form = document.querySelector(".form form");
const input = document.querySelector("input");
const list = document.querySelector(".boxx .city");
const list2 = document.querySelector(".boxx2 .city2");






key = '9849775ca4024aec3f79204288a63f53'

form.addEventListener("submit" , hello=> {
    hello.preventDefault()
    const inputc = input.value
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputc}&appid=${key}&units=metric`


    fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log(data)
     const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const addon = `
        
      
      
      <section class="city" name="${data.name}">  <img src="${icon}" alt="weather-icon"> <div>${data.name}</div> <div>temp:${data.main.temp}°C</div> <div>humidity:${data.main.humidity}%</div>   <div>wind speed:${data.wind.speed}km/h</div></section
     
        
        
        
        
       
      `;
      li.innerHTML = addon;
      list.appendChild(li);
      
    })
})

form.addEventListener("submit" , hello=> {
  hello.preventDefault()
  const inputc = input.value
  const api = `https://api.openweathermap.org/data/2.5/forecast?q=${inputc}&appid=${key}&units=metric`


  fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  for(let i = 0; i < data.list.length; i += 8 ){
   const icon = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;

    const li = document.createElement("li");
    li.classList.add("city");
    const addon = `
      
    
    
    <section class="city" name="${data.city.name}">  <img src="${icon}" alt="weather-icon"> <div>${data.city.name}</div> <div>temp:${data.list[i].main.temp}°C</div> <div>humidity:${data.list[i].main.humidity}%</div>   <div>wind speed:${data.list[i].wind.speed}km/h</div></section
   
      
      
      
      
     
    `;
    li.innerHTML = addon;
    list2.appendChild(li);
    
  }})

}
)




