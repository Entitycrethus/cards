import React from "react";





class EstadoClase extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        console.log("El componente se ha montado correctamente");
    }

    componentDidUpdate(){
        console.log("Esta funcion se ha actualziado");
    }

    

    render(){
        const aumentar = () =>{
            this.setState({count: this.state.count + 1})
        }

        const disminuir =  () =>{
            this.state.count > 0 && this.setState({count:this.state.count - 1})

        }
        return(
            <>
                <h1>Contador con estados (Clase)</h1>
                <h3>{this.state.count}</h3>
                <button onClick={disminuir}>-</button>
                <button onClick={aumentar}>+</button>

            </>
        )

    }
}

export default EstadoClase;