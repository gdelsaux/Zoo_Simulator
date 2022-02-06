import React from 'react';
//make use of the store and actions in our component
import { useSelector } from 'react-redux';
//styled component for styling the UI
import styled from 'styled-components';
//asset
import elephantSvg from '../asset/elephant.svg'
import deadElephant from '../asset/deadElephant.svg'



const Elephant = () => {
    //get elephant array from state
    const elephants = useSelector(state => state.elephants);

    return (
        <Style>
            {/* create a div for each object in the elephant array */}
            {elephants.map(elephant => {
                return (
                    <div className='animal' key={elephant.id}>
                        <img src={elephant.isAlive ? elephantSvg : deadElephant} alt="elephant" />
                        {elephant.isAlive ? <p>Heath: {elephant.health}%</p> : <p className={'dead'}>DEAD</p>}
                        {/* conditional render if the elephant is alive */}
                        {elephant.isAlive ? <p>can walk? {elephant.canWalk ? <span className={'yes'}>Yes</span> : <span className={'no'}> No </span>}</p> : ''}
                    </div>
                )
            })}
        </Style>
    )
};


//Styling
const Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .animal{
        padding: 1rem;
    }
    .dead{
        color: #cf0032;
        font-weight: bold;
    }
    .yes{
        color: green;
    }
    .no{
        font-weight: bolder;
        color: #fdb702;
    }
    img{
        width: 3rem;
    }
    @media (min-width: 1024px){
      img{
        width: 6rem;
      }
    }
`;

export default Elephant