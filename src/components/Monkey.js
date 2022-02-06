import React from 'react';
//make use of the store and actions in our component
import { useSelector } from 'react-redux';
//styled component for styling the UI
import styled from 'styled-components';
//asset
import monkeySvg from '../asset/monkey.svg'
import deadMonkey from '../asset/deadMonkey.svg'


const Monkey = () => {
    //get monkey array from state
    const monkeys = useSelector(state => state.monkeys);
    
    return (
        <Style>
            {/* create a div for each object in the monkey array */}
            {monkeys.map(monkey => {
                return (
                    <div className='animal' key={monkey.id}>
                        <img src={monkey.isAlive ? monkeySvg : deadMonkey} alt="monkey" />
                        {/* conditional render if the monkey is alive */}
                        {monkey.isAlive ? <p>Heath: {monkey.health}%</p> : <p className={'dead'}>DEAD</p>}
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
    .dead{
        color: #cf0032;
        font-weight: bold;
    }
    .animal{
        padding: 1rem;
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

export default Monkey