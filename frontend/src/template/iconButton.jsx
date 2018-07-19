import React from 'react'
import { If } from '../helper/utils'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}> {props.value}</i>
        </button>
    </If>
)