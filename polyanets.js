export { createPolyanet, deletePolyanet };
const myID = 'b2e9d766-1b97-460e-ad3c-b9855be2e64c';

const createPolyanet = (x, y) => {
  return (fetch('https://challenge.crossmint.io/api/polyanets', {
    method: 'POST',
    body: JSON.stringify({
      candidateId: myID,
      row: x,
      column: y,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
    .catch(error => console.error('Error creating Polyanet:', error))
  )
}

const deletePolyanet = (x, y) => {
  return (fetch('https://challenge.crossmint.io/api/polyanets', {
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
    .catch(error => console.error('Error deleting Polyanet:', error))
  )
}
