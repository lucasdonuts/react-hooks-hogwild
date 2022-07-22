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
      <div className='card'>
        <h3 className='smallHeader'>{ name }</h3>
        <button onClick={ hideHogTile }>Unhide This Hog</button>
      </div>
    )
  }
  else {
    return (
      <div
        className='card'
        onClick={ hideExtra }
        style={{ display: hideHog }}
      >
        <h3 className='smallHeader'>{ name }</h3>
        <div className='ui image'>
          <img  src={ image } alt='piggy' />
        </div>
        <div className='content'>
          <div className='description' style={{ display:  hideDetails  }}>
            <p className='normalText'><strong>Specialty: </strong>{ specialty }</p>
            <p className='normalText'><strong>Weight: </strong>{ weight }lbs</p>
            <p className='normalText'><strong>Greased: </strong>{ greased ? 'Yes' : 'No' }</p>
            <p className='normalText'><strong>Highest Medal Achieved: </strong>{ highestMedal }</p>
          </div>
        </div>
        <div className='ui bottom attached button' onClick={ hideHogTile }>
          Hide This Hog
        </div>
      </div>
      // <div
      //   className='pigTile image ui three wide column'
      //   onClick={ hideExtra }
      //   style={{ display: hideHog }}
      // >
      //   <h3>{ name }</h3>
      //   <img src={ image } alt='piggy' />
      //   <div style={{ display:  hideDetails  }}>
      //     <p><strong>Specialty: </strong>{ specialty }</p>
      //     <p><strong>Weight: </strong>{ weight }lbs</p>
      //     <p><strong>Greased: </strong>{ greased ? 'Yes' : 'No' }</p>
      //     <p><strong>Highest Medal Achieved: </strong>{ highestMedal }</p>
      //   </div><br />
      //   <button onClick={ hideHogTile }>Hide This Hog</button>
      // </div>
    )
  }
}
export default HogTile;