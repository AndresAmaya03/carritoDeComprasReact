import { Component } from 'react';

function withHover(WrappedComponent, baseStyle, hoverStyle) {
    return class extends Component {
        state = { isHovered: false };

        handleMouseEnter = () => this.setState({ isHovered: true });
        handleMouseLeave = () => this.setState({ isHovered: false });

        render() {
            // Combina estilos base y de hover dependiendo del estado
            const combinedStyle = {
                ...baseStyle,
                ...(this.state.isHovered ? hoverStyle : {}),
                ...this.props.style // Permite sobreescribir estilos desde props
            };

            return (
                <WrappedComponent
                    {...this.props}
                    style={combinedStyle}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                />
            );
        }
    };
}

export default withHover;