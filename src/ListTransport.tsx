import React from 'react';
import './style.css'

interface p{
    list: Array<String>,
    remove_fn: Function,
    open_modal_fn: Function
}

export default class ListTransport extends React.Component<p>{
    click_handler :(e:React.MouseEvent, i:number) => void
    constructor(props: p){
        super(props);
        this.click_handler = (e, i) => {
            let target = e.target as HTMLElement;
            
            if(target.className == 'list_li'){
                this.props.open_modal_fn(i);
            }
            else if(target.className == 'fa-regular fa-square-minus'){
                this.props.remove_fn(i);
            }
        }
    }
    render(): React.ReactNode {
        const l: JSX.Element[] = this.props.list.map((e, i) => {
            // console.log("before i is "+i);
            // console.log("and type is "+typeof(i));
            return <li className='list_li' key={i} onClick={(e) => this.click_handler(e, i)}><p>{e}</p>
            <i className="fa-regular fa-square-minus"></i></li>
        });
        return <ul id="list">
            {l}
        </ul>
    }
}