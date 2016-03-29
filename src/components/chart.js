import React, {Component} from 'react'
import {Sparklines, SparklinesLine} from 'react-sparklines'

class Chart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Sparklines height={120} width={180} data={this.props.data}>
                    <SparklinesLine color="lightskyblue"/>
                </Sparklines>
            </div>
        );
    }
}

export default Chart;