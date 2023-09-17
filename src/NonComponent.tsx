import React from 'react';
import './App.css';
import './style.css'
import buttle from './buttle.png'

interface p {
    is_non: boolean
}
export default class NonComponent extends React.Component<p> {
    constructor(props:p){
        super(props);
    }
    render(): React.ReactNode {
        //console.log(this.props.is_non);
        if(this.props.is_non){
            return <div className="non_transport">
                        <img className="non_transport_img" src={buttle}></img>
                        <br />
                        <p className="gray p16">등록된 여행지가 없습니다.</p>
                    </div>;
        }else{
            return <></>;
        }
        
    }
}