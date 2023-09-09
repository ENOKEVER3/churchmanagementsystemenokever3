import GrapesJS from 'grapesjs';
import { FunctionComponent, memo, useEffect } from 'react';
import { useAuthUser } from 'react-auth-kit';
import { Dfn, ToastSuccess } from '../globals';

const GrapesJsView: FunctionComponent = memo(() => {
    const user = useAuthUser()();
    useEffect(() => {
        const normalize = `html {line-height: 1.15;-webkit-text-size-adjust: 100%;}main {display: block;}h1 {font-size: 2em;margin: 0.67em 0;}hr {box-sizing: content-box;height: 0;overflow: visible;}pre {font-family: monospace, monospace;font-size: 1em;}a {background-color: transparent;}abbr[title] {border-bottom: none;text-decoration: underline;text-decoration: underline dotted;}b,strong {font-weight: bolder;}code,kbd,samp {font-family: monospace, monospace;font-size: 1em;}small {font-size: 80%;}sub,sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}sub {bottom: -0.25em;}sup {top: -0.5em;}img {border-style: none;}button,input,optgroup,select,textarea {font-family: inherit;font-size: 100%;line-height: 1.15;margin: 0;}button,input {overflow: visible;}button,select {text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {border-style: none;padding: 0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {outline: 1px dotted ButtonText;}fieldset {padding: 0.35em 0.75em 0.625em;}legend {box-sizing: border-box;color: inherit;display: table;max-width: 100%;padding: 0;white-space: normal;}progress {vertical-align: baseline;}textarea {overflow: auto;}[type="checkbox"],[type="radio"] {box-sizing: border-box;padding: 0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {height: auto;}[type="search"] {-webkit-appearance: textfield;outline-offset: -2px;}[type="search"]::-webkit-search-decoration {-webkit-appearance: none;}::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}details {display: block;}summary {display: list-item;}template {display: none;}[hidden] {display: none;}`;
        // console.log('User', user);
        const escapeName = (name: string): string => `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, '-');

        const editor = GrapesJS.init({
            height: '100%',
            container: '#gjs',
            showOffsets: true,
            fromElement: true,
            noticeOnUnload: false,
            // pageManager: true,
            assetManager: {
                noAssets:
                    '<div class="gjs-fonts gjs-two-color fa fa-image" style="width:100%;font-size:24px;text-align:center;"><div style="font-family: Helvetica,sans-serif;">No asset</div></div>',
                upload: `${Dfn.BASE_URL}builder/website_file/`,
                uploadName: 'file',
                headers: {
                    Authorization: 'Bearer ' + user!.access,
                },
                params: {
                    website: '5320ef1d-1a8a-4f0e-8adc-49572016c314',
                },
                embedAsBase64: false,
                multiUpload: false,
            },
            storageManager: {
                stepsBeforeSave: 10,
                autosave: true,
                autoload: true,
            },
            selectorManager: {
                escapeName,
                componentFirst: true,
                states: [
                    { name: 'hover' },
                    { name: 'active' },
                    { name: 'focus' },
                    { name: 'nth-of-type(2n)' },
                    { name: 'checked' },
                    { name: 'enabled' },
                    { name: 'disabled' },
                    { name: 'invalid' },
                    { name: 'empty' },
                    { name: 'first-child' },
                    { name: 'last-child' },
                    { name: ':before' },
                    { name: ':after' },
                ],
            },
            styleManager: {
                clearProperties: true,
            },
            baseCss:
                '* {box-sizing: border-box;}html,body,[data-gjs-type=wrapper]{min-height: 100%;}body{margin: 0;height: 100%;background-color: #fff}[data-gjs-type=wrapper]{overflow: auto;overflow-x: hidden;}.gjs-dashed *[data-highlightable] {outline: 1px dashed rgba(146 ,27 ,160 ,.7) !important;outline-offset: -2px;}* ::-webkit-scrollbar-track{background: transparent;}* ::-webkit-scrollbar-thumb{border-radius: 5px;background-color: rgba(255,255,255,0.2);}* ::-webki-scrollbar{width: 10px}' +
                normalize,
            plugins: [
                'gjs-blocks-basic',
                'grapesjs-navbar',
                'grapesjs-plugin-forms',
                'grapesjs-tailwind',
                'grapesjs-calendly',
                'grapesjs-tui-image-editor',
                'grapesjs-component-countdown',
                'grapesjs-style-filter',
                'grapesjs-style-bg',
                'grapesjs-tabs',
                'grapesjs-tooltip',
                'grapesjs-paneless-ui',
                'grapesjs-typed',
                'grapesjs-touch',
                'grapesjs-component-countdown',
                'grapesjs-parser-postcss',
                'grapesjs-ga',
                'grapesjs-script-editor',
                'grapesjs-plugin-toolbox',
                'grapesjs-rulers',
            ],
            pluginsOpts: {
                'grapesjs-paneless-ui': {
                    rulerBar: (checked: boolean) => {
                        if (checked) editor.runCommand('ruler-visibility');
                        else editor.stopCommand('ruler-visibility');
                    },
                },
                'gjs-blocks-basic': {
                    flexGrid: 1,
                },
                'grapesjs-rulers': {
                    rulerOpts: {
                        cornerIcon: 'fa fa-trash-o',
                        fillStyle: 'black',
                        strokeStyle: 'black',
                    },
                },
                'grapesjs-rte-extensions': {
                    darkColorPicker: 0,
                },
                'grapesjs-lory-slider': {
                    sliderBlock: {
                        category: 'Extra',
                    },
                },
                'grapesjs-tabs': {
                    tabsBlock: {
                        category: 'Extra',
                    },
                },
                'grapesjs-typed': {
                    block: {
                        category: 'Extra',
                        content: {
                            type: 'typed',
                            'type-speed': 40,
                            strings: ['Text row one', 'Text row two', 'Text row three'],
                        },
                    },
                },
                'grapesjs-plugin-toolbox': {
                    traitsInSm: 0,
                    resizer: 0,
                },
            },
            canvas: {
                scripts: ['https://code.iconify.design/1/1.0.7/iconify.min.js'],
                styles: ['https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'],
                customBadgeLabel(component: any) {
                    return (
                        component.getIcon() +
                        '  ' +
                        component.getName() +
                        '  ' +
                        '<span style="font-size: 10px;">' +
                        (component.getEl().offsetWidth || 0) +
                        'x' +
                        (component.getEl().offsetHeight || 0) +
                        '</span>'
                    );
                },
            },
        });

        editor.on('load', (e: any) => {
            editor.$('#loader').css('display', 'none');
            editor.$('#gjs-breadcrumbs').css('display', 'block');
            const saveKey = 'gjsProject';
            const isNewSession = window.localStorage[saveKey] == null;
            if (isNewSession) editor.runCommand('core:canvas-clear');
            ToastSuccess(isNewSession ? 'Welcome to your website builder' 
            : 'Your previous session has been loaded', {
                extras: {
                    delay: 3000,
                },
            });
        });

        editor.on('storage:end:store', () => {
            ToastSuccess('Your changes have been saved');
        });

        const bm = editor.Blocks;
        // bm.add('heading1', {
        //     label: '<h1>Add Heading 1</h1>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Themed Text',

        //     // 'category-primary': 'Text', //main menu
        //     // 'category-secondary': 'Themed Text', //sub menu
        //     content: '<h1>Heading 1...</h1>', //block content
        //     //...
        // });

        // bm.add('heading2', {
        //     label: '<h2>Add Heading 2</h2>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Themed Text',
        //     'category-primary': 'Text', //main menu
        //     'category-secondary': 'Themed Text', //sub menu
        //     content: '<h2>Heading 2...</h2>', //block content
        //     //...
        // });

        // bm.add('heading3', {
        //     label: '<h3>Add Heading 3</h3>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Themed Text',
        //     'category-primary': 'Text', //main menu
        //     'category-secondary': 'Themed Text', //sub menu
        //     content: '<h3>Heading...</h3>', //block content
        //     //...
        // });

        // bm.add('heading4', {
        //     label: '<h4>Add Heading 4</h4>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Themed Text',
        //     'category-primary': 'Text', //main menu
        //     'category-secondary': 'Themed Text', //sub menu
        //     content: '<h4>Heading...</h4>', //block content
        //     //...
        // });

        // bm.add('heading5', {
        //     label: '<h5>Add Heading 5</h5>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Themed Text',
        //     'category-primary': 'Text', //main menu
        //     'category-secondary': 'Themed Text', //sub menu
        //     content: '<h5>Heading...</h5>', //block content
        //     //...
        // });

        // bm.add('heading6', {
        //     label: '<h6>Add Heading 2</h6>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Themed Text',
        //     'category-primary': 'Text', //main menu
        //     'category-secondary': 'Themed Text', //sub menu
        //     content: '<h6>Heading...</h6>', //block content
        //     //...
        // });

        // bm.add('heading6', {
        //     label: '<h6>Add Heading 2</h6>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Themed Text',
        //     'category-primary': 'Text', //main menu
        //     'category-secondary': 'Themed Text', //sub menu
        //     content: '<h6>Heading...</h6>', //block content
        //     //...
        // });

        // bm.add('title', {
        //     label: '<div style="font-size:20px; padding:50px">Big Title</div>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Title',
        //     'category-primary': 'Text', //main menu
        //     'category-secondary': 'Title', //sub menu
        //     content: '<div>Big Title</div>', //block content
        //     //...
        // });

        // bm.add('paragraph', {
        //     label: '<p>Add paragraph</p>',
        //     attributes: {
        //         class: 'block-flat block-full-width',
        //     },
        //     category: 'Paragraphs',
        //     'category-primary': 'Text', //main menu
        //     'category-secondary': 'Paragraph', //sub menu
        //     content: '<p>Add paragraph</p>', //block content
        //     //...
        // });

        editor.on('load', () => bm.render(bm.getAllVisible().filter((block: any) => !block.get('category-primary'))));

        editor.on('asset:upload:response', (response: any) => {
            const modifiedResponse = {
                data: [
                    {
                        src: response.file,
                    },
                ],
            };
            editor.AssetManager.add(modifiedResponse.data);
        });

        return () => {
            editor.$('#gjs-breadcrumbs').css('display', 'none');
        };
    });

    return <></>;
});

export default GrapesJsView;
