import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Card, Button } from "reactstrap";

const CardWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    height: 500px;
    width: 350px;
    border: 5px;
    border-radius: 12px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
      
    border: 2px solid rgba(0, 0, 0, 0.288);
    @media (max-width: 767px) {
        margin: 10px 0;
    }
`;

const ImageWrapper = styled('img')`
    margin: 30px 0;
    height: 150px;
    width:200px;
    padding: 10%;
    background-image: linear-gradient(to right, rgba(29, 4, 250, 0.479), rgba(0, 162, 255, 0.849));
    border-radius: 20px;'
     
    
    
`;
const CourseName = styled('div')`
    font-size: 32px;
    margin:  25px 35px;
    text-align: center;
    font-weight: 500;
    font-family: 'Nunito Sans', sans-serif;
`;
const Description = styled('div')`
    font-size: 18px;
    font-weight: 300;
    margin: 0 20px;
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
`;
const Fee = styled('div')`
    font-size: 32px;
    font-weight: 300;
`;
const ButtonWrapper = styled(Button)`
    font-size: large;
    padding: 8px 18px;
    transition-duration: 0.3s;
    cursor: pointer;
    background-color: white; 
    color:#1d04fad8;
    border: 2px solid #0084ff80;  
    border-radius: 10px;
    margin-top:40px;

    &:hover{
        background-image: linear-gradient(to right, rgba(29, 4, 250, 0.479), rgba(0, 162, 255, 0.849));
        color: white;
        box-shadow: 0px 1px 0px 0px rgba(8, 142, 252, 0.459);
        border: 2px solid white; 
    }

`;

const onRegisterClick = () => {
    window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1',
        '_blank'
    )
};

const CourseCard = ({ name, description, lectures, image, fee }) => (
    
    <CardWrapper>
        <ImageWrapper src={image}/>
        <CourseName>
            {name}
        </CourseName>
        <Description>
            {description}
            <br/>
            ({lectures} Lectures)
        </Description>
       {/*  <Fee>
            {`₹ ${fee}`}
        </Fee> */}
        <ButtonWrapper size='lg' color='info' onClick={() => {onRegisterClick()}}>
            Register Now
        </ButtonWrapper>
    </CardWrapper>

);

CourseCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lectures: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fee: PropTypes.string.isRequired,
};

export default CourseCard;