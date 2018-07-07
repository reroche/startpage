import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #2B303B;
  border: solid 3px #96b5b4;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  min-width: 22%;
  overflow: hidden;
  flex-grow: 1;
`

const Links = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.5;
  list-style: none;
  width: 100%;
  padding: 0px;
  flex-grow: 1;
  li {
    padding: 0px;
    font-size: 28px;
    a {
      color: #f6f6f6;
      text-decoration: none;
    }
    a:hover {
      color: #bf616a;
      font-weight: 700;
  }
`

const Title = styled.h1`
  align-self: flex-start;
  background-color: #96b5b4;
  color: #2b303b;
  font-size: 42px;
  padding: 8px 0px;
  margin: 0px;
  text-align: center;
  width: 100%;
`

class LinkBox extends Component {
    render() {
        return(
            <Wrapper>
                <Title>{this.props.data.title}</Title>
                <Links>
                    {this.props.data.links.map((link, i) => {
                        return( 
                            <li key={i}><a href={link.url}>{link.name}</a></li>
                        )
                    })}
                </Links>
            </Wrapper>
        )
    }
}

export default LinkBox
