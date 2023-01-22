function getAzan(city, contry){
    axios.get(`http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${contry}`)
    .then(response=>{
        let Data = response.data
        let times = Data.data
        /* Selecting the element with the class of `times` */
        document.querySelector('.times').innerHTML = ''
        
        for(let time of times){
            
            let days = time.timings
            
            let content = `
            <div class="time">
            <div class="azan">
              <h3>الفجر</h3>
            </div>
            <div class="clock">
              <h3>AM ${days.Fajr.slice(0, 5)}</h3>
            </div>
          </div>
          <div class="time">
            <div class="azan">
              <h3>الظهر</h3>
            </div>
            <div class="clock">
              <h3>PM ${days.Dhuhr.slice(0, 5)}</h3>
            </div>
          </div>
          <div class="time">
            <div class="azan">
              <h3>العصر</h3>
            </div>
            <div class="clock">
              <h3>PM ${days.Asr.slice(0, 5)}</h3>
            </div>
          </div>
          <div class="time">
            <div class="azan">
              <h3>المغرب</h3>
            </div>
            <div class="clock">
              <h3>PM ${days.Maghrib.slice(0, 5)}</h3>
            </div>
          </div>
          <div class="time">
            <div class="azan">
              <h3>العشاء</h3>
            </div>
            <div class="clock">
              <h3>PM ${days.Isha.slice(0, 5)}</h3>
            </div>
          </div>
            `
            
            document.querySelector('.times').innerHTML = content
        }
    })
}



function getCity(tawn){
    let contry =tawn.className 
    let city =tawn.id
    let name = tawn.textContent
    
    getAzan(city, contry)
    document.querySelector('h1').innerText = name

    
    let selectedElements = document.getElementsByClassName('selected')

    for(element of selectedElements)(
        element.classList.remove('selected')
    )
    tawn.classList.toggle('selected')
}

