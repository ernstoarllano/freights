/**
 * WordPress dependencies
 */
import { getBlockDefaultClassName } from '@wordpress/blocks'

const CardSave = () => {
  const className = getBlockDefaultClassName('freights/card')

  return (
    <div className={className}>
      <div></div>
      <div></div>
    </div>
  )
}

export default CardSave
