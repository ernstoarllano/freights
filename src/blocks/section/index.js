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

export default registerBlockType('freights/section', {
  title: __('Section'),
  description: __('Wrap your content in a section.'),
  icon: icon,
  category: 'bigrigmedia',
  supports: {
    align: true,
    align: ['full']
  },
  attributes: {
    align: {
      type: 'string',
      default: 'full'
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
    }
  },
  edit,
  save
})
