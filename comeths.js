export { createCometh, deleteCometh };
const myID = 'b2e9d766-1b97-460e-ad3c-b9855be2e64c';

const createCometh = (x, y, dir) => {
  return (fetch('https://challenge.crossmint.io/api/comeths', {
    method: 'POST',
    body: JSON.stringify({
      candidateId: myID,
      row: x,
      column: y,
      direction: dir
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
    .catch(error => console.error('Error creating Cometh:', error))
  )
}

const deleteCometh = (x, y) => {
  return (
    fetch('https://challenge.crossmint.io/api/comeths', {
      method: 'DELETE',
      body: JSON.stringify({
        candidateId: myID,
        row: x,
        column: y,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error deleting Cometh:', error))
  )
}
