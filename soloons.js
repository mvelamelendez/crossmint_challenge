export { createSoloon, deleteSoloon };
const myID = 'b2e9d766-1b97-460e-ad3c-b9855be2e64c';

const createSoloon = (x, y, color) => {
  return (fetch('https://challenge.crossmint.io/api/soloons', {
    method: 'POST',
    body: JSON.stringify({
      candidateId: myID,
      row: x,
      column: y,
      color: color
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
    .catch(error => console.error('Error creating Soloon:', error))
  )
}

const deleteSoloon = (x, y) => {
  return (fetch('https://challenge.crossmint.io/api/soloons', {
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
    .catch(error => console.error('Error deleting Soloon:', error))
  )
}
