/**
 * External dependencies
 */
import classnames from 'classnames'
import { times } from 'lodash'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import { InnerBlocks, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, RangeControl } from '@wordpress/components'
import { useState } from '@wordpress/element'

/**
 * Internal dependencies
 */
import { icon } from './icon'
import './editor.scss'

/**
 * Allowed blocks constant is passed to InnerBlocks
 * The array should contain the name of each block that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['freights/rate']

/**
 * Number of rates to assume for template in case user
 * opts to skip template option selection
 *
 * @constant
 * @type {number}
 */
const DEFAULT_RATES = 2

const calculateWidth = rates => {
  return parseFloat(100 / rates)
}

/**
 * Returns the layout configuration for a given number of rates
 *
 * @param   {number} rates
 * @return  {Object[]}
 */
const getRatesTemplate = rates => {
  console.log(rates)

  return times(rates, () => ['freights/rate', { width: calculateWidth(rates) }])
}

export default registerBlockType('freights/rates', {
  title: __('Rates'),
  description: __('Add a rates block to display multiple rates.'),
  icon: icon,
  category: 'formatting',
  supports: {
    align: true,
    align: ['wide', 'full']
  },
  attributes: {
    align: {
      type: 'string'
    },
    rates: {
      type: 'number',
      default: DEFAULT_RATES
    }
  },
  edit: props => {
    const { attributes, className, setAttributes } = props
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
        <div className={className}>
          <InnerBlocks
            template={template}
            allowedBlocks={ALLOWED_BLOCKS}
            templateLock="all"
          />
        </div>
      </>
    )
  },
  save: props => {
    const { attributes, className } = props
    const { rates } = attributes

    return (
      <div className={className}>
        <InnerBlocks.Content />
      </div>
    )
  }
})
