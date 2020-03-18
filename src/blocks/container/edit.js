/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/block-editor'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'

/**
 * Internal dependencies
 */
import { config } from '../../theme'

const ContainerEdit = ({
  attributes,
  className,
  hasChildBlocks,
  setAttributes
}) => {
  const { fullWidth } = attributes
  const containerWidth = fullWidth ? 'full' : 'wide'

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Width')}>
          <ToggleControl
            label={__('Full Width')}
            help={
              fullWidth
                ? __('Container is full width.')
                : __('Toggle to set container to full width.')
            }
            checked={fullWidth}
            onChange={() => {
              setAttributes({ fullWidth: !fullWidth })
            }}
          />
        </PanelBody>
      </InspectorControls>
      <div className={className} data-width={containerWidth}>
        <InnerBlocks
          renderAppender={
            hasChildBlocks
              ? undefined
              : () => <InnerBlocks.ButtonBlockAppender />
          }
          templateLock={false}
        />
      </div>
    </>
  )
}

export default ContainerEdit
