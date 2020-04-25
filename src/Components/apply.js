import React from 'react';
import axios from 'axios';


class Apply extends React.Component {
    constructor(props) {
      super(props);
      this.state = {user_name: '',
                    email:'',
                    mobile:'',
                    subject:''};
  
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
 
  
    handleSubmit(event) {
      event.preventDefault();
      const user={
          user_name:this.state.user_name,
          email:this.state.email,
          mobile:this.state.mobile
      }
      axios.post(`http://localhost:5000/routes/apply`,{ user_name:this.state.user_name,
      email:this.state.email,
      mobile:this.state.mobile}).then(response=>alert(response.data))
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.user_name} onChange={event=>this.setState({user_name:event.target.value})} />
          </label>
          <label>
            Email:
            <input type="email" value={this.state.email} onChange={event=>this.setState({email:event.target.value})} />
          </label>
          <label>
          Select The Subject:
          <select value={this.state.subject} onChange={event=>this.setState({email:event.target.subject})}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
          <label>
            Mobile:
            <input type="number" value={this.state.mobile} onChange={event=>this.setState({mobile:event.target.value})} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default Apply;