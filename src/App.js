import React, { Component } from "react"
import styled from "styled-components"

import LinkBox from "./components/LinkBox"
import Clock from "./components/Clock"
import face from "./img/smoking_girl.gif"
import data from "./links.js"

const FullWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: 'UbuntuMono Nerd Font Mono', monospace;
  height: 100%;
`

const LinkBoxWrapper = styled.div`
  align-items: stretch;
  align-content: stretch;
  display: flex;
  flex-flow: row wrap;
  width: 90%;
`

const User = styled.h1`
  color: #f6f6f6;
  font-size: 88px;
  font-weight: 400;
  margin: 10px 0px 0px 0px;
  padding: 0px;
`

const Avatar = styled.img`
  border: solid 3px #f6f6f6;
  border-radius: 0%;
  margin: 10px;
  padding: 0px;
  width: 20%;
`  

class App extends Component {
    render() {
        return (
            <FullWrapper>
                <Avatar src={face} />
                <User>rer@denali</User>
                <Clock hour12={false}/>
                <LinkBoxWrapper>
                    {data.map((box, i) => {
                        return(<LinkBox data={box} key={i} />)
                    })}
                </LinkBoxWrapper>
            </FullWrapper>
        )
    }
}

export default App
