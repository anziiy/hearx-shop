
import React from 'react'


class Tooltip extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        displayTooltip: true
      }
      this.hideTooltip = this.hideTooltip.bind(this)
      this.showTooltip = this.showTooltip.bind(this)
    }
    
    hideTooltip () {
      this.setState({displayTooltip: false})
     
      
    }
    showTooltip () {
      this.setState({displayTooltip: true})
    }
  
    render() {
      let message = this.props.message
      let position = this.props.position 
      let active = this.props.active

      console.log('THE TOOLTIP IS RENDERED')
      return (
      
          active ? 
       

                <span className='tooltip' onMouseLeave={this.hideTooltip}>
                    <div className={`tooltip-bubble tooltip-${position}`}>
                        <div className='tooltip-message'>{message}</div>
                    </div>
                </span>
            
            : null

          

          
       
        
      )
    }
  }

  export default Tooltip
  
