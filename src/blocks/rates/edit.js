/**
 * External dependencies
 */
import { times } from 'lodash'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, RangeControl } from '@wordpress/components'
import { useState } from '@wordpress/element'

/**
 * Returns the calculated percentage width to use for rates
 *
 * @param {number} rates
 */
const calculateWidth = rates => {
  return parseFloat(100 / rates)
}

/**
 * Returns the layout configuration for a given number of rates
 *
 * @param   {number} rates
 * @return  {Object[]}
 */
const getRatesTemplate = (rates) => {
  return times(rates, () => ['freights/rate'])
}

/**
 * Allowed blocks constant is passed to InnerBlocks
 * The array should contain the name of each block that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['freights/rate']

const RatesEdit = ({ attributes, className, setAttributes }) => {
  const { rates } = attributes

  // Store initial template to use
  const [template, setTemplate] = useState(getRatesTemplate(rates))

  // Update column count
  const columnCount = rates => {
    setAttributes({ rates })

    setTemplate(getRatesTemplate(rates))
  }

  return (
    <>
      <InspectorControls>
        <PanelBody>
          <RangeControl
            label={__('Rates')}
            value={rates}
            min={1}
            max={4}
            onChange={columnCount}
          />
        </PanelBody>
      </InspectorControls>
      <div className={className} data-rates={rates}>
        <InnerBlocks
          template={template}
          allowedBlocks={ALLOWED_BLOCKS}
          templateLock="all"
        />
      </div>
    </>
  )
}

export default RatesEdit
