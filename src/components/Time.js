import React from "react";
import { feedAction, timeAction } from "../actions";
//dispact our actions for our app
import { useDispatch } from "react-redux";
//style for our component
import styled from "styled-components";
//make use of the store and actions in our component
import { useSelector } from "react-redux";

const Time = () => {
  //get time from from state
  const time = useSelector((state) => state.time);
  //dipatch the relevent action when called
  const dispatch = useDispatch();

  return (
    <Style>
      <div className="control">
        <button onClick={() => dispatch(feedAction())}>feed</button>
        {/* display the time from state */}
        <p>Time: {time}:00</p>
        <button onClick={() => dispatch(timeAction())}>Skip an hour</button>
      </div>
    </Style>
  );
};

//styling
const Style = styled.div`
  .control{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    margin: 1rem 2rem;
  }
`;

export default Time;
