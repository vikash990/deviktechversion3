import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

import dblogo from "../Images/deviktechlogo.png"
import SliderToggle from './Slider/sliderToggle.js';

const NavWrapper = styled('div')`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
        font-family: 'Nunito', sans-serif;
        color: black;    
        height:60px;    
        text-align:center;

    `;

const ApplyWrapper = styled('div')`
    
        font-size: large;
        padding: 8px 18px;
        transition-duration: 0.3s;
        cursor: pointer;
        background-color: white; 
        color:#1d04fad8;
        border: 2px solid #0084ff80;  
        border-radius: 10px;
        height:40px;
        width:100px;
        margin:10px;
        text-align:center;
        
        &:hover{
        background-image: linear-gradient(to right, rgba(29, 4, 250, 0.479), rgba(0, 162, 255, 0.849));
        color: white;
        box-shadow: 0px 1px 0px 0px rgba(8, 142, 252, 0.459);
        border: 2px solid white;  }
     @media(max-width:768px) {
        margin:0px 15px;
        width:200px;
    }
     
`;


const NavLinkWrapper= styled(NavLink)`
    
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      justify-content: center;
      color:blue;
      text-decoration:none;
      &:hover {
        
        color:black;
        text-decoration:none;
      }

      @media(max-width:768px) {
          display:none;
      }
    
`;

const Spacer = styled('div')`
    flex:1

`;
const SliderToggleWrapper=styled('div')`
   @media(min-width:769px){
       display:none;
   }
`;

const ApplyLinkWrapper=styled('a')`
  
  padding-bottom:20px;
  font-size: large;
  text-align: left;
  padding-top: 9px;
    
  &:hover { 
    color:white;
    text-decoration:none;
}
`;

const AllNavLinkWrapper = styled('div')`

  display:flex;
  flex-direction:row;
  justify-content:space-around;
  width:350px;
  margin:0px 0px 0px 30px;
  font-size: large;
  text-align: left;
  padding-top: 9px;
  color:blue;
  

`;



class Header extends React.Component{

    render(){
        return(
        <NavWrapper>
            <SliderToggleWrapper>
                <SliderToggle click={this.props.drawerClickHandler}/>
            </SliderToggleWrapper>
        <AllNavLinkWrapper>
           <NavLinkWrapper to ="/" exact ><img src={dblogo}/></NavLinkWrapper>
          {/*  <NavLinkWrapper to ="/courses" exact >Courses</NavLinkWrapper> */}
           <NavLinkWrapper to ="/about" exact >About Us</NavLinkWrapper>         
           <NavLinkWrapper to ="/contact" exact >Contact Us</NavLinkWrapper> 
          {/*  <NavLinkWrapper to ="/apply" exact >Apply</NavLinkWrapper> */}
        </AllNavLinkWrapper>
            <Spacer/>        
       <ApplyWrapper>   
          <ApplyLinkWrapper target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1">Apply</ApplyLinkWrapper> 
        </ApplyWrapper> 
        </NavWrapper>
        );

    }
}
export default Header;