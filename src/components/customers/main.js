import React, {Component} from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            allCustomers: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:3030/customers")
        .then(function(data) {
          return(data.json());
        }).then(function(resolvedData){
          this.setState({
            allCustomers:resolvedData
          });
        }.bind(this));    
    }
    render(){
    return (
        <main>
            <h2>Customers List</h2>   
            {
                this.state.allCustomers.map((customer,i)=>
                    (<div key={i}>
                        {customer.username}&nbsp;
                        {customer.password}
                    </div>)
                )
            }         
        </main>
    )
}
}

export default Main