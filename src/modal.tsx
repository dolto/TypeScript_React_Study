import React from 'react';
import './index.css';
import styled from 'styled-components'

const ST = styled.div`
    background-color: rgba(255,255,255,0.2);
    backdrop-filter: blur(5px);
    padding: 3rem;
    color: var(--gray700);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

interface p {
    message: String,
    is_opend: boolean,
    close_fn: Function
}

export default class Modal extends React.Component<p> {
    constructor(props: p){
        super(props)
    }

    render(): React.ReactNode {
        if(this.props.is_opend){
            return <ST onClick={() => this.props.close_fn()}>
                {this.props.message}
            </ST>
        }else{
            return <></>
        }
    }
}