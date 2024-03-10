<?php
/**
 * Plugin Name: Test Masonry
 * Plugin URI:
 * Update URI: false
 * Version: 1.0
 * Requires at least: 6.3
 * Requires PHP: 7.4
 * Author: leemon
 * Text Domain: exhibitpress
 * Description: A simple Masonry gallery plugin
 * License: GPLv2 or later
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @package exhibitpress
 */

/**
 * Core class used to implement the plugin.
 */
class TestMasonry {

	/**
	 * Plugin instance.
	 *
	 * @var object $instance
	 */
	protected static $instance = null;

	/**
	 * Access this plugin’s working instance
	 *
	 * @return object of this class
	 */
	public static function get_instance() {

		if ( ! self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Used for regular plugin work.
	 *
	 * @return  void
	 */
	public function plugin_setup() {

		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Constructor. Intentionally left empty and public.
	 */
	public function __construct() {}

	/**
	 * Registers blocks
	 *
	 * @throws Error If block is not built.
	 */
	public function register_blocks() {

		if ( ! function_exists( 'register_block_type' ) ) {
			// The block editor is not active.
			return;
		}

		// Register blocks by passing the location of block.json to register_block_type.
		register_block_type(
			__DIR__ . '/build/blocks/masonry',
			array(
				'render_callback' => array( $this, 'render_block_masonry' ),
			)
		);

		// Load translations.
		$script_handle = generate_block_asset_handle( 'occ/exhibitpress-masonry', 'editorScript' );
		wp_set_script_translations( $script_handle, 'exhibitpress', plugin_dir_path( __FILE__ ) . 'languages' );
	}

	/**
	 * Renders masonry gallery block
	 *
	 * @param array $attributes     The array of attributes for this block.
	 */
	public function render_block_masonry( $attributes ) {
		$block_props = get_block_wrapper_attributes(
			array(
				'class' => implode(
					' ',
					array(
						'columns-' . $attributes['columns'],
						$attributes['crop'] ? 'is-cropped' : '',
					),
				),
			)
		);

		$attrs = array(
			'gap'                 => $attributes['gap'],
			'lightbox_background' => $attributes['lightbox_background'],
		);

		$html = '<div ' . wp_kses_data( $block_props ) . ' data-settings="' . esc_attr( wp_json_encode( $attrs ) ) . '">
			<div class="exhibit-items" style="--gap: ' . esc_attr( $attributes['gap'] ) . '">
			<div class="grid-sizer"></div>';

		foreach ( $attributes['items'] as $item ) {
			$html .= '<div class="exhibit-item">
				<figure>';
			if ( $attributes['lightbox'] ) {
				$html .= '<a data-rel="collection" href="' . esc_url( $item['url'] ) . '" data-sub-html="' . esc_attr( $item['caption'] ) . '">';
				$html .= wp_get_attachment_image( $item['id'], 'full' );
				$html .= '</a>';
			} else {
				$html .= wp_get_attachment_image( $item['id'], 'full' );
			}
			if ( $attributes['captions'] && $item['caption'] ) {
				$html .= '<figcaption class="wp-element-caption">' . $item['caption'] . '</figcaption>';
			}
			$html .= '</figure>
				</div>';
		}

		$html .= '</div>
			</div>';

		return $html;
	}
}

add_action( 'plugins_loaded', array( TestMasonry::get_instance(), 'plugin_setup' ) );
