import { FunctionComponent } from 'react';
import GrapesJsView from '../components/GrapesJsView';

const WebsiteBuilderMain: FunctionComponent = () => {
    return (
        <div className="paneless-root">
            <div cz-shortcut-listen="true">
                <div id="loader">
                    <div className="box">
                        <div className="plane"></div>
                    </div>
                </div>
                <div
                    id="gjs"
                    style={{ minHeight: `100vh`, overflow: `hidden`, width: `100%` }}
                    className="gjs-editor-cont"
                >
                    <div className="gjs-editor gjs-one-bg gjs-two-color paneless-root" style={{ minHeight: '100vh' }}>
                        <div className="gjs-cv-canvas">
                            <div data-frames="" className="gjs-cv-canvas__frames">
                                <div className="gjs-frames">
                                    <div className="gjs-frame-wrapper" style={{ left: `0px`, top: `0px` }}>
                                        <div data-frame-top="" className="gjs-frame-wrapper__top gjs-two-color">
                                            <div data-action-move="" className="gjs-frame-wrapper__name"></div>
                                            <div className="gjs-frame-wrapper__top-r">
                                                <div
                                                    data-action-remove=""
                                                    className="gjs-frame-wrapper__icon"
                                                    style={{ display: `none` }}
                                                >
                                                    <img src="assets/images/img-uPWGf1CYcYSvU8UGQivNe8.svg" alt=""></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-frame-right="" className="gjs-frame-wrapper__right"></div>
                                        <div data-frame-left="" className="gjs-frame-wrapper__left"></div>
                                        <div data-frame-bottom="" className="gjs-frame-wrapper__bottom"></div>
                                        <iframe allowFullScreen={true} className="gjs-frame"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div data-tools="" id="gjs-cv-tools" className="gjs-cv-canvas__tools">
                                <div className="gjs-tools gjs-tools-gl" style={{ pointerEvents: `none` }}>
                                    <div className="gjs-placeholder">
                                        <div className="gjs-placeholder-int"></div>
                                    </div>
                                </div>
                                <div
                                    id="gjs-tools"
                                    style={{
                                        pointerEvents: `none`,
                                        zIndex: `2`,
                                        display: `none`,
                                    }}
                                >
                                    <div className="gjs-badge"></div>
                                    <div className="gjs-ghost"></div>
                                    <div className="gjs-toolbar" style={{ pointerEvents: `all` }}></div>
                                    <div className="gjs-resizer"></div>
                                    <div className="gjs-offset-v"></div>
                                    <div className="gjs-offset-fixed-v"></div>
                                    <div
                                        className="gjs-rte-toolbar gjs-one-bg gjs-rte-toolbar-ui"
                                        style={{
                                            pointerEvents: `all`,
                                            top: `-1000px`,
                                            left: `-1000px`,
                                            display: `none`,
                                        }}
                                    >
                                        <div className="gjs-rte-actionbar">
                                            <span className="gjs-rte-action" title="Bold">
                                                <b>B</b>
                                            </span>
                                            <span className="gjs-rte-action" title="talic">
                                                <i>I</i>
                                            </span>
                                            <span className="gjs-rte-action" title="Underline">
                                                <u>U</u>
                                            </span>
                                            <span className="gjs-rte-action" title="Strike-through">
                                                <s>S</s>
                                            </span>
                                            <span
                                                className="gjs-rte-action"
                                                style={{ fontSize: `1.4rem`, padding: `0 4px 2px` }}
                                                title="Link"
                                            >
                                                <img src="assets/images/img-6fBA4cbp8ciFLa7pxHSMrH.svg" alt=""></img>
                                            </span>
                                            <span className="gjs-rte-action" title="Wrap for style">
                                                <img src="assets/images/img-9c3SxYnXHqweAZkkoHAesM.svg" alt=""></img>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="gjs-popup">
                                        <div className="gjs-popup-heading">
                                            <span>Block Settings</span>
                                            <span className="close">x</span>
                                        </div>
                                        <div className="gjs-popup-body">
                                            <div className="gjs-pn-panel gjs-pn-views gjs-one-bg gjs-two-color">
                                                <div className="gjs-pn-buttons">
                                                    <span title="Settings" className="gjs-pn-btn">
                                                        Content
                                                    </span>
                                                    <span
                                                        title="Open Style Manager"
                                                        className="gjs-pn-btn gjs-pn-active gjs-four-color"
                                                    >
                                                        Design
                                                    </span>
                                                    <span title="Open Layer Manager" className="gjs-pn-btn">
                                                        Layers
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="gjs-pn-panel gjs-pn-views-container gjs-one-bg gjs-two-color">
                                                <div>
                                                    <div style={{ display: `none` }}>
                                                        <div className="gjs-clm-tags gjs-one-bg gjs-two-color">
                                                            <div id="gjs-clm-up" className="gjs-clm-header">
                                                                <div
                                                                    id="gjs-clm-label"
                                                                    className="gjs-clm-header-label"
                                                                >
                                                                    Classes
                                                                </div>
                                                                <div
                                                                    id="gjs-clm-status-c"
                                                                    className="gjs-clm-header-status"
                                                                >
                                                                    <span data-states-c="" id="gjs-clm-input-c">
                                                                        <div className="gjs-field gjs-select">
                                                                            <span id="gjs-input-holder">
                                                                                <select
                                                                                    data-states=""
                                                                                    id="gjs-clm-states"
                                                                                >
                                                                                    <option value="">- State -</option>
                                                                                    <option value="hover">Hover</option>
                                                                                    <option value="active">
                                                                                        Click
                                                                                    </option>
                                                                                    <option value="focus">focus</option>
                                                                                    <option value="nth-of-type(2n)">
                                                                                        Even/Odd
                                                                                    </option>
                                                                                    <option value="checked">
                                                                                        checked
                                                                                    </option>
                                                                                    <option value="enabled">
                                                                                        enabled
                                                                                    </option>
                                                                                    <option value="disabled">
                                                                                        disabled
                                                                                    </option>
                                                                                    <option value="invalid">
                                                                                        invalid
                                                                                    </option>
                                                                                    <option value="empty">empty</option>
                                                                                    <option value="first-child">
                                                                                        first-child
                                                                                    </option>
                                                                                    <option value="last-child">
                                                                                        last-child
                                                                                    </option>
                                                                                    <option value=":before">
                                                                                        :before
                                                                                    </option>
                                                                                    <option value=":after">
                                                                                        :after
                                                                                    </option>
                                                                                </select>
                                                                            </span>
                                                                            <div className="gjs-sel-arrow">
                                                                                <div className="gjs-d-s-arrow"></div>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div id="gjs-clm-tags-field" className="gjs-field">
                                                                <div data-selectors="" id="gjs-clm-tags-c"></div>
                                                                <input
                                                                    data-input=""
                                                                    id="gjs-clm-new"
                                                                    style={{ display: `none` }}
                                                                ></input>
                                                                <span
                                                                    data-add=""
                                                                    id="gjs-clm-add-tag"
                                                                    className="gjs-clm-tags-btn gjs-clm-tags-btn__add"
                                                                >
                                                                    <img
                                                                        src="assets/images/img-jZKk2GDpRmg4MwEfZgEgjJ.svg"
                                                                        alt=""
                                                                    ></img>
                                                                </span>
                                                                <span
                                                                    data-sync-style=""
                                                                    className="gjs-clm-tags-btn gjs-clm-tags-btn__sync"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <img
                                                                        src="assets/images/img-bHjpM6chP25Q458o2bP6EP.svg"
                                                                        alt=""
                                                                    ></img>
                                                                </span>
                                                            </div>
                                                            <div className="gjs-clm-sels-info">
                                                                <div className="gjs-clm-label-sel">Selected:</div>
                                                                <div data-selected="" className="gjs-clm-sels"></div>
                                                            </div>
                                                        </div>
                                                        <div className="gjs-sm-sectors gjs-one-bg gjs-two-color">
                                                            <div className="gjs-sm-sector gjs-sm-sector__text no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">Text</div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__font-family">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Font family
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="Arial, Helvetica, sans-serif">
                                                                                            Arial
                                                                                        </option>
                                                                                        <option value="Arial Black, Gadget, sans-serif">
                                                                                            Arial Black
                                                                                        </option>
                                                                                        <option value="Brush Script MT, sans-serif">
                                                                                            Brush Script MT
                                                                                        </option>
                                                                                        <option value="Comic Sans MS, cursive, sans-serif">
                                                                                            Comic Sans MS
                                                                                        </option>
                                                                                        <option value="Courier New, Courier, monospace">
                                                                                            Courier New
                                                                                        </option>
                                                                                        <option value="Georgia, serif">
                                                                                            Georgia
                                                                                        </option>
                                                                                        <option value="Helvetica, sans-serif">
                                                                                            Helvetica
                                                                                        </option>
                                                                                        <option value="mpact, Charcoal, sans-serif">
                                                                                            mpact
                                                                                        </option>
                                                                                        <option value="Lucida Sans Unicode, Lucida Grande, sans-serif">
                                                                                            Lucida Sans Unicode
                                                                                        </option>
                                                                                        <option value="Tahoma, Geneva, sans-serif">
                                                                                            Tahoma
                                                                                        </option>
                                                                                        <option value="Times New Roman, Times, serif">
                                                                                            Times New Roman
                                                                                        </option>
                                                                                        <option value="Trebuchet MS, Helvetica, sans-serif">
                                                                                            Trebuchet MS
                                                                                        </option>
                                                                                        <option value="Verdana, Geneva, sans-serif">
                                                                                            Verdana
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__font-weight">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Font weight
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="100">
                                                                                            Thin
                                                                                        </option>
                                                                                        <option value="200">
                                                                                            Extra-Light
                                                                                        </option>
                                                                                        <option value="300">
                                                                                            Light
                                                                                        </option>
                                                                                        <option value="400">
                                                                                            Normal
                                                                                        </option>
                                                                                        <option value="500">
                                                                                            Medium
                                                                                        </option>
                                                                                        <option value="600">
                                                                                            Semi-Bold
                                                                                        </option>
                                                                                        <option value="700">
                                                                                            Bold
                                                                                        </option>
                                                                                        <option value="800">
                                                                                            Extra-Bold
                                                                                        </option>
                                                                                        <option value="900">
                                                                                            Ultra-Bold
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-radio gjs-sm-property__font-style gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Font style
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-radio">
                                                                                <div className="gjs-radio-items">
                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-font-style"
                                                                                            id="font-style-normal-c1304"
                                                                                            name="font-style-c1304"
                                                                                            value="normal"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="fa fa-font gjs-sm-icon gjs-radio-item-label"
                                                                                            htmlFor="font-style-normal-c1304"
                                                                                        ></label>
                                                                                    </div>

                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-font-style"
                                                                                            id="font-style-italic-c1304"
                                                                                            name="font-style-c1304"
                                                                                            value="italic"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="fa fa-italic gjs-sm-icon gjs-radio-item-label"
                                                                                            htmlFor="font-style-italic-c1304"
                                                                                        ></label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-color gjs-sm-property__color">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Color
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-color">
                                                                                <div className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="black"
                                                                                    ></input>
                                                                                </div>
                                                                                <div className="gjs-field-colorp">
                                                                                    <div
                                                                                        data-colorp-c=""
                                                                                        className="gjs-field-colorp-c"
                                                                                    >
                                                                                        <div className="gjs-checker-bg"></div>
                                                                                        <div
                                                                                            className="gjs-field-color-picker"
                                                                                            style={{
                                                                                                backgroundColor: `black`,
                                                                                            }}
                                                                                        ></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__font-size">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Font size
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min="0"
                                                                                    max=""
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="medium"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__letter-spacing">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Letter spacing
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min=""
                                                                                    max=""
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="normal"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__line-height">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Line height
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min=""
                                                                                    max=""
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="normal"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-stack gjs-sm-property__text-shadow gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Text shadow
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-stack">
                                                                                <button
                                                                                    data-add-layer=""
                                                                                    type="button"
                                                                                    id="gjs-sm-add"
                                                                                >
                                                                                    <img
                                                                                        src="assets/images/img-hckKtm9xaRRSvaABqUsfzF.svg"
                                                                                        alt=""
                                                                                    ></img>
                                                                                </button>
                                                                                <div data-layers-wrapper="">
                                                                                    <div className="gjs-sm-layers gjs-field"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-radio gjs-sm-property__text-align gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Text align
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-radio">
                                                                                <div className="gjs-radio-items">
                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-text-align"
                                                                                            id="text-align-left-c1336"
                                                                                            name="text-align-c1336"
                                                                                            value="left"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="gjs-radio-item-label"
                                                                                            htmlFor="text-align-left-c1336"
                                                                                        >
                                                                                            left
                                                                                        </label>
                                                                                    </div>

                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-text-align"
                                                                                            id="text-align-center-c1336"
                                                                                            name="text-align-c1336"
                                                                                            value="center"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="gjs-radio-item-label"
                                                                                            htmlFor="text-align-center-c1336"
                                                                                        >
                                                                                            center
                                                                                        </label>
                                                                                    </div>

                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-text-align"
                                                                                            id="text-align-right-c1336"
                                                                                            name="text-align-c1336"
                                                                                            value="right"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="gjs-radio-item-label"
                                                                                            htmlFor="text-align-right-c1336"
                                                                                        >
                                                                                            right
                                                                                        </label>
                                                                                    </div>

                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-text-align"
                                                                                            id="text-align-justify-c1336"
                                                                                            name="text-align-c1336"
                                                                                            value="justify"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="gjs-radio-item-label"
                                                                                            htmlFor="text-align-justify-c1336"
                                                                                        >
                                                                                            justify
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-base gjs-sm-property__text-decoration">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Text decoration
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field">
                                                                                <input placeholder=""></input>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__flex no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">Flex</div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__flex-direction">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Flex direction
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="row">row</option>
                                                                                        <option value="row-reverse">
                                                                                            row-reverse
                                                                                        </option>
                                                                                        <option value="column">
                                                                                            column
                                                                                        </option>
                                                                                        <option value="column-reverse">
                                                                                            column-reverse
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__flex-wrap">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Flex wrap
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="nowrap">
                                                                                            nowrap
                                                                                        </option>
                                                                                        <option value="wrap">
                                                                                            wrap
                                                                                        </option>
                                                                                        <option value="wrap-reverse">
                                                                                            wrap-reverse
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__justify-content">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Justify content
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="flex-start">
                                                                                            flex-start
                                                                                        </option>
                                                                                        <option value="flex-end">
                                                                                            flex-end
                                                                                        </option>
                                                                                        <option value="center">
                                                                                            center
                                                                                        </option>
                                                                                        <option value="space-between">
                                                                                            space-between
                                                                                        </option>
                                                                                        <option value="space-around">
                                                                                            space-around
                                                                                        </option>
                                                                                        <option value="space-evenly">
                                                                                            space-evenly
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__align-items">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Align items
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="flex-start">
                                                                                            flex-start
                                                                                        </option>
                                                                                        <option value="flex-end">
                                                                                            flex-end
                                                                                        </option>
                                                                                        <option value="center">
                                                                                            center
                                                                                        </option>
                                                                                        <option value="baseline">
                                                                                            baseline
                                                                                        </option>
                                                                                        <option value="stretch">
                                                                                            stretch
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__align-content">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Align content
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="flex-start">
                                                                                            flex-start
                                                                                        </option>
                                                                                        <option value="flex-end">
                                                                                            flex-end
                                                                                        </option>
                                                                                        <option value="center">
                                                                                            center
                                                                                        </option>
                                                                                        <option value="space-between">
                                                                                            space-between
                                                                                        </option>
                                                                                        <option value="space-around">
                                                                                            space-around
                                                                                        </option>
                                                                                        <option value="stretch">
                                                                                            stretch
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__order">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Order
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="0"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units"></span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__flex-basis">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Flex basis
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="auto"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__flex-grow">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Flex grow
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="0"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units"></span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__flex-shrink">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Flex shrink
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="1"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units"></span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__align-self">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Align self
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="auto">
                                                                                            auto
                                                                                        </option>
                                                                                        <option value="flex-start">
                                                                                            flex-start
                                                                                        </option>
                                                                                        <option value="flex-end">
                                                                                            flex-end
                                                                                        </option>
                                                                                        <option value="center">
                                                                                            center
                                                                                        </option>
                                                                                        <option value="baseline">
                                                                                            baseline
                                                                                        </option>
                                                                                        <option value="stretch">
                                                                                            stretch
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__sizing no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">Sizing</div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__width">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Width
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min="0"
                                                                                    max="1920"
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="auto"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__min-width">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Min width
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min="0"
                                                                                    max="1920"
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="auto"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__max-width">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Max width
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min="0"
                                                                                    max="1920"
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="auto"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-radio gjs-sm-property__float gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Alignment
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-radio">
                                                                                <div className="gjs-radio-items">
                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-float"
                                                                                            id="float-none-c1381"
                                                                                            name="float-c1381"
                                                                                            value="none"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="gjs-radio-item-label"
                                                                                            htmlFor="float-none-c1381"
                                                                                        >
                                                                                            none
                                                                                        </label>
                                                                                    </div>

                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-float"
                                                                                            id="float-left-c1381"
                                                                                            name="float-c1381"
                                                                                            value="left"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="gjs-radio-item-label"
                                                                                            htmlFor="float-left-c1381"
                                                                                        >
                                                                                            left
                                                                                        </label>
                                                                                    </div>

                                                                                    <div className="gjs-radio-item">
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="gjs-sm-radio gjs-sm-radio-float"
                                                                                            id="float-right-c1381"
                                                                                            name="float-c1381"
                                                                                            value="right"
                                                                                        ></input>
                                                                                        <label
                                                                                            className="gjs-radio-item-label"
                                                                                            htmlFor="float-right-c1381"
                                                                                        >
                                                                                            right
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__height">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Height
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min="0"
                                                                                    max="258"
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="auto"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__min-height">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Min height
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min="0"
                                                                                    max="258"
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="auto"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__max-height">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Max height
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-range">
                                                                                <input
                                                                                    type="range"
                                                                                    min="0"
                                                                                    max="258"
                                                                                    step="1"
                                                                                ></input>
                                                                            </div>
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="auto"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__background no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">
                                                                        Background
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-color gjs-sm-property__background-color">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Background color
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-color">
                                                                                <div className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="none"
                                                                                    ></input>
                                                                                </div>
                                                                                <div className="gjs-field-colorp">
                                                                                    <div
                                                                                        data-colorp-c=""
                                                                                        className="gjs-field-colorp-c"
                                                                                    >
                                                                                        <div className="gjs-checker-bg"></div>
                                                                                        <div className="gjs-field-color-picker"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-stack gjs-sm-property__background gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Background
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-stack">
                                                                                <button
                                                                                    data-add-layer=""
                                                                                    type="button"
                                                                                    id="gjs-sm-add"
                                                                                >
                                                                                    <img
                                                                                        src="assets/images/img-hckKtm9xaRRSvaABqUsfzF.svg"
                                                                                        alt=""
                                                                                    ></img>
                                                                                </button>
                                                                                <div data-layers-wrapper="">
                                                                                    <div className="gjs-sm-layers gjs-field"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__scroll no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">Scroll</div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__overflow">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Overflow
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="visible">
                                                                                            visible
                                                                                        </option>
                                                                                        <option value="hidden">
                                                                                            hidden
                                                                                        </option>
                                                                                        <option value="scroll">
                                                                                            scroll
                                                                                        </option>
                                                                                        <option value="auto">
                                                                                            auto
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__overflow-x">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Overflow x
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="visible">
                                                                                            visible
                                                                                        </option>
                                                                                        <option value="hidden">
                                                                                            hidden
                                                                                        </option>
                                                                                        <option value="scroll">
                                                                                            scroll
                                                                                        </option>
                                                                                        <option value="auto">
                                                                                            auto
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__overflow-y">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Overflow y
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="visible">
                                                                                            visible
                                                                                        </option>
                                                                                        <option value="hidden">
                                                                                            hidden
                                                                                        </option>
                                                                                        <option value="scroll">
                                                                                            scroll
                                                                                        </option>
                                                                                        <option value="auto">
                                                                                            auto
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-select gjs-sm-property__cursor">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Cursor
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-select">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <select>
                                                                                        <option value="auto">
                                                                                            auto
                                                                                        </option>
                                                                                        <option value="pointer">
                                                                                            pointer
                                                                                        </option>
                                                                                        <option value="copy">
                                                                                            copy
                                                                                        </option>
                                                                                        <option value="crosshair">
                                                                                            crosshair
                                                                                        </option>
                                                                                        <option value="grab">
                                                                                            grab
                                                                                        </option>
                                                                                        <option value="grabbing">
                                                                                            grabbing
                                                                                        </option>
                                                                                        <option value="help">
                                                                                            help
                                                                                        </option>
                                                                                        <option value="move">
                                                                                            move
                                                                                        </option>
                                                                                        <option value="text">
                                                                                            text
                                                                                        </option>
                                                                                    </select>
                                                                                </span>
                                                                                <div className="gjs-sel-arrow">
                                                                                    <div className="gjs-d-s-arrow"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__spacing no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">Spacing</div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-composite gjs-sm-property__margin gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Margin
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-composite">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <div className="gjs-sm-properties">
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-top">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Top
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-right">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Right
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-bottom">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Bottom
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__margin-left">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Left
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-composite gjs-sm-property__padding gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Padding
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-composite">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <div className="gjs-sm-properties">
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-top">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Top
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-right">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Right
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-bottom">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Bottom
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__padding-left">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Left
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__border no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">Border</div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-radius">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Border radius
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="0"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-composite gjs-sm-property__border-radius gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Border radius
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-composite">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <div className="gjs-sm-properties">
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-top-left-radius">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Top Left
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-top-right-radius">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Top Right
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-bottom-right-radius">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Bottom Right
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__border-bottom-left-radius">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Bottom Left
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                %
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-composite gjs-sm-property__border gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Border
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-composite">
                                                                                <span id="gjs-sm-input-holder">
                                                                                    <div className="gjs-sm-properties">
                                                                                        <div className="gjs-sm-property gjs-sm-slider gjs-sm-property__border-width">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Border width
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-range">
                                                                                                    <input
                                                                                                        type="range"
                                                                                                        min="0"
                                                                                                        max=""
                                                                                                        step="0.5"
                                                                                                    ></input>
                                                                                                </div>
                                                                                                <div className="gjs-field gjs-field-integer">
                                                                                                    <span className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="0"
                                                                                                        ></input>
                                                                                                    </span>
                                                                                                    <span className="gjs-field-units">
                                                                                                        <select className="gjs-input-unit">
                                                                                                            <option value="">
                                                                                                                -
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                px
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                em
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                rem
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vh
                                                                                                            </option>
                                                                                                            <option>
                                                                                                                vw
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        data-arrows=""
                                                                                                        className="gjs-field-arrows"
                                                                                                    >
                                                                                                        <div
                                                                                                            data-arrow-up=""
                                                                                                            className="gjs-field-arrow-u"
                                                                                                        ></div>
                                                                                                        <div
                                                                                                            data-arrow-down=""
                                                                                                            className="gjs-field-arrow-d"
                                                                                                        ></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-select gjs-sm-property__border-style">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Border style
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-select">
                                                                                                    <span id="gjs-sm-input-holder">
                                                                                                        <select>
                                                                                                            <option value="none">
                                                                                                                none
                                                                                                            </option>
                                                                                                            <option value="solid">
                                                                                                                solid
                                                                                                            </option>
                                                                                                            <option value="dotted">
                                                                                                                dotted
                                                                                                            </option>
                                                                                                            <option value="dashed">
                                                                                                                dashed
                                                                                                            </option>
                                                                                                            <option value="double">
                                                                                                                double
                                                                                                            </option>
                                                                                                            <option value="groove">
                                                                                                                groove
                                                                                                            </option>
                                                                                                            <option value="ridge">
                                                                                                                ridge
                                                                                                            </option>
                                                                                                            <option value="inset">
                                                                                                                inset
                                                                                                            </option>
                                                                                                            <option value="outset">
                                                                                                                outset
                                                                                                            </option>
                                                                                                        </select>
                                                                                                    </span>
                                                                                                    <div className="gjs-sel-arrow">
                                                                                                        <div className="gjs-d-s-arrow"></div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="gjs-sm-property gjs-sm-color gjs-sm-property__border-color">
                                                                                            <div
                                                                                                data-sm-label=""
                                                                                                className="gjs-sm-label"
                                                                                            >
                                                                                                <span
                                                                                                    className="gjs-sm-icon"
                                                                                                    title=""
                                                                                                >
                                                                                                    Border color
                                                                                                </span>
                                                                                                <div
                                                                                                    data-clear-style=""
                                                                                                    className="gjs-sm-clear"
                                                                                                    style={{
                                                                                                        display: `none`,
                                                                                                    }}
                                                                                                >
                                                                                                    <img
                                                                                                        src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                                        alt=""
                                                                                                    ></img>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                data-sm-fields=""
                                                                                                className="gjs-fields"
                                                                                            >
                                                                                                <div className="gjs-field gjs-field-color">
                                                                                                    <div className="gjs-input-holder">
                                                                                                        <input
                                                                                                            type="text"
                                                                                                            placeholder="black"
                                                                                                        ></input>
                                                                                                    </div>
                                                                                                    <div className="gjs-field-colorp">
                                                                                                        <div
                                                                                                            data-colorp-c=""
                                                                                                            className="gjs-field-colorp-c"
                                                                                                        >
                                                                                                            <div className="gjs-checker-bg"></div>
                                                                                                            <div
                                                                                                                className="gjs-field-color-picker"
                                                                                                                style={{
                                                                                                                    backgroundColor: `black`,
                                                                                                                }}
                                                                                                            ></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__box-shadow no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">
                                                                        Box-Shadow
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-stack gjs-sm-property__box-shadow gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Box shadow
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-stack">
                                                                                <button
                                                                                    data-add-layer=""
                                                                                    type="button"
                                                                                    id="gjs-sm-add"
                                                                                >
                                                                                    <img
                                                                                        src="assets/images/img-hckKtm9xaRRSvaABqUsfzF.svg"
                                                                                        alt=""
                                                                                    ></img>
                                                                                </button>
                                                                                <div data-layers-wrapper="">
                                                                                    <div className="gjs-sm-layers gjs-field"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__filters no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">Filters</div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-stack gjs-sm-property__filter gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Filter
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-stack">
                                                                                <button
                                                                                    data-add-layer=""
                                                                                    type="button"
                                                                                    id="gjs-sm-add"
                                                                                >
                                                                                    <img
                                                                                        src="assets/images/img-hckKtm9xaRRSvaABqUsfzF.svg"
                                                                                        alt=""
                                                                                    ></img>
                                                                                </button>
                                                                                <div data-layers-wrapper="">
                                                                                    <div className="gjs-sm-layers gjs-field"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__transform no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">Transform</div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-number gjs-sm-integer gjs-sm-property__perspective">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Perspective
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-field gjs-field-integer">
                                                                                <span className="gjs-input-holder">
                                                                                    <input
                                                                                        type="text"
                                                                                        placeholder="0"
                                                                                    ></input>
                                                                                </span>
                                                                                <span className="gjs-field-units">
                                                                                    <select className="gjs-input-unit">
                                                                                        <option value="">-</option>
                                                                                        <option>px</option>
                                                                                        <option>%</option>
                                                                                        <option>em</option>
                                                                                        <option>rem</option>
                                                                                        <option>vh</option>
                                                                                        <option>vw</option>
                                                                                    </select>
                                                                                </span>
                                                                                <div
                                                                                    data-arrows=""
                                                                                    className="gjs-field-arrows"
                                                                                >
                                                                                    <div
                                                                                        data-arrow-up=""
                                                                                        className="gjs-field-arrow-u"
                                                                                    ></div>
                                                                                    <div
                                                                                        data-arrow-down=""
                                                                                        className="gjs-field-arrow-d"
                                                                                    ></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gjs-sm-property gjs-sm-stack gjs-sm-property__transform gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Transform
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-stack">
                                                                                <button
                                                                                    data-add-layer=""
                                                                                    type="button"
                                                                                    id="gjs-sm-add"
                                                                                >
                                                                                    <img
                                                                                        src="assets/images/img-hckKtm9xaRRSvaABqUsfzF.svg"
                                                                                        alt=""
                                                                                    ></img>
                                                                                </button>
                                                                                <div data-layers-wrapper="">
                                                                                    <div className="gjs-sm-layers gjs-field"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="gjs-sm-sector gjs-sm-sector__transitions no-select">
                                                                <div
                                                                    data-sector-title=""
                                                                    className="gjs-sm-sector-title"
                                                                >
                                                                    <div className="gjs-sm-sector-caret">
                                                                        <img
                                                                            src="assets/images/img-n1GzDBcxzzXmp1vUsVuJzc.svg"
                                                                            alt=""
                                                                        ></img>
                                                                    </div>
                                                                    <div className="gjs-sm-sector-label">
                                                                        Transitions
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="gjs-sm-properties"
                                                                    style={{ display: `none` }}
                                                                >
                                                                    <div className="gjs-sm-property gjs-sm-stack gjs-sm-property__transition gjs-sm-property--full">
                                                                        <div data-sm-label="" className="gjs-sm-label">
                                                                            <span className="gjs-sm-icon" title="">
                                                                                Transition
                                                                            </span>
                                                                            <div
                                                                                data-clear-style=""
                                                                                className="gjs-sm-clear"
                                                                                style={{ display: `none` }}
                                                                            >
                                                                                <img
                                                                                    src="assets/images/img-cSStwStVD5rg1PhuuowRV5.svg"
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                        </div>
                                                                        <div data-sm-fields="" className="gjs-fields">
                                                                            <div className="gjs-sm-field gjs-sm-stack">
                                                                                <button
                                                                                    data-add-layer=""
                                                                                    type="button"
                                                                                    id="gjs-sm-add"
                                                                                >
                                                                                    <img
                                                                                        src="assets/images/img-hckKtm9xaRRSvaABqUsfzF.svg"
                                                                                        alt=""
                                                                                    ></img>
                                                                                </button>
                                                                                <div data-layers-wrapper="">
                                                                                    <div className="gjs-sm-layers gjs-field"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="gjs-sm-header" style={{ display: `block` }}>
                                                        Select an element before using Style Manager
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gjs-popup-footer">
                                            <span id="gjs-popup-footer-close" className="fa fa-times footer-red"></span>
                                            <span id="gjs-popup-footer-undo" className="fa fa-undo footer-grey"></span>
                                            <span
                                                id="gjs-popup-footer-redo"
                                                className="fa fa-repeat footer-grey"
                                            ></span>
                                            <span
                                                id="gjs-popup-footer-check"
                                                className="fa fa-check footer-green"
                                            ></span>
                                        </div>
                                    </div>
                                    <div className="fa fa-cogs gjs-styles-btn"></div>
                                </div>
                                <div className="gjs-tools" style={{ pointerEvents: `none`, display: `none` }}>
                                    <div data-hl="" className="gjs-highlighter"></div>
                                    <div data-badge="" className="gjs-badge"></div>
                                    <div className="gjs-placeholder">
                                        <div className="gjs-placeholder-int"></div>
                                    </div>
                                    <div className="gjs-ghost"></div>
                                    <div className="gjs-toolbar" style={{ pointerEvents: `all` }}></div>
                                    <div className="gjs-resizer"></div>
                                    <div data-offset="" className="gjs-offset-v">
                                        <div data-offset-m="" className="gjs-marginName">
                                            <div data-offset-m-t="" className="gjs-margin-v-el gjs-margin-v-top"></div>
                                            <div
                                                data-offset-m-b=""
                                                className="gjs-margin-v-el gjs-margin-v-bottom"
                                            ></div>
                                            <div data-offset-m-l="" className="gjs-margin-v-el gjs-margin-v-left"></div>
                                            <div
                                                data-offset-m-r=""
                                                className="gjs-margin-v-el gjs-margin-v-right"
                                            ></div>
                                        </div>
                                        <div data-offset-m="" className="gjs-paddingName">
                                            <div
                                                data-offset-p-t=""
                                                className="gjs-padding-v-el gjs-padding-v-top"
                                            ></div>
                                            <div
                                                data-offset-p-b=""
                                                className="gjs-padding-v-el gjs-padding-v-bottom"
                                            ></div>
                                            <div
                                                data-offset-p-l=""
                                                className="gjs-padding-v-el gjs-padding-v-left"
                                            ></div>
                                            <div
                                                data-offset-p-r=""
                                                className="gjs-padding-v-el gjs-padding-v-right"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="gjs-offset-fixed-v"></div>
                                </div>
                            </div>
                        </div>
                        <div className="gjs-pn-panels">
                            <div className="gjs-pn-panel gjs-pn-commands gjs-one-bg gjs-two-color">
                                <div className="gjs-pn-buttons">
                                    <span className="gjs-pn-btn"></span>
                                </div>
                            </div>
                            <div className="gjs-pn-panel gjs-pn-options gjs-one-bg gjs-two-color">
                                <div className="gjs-pn-buttons">
                                    <span
                                        data-tooltip-pos="bottom"
                                        data-tooltip="Help"
                                        style={{ borderLeft: `1px solid rgba(0, 0, 0, 0.1)` }}
                                        className="gjs-pn-btn fa fa-question-circle-o"
                                    ></span>
                                    <span
                                        data-tooltip-pos="bottom"
                                        data-tooltip="Fullscreen"
                                        title="Fullscreen"
                                        className="gjs-pn-btn"
                                    >
                                        <img src="assets/images/img-n4mxe87iSFMXdk5BwooNGC.svg" alt=""></img>
                                    </span>
                                    <span
                                        data-tooltip-pos="bottom"
                                        data-tooltip="Clear Canvas"
                                        className="gjs-pn-btn fa fa-trash-o"
                                    ></span>
                                    <span
                                        data-tooltip-pos="bottom"
                                        data-tooltip="Export"
                                        title="View code"
                                        className="gjs-pn-btn fa fa-code"
                                    ></span>
                                    <span data-tooltip-pos="bottom" data-tooltip="Undo" className="gjs-pn-btn">
                                        <img src="assets/images/img-uPJruBNbZ764JTivU1DDjp.svg" alt=""></img>
                                    </span>
                                    <span data-tooltip-pos="bottom" data-tooltip="Redo" className="gjs-pn-btn">
                                        <img src="assets/images/img-hDzRXwGGqk67cbFBR3poL4.svg" alt=""></img>
                                    </span>
                                    <span data-tooltip-pos="bottom" data-tooltip="Open Theme" className="gjs-pn-btn">
                                        <img src="assets/images/img-hnoabcAHcCUkxhV3TcD82W.svg" alt=""></img>
                                    </span>
                                    <span data-tooltip-pos="bottom" data-tooltip="Clone Page" className="gjs-pn-btn">
                                        <img src="assets/images/img-9dw6m7gSbtrciYst1wpNjH.svg" alt=""></img>
                                    </span>
                                    <span
                                        data-tooltip-pos="bottom"
                                        data-tooltip="Preview"
                                        style={{ borderRight: `1px solid rgba(0, 0, 0, 0.1)` }}
                                        title="Preview"
                                        className="gjs-pn-btn fa fa-eye"
                                    ></span>
                                    <span style={{ fontSize: `15px` }} className="gjs-pn-btn gjs-btn-prim-o">
                                        Save
                                    </span>
                                    <span style={{ fontSize: `15px` }} className="gjs-pn-btn gjs-btn-prim">
                                        <i className="fa fa-paper-plane-o"></i> Publish
                                    </span>
                                </div>
                            </div>
                            <div className="gjs-pn-panel gjs-pn-devices gjs-one-bg gjs-two-color">
                                <div className="gjs-pn-buttons">
                                    <span style={{ padding: `5px`, marginRight: `0` }} className="gjs-pn-btn">
                                        LOGO
                                    </span>
                                    <span
                                        data-tooltip-pos="bottom"
                                        data-tooltip="Desktop"
                                        style={{ borderLeft: `1px solid rgba(0, 0, 0, 0.1)` }}
                                        className="gjs-pn-btn gjs-pn-active gjs-four-color"
                                    >
                                        <img src="assets/images/img-nPbfbrqX1CmZyVj3pXU2mW.svg" alt=""></img>
                                    </span>
                                    <span data-tooltip-pos="bottom" data-tooltip="Tablet" className="gjs-pn-btn">
                                        <img src="assets/images/img-azonrYMBUPXXJeP5mdxa2S.svg" alt=""></img>
                                    </span>
                                    <span
                                        data-tooltip-pos="bottom"
                                        data-tooltip="Mobile"
                                        style={{
                                            borderRight: `1px solid rgba(0, 0, 0, 0.1)`,
                                            fontSize: `15px`,
                                        }}
                                        className="gjs-pn-btn"
                                    >
                                        <img src="assets/images/img-6aFncexoWg7bYCBvHQkJGw.svg" alt=""></img>
                                    </span>
                                    <span
                                        style={{
                                            borderRight: `1px solid rgba(0, 0, 0, 0.1)`,
                                            fontSize: `15px`,
                                        }}
                                        className="gjs-pn-btn"
                                    >
                                        Tools
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="cv-canvas" style={{ display: `none` }}>
                            <div data-frames="" className="cv-canvas__frames">
                                <div className="frames">
                                    <div className="frame-wrapper" style={{ left: `0px`, top: `0px` }}>
                                        <div data-frame-top="" className="frame-wrapper__top gjs-two-color">
                                            <div data-action-move="" className="frame-wrapper__name"></div>
                                            <div className="frame-wrapper__top-r">
                                                <div
                                                    data-action-remove=""
                                                    className="frame-wrapper__icon"
                                                    style={{ display: `none` }}
                                                >
                                                    <img src="assets/images/img-uPWGf1CYcYSvU8UGQivNe8.svg" alt=""></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-frame-right="" className="frame-wrapper__right"></div>
                                        <div data-frame-left="" className="frame-wrapper__left"></div>
                                        <div data-frame-bottom="" className="frame-wrapper__bottom"></div>
                                        <iframe allowFullScreen={true} className="frame"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div data-tools="" id="cv-tools" className="cv-canvas__tools">
                                <div className="tools tools-gl" style={{ pointerEvents: `none` }}>
                                    <div className="placeholder">
                                        <div className="placeholder-int"></div>
                                    </div>
                                </div>
                                <div id="tools" style={{ pointerEvents: `none` }}>
                                    <div className="badge"></div>
                                    <div className="ghost"></div>
                                    <div className="toolbar" style={{ pointerEvents: `all` }}></div>
                                    <div className="resizer"></div>
                                    <div className="offset-v"></div>
                                    <div className="offset-fixed-v"></div>
                                </div>
                                <div className="tools" style={{ pointerEvents: `none`, display: `none` }}>
                                    <div data-hl="" className="highlighter"></div>
                                    <div data-badge="" className="badge"></div>
                                    <div className="placeholder">
                                        <div className="placeholder-int"></div>
                                    </div>
                                    <div className="ghost"></div>
                                    <div className="toolbar" style={{ pointerEvents: `all` }}></div>
                                    <div className="resizer"></div>
                                    <div data-offset="" className="offset-v">
                                        <div data-offset-m="" className="gjs-marginName">
                                            <div data-offset-m-t="" className="gjs-margin-v-el gjs-margin-v-top"></div>
                                            <div
                                                data-offset-m-b=""
                                                className="gjs-margin-v-el gjs-margin-v-bottom"
                                            ></div>
                                            <div data-offset-m-l="" className="gjs-margin-v-el gjs-margin-v-left"></div>
                                            <div
                                                data-offset-m-r=""
                                                className="gjs-margin-v-el gjs-margin-v-right"
                                            ></div>
                                        </div>
                                        <div data-offset-m="" className="gjs-paddingName">
                                            <div
                                                data-offset-p-t=""
                                                className="gjs-padding-v-el gjs-padding-v-top"
                                            ></div>
                                            <div
                                                data-offset-p-b=""
                                                className="gjs-padding-v-el gjs-padding-v-bottom"
                                            ></div>
                                            <div
                                                data-offset-p-l=""
                                                className="gjs-padding-v-el gjs-padding-v-left"
                                            ></div>
                                            <div
                                                data-offset-p-r=""
                                                className="gjs-padding-v-el gjs-padding-v-right"
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="offset-fixed-v"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gjs-mdl-container" style={{ display: `none` }}>
                        <div className="gjs-mdl-dialog gjs-one-bg gjs-two-color">
                            <div className="gjs-mdl-header">
                                <div className="gjs-mdl-title"></div>
                                <div data-close-modal="" className="gjs-mdl-btn-close">
                                    â¨¯
                                </div>
                            </div>
                            <div className="gjs-mdl-content">
                                <div id="gjs-mdl-c"></div>
                                <div style={{ clear: `both` }}></div>
                            </div>
                        </div>
                        <div className="gjs-mdl-collector" style={{ display: `none` }}></div>
                    </div>
                    <div className="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
                        <div className="sp-palette-container">
                            <div className="sp-palette sp-thumb sp-cf">
                                <div className="sp-cf sp-palette-row sp-palette-row-0"></div>
                                <div className="sp-cf sp-palette-row sp-palette-row-selection">
                                    <span
                                        data-color="rgb(0, 0, 0)"
                                        title="rgb(0, 0, 0)"
                                        className="sp-thumb-el sp-thumb-dark sp-thumb-active"
                                    >
                                        <span
                                            className="sp-thumb-inner"
                                            style={{ backgroundColor: `rgb(0, 0, 0)` }}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                            <div className="sp-palette-button-container sp-cf">
                                <button type="button" className="sp-palette-toggle">
                                    less
                                </button>
                            </div>
                        </div>
                        <div className="sp-picker-container">
                            <div className="sp-top sp-cf">
                                <div className="sp-fill"></div>
                                <div className="sp-top-inner">
                                    <div className="sp-color" style={{ backgroundColor: `rgb(255, 0, 0)` }}>
                                        <div className="sp-sat">
                                            <div className="sp-val">
                                                <div
                                                    className="sp-dragger"
                                                    style={{ display: `block`, top: `0px`, left: `0px` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="sp-clear sp-clear-display"
                                        title="Clear Color Selection"
                                        style={{ display: `none` }}
                                    ></div>
                                    <div className="sp-hue">
                                        <div className="sp-slider" style={{ display: `block`, top: `0px` }}></div>
                                    </div>
                                </div>
                                <div className="sp-alpha">
                                    <div
                                        className="sp-alpha-inner"
                                        style={{
                                            background: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgb(0, 0, 0)
                  )`,
                                        }}
                                    >
                                        <div
                                            className="sp-alpha-handle"
                                            style={{ display: `block`, left: `0px` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-input-container sp-cf">
                                <input className="sp-input" type="text" spellCheck={true}></input>
                            </div>
                            <div className="sp-initial sp-thumb sp-cf"></div>
                            <div className="sp-button-container sp-cf">
                                <a className="sp-cancel" href="#">
                                    â¨¯
                                </a>
                                <button type="button" className="sp-choose">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
                        <div className="sp-palette-container">
                            <div className="sp-palette sp-thumb sp-cf">
                                <div className="sp-cf sp-palette-row sp-palette-row-0"></div>
                                <div className="sp-cf sp-palette-row sp-palette-row-selection">
                                    <span
                                        data-color="rgb(0, 0, 0)"
                                        title="rgb(0, 0, 0)"
                                        className="sp-thumb-el sp-thumb-dark sp-thumb-active"
                                    >
                                        <span
                                            className="sp-thumb-inner"
                                            style={{ backgroundColor: `rgb(0, 0, 0)` }}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                            <div className="sp-palette-button-container sp-cf">
                                <button type="button" className="sp-palette-toggle">
                                    less
                                </button>
                            </div>
                        </div>
                        <div className="sp-picker-container">
                            <div className="sp-top sp-cf">
                                <div className="sp-fill"></div>
                                <div className="sp-top-inner">
                                    <div className="sp-color" style={{ backgroundColor: `rgb(255, 0, 0)` }}>
                                        <div className="sp-sat">
                                            <div className="sp-val">
                                                <div
                                                    className="sp-dragger"
                                                    style={{ display: `block`, top: `0px`, left: `0px` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="sp-clear sp-clear-display"
                                        title="Clear Color Selection"
                                        style={{ display: `none` }}
                                    ></div>
                                    <div className="sp-hue">
                                        <div className="sp-slider" style={{ display: `block`, top: `0px` }}></div>
                                    </div>
                                </div>
                                <div className="sp-alpha">
                                    <div
                                        className="sp-alpha-inner"
                                        style={{
                                            background: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgb(0, 0, 0)
                  )`,
                                        }}
                                    >
                                        <div
                                            className="sp-alpha-handle"
                                            style={{ display: `block`, left: `0px` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-input-container sp-cf">
                                <input className="sp-input" type="text" spellCheck={true}></input>
                            </div>
                            <div className="sp-initial sp-thumb sp-cf"></div>
                            <div className="sp-button-container sp-cf">
                                <a className="sp-cancel" href="#">
                                    â¨¯
                                </a>
                                <button type="button" className="sp-choose">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
                        <div className="sp-palette-container">
                            <div className="sp-palette sp-thumb sp-cf">
                                <div className="sp-cf sp-palette-row sp-palette-row-0"></div>
                                <div className="sp-cf sp-palette-row sp-palette-row-selection">
                                    <span
                                        data-color="rgb(0, 0, 0)"
                                        title="rgb(0, 0, 0)"
                                        className="sp-thumb-el sp-thumb-dark sp-thumb-active"
                                    >
                                        <span
                                            className="sp-thumb-inner"
                                            style={{ backgroundColor: `rgb(0, 0, 0)` }}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                            <div className="sp-palette-button-container sp-cf">
                                <button type="button" className="sp-palette-toggle">
                                    less
                                </button>
                            </div>
                        </div>
                        <div className="sp-picker-container">
                            <div className="sp-top sp-cf">
                                <div className="sp-fill"></div>
                                <div className="sp-top-inner">
                                    <div className="sp-color" style={{ backgroundColor: `rgb(255, 0, 0)` }}>
                                        <div className="sp-sat">
                                            <div className="sp-val">
                                                <div
                                                    className="sp-dragger"
                                                    style={{ display: `block`, top: `0px`, left: `0px` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="sp-clear sp-clear-display"
                                        title="Clear Color Selection"
                                        style={{ display: `none` }}
                                    ></div>
                                    <div className="sp-hue">
                                        <div className="sp-slider" style={{ display: `block`, top: `0px` }}></div>
                                    </div>
                                </div>
                                <div className="sp-alpha">
                                    <div
                                        className="sp-alpha-inner"
                                        style={{
                                            background: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgb(0, 0, 0)
                  )`,
                                        }}
                                    >
                                        <div
                                            className="sp-alpha-handle"
                                            style={{ display: `block`, left: `0px` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-input-container sp-cf">
                                <input className="sp-input" type="text" spellCheck={true}></input>
                            </div>
                            <div className="sp-initial sp-thumb sp-cf"></div>
                            <div className="sp-button-container sp-cf">
                                <a className="sp-cancel" href="#">
                                    â¨¯
                                </a>
                                <button type="button" className="sp-choose">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
                        <div className="sp-palette-container">
                            <div className="sp-palette sp-thumb sp-cf">
                                <div className="sp-cf sp-palette-row sp-palette-row-0"></div>
                                <div className="sp-cf sp-palette-row sp-palette-row-selection">
                                    <span
                                        data-color="rgb(0, 0, 0)"
                                        title="rgb(0, 0, 0)"
                                        className="sp-thumb-el sp-thumb-dark sp-thumb-active"
                                    >
                                        <span
                                            className="sp-thumb-inner"
                                            style={{ backgroundColor: `rgb(0, 0, 0)` }}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                            <div className="sp-palette-button-container sp-cf">
                                <button type="button" className="sp-palette-toggle">
                                    less
                                </button>
                            </div>
                        </div>
                        <div className="sp-picker-container">
                            <div className="sp-top sp-cf">
                                <div className="sp-fill"></div>
                                <div className="sp-top-inner">
                                    <div className="sp-color" style={{ backgroundColor: `rgb(255, 0, 0)` }}>
                                        <div className="sp-sat">
                                            <div className="sp-val">
                                                <div
                                                    className="sp-dragger"
                                                    style={{ display: `block`, top: `0px`, left: `0px` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="sp-clear sp-clear-display"
                                        title="Clear Color Selection"
                                        style={{ display: `none` }}
                                    ></div>
                                    <div className="sp-hue">
                                        <div className="sp-slider" style={{ display: `block`, top: `0px` }}></div>
                                    </div>
                                </div>
                                <div className="sp-alpha">
                                    <div
                                        className="sp-alpha-inner"
                                        style={{
                                            background: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgb(0, 0, 0)
                  )`,
                                        }}
                                    >
                                        <div
                                            className="sp-alpha-handle"
                                            style={{ display: `block`, left: `0px` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-input-container sp-cf">
                                <input className="sp-input" type="text" spellCheck={true}></input>
                            </div>
                            <div className="sp-initial sp-thumb sp-cf"></div>
                            <div className="sp-button-container sp-cf">
                                <a className="sp-cancel" href="#">
                                    â¨¯
                                </a>
                                <button type="button" className="sp-choose">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
                        <div className="sp-palette-container">
                            <div className="sp-palette sp-thumb sp-cf">
                                <div className="sp-cf sp-palette-row sp-palette-row-0"></div>
                                <div className="sp-cf sp-palette-row sp-palette-row-selection"></div>
                            </div>
                            <div className="sp-palette-button-container sp-cf">
                                <button type="button" className="sp-palette-toggle">
                                    less
                                </button>
                            </div>
                        </div>
                        <div className="sp-picker-container">
                            <div className="sp-top sp-cf">
                                <div className="sp-fill"></div>
                                <div className="sp-top-inner">
                                    <div className="sp-color" style={{ backgroundColor: `rgb(255, 0, 0)` }}>
                                        <div className="sp-sat">
                                            <div className="sp-val">
                                                <div
                                                    className="sp-dragger"
                                                    style={{ display: `block`, top: `0px`, left: `0px` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="sp-clear sp-clear-display"
                                        title="Clear Color Selection"
                                        style={{ display: `none` }}
                                    ></div>
                                    <div className="sp-hue">
                                        <div className="sp-slider" style={{ display: `block`, top: `0px` }}></div>
                                    </div>
                                </div>
                                <div className="sp-alpha">
                                    <div
                                        className="sp-alpha-inner"
                                        style={{
                                            background: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgb(0, 0, 0)
                  )`,
                                        }}
                                    >
                                        <div
                                            className="sp-alpha-handle"
                                            style={{ display: `block`, left: `0px` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-input-container sp-cf">
                                <input className="sp-input" type="text" spellCheck={true}></input>
                            </div>
                            <div className="sp-initial sp-thumb sp-cf"></div>
                            <div className="sp-button-container sp-cf">
                                <a className="sp-cancel" href="#">
                                    â¨¯
                                </a>
                                <button type="button" className="sp-choose">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
                        <div className="sp-palette-container">
                            <div className="sp-palette sp-thumb sp-cf">
                                <div className="sp-cf sp-palette-row sp-palette-row-0"></div>
                                <div className="sp-cf sp-palette-row sp-palette-row-selection"></div>
                            </div>
                            <div className="sp-palette-button-container sp-cf">
                                <button type="button" className="sp-palette-toggle">
                                    less
                                </button>
                            </div>
                        </div>
                        <div className="sp-picker-container">
                            <div className="sp-top sp-cf">
                                <div className="sp-fill"></div>
                                <div className="sp-top-inner">
                                    <div className="sp-color" style={{ backgroundColor: `rgb(255, 0, 0)` }}>
                                        <div className="sp-sat">
                                            <div className="sp-val">
                                                <div
                                                    className="sp-dragger"
                                                    style={{ display: `block`, top: `0px`, left: `0px` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="sp-clear sp-clear-display"
                                        title="Clear Color Selection"
                                        style={{ display: `none` }}
                                    ></div>
                                    <div className="sp-hue">
                                        <div className="sp-slider" style={{ display: `block`, top: `0px` }}></div>
                                    </div>
                                </div>
                                <div className="sp-alpha">
                                    <div
                                        className="sp-alpha-inner"
                                        style={{
                                            background: `linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0),
                    rgb(255, 255, 255)
                  )`,
                                        }}
                                    >
                                        <div
                                            className="sp-alpha-handle"
                                            style={{ display: `block`, left: `0px` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-input-container sp-cf">
                                <input className="sp-input" type="text" spellCheck={true}></input>
                            </div>
                            <div className="sp-initial sp-thumb sp-cf"></div>
                            <div className="sp-button-container sp-cf">
                                <a className="sp-cancel" href="#">
                                    â¨¯
                                </a>
                                <button type="button" className="sp-choose">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
                        <div className="sp-palette-container">
                            <div className="sp-palette sp-thumb sp-cf">
                                <div className="sp-cf sp-palette-row sp-palette-row-0"></div>
                                <div className="sp-cf sp-palette-row sp-palette-row-selection">
                                    <span
                                        data-color="rgb(0, 0, 0)"
                                        title="rgb(0, 0, 0)"
                                        className="sp-thumb-el sp-thumb-dark sp-thumb-active"
                                    >
                                        <span
                                            className="sp-thumb-inner"
                                            style={{ backgroundColor: `rgb(0, 0, 0)` }}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                            <div className="sp-palette-button-container sp-cf">
                                <button type="button" className="sp-palette-toggle">
                                    less
                                </button>
                            </div>
                        </div>
                        <div className="sp-picker-container">
                            <div className="sp-top sp-cf">
                                <div className="sp-fill"></div>
                                <div className="sp-top-inner">
                                    <div className="sp-color" style={{ backgroundColor: `rgb(255, 0, 0)` }}>
                                        <div className="sp-sat">
                                            <div className="sp-val">
                                                <div
                                                    className="sp-dragger"
                                                    style={{ display: `block`, top: `0px`, left: `0px` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="sp-clear sp-clear-display"
                                        title="Clear Color Selection"
                                        style={{ display: `none` }}
                                    ></div>
                                    <div className="sp-hue">
                                        <div className="sp-slider" style={{ display: `block`, top: `0px` }}></div>
                                    </div>
                                </div>
                                <div className="sp-alpha">
                                    <div
                                        className="sp-alpha-inner"
                                        style={{
                                            background: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgb(0, 0, 0)
                  )`,
                                        }}
                                    >
                                        <div
                                            className="sp-alpha-handle"
                                            style={{ display: `block`, left: `0px` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-input-container sp-cf">
                                <input className="sp-input" type="text" spellCheck={true}></input>
                            </div>
                            <div className="sp-initial sp-thumb sp-cf"></div>
                            <div className="sp-button-container sp-cf">
                                <a className="sp-cancel" href="#">
                                    â¨¯
                                </a>
                                <button type="button" className="sp-choose">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sp-container sp-hidden sp-light sp-input-disabled sp-alpha-enabled sp-palette-buttons-disabled sp-initial-disabled gjs-one-bg gjs-two-color">
                        <div className="sp-palette-container">
                            <div className="sp-palette sp-thumb sp-cf">
                                <div className="sp-cf sp-palette-row sp-palette-row-0"></div>
                                <div className="sp-cf sp-palette-row sp-palette-row-selection">
                                    <span
                                        data-color="rgb(0, 0, 0)"
                                        title="rgb(0, 0, 0)"
                                        className="sp-thumb-el sp-thumb-dark sp-thumb-active"
                                    >
                                        <span
                                            className="sp-thumb-inner"
                                            style={{ backgroundColor: `rgb(0, 0, 0)` }}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                            <div className="sp-palette-button-container sp-cf">
                                <button type="button" className="sp-palette-toggle">
                                    less
                                </button>
                            </div>
                        </div>
                        <div className="sp-picker-container">
                            <div className="sp-top sp-cf">
                                <div className="sp-fill"></div>
                                <div className="sp-top-inner">
                                    <div className="sp-color" style={{ backgroundColor: `rgb(255, 0, 0)` }}>
                                        <div className="sp-sat">
                                            <div className="sp-val">
                                                <div
                                                    className="sp-dragger"
                                                    style={{ display: `block`, top: `0px`, left: `0px` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="sp-clear sp-clear-display"
                                        title="Clear Color Selection"
                                        style={{ display: `none` }}
                                    ></div>
                                    <div className="sp-hue">
                                        <div className="sp-slider" style={{ display: `block`, top: `0px` }}></div>
                                    </div>
                                </div>
                                <div className="sp-alpha">
                                    <div
                                        className="sp-alpha-inner"
                                        style={{
                                            background: `linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0),
                    rgb(0, 0, 0)
                  )`,
                                        }}
                                    >
                                        <div
                                            className="sp-alpha-handle"
                                            style={{ display: `block`, left: `0px` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className="sp-input-container sp-cf">
                                <input className="sp-input" type="text" spellCheck={true}></input>
                            </div>
                            <div className="sp-initial sp-thumb sp-cf"></div>
                            <div className="sp-button-container sp-cf">
                                <a className="sp-cancel" href="#">
                                    â¨¯
                                </a>
                                <button type="button" className="sp-choose">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="gjs-pn-left-panel">
                        <div></div>
                        <div>
                            <div data-index="0" className="gjs-pn-left-btn gjs-light-blue-btn">
                                <div data-index="0" className="fa fa-plus">
                                    <span className="label-text">Add</span>
                                </div>
                            </div>
                            <div data-index="1" className="gjs-pn-left-btn gjs-yellow-btn">
                                <div data-index="1" className="fa fa-image">
                                    <span className="label-text">Media</span>
                                </div>
                            </div>
                            <div data-index="3" className="gjs-pn-left-btn gjs-red-btn">
                                <div data-index="3" className="fa fa-window-restore">
                                    <span className="label-text">Pages</span>
                                </div>
                            </div>
                            <div data-index="4" className="gjs-pn-left-btn gjs-grey-btn">
                                <div data-index="4" className="fa fa-cog">
                                    <span className="label-text">Settings</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div data-index="0" className="gjs-light-blue-curve curve">
                                <div className="curve-bottom"></div>
                                <div className="curve-body"></div>
                            </div>
                            <div data-index="0" className="gjs-pn-left-container gjs-light-blue-container">
                                <a target="_blank" href="help">
                                    ?
                                </a>
                                <div data-index="0" className="close">
                                    x
                                </div>
                                <div id="gjs-pn-add-container" className="gjs-fadein">
                                    <div id="gjs-pn-add-primary">
                                        <div data-filter="Text">Text</div>
                                        <div data-filter="Blocks" data-active="true">
                                            Blocks
                                        </div>
                                    </div>
                                    <div id="gjs-pn-add-secondary">
                                        <div data-parent="Text" style={{ display: `none` }}>
                                            <div data-filter="Themed Text">Themed Text</div>
                                            <div data-filter="Title">Title</div>
                                            <div data-filter="Paragraph">Paragraph</div>
                                        </div>
                                        <div data-parent="Blocks" style={{ display: `block` }}>
                                            <div data-filter="All">All</div>
                                        </div>
                                    </div>
                                    <div className="gjs-pn-content">
                                        <div data-category="Blocks" className="gjs-pn-content-header"></div>
                                        <div style={{ padding: `10px` }} className="gjs-assets-search">
                                            <input
                                                className="tm-input sm"
                                                style={{
                                                    width: `100%`,
                                                    padding: `10px`,
                                                    borderRadius: `5px`,
                                                }}
                                                type="search"
                                                placeholder="Search blocks..."
                                            ></input>
                                        </div>
                                        <div className="gjs-blocks-cs gjs-one-bg gjs-two-color">
                                            <div className="gjs-block-categories">
                                                <div className="gjs-block-category gjs-open">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-down"></i>
                                                        Basic
                                                    </div>
                                                    <div className="gjs-blocks-c">
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="1 Column"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-ghURWzAhP7WGcWS3S9u7wF.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">1 Column</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="2 Columns"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-1YTteyz1Uyk3yLdPw4YVf7.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">2 Columns</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="3 Columns"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-2ogAwxrW7UQjKJSB25NbWg.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">3 Columns</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="2 Columns 3/7"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-oecThJV1PmeCRY6wUoZekL.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">2 Columns 3/7</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Text"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-ijf1jgzc9wWjnKNqXkiBpz.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Text</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Link"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-6fBA4cbp8ciFLa7pxHSMrH.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Link</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="mage"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-mPjYxoV4smhgrHWPjcWSC3.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">mage</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Video"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-rVXYVssFaHxi221VncxZnq.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Video</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Map"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-teQwcMVfPsdkvzPPtGZsaw.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Map</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Grid"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-o23x9LEV9yQj8DBQijYTZa.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Grid</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category gjs-open">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-down"></i>
                                                        Extra
                                                    </div>
                                                    <div className="gjs-blocks-c">
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Navbar"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-vGXZXAHkj1TAeEnWuM3u9V.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Navbar</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="calendly"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-5GJCnCBrrF77nCC3z3H2tc.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">calendly</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Countdown"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-7ZG8GF9ts5z4sH7psFggGL.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Countdown</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Tabs"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-gYBPcA7NTx6CrN6ZkP7AkA.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Tabs</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Tooltip"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-5qkwsK1J7hkcdXc4KJyazN.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Tooltip</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Typed"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-oXqbY7g1t98BhSxDURPkRr.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Typed</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category gjs-open">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-down"></i>
                                                        Forms
                                                    </div>
                                                    <div className="gjs-blocks-c">
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Form"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-4rAAeGYEQm1hKGAqDnhgo3.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Form</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="nput"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-oTfvYppJCy2vEDxvSDBHtY.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">nput</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Textarea"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-fQT2j7HP4N2w15Ym8M51Tn.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Textarea</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Select"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-jXFhPsGSfDpWrXJgq1M5xV.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Select</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Button"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-2CaUuAzSTMvsGyfsnqyWNp.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Button</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Label"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-c55BhungkU1mDxAXyz48mp.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Label</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Checkbox"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-w6srYJFvP8g3uMqMGwtosJ.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Checkbox</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Radio"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-hRQfZQcRpfcA7QBNuo77b8.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Radio</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category gjs-open">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-down"></i>
                                                        Blog
                                                    </div>
                                                    <div className="gjs-blocks-c">
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-gVN42MT6gaeHJx6ePK4Mbe.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-taRcWTqQNKp72LUntpTAEC.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-gpqmQYtZ4XvP3Vxo6YiRok.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-kFFkQP4yGfSswzw5JYEQhj.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-4aRLoFrSySedtZw2GbBzDV.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Contact
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-dk1LquzKYg4us6fPn4pY8q.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-mXpk6vNomoCt4mQXph15Et.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-hFAfpNe6knLAv4QeRSB5YP.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Content
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-qvXUk2gHRqfS4GpBTCrBiV.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-hW9mkd9rRYud68Nj4UR5MW.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-8DDe5j7CE8MVSaL5f31p5Z.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-kcYVbyPxLeqM1UDD5K63cw.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-utGE6eFSifL2yAq5kEXNe8.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-2kbMy9QsGzU5mvPYpoDrgK.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-j33zCPJVjvMsu3HGQ6FoKu.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-axGXt7VeXhvHQpHeom7Lgh.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        CTA
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-24uFoug4os5W8q21mkbp9w.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-8S6zisVG4Fog2v3C67YzHy.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-d1JHsCA9eaeWqreHGTy4oq.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-7QKZJhVjMcMmUBRaoHuX9N.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Commerce
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-wgVdZaoz4hXnaPTHjwxHNm.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-eTTgcLyEesp3uqnTW9Gw1N.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-iKFVnMSx9twfnBAiayiGvH.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Features
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-qCc6aWCWQKiQb6ZaSm8jmC.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-vxdm1h9g6vbwhgV2XebzyG.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-3xtHqpK6nzZXSxfC3191FA.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-q4kbxi9kLJ7ig3UK7u8PBD.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-sFzFivAUk1B4bKhD8EJEd7.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-vxoeoZPTsDHYUgb3SqNQFe.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-438UYomuydHqXnZ1rPcShn.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-4Ukqj5XwdRqyLKHLbywJ3F.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Footer
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-b1XJww3ZCazhPUXu8GUjCi.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-5GtkM1MPcEUZMDiG2kgrNp.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-4q9UUKwqtmQpk1Sif6Btt5.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-8XB6KdaB92LzPPNqKfm4kB.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-kUq2td3iVowVsdf22tZUdD.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Gallery
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-d83fPNeCmvkvo5XthDMszN.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-f9RhVbXhsDnUig1KyubmVb.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-hewvhnTxc29rdQL77rCS6j.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Header
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-61b3gs4xTgnoMi97b5YD5v.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-vyMuCYEVqTMMgiRMXPkYeu.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-tXSxwJ8eK6Ji8mvNxe69zE.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-bNXzvENC8Bv9nxD8hmq4LK.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Hero
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-9tQawrwVUUNq4B8grHGTfx.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-oBVTA5DZfhp5JVMweUw3D4.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-6kxryG5oj5N4ts1e5EtdcH.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-bRjN84LYz21kmd6afi5rpR.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-8sn7WAW7KEqtDZvgKZHEeZ.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-aFowFLXJwBEDVGtNiiDD2Z.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Pricing
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-kGKqwVPtCjLaNA8T4CSctr.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-jvftXVuPmg1PRRnVHKKCso.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Statistics
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-6QPdg1qiCMsarfHs8G3vhz.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-3T9Qip6ttZpae4hQkTmqfQ.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-5zqPbjPGzLF96FFFtRC6LS.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Steps
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-ki3nueWismECJKCqTETqFu.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-5idHajZrJerS6yoNWF26Gm.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Team
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-vUNnjoKXXCqMERXt5fKg1D.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-xzhnouEF26yNAbBaCYDzH4.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-jRJcW84DJBLEBxGS8iF8LM.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-right"></i>
                                                        Testimonials
                                                    </div>
                                                    <div className="gjs-blocks-c" style={{ display: `none` }}>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-oTDXm3waHPy48SWQn1zjnu.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-1Z6ewNUJ2EsZZwJXFdKHxe.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="block-full-width gjs-block gjs-one-bg gjs-four-color-h"
                                                            title=""
                                                        >
                                                            <div className="gjs-block-label">
                                                                <img
                                                                    src="assets/images/img-rGchB5Spd9StZpUERzyyGx.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gjs-block-category gjs-open">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-down"></i>
                                                        Google
                                                    </div>
                                                    <div className="gjs-blocks-c">
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Tag Manager"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-cf3pfRLrSmxpzxdyBC5e1t.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Tag Manager</div>
                                                        </div>
                                                        <div
                                                            className="gjs-block gjs-one-bg gjs-four-color-h"
                                                            title="Analytics"
                                                        >
                                                            <div className="gjs-block__media">
                                                                <img
                                                                    src="assets/images/img-iRQeRC6PK7Vkv9yxWKUPdU.svg"
                                                                    alt=""
                                                                ></img>
                                                            </div>
                                                            <div className="gjs-block-label">Analytics</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gjs-blocks-no-cat">
                                                <div className="gjs-blocks-c"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="1" className="gjs-yellow-curve curve">
                                <div className="curve-bottom"></div>
                                <div className="curve-body"></div>
                            </div>
                            <div data-index="1" className="gjs-pn-left-container gjs-yellow-container">
                                <a target="_blank" href="help">
                                    ?
                                </a>
                                <div data-index="1" className="close">
                                    x
                                </div>
                                <div id="gjs-pn-assets-container" className="gjs-fadein" style={{ width: `96%` }}>
                                    <div className="gjs-pn-assets-header">
                                        <div style={{ fontWeight: `bold` }}>Media</div>
                                        <p>What are you looking for?</p>
                                        <div className="gjs-assets-search">
                                            <i className="fa fa-search"></i>
                                            <input type="text" placeholder="e.g business, fashion, fitness"></input>
                                        </div>
                                        <p>Upload your media</p>
                                        <div className="gjs-upload-btns">
                                            <i className="fa fa-upload"></i>
                                        </div>
                                    </div>
                                    <div className="gjs-pn-assets">
                                        <p>Site files</p>
                                        <div className="gjs-assets-grid"></div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="2" className="gjs-purple-curve curve">
                                <div className="curve-bottom"></div>
                                <div className="curve-body"></div>
                            </div>
                            <div data-index="2" className="gjs-pn-left-container gjs-purple-container">
                                <a target="_blank" href="help">
                                    ?
                                </a>
                                <div data-index="2" className="close">
                                    x
                                </div>
                                <div id="gjs-pn-settings-container" className="gjs-fadein">
                                    <div className="gjs-pn-content">
                                        <div data-category="Embed" className="gjs-pn-content-header"></div>
                                        <div className="gjs-blocks-cs gjs-one-bg gjs-two-color">
                                            <div className="gjs-block-categories">
                                                <div className="gjs-block-category gjs-open">
                                                    <div data-title="" className="gjs-title">
                                                        <i className="gjs-caret-icon fa fa-caret-down"></i>
                                                        Basic
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="3" className="gjs-red-curve curve">
                                <div className="curve-bottom"></div>
                                <div className="curve-body"></div>
                            </div>
                            <div data-index="3" className="gjs-pn-left-container gjs-red-container">
                                <a target="_blank" href="help">
                                    ?
                                </a>
                                <div data-index="3" className="close">
                                    x
                                </div>
                                <div
                                    id="gjs-pn-themes-container"
                                    className="gjs-fadein"
                                    style={{ width: `96%`, flexDirection: `column` }}
                                >
                                    <div className="gjs-pn-content-header">Pages</div>
                                    <div className="pages-app">
                                        <div style={{ display: `flex` }} className="pages-wrp">
                                            <div className="pages">
                                                <div data-id="0" data-key="53z5jOM6hqI2k0W6" className="page selected">
                                                    <i className="fa fa-file-o" style={{ margin: `5px` }}></i>
                                                    53z5jOM6hqI2k0W6
                                                    <span data-key="53z5jOM6hqI2k0W6" className="page-edit">
                                                        <i className="fa fa-hand-pointer-o"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-row">
                                                <input
                                                    className="tm-input sm"
                                                    type="text"
                                                    placeholder="page name"
                                                ></input>
                                            </div>
                                            <div className="add-page">New Page +</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-index="4" className="gjs-grey-curve curve">
                                <div className="curve-bottom"></div>
                                <div className="curve-body"></div>
                            </div>
                            <div data-index="4" className="gjs-pn-left-container gjs-grey-container">
                                <a target="_blank" href="help">
                                    ?
                                </a>
                                <div data-index="4" className="close">
                                    x
                                </div>
                                <div id="gjs-pn-settings-container" className="gjs-fadein">
                                    <div id="gjs-pn-settings-primary">
                                        <div data-filter="Give Feedback" data-active="true">
                                            Give Feedback
                                        </div>
                                    </div>
                                    <div className="gjs-pn-content" style={{ width: `400px` }}>
                                        <div data-category="/Give Feedback" className="gjs-pn-content-header"></div>
                                        <div id="feedback-panel-container"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="notyf"></div>
                <div
                    aria-atomic="true"
                    aria-live="polite"
                    className="notyf-announcer"
                    style={{
                        border: `0px`,
                        clip: `rect(0px, 0px, 0px, 0px)`,
                        height: `1px`,
                        margin: `-1px`,
                        overflow: `hidden`,
                        padding: `0px`,
                        position: `absolute`,
                        width: `1px`,
                        outline: `0px`,
                    }}
                ></div>
            </div>
            <GrapesJsView />
        </div>
    );
};

export default WebsiteBuilderMain;
