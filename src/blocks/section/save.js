/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { getColorObjectByColorValue } from '@wordpress/block-editor'
import { getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import { config } from '../../theme'

const SectionSave = ({ attributes }) => {
  const { align, backgroundColor, mediaSizes } = attributes
  const className = getBlockDefaultClassName('freights/section')

  const backgroundColorClassName = getColorObjectByColorValue(
    config.colors,
    backgroundColor
  )

  const hasBackgroundColor =
    backgroundColorClassName !== undefined
      ? `has-background-color has-background-color-${backgroundColorClassName.slug}`
      : ''
  const classes = classnames(className, hasBackgroundColor)

  return (
    <>
      <section
        className={classes}
        data-align={align}
        data-mobile={'thumbnail' in mediaSizes && mediaSizes.thumbnail.url}
        data-desktop={'full' in mediaSizes && mediaSizes.full.url}
        style={{
          backgroundImage: 'full' in mediaSizes && `url(${mediaSizes.full.url})`
        }}
      >
        <InnerBlocks.Content />
      </section>
    </>
  )
}

export default SectionSave
