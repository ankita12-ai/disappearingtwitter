import React, { Component } from "react";
 
class TodoItems extends Component {
    constructor(props) {
        super(props);
        //var time = new Date().toLocaleString();  
        this.createTasks = this.createTasks.bind(this);
      }

      time(key)
      {
          if(key <=new Date().toLocaleString())
          {
            this.props.delete(key);
          }
      }
     
      delete(key) {
        this.props.delete(key);
      }

         
  createTasks(item,time) {     
        return <li onClick={() => this.delete(item.key)} 
              key={item.key}>{item.text}</li>
       
    
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;