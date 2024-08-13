document.addEventListener('DOMContentLoaded', () => {
    const buttonSearch = document.querySelector('#buttonSearch')
    buttonSearch.addEventListener('click', function(){
        document.querySelector('#inputsResults').classList.remove('hiddenContent')

        const city = document.querySelector('#cityName').value
        const apiKey = '9f62ce5dbfbfd072e4f9905c5550ebdb'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const result = document.querySelector('#inputsResults')
            document.querySelector('#inputCityName').value = data.name
            document.querySelector('#inputCountry').value = data.sys.country
            document.querySelector('#inputTemp').value = `${(data.main.temp -  273).toFixed(1)}`
            document.querySelector('#inputFeelsLike').value = `${(data.main.feels_like - 273).toFixed(1)}`
            document.querySelector('#inputHumidity').value = `${data.main.humidity}%`
            const windSpeedSecond = data.wind.speed
            const windSpeedKM = (windSpeedSecond * 3.6).toFixed(2)
            document.querySelector('#inputWindV').value = `${windSpeedKM}Km/h`
        }).catch(error => {
            document.querySelector('#inputCityName').value = 'CANNOT FIND THE CITY'
            document.querySelector('#inputCountry').value = 'CANNOT FIND THE CITY'
            document.querySelector('#inputTemp').value = 'CANNOT FIND THE CITY'
            document.querySelector('#inputFeelsLike').value = 'CANNOT FIND THE CITY'
            document.querySelector('#inputHumidity').value = 'CANNOT FIND THE CITY'
            document.querySelector('#inputWindV').value = 'CANNOT FIND THE CITY'
            console.log(`ERROR: ${error}`)
    })
    })
})