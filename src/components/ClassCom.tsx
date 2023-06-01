import {Component} from "react";

export default class ClassComponent extends Component{
   interval:any;
    state={
        count:0
        
    }
    componentDidMount(){
       this.interval= setInterval(()=>{
         this.setState({count:this.state.count+1})
        },1000);
    
    }
    componentWillUnmount(){
      clearInterval(this.interval);
    }
    
    render(){
        function time(num:any){
            console.log(num);
            
         return num;
        }
       return(
       <>
       <h1>This is class componenet</h1>
       <button onClick={()=>{this.setState({count:this.state.count+1})}}>Cllick</button>
       <h2>{this.state.count}</h2>
       <h1>{this.state.count}</h1>
       </>
       )
    }
}