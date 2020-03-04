/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import {
  ColorPalette,
  InspectorControls,
  RichText
} from '@wordpress/block-editor'
import { PanelBody } from '@wordpress/components'

/**
 * Internal dependencies
 */
import { icon } from './icon'
import edit from './edit'
import save from './save'

export default registerBlockType('freights/rate', {
  title: __('Rate'),
  description: __("Add a block that displays rate content you'd like."),
  icon: icon,
  category: 'bigrigmedia',
  parent: ['freights/rates'],
  attributes: {
    alignment: {
      type: 'string',
      default: 'none'
    }
  },
  edit,
  save
})
