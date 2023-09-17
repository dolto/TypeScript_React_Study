import React from 'react';
import './index.css';
import styled from 'styled-components'

interface p{
    input_fn: () => void
}
// interface s{
//     input_value: string
// }

export default class SurchBar extends React.Component<p> {
    constructor(props: p){
        super(props);
    }
    render(): React.ReactNode {
        return <section className="surch_sec">
            <input type="text" name="transport" id="surch_bar" placeholder="가고싶은 여행지를 등록하세요"/>
            <button type='button' value="Add" className="surch_btn" onClick={() => this.props.input_fn()}/>
    </section>
    }
}