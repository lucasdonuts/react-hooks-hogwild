import { useState, React } from 'react';

const HogTile = ({ name, image, specialty, greased, weight, highestMedal }) => {
  const [hideHog, setHideHog] = useState(false)
  const [hideDetails, setHideDetails] = useState('none')

  const hideExtra = () => {
    setHideDetails(hideDetails === 'none' ? 'inline-block' : 'none');
  }

  const hideHogTile = (e) => {
    e.stopPropagation();
    setHideHog(() => !hideHog)
  }

  if (hideHog) {
    return (
      <div className='pigTile ui eight wide column'>
        <h3>{ name }</h3>
        <button onClick={ hideHogTile }>Unhide This Hog</button>
      </div>
    )
  }
  else {
    return (
      <div
        className='pigTile ui eight wide column'
        onClick={ hideExtra }
        style={{ display: hideHog }}
      >
        <h3>{ name }</h3>
        <img src={ image } alt='piggy' />
        <div style={{ display:  hideDetails  }}>
          <p><strong>Specialty: </strong>{ specialty }</p>
          <p><strong>Weight: </strong>{ weight }lbs</p>
          <p><strong>Greased: </strong>{ greased ? 'Yes' : 'No' }</p>
          <p><strong>Highest Medal Achieved: </strong>{ highestMedal }</p>
        </div><br />
        <button onClick={ hideHogTile }>Hide This Hog</button>
      </div>
    )
  }
}
export default HogTile;