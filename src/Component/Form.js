import React, { Component } from 'react'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select  from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: '',
            topic: "angular",
            latitude: '',
            longitude: '',
            age:''
        }
    }
    handleChange = (event) => {
          
        this.setState({
            username: event.target.value,
            
        })
    }

    handleCommentschange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicchange = (event) => {
        this.setState({
            topic:event.target.value
        })
    }
    handleLatitudeChange = event => {
        this.setState({
            latitude:event.target.value
        })
    }
    handleLongitudeChange = event => {
        this.setState({
            longitude:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  
    handleSelectChange = (event) => {
        this.setState({
           age:event.target.value
       })
   }
       
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                   
                    <TextField required={ true}  label="username" variant="standard" value={this.state.username} onChange={this.handleChange} />
                </div>
                <br></br>
                <div>
                  
                    <TextField label="comments" multiline value={this.state.textarea} onChange={this.handleCommentschange} />
                </div>
                <br></br>
                <div>
                   <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select labelId="demo-simple-select-label"  label="Age" variant="standard" id="demo-simple-select" style={{width: "80px"} } value={this.state.age} onChange={ this.handleSelectChange}>
                       <MenuItem value={ 10 }>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={ 30 }>30</MenuItem>
                    </Select>
                </div>
                <br></br>
                <div>
                    <Button variant="contained">Submit</Button>
                </div>
              
            </form>
        )
    }
}


export default Form