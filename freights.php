<?php
/**
 * Plugin Name: Freights
 * Plugin URI: 
 * Description: Big Rig Media Gutenberg Blocks
 * Text Domain: frieghts
 * Domain Path: /languages
 * Author: Ernesto Arellano
 * Author URI: https://ernestoarellano.dev
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package frieghts
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

// Only load if Gutenberg is enabled
if ( !function_exists('register_block_type') ) {
  return;
}

// Register block assets
add_action('enqueue_block_assets', function() {
  wp_enqueue_script(
    'freights',
    plugins_url('/build/index.js', __FILE__),
    ['wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor'],
    filemtime(plugin_dir_path(__FILE__) . '/build/index.js')
  );
});