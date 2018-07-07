import React,{Component} from "react"
import styled from "styled-components"

const ClockTile = styled.div`
  text-align: center;
  margin: 10px;
`

const ClockSpan = styled.span`
  color: #EBCB8B;
  font-size: 56px;
`

let runner
class Clock extends Component{
    constructor(props) {
        super(props)
        this.state ={
            "time" : this.getCurrentTime()
        }
    }
  getCurrentTime = () => {
      const locale = this.props.locale ? this.props.locale : []
      const hour12 = (this.props.hour12 === false) ? false : true
      let hour,minute,second
      if(this.props.format){
          switch (this.props.format.toLowerCase()) {
          case "hh":
              hour = "2-digit"
              break
          case "hh-mm":
              hour = "2-digit"
              minute = "2-digit"
              break
          case "hh-mm-ss":
              hour="2-digit"
              minute="2-digit"
              second="2-digit"
              break
          default:
              hour="2-digit"
              minute="2-digit"
              second="2-digit"
          }
      }
      let time = new Date().toLocaleTimeString(locale,{"hour12":hour12,"hour":hour,"minute":minute,"second":second})
      return time
  }
  
  componentDidMount() {
      runner = setInterval(() => {
          this.setState({time:this.getCurrentTime()})
      }, 1000)
  }
  componentWillUnmount() {
      if (runner) {
          clearInterval(runner)
      }
  }
  render(){
      return(
          <ClockTile>
              <ClockSpan>{this.state.time}</ClockSpan>
          </ClockTile>
      )
  }
}

export default Clock
