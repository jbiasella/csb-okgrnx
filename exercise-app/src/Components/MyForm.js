import React from "react"

export class MyForm extends React.Component {
    state = {
        username: '',
        password: '',
        checkbox: false,
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value // se(?) il mio type è di tipo checkbox userò checked, altrimenti(:) userò value

           
        })
    }


    handleResetState = () => {
        this.setState({
            username: '',
            password: '',
            checkbox: false
            })
    }

    handlePrefillForm = () => {
        // a call to a server banners and some data is returned

        this.setState({
            username: "Jhon",
            password: "123456",
            checkbox: true
        })
    }

    componentDidUpdate = () => {
        console.log(this.state)
    }

    // handleChexkboxChange = (event) => {
    //     const name = event.target.name
    //     const checked = event.target.checked

    //     this.setState({
    //         [name]: checked
    //     })
    // }


    render() {
        return (

            <div>
                <h1>My Controlled Forms</h1>
                <div>
                    <button onClick={this.handleResetState}>Reset</button>
                    <button onClick={this.handlePrefillForm}>Prefill</button>
                </div>

                <div>
                    
                    <input name="username" type='text' placeholder="username" value={this.state.username} onChange={this.handleInputChange}/>
                    <input name="password" type='password' placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
                    <input name="checkbox" type='checkbox' checked={this.state.checkbox} onChange={this.handleInputChange}/>
                </div>
            </div>



        )
    }
}