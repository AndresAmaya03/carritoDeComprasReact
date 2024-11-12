import { hover } from "@testing-library/user-event/dist/hover";
import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        transition: 'padding 0.2s'
        },
    buttonHover: {
        backgroundColor: '#074257',
        padding: '15px 20px'
    }

}

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovered: false
        };
    }

    handleMouseEnter = () => {
        this.setState({isHovered:true});
    }
    handleMouseLeave = () => {
        this.setState({isHovered:false});
    }

    render() {
        return(
            <button style={{
                ...styles.button,
                ...(this.state.isHovered ? styles.buttonHover : {})
            }}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            {...this.props}
            />
        )
    }
}

export default Button