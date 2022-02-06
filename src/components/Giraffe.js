import React from 'react';
//make use of the store and actions in our component
import { useSelector } from 'react-redux';
//styled component for styling the UI
import styled from 'styled-components';
//asset
import giraffeSvg from '../asset/giraffe.svg'
import deadGiraffe from '../asset/deadGiraffe.svg'


const Giraffe = () => {
    //get the giraffe array from state
    const giraffes = useSelector(state => state.giraffes);
    console.log(giraffes)

    return (
        <Style>
            {/* create a div for each object in the monkey giraffe */}
            {giraffes.map(giraffe => {
                return (
                    <div className='animal' key={giraffe.id}>
                        <img src={giraffe.isAlive ? giraffeSvg : deadGiraffe} alt="giraffe" />
                        {/* conditional render if the giraffe is alive */}
                        {giraffe.isAlive ? <p>Heath: {giraffe.health}%</p> : <p className={'dead'}>DEAD</p>}
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
    img{
        width: 3rem;
    }
    @media (min-width: 1024px){
      img{
        width: 6rem;
      }
    }
`;

export default Giraffe