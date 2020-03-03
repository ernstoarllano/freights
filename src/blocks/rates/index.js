/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import { icon } from './icon'
import edit from './edit'
import save from './save'

/**
 * Number of rates to assume for template in case user
 * opts to skip template option selection
 *
 * @constant
 * @type {number}
 */
const DEFAULT_RATES = 2

export default registerBlockType('freights/rates', {
  title: __('Rates'),
  description: __(
    "Add a block that displays multiple rates with whatever content block you'd like"
  ),
  icon: icon,
  category: 'bigrigmedia',
  supports: {
    align: true,
    align: ['wide', 'full']
  },
  attributes: {
    align: {
      type: 'string',
      default: 'wide'
    },
    rates: {
      type: 'number',
      default: DEFAULT_RATES
    }
  },
  edit,
  save
})
