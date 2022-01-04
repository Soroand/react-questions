 export const getRythms = (val, setMatches) => {
    try {
    fetch('https://api.datamuse.com/words?rel_rhy=' + val,{
      method: 'GET',
    })
    .then(res => res.json())
    .then(json => setMatches(json))
  } catch (e) {
    alert('Error fetching data', e)
  }
 }