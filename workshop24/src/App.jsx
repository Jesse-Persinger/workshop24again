import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  //console.log(puppies)
  return (
    <>
      <div style={{ color: "cream", backgroundColor: "grey", padding: "50px" }}>
        <header style={{ fontSize: "1.5em", backgroundColor: "darkslategrey", padding: "20px", width: "30em" }}>Sum Poopies!</header>
        {
          puppies.map((puppy) => {
            // console.log(featuredPup);
            return <p style={{ color: "cream", backgroundColor: "lightslategrey", padding: ".5em" }} onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id}>{puppy.name}</p>;
          })
        }

        {featPupId && (
          <div style={{ color: "cream", backgroundColor: "darkslategrey", padding: "3em", borderRadius: "20%" }}>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>

    </>
  )
}

export default App
