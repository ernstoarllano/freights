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
const DEFAULT_COLUMNS = 1

/**
 * Template options for predefined columns layouts
 * 
 * @constant
 * @type {array}
 */
const TEMPLATE_OPTIONS = [
  {
    title: __('One Rate'),
    template: [
      ['freights/rate']
    ]
  },
  {
    title: __('Two Rates'),
    template: [
      ['freights/rate'],
      ['freights/rate']
    ]
  },
  {
    title: __('Three Rates'),
    template: [
      ['freights/rate'],
      ['freights/rate'],
      ['freights/rate']
    ]
  },
  {
    title: __('Four Rates'),
    template: [
      ['freights/rate'],
      ['freights/rate'],
      ['freights/rate'],
      ['freights/rate']
    ]
  }
]

/**
 * Returns the layout configuration for a given number of columns
 * 
 * @param   {number} columns 
 * @return  {Object[]}
 */
const getColumnsTemplate = columns => {
  return times(columns, () => ['freight/rate'])
}

export default registerBlockType('freights/rates', {
  title: __('Rates', 'freights'),
  icon: icon,
  category: 'formatting',
  attributes: {
    columns: {
      type: 'number',
      default: DEFAULT_COLUMNS
    },
  },
  edit: props => {
    const { attributes, className, setAttributes } = props
    const { columns } = attributes

    // Update column count
    const columnCount = columns => {
      setAttributes({ columns })
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
            allowedBlocks={ALLOWED_BLOCKS}
            __experimentalTemplateOptions={TEMPLATE_OPTIONS}
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
