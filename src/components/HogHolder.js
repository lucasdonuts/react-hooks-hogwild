import { useState, React } from 'react';
import HogTile from './HogTile';
import Filter from './Filter';

const HogHolder = ({ hogs }) => {
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  const handleFilter = () => {
    setFilterGreased(() => !filterGreased);
  }

  const handleSort = () => {
    setSortBy(() => sortBy === 'name' ? 'weight' : 'name')
  }

  const hogsToDisplay = hogs.sort( (hogA, hogB) => {
      if ( sortBy === 'name' ) {
        return hogA.name.toLowerCase() < hogB.name.toLowerCase()
          ? -1 : 1;
      } else {
        return hogA.weight - hogB.weight;
      }
    }).filter( hog => {
      if (filterGreased) {
        return hog.greased;
      } else {
        return hog;
      }
    })

    console.log(hogsToDisplay)

  const displayHogs = () => {
    return hogsToDisplay.map( hog => {

      return(
        <HogTile
          key={ hog.name }
          name={ hog.name }
          image={ hog.image }
          specialty={ hog.specialty }
          weight={ hog.weight }
          greased={ hog.greased }
          highestMedal={ hog["highest medal achieved"]}
        />
      )
    })
  }

  return (
    <>
      <Filter onFilter={ handleFilter } onSortChange={ handleSort } />
      <div className='ui grid container'>
        { displayHogs() }
      </div>
    </>
  )
}

export default HogHolder;