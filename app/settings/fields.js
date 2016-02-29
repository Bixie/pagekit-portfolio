
var options = require('./options');

module.exports = {
    portfolio: {
        'portfolio_image_align': {
            type: 'select',
            label: 'Image alignment',
            options: options.align.general,
            attrs: {'class': 'uk-form-width-small'}
        },
        'filter_tags': {
            type: 'checkbox',
            label: 'Grid filter',
            optionlabel: 'Filter by tags'
        },
        'title1': {
            raw: true,
            type: 'title',
            label: '',
            title: 'Project columns',
            attrs: {'class': 'uk-margin-top'}
        },
        'columns': {
            type: 'select',
            label: 'Phone Portrait',
            options: options.gridcols.base,
            attrs: {'class': 'uk-form-width-small'}
        },
        'columns_small': {
            type: 'select',
            label: 'Phone Landscape',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'columns_medium': {
            type: 'select',
            label: 'Tablet',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'columns_large': {
            type: 'select',
            label: 'Desktop',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'columns_xlarge': {
            type: 'select',
            label: 'Large screens',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'columns_gutter': {
            type: 'select',
            label: 'Gutter width',
            options: options.gutter,
            attrs: {'class': 'uk-form-width-small'}
        },
        'title2': {
            raw: true,
            type: 'title',
            label: '',
            title: 'Teaser thumbs columns',
            attrs: {'class': 'uk-margin-top'}
        },
        'teaser.columns': {
            type: 'select',
            label: 'Phone Portrait',
            options: options.gridcols.base,
            attrs: {'class': 'uk-form-width-small'}
        },
        'teaser.columns_small': {
            type: 'select',
            label: 'Phone Landscape',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'teaser.columns_medium': {
            type: 'select',
            label: 'Tablet',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'teaser.columns_large': {
            type: 'select',
            label: 'Desktop',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'teaser.columns_xlarge': {
            type: 'select',
            label: 'Large screens',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        }
    },
    teaser_show: {
        'teaser.show_title': {
            type: 'checkbox',
            label: 'Show content',
            optionlabel: 'Show title'
        },
        'teaser.show_subtitle': {
            type: 'checkbox',
            optionlabel: 'Show subtitle'
        },
        'teaser.show_intro': {
            type: 'checkbox',
            optionlabel: 'Show intro'
        },
        'teaser.show_image': {
            type: 'checkbox',
            optionlabel: 'Show image'
        },
        'teaser.show_date': {
            type: 'checkbox',
            optionlabel: 'Show date'
        },
        'teaser.show_client': {
            type: 'checkbox',
            optionlabel: 'Show client'
        },
        'teaser.show_tags': {
            type: 'checkbox',
            optionlabel: 'Show tags'
        },
        'teaser.show_thumbs': {
            type: 'checkbox',
            optionlabel: 'Show thumbs'
        },
        'teaser.show_data': {
            type: 'checkbox',
            optionlabel: 'Show data'
        },
        'teaser.show_readmore': {
            type: 'checkbox',
            optionlabel: 'Show readmore'
        }
    },
    teaser_top: {
        'teaser.template': {
            type: 'select',
            label: 'Teaser template',
            options: {
                'Panel': 'panel',
                'Overlay': 'overlay'
            },
            attrs: {'class': 'uk-form-width-medium'}
        }
    },
    template: {
        panel: {
            'teaser.panel_style': {
                type: 'select',
                label: 'Panel style',
                options: options.panel_style,
                attrs: {'class': 'uk-form-width-medium'}
            }
        },
        overlay: {
            'teaser.overlay': {
                type: 'select',
                label: 'Overlay',
                options: {
                    'None': '', /*trans*/
                    'Always': 'uk-overlay', /*trans*/
                    'On hover': 'uk-overlay uk-overlay-hover' /*trans*/
                },
                attrs: {'class': 'uk-form-width-medium'}
            },
            'teaser.overlay_position': {
                type: 'select',
                label: 'Overlay position',
                options: {
                    'Cover image': '', /*trans*/
                    'Top': 'uk-overlay-top', /*trans*/
                    'Bottom': 'uk-overlay-bottom', /*trans*/
                    'Left': 'uk-overlay-left', /*trans*/
                    'Right': 'uk-overlay-right' /*trans*/
                },
                attrs: {'class': 'uk-form-width-medium'}
            },
            'teaser.overlay_effect': {
                type: 'select',
                label: 'Overlay effect',
                options: {
                    'None': '', /*trans*/
                    'Fade': 'uk-overlay-fade', /*trans*/
                    'Slide top': 'uk-overlay-slide-top', /*trans*/
                    'Slide bottom': 'uk-overlay-slide-bottom', /*trans*/
                    'Slide left': 'uk-overlay-slide-left', /*trans*/
                    'Slide right': 'uk-overlay-slide-right' /*trans*/
                },
                attrs: {'class': 'uk-form-width-medium'}
            },
            'teaser.overlay_image_effect': {
                type: 'select',
                label: 'Overlay image effect',
                options: {
                    'None': '', /*trans*/
                    'Scale': 'uk-overlay-scale', /*trans*/
                    'Rotate': 'uk-overlay-rotate', /*trans*/
                    'Grayscale': 'uk-overlay-grayscale' /*trans*/
                },
                attrs: {'class': 'uk-form-width-medium'}
            }
        }
    },
    teaser_bottom: {
        'teaser.content_align': {
            type: 'select',
            label: 'Content alignment',
            options: options.align.general,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'teaser.title_size': {
            type: 'select',
            label: 'Teaser title size',
            options: options.heading_size,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'teaser.title_color': {
            type: 'select',
            label: 'Teaser title color',
            options: options.text_color,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'teaser.tags_align': {
            type: 'select',
            label: 'Tags alignment',
            options: options.align.flex,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'teaser.read_more': {
            label: 'Read more text',
            attrs: {'class': 'uk-form-width-medium'}
        },
        'teaser.read_more_style': {
            type: 'select',
            label: 'Read more button style',
            options: {
                'Overlay (when selected)': 'overlay', /*trans*/
                'Link': 'uk-link', /*trans*/
                'Button': 'uk-button', /*trans*/
                'Button primary': 'uk-button uk-button-primary', /*trans*/
                'Button success': 'uk-button uk-button-success', /*trans*/
                'Button link': 'uk-button uk-button-link' /*trans*/
            },
            attrs: {'class': 'uk-form-width-medium'}
        },
        'teaser.readmore_align': {
            type: 'select',
            label: 'Readmore alignment',
            options: options.align.text,
            attrs: {'class': 'uk-form-width-medium'}
        }
    },
    project: {
        'project.image_align': {
            type: 'select',
            label: 'Image alignment',
            options: options.align.general,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.metadata_position': {
            type: 'select',
            label: 'Metadata position',
            options: options.position.page,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.tags_align': {
            type: 'select',
            label: 'Tags alignment',
            options: options.align.flex,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.tags_position': {
            type: 'select',
            label: 'Tags position',
            options: options.position.page,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.show_navigation': {
            type: 'select',
            label: 'Position navigation',
            options: options.position.nav,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.overlay_title_size': {
            type: 'select',
            label: 'Overlay title size',
            options: options.heading_size,
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.overlay': {
            type: 'select',
            label: 'Overlay',
            options: {
                'None': '',
                'Always': 'uk-overlay', /*trans*/
                'On hover': 'uk-overlay uk-overlay-hover' /*trans*/
            },
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.overlay_position': {
            type: 'select',
            label: 'Overlay position',
            options: {
                'Cover image': '', /*trans*/
                'Top': 'uk-overlay-top', /*trans*/
                'Bottom': 'uk-overlay-bottom', /*trans*/
                'Left': 'uk-overlay-left', /*trans*/
                'Right': 'uk-overlay-right' /*trans*/
            },
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.overlay_effect': {
            type: 'select',
            label: 'Overlay effect',
            options: {
                'None': '', /*trans*/
                'Fade': 'uk-overlay-fade', /*trans*/
                'Slide top': 'uk-overlay-slide-top', /*trans*/
                'Slide bottom': 'uk-overlay-slide-bottom', /*trans*/
                'Slide left': 'uk-overlay-slide-left', /*trans*/
                'Slide right': 'uk-overlay-slide-right' /*trans*/
            },
            attrs: {'class': 'uk-form-width-medium'}
        },
        'project.overlay_image_effect': {
            type: 'select',
            label: 'Overlay image effect',
            options: {
                'None': '',
                'Scale': 'uk-overlay-scale', /*trans*/
                'Rotate': 'uk-overlay-rotate', /*trans*/
                'Grayscale': 'uk-overlay-grayscale' /*trans*/
            },
            attrs: {'class': 'uk-form-width-medium'}
        },
        'title1': {
            raw: true,
            type: 'title',
            label: '',
            title: 'Image columns',
            attrs: {'class': 'uk-margin-top'}
        },
        'project.columns': {
            type: 'select',
            label: 'Phone Portrait',
            options: options.gridcols.base,
            attrs: {'class': 'uk-form-width-small'}
        },
        'project.columns_small': {
            type: 'select',
            label: 'Phone Landscape',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'project.columns_medium': {
            type: 'select',
            label: 'Tablet',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'project.columns_large': {
            type: 'select',
            label: 'Desktop',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        },
        'project.columns_xlarge': {
            type: 'select',
            label: 'Large screens',
            options: options.gridcols.inherit,
            attrs: {'class': 'uk-form-width-small'}
        }

    },
    general: {
        'projects_per_page': {
            type: 'number',
            label: 'Projects per page',
            attrs: {'class': 'uk-form-width-small'}
        },
        'date_format': {
            type: 'select',
            label: 'Date format',
            options: {
                'January 2015': 'F Y', /*trans*/
                'January 15 2015': 'F d Y', /*trans*/
                '15 January 2015': 'd F Y', /*trans*/
                'Jan 2015': 'M Y', /*trans*/
                '1 2015': 'm Y',
                '1-15-2015': 'm-d-Y',
                '15-1-2015': 'd-m-Y'
            },
            attrs: {'class': 'uk-form-width-medium'}
        },
        'cache_path': {
            type: 'text',
            label: 'Cache folder images',
            attrs: {'class': 'uk-form-width-large'}
        }

    }


};