import { useState, React } from 'react';
import HogTile from './HogTile';
import Filter from './Filter';

const HogHolder = ({ hogs }) => {
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [search, setSearch] = useState('');

  const handleFilter = () => {
    setFilterGreased(() => !filterGreased);
  }

  const handleSort = (e) => {
    setSortBy(e.target.name)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  // const hogsToDisplay = hogs.sort( (hogA, hogB) => {
  //     if ( sortBy === 'name') {
  //       return hogA.name.toLowerCase() < hogB.name.toLowerCase()
  //         ? -1 : 1;
  //     } else {
  //       return hogA.weight - hogB.weight;
  //     }
  //   }).filter( hog => {
  //     if (filterGreased) {
  //       return hog.greased;
  //     } else {
  //       return hog;
  //     }
  //   })

  const hogsToDisplay = hogs.sort( (hogA, hogB) => {
    if ( sortBy === 'name') {
      return hogA.name.toLowerCase() < hogB.name.toLowerCase()
        ? -1 : 1;
    } else {
      return hogA.weight - hogB.weight;
    }
  }).filter( hog => {
    if (filterGreased) {
      return hog.greased && hog.name.toLowerCase().includes(search);
    } else {
      return hog.name.toLowerCase().includes(search);
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
      <Filter
      sortBy={ sortBy }
      filterGreased={ filterGreased }
      onFilter={ handleFilter }
      onSortChange={ handleSort }
      onSearchChange={ handleSearch }
      />
      <div className='ui link cards four wide column'>
        { displayHogs() }
      </div>
    </>
  )
}

export default HogHolder;