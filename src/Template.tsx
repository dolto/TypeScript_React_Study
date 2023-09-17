import React from 'react';
import './App.css';
import './style.css'
import NonComponent from './NonComponent';
import ListTransport from './ListTransport';
import Modal from './modal';
import SurchBar from './surch_bar';

const TRANSPORT = "transport_list";

interface s{
    list: Array<String>,
    is_non: boolean,
    is_modal: boolean,
    modal_message: String,
}

export default class Template extends React.Component<{}, s>{
    remove_fn:Function;
    open_modal_fn:Function;
    close_modal_fn: () => void;
    push_transport: () => void;
    constructor(props: {}){
        super(props);
        let li: string[] = [];
        let db = localStorage.getItem(TRANSPORT);
        if(db != null)
        if(db != '' ){
            li = db.split(',')
        }
        let is;
        if(typeof(li) === "object"){
           is = li.length === 0;
        }else {
            li = [];
            is = true;
        }
        
        this.state = {
            list: li,
            is_non: is,
            is_modal: false,
            modal_message: "선택 없음"
        }
        this.remove_fn = (i:number) => {
            console.log("remove: ", i);
            console.log("i types = "+typeof(i));
            let listitem = [...this.state.list];
            listitem.splice(i,1);
            console.log(listitem);
            this.setState(_=>{return {list:listitem, 
                is_non:listitem.length === 0}});

            let item_str: string = "";
            listitem.forEach(s => {
                if(item_str === "")
                    item_str = ""+s;
                else
                    item_str = item_str+","+s;
            });
            localStorage.setItem(TRANSPORT, item_str);
        };
        this.open_modal_fn = (i:number) => {
            this.setState(s => {
                return {
                    is_modal: true,
                    modal_message: s.list[i]
                }
            });
        }
        this.close_modal_fn = () => {
            this.setState(() => {
                return {
                    is_modal: false
                }
            });
        } 
        this.push_transport = () => {
            let listitem = [...this.state.list];
            let surch_bar: HTMLInputElement | null = document.querySelector("#surch_bar");
            let v = null;
            //console.log("push start "+ surch_bar);
            if(surch_bar != null){
                v = surch_bar.value;
                surch_bar.value = "";
                //console.log("push start "+ v);
            }
            if (v == null || v === "")
                return
    
            listitem.unshift(v);
            let item_str: string = "";
            listitem.forEach(s => {
                if(item_str === "")
                    item_str = ""+s;
                else
                    item_str = item_str+","+s;
            });
            localStorage.setItem(TRANSPORT, item_str);
            this.setState({list:listitem, is_non:false});
        }
        //this.remove_fn.bind(this);
    }
    render(): React.ReactNode {
        return <main>
            <SurchBar input_fn={this.push_transport}></SurchBar>
            <section className="template">
                <p className="total">Total <span className="number">{this.state.list.length}</span></p>
                <hr />
                <div className="transport_menu">
                    <NonComponent is_non={this.state.is_non}/>
                    <ListTransport list={this.state.list} remove_fn={this.remove_fn} open_modal_fn={this.open_modal_fn}/>
                    <Modal message={this.state.modal_message} is_opend={this.state.is_modal} close_fn={this.close_modal_fn}></Modal>
                </div>
        </section>
        </main>

    }
}