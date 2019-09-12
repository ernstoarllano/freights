/**
 * External dependencies
 */
import classnames from 'classnames'
import { times } from 'lodash'

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { InnerBlocks, InspectorControls } = wp.editor
const { PanelBody, RangeControl } = wp.components
const { useState } = wp.element

/**
 * Internal dependencies
 */
import { icon } from './icon'

/**
 * Allowed blocks constant is passed to InnerBlocks
 * The array should contain the name of each block that is allowed
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ['freights/rate']

/**
 * Number of columns to assume for template in case user
 * opts to skip template option selection
 *
 * @constant
 * @type {number}
 */
const DEFAULT_COLUMNS = 2

/**
 * Returns the layout configuration for a given number of columns
 *
 * @param   {number} columns
 * @return  {Object[]}
 */
const getColumnsTemplate = columns => {
  return times(columns, () => ['freights/rate'])
}

export default registerBlockType('freights/rates', {
  title: __('Rates'),
  description: __('Add a block that displays rates in multiple columns.'),
  icon: icon,
  category: 'formatting',
  attributes: {
    columns: {
      type: 'number',
      default: DEFAULT_COLUMNS
    }
  },
  edit: props => {
    const { attributes, className, setAttributes } = props
    const { columns } = attributes

    // Store initial template to use
    const [template, setTemplate] = useState(getColumnsTemplate(columns))

    // Update column count
    const columnCount = columns => {
      setAttributes({ columns })

      setTemplate(getColumnsTemplate(columns))
    }

    // Set container classes
    const classes = classnames(className, `has-${columns}`)

    return (
      <>
        <InspectorControls>
          <PanelBody>
            <RangeControl
              label={__('Columns')}
              value={columns}
              min={1}
              max={4}
              onChange={columnCount}
            />
          </PanelBody>
        </InspectorControls>
        <div className={classes}>
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
    const { columns } = attributes

    // Set container classes
    const classes = classnames(className, `has-${columns}`)

    return (
      <div className={classes}>
        <InnerBlocks.Content />
      </div>
    )
  }
})
