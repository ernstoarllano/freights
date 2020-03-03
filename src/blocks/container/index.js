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

export default registerBlockType('freights/container', {
  title: __('Container'),
  description: __('Wrap your content in a container.'),
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
    backgroundColor: {
      type: 'string',
      default: 'white'
    }
  },
  edit,
  save
})
