const getData = async ()=> {
    let response = await axios.get(`https://ergast.com/api/f1/${season.value}/${round.value}/driverStandings.json`)
    // console.log(response.data)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

const form = document.querySelector('#findform')



form.addEventListener('submit', (event) => {
    event.preventDefault()
    season = event.target[0].value
    round = event.target[1].value
    console.log(season, round)
})

const create_list = (position, name, nationality, constructor, points) => {
   
    const html = `<tr>
        <td>${position}</td>
        <td>${name}</td>
        <td>${nationality}</td>
        <td>${constructor} </td>
        <td>${points}</td>
    </tr>`;
    document.querySelector('tbody').insertAdjacentHTML('beforeend', html);
    }


const load_data = async () => {
    
    const rangers = await getData();
    rangers.forEach(element => create_list(
        element.position,
        element.Driver.givenName + " " + element.Driver.familyName,
        element.Driver.nationality,
        element.Constructors[0].name,
        element.points
    ))
}
    
        

