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

export default registerBlockType('freights/card', {
  title: __('Card'),
  description: __('Add some text with an image for visual emphasis.'),
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
    alignment: {
      type: 'string',
      default: 'none'
    },
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    mediaID: {
      type: 'number'
    },
    mediaSizes: {
      type: 'object',
      default: {}
    },
    order: {
      type: 'string',
      default: 'default'
    }
  },
  edit,
  save
})
