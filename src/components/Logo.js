import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '40px'
    }
}


class Logo extends Component {
    render() {
        return(
            <div style={styles.logo}>
                Tienda en linea
            </div>
        )
    }
}

export default Logo