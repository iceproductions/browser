import { ITheme } from '~/interfaces/theme';

export const lightTheme: ITheme = {
  'inactive-toolbar-color': '#bababa',
  'active-toolbar-color': '#ffffff',

  'overlay-default': '#ffffff',
  'overlay-text-color': 'rgba(0,0,0,0.8)',
  'overlay-logo-filter': 'invert(100%)',

  'toolbar-text-color': 'rgba(0,0,0,0.8)',
  'toolbar-separator-color': 'rgba(0, 0, 0, 0.12)',
  'toolbar-browser-action-filter': 'invert(0%)',
  'toolbar-logo-filter': 'invert(100%)',
  'toolbar-navigation-filter': 'invert(0%)',
  'toolbar-addtab-filter': 'invert(0%)',

  'general-element': 'invert(0%)',
  'general-title': 'black',
  'general-subtitle': 'gray',

  'omnibox-background-color': '#fffffffc',
  'omnibox-subheading-background-color': '#fafafa',
  'omnibox-text-color': 'dark',
  'omnibox-placeholder-color': 'rgba(0, 0, 0, 0.54)',
  'omnibox-suggestion-hover': 'rgba(0, 0, 0, 0.03)',
  'omnibox-suggestion-selected': 'rgba(0, 0, 0, 0.06)',
  'omnibox-icon': 'invert(100%)',
  'omnibox-search-icons': 'invert(0%)',

  'context-menu-color': '#ececec',
  'context-menu-selected': 'rgba(219, 219, 219, 0.8)',
  'context-menu-hover': 'rgba(33, 33, 33, 0.15)',
  'context-menu-item-color': 'black',
  'context-menu-icon-filter': 'invert(0%)',

  'tab-inactive-color': '#EEEEEE',
  'tab-text-color': 'black',
  'tab-group-filter': 'invert(0%)',
  'tab-vibrant-opacity': 0.7,
  'tab-text-vibrant-opacity': 0,
  'tab-preloader-vibrant-opacity': 0.2,
  'tab-text-opacity': 0,
  'tab-overlay-color': 'rgba(0, 0, 0, 0.1)',

  'bubble-background': '#cecece',
  'bubble-should-invert': 'invert(0%)',
  'bubble-hover': 'rgba(0, 0, 0, 0.08)',
  'bubble-icon-background': '#fefefe',
  'bubble-icon-background-if-favicon': '#fefefe',

  'navigation-bar-background': 'rgba(0, 0, 0, 0.07)',
  'navigation-bar-search-text-color': 'rgba(74, 74, 74, 1)',
  'navigation-bar-before-color': 'black',
  'navigation-bar-item-hover': '#ffffff3d',

  'windows-controls-color': 'invert(0%)',

  'button-border': 'black',
  'button-text-color': 'black',
  'button-hover': 'rgba(0, 0, 0, 0.12) !important',

  'degrees-button-color': '#c4c4c4',

  'email-text-color': 'black',

  'select-list-background': 'rgba(0, 0, 0, 0.08)',
  'select-list-icon-filter': 'invert(0%)',
  'select-list-items-color': '#d0d0d0',
  'select-list-items-text-color': 'black',
  'select-list-item-hover': 'rgba(0, 0, 0, 0.06)',

  'send-feedback-placeholder-color': 'black',

  'ext-link-hover': 'rgba(0, 0, 0, 0.12)',

  'a-filter': 'invert(100%)',
  'a-hover': 'rgba(255, 255, 255, 0.15)',

  'snackbar-background': 'rgba(247, 247, 247, 0.97)',
  'snackbar-color': 'rgb(20, 20, 20)',

  'line-color': '#e5e5e5',

  'star-invert': 'invert(0%)',

  'webui-newtab-background-color': '#ffffff',
  'webui-newtab-dot-color': '#434343',
  'webui-newtab-tile-shadow': '0 0 0 1px #efefef, 0 0 0 4px rgb(255,255,255)',
  'webui-newtab-tile-shadow-hover': '0 0 0 3px #accdef, 0 0 0 5px rgb(0,124,251)',
  'webui-newtab-icon-filter': 'invert(0)',
  'webui-newtab-icon-opacity': 0.5,
  'webui-newtab-search-shadow': '0 0 0 1px #d2d2d2, 0 0 0 4px rgb(255, 255, 255)',
  'webui-newtab-hyperlink-color': '#0066FF',
  'webui-newtab-inactive-hyperlink-color': '#4B4B4B',
  'webui-newtab-alert-action-hover': 'rgba(0, 0, 0, 0.05)',
};

export const darkTheme: ITheme = {
  'inactive-toolbar-color': '#404040',
  'active-toolbar-color': '#171717',

  'overlay-default': '#000000e8',
  'overlay-text-color': 'rgba(255, 255, 255, 0.8)',
  'overlay-logo-filter': 'invert(0%)',

  'toolbar-text-color': 'rgba(255, 255, 255, 0.8)',
  'toolbar-separator-color': 'rgba(255,255,255,0.12)',
  'toolbar-browser-action-filter': 'invert(100%)',
  'toolbar-logo-filter': 'invert(0%)',
  'toolbar-navigation-filter': 'invert(100%)',
  'toolbar-addtab-filter': 'invert(100%)',

  'general-element': 'invert(100%)',
  'general-title': 'white',
  'general-subtitle': 'rgb(218, 218, 218)',

  'omnibox-background-color': '#171717fc',
  'omnibox-subheading-background-color': '#141414',
  'omnibox-text-color': 'white',
  'omnibox-placeholder-color': 'rgba(255, 255, 255, 0.54)',
  'omnibox-suggestion-hover': '#ffffff0d',
  'omnibox-suggestion-selected': '#ffffff0f',
  'omnibox-icon': 'invert(0%)',
  'omnibox-search-icons': 'invert(100%)',

  'context-menu-color': '#303030',
  'context-menu-selected': 'rgba(255,255,255,0.15)',
  'context-menu-hover': 'rgba(255,255,255,0.15)',
  'context-menu-item-color': 'white',
  'context-menu-icon-filter': 'invert(100%)',

  'tab-inactive-color': '#2d2d2d',
  'tab-text-color': 'white',
  'tab-group-filter': 'invert(100%)',
  'tab-vibrant-opacity': 0.2,
  'tab-text-vibrant-opacity': 0.8,
  'tab-preloader-vibrant-opacity': 0.4,
  'tab-text-opacity': 0.8,
  'tab-overlay-color': 'rgba(255, 255, 255, 0.1)',

  'bubble-background': '#21212121',
  'bubble-should-invert': 'invert(100%)',
  'bubble-hover': 'rgba(255,255,255,0.08)',
  'bubble-icon-background': '#e2e2e2c2',
  'bubble-icon-background-if-favicon': '#202020',

  'navigation-bar-background': 'rgba(255, 255, 255, 0.08)',
  'navigation-bar-search-text-color': 'rgba(255, 255, 255, 0.54)',
  'navigation-bar-before-color': 'white',
  'navigation-bar-item-hover': '#0000003d',

  'windows-controls-color': 'invert(100%)',

  'button-border': 'white',
  'button-text-color': 'white',
  'button-hover': 'rgba(255, 255, 255, 0.12)',

  'degrees-button-color': '#585858c7',

  'email-text-color': 'white',

  'select-list-background': 'rgba(255,255,255,0.1)',
  'select-list-icon-filter': 'invert(100%)',
  'select-list-items-color': '#3e3e3e',
  'select-list-items-text-color': 'white',
  'select-list-item-hover': 'rgba(213,213,213,0.06)',

  'send-feedback-placeholder-color': 'white',

  'ext-link-hover': 'rgba(255,255,255,0.12)',

  'a-filter': 'invert(0%)',
  'a-hover': 'rgba(255,255,255,0.12)',

  'snackbar-background': 'rgba(24,24,24,0.97)',
  'snackbar-color': 'rgb(198,198,198)',

  'line-color': '#242424',

  'star-invert': 'invert(100%)',

  'webui-newtab-background-color': '#171717',
  'webui-newtab-dot-color': '#ececec',
  'webui-newtab-tile-shadow': '0 0 0 1px #1f1f1f, 0 0 0 4px rgba(255, 255, 255, 0)',
  'webui-newtab-tile-shadow-hover': '0 0 0 3px #dedede, 0 0 0 5px rgb(128, 128, 128)',
  'webui-newtab-icon-filter': 'invert(1)',
  'webui-newtab-icon-opacity': 1,
  'webui-newtab-search-shadow': '0 0 0 1px #444444, 0 0 0 4px rgba(255,255,255,0)',
  'webui-newtab-hyperlink-color': '#fff',
  'webui-newtab-inactive-hyperlink-color': '#A4A4A4',
  'webui-newtab-alert-action-hover': 'rgba(255, 255, 255, 0.05)',
};

export const oledTheme: ITheme = {
  ...darkTheme,
  'omnibox-background-color': '#000000',
  'omnibox-subheading-background-color': '#000000',

  'active-toolbar-color': '#020202',

  'webui-newtab-background-color': '#020202',
};
