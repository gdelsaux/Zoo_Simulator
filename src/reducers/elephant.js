//import elephant array
import { elephants } from "../animals/elephants";

const elephant = (state = elephants, action) => {
    switch(action.type){
        case 'TIME' :
            // map over the state array to implement logic for each of the object
            const timeState = state.map(elephant => {

                //create a random number between 0 and 20 to decrement from health
                const randomNumber = Math.floor(Math.random() * 20) + 0;

                //create a new object to update the state
                let updatedHealth = {};

                //update the new object based on the health level of the animal
                if(elephant.health - randomNumber < 0){
                    return updatedHealth = {
                        ...elephant,
                        health : 0
                    }
                }else if(elephant.health < 70 ){
                    return updatedHealth = {
                        ...elephant,
                        isAlive : false,
                        health : elephant.health - randomNumber
                    }
                } else if(elephant.health - randomNumber < 70){
                    return updatedHealth = {
                        ...elephant,
                        canWalk : false,
                        health : elephant.health - randomNumber
                    }
                }  
                return updatedHealth = {
                    ...elephant,
                    health : elephant.health - randomNumber,
                    canWalk : true
                }
            })

            //return our new array as state
            return timeState
        case 'FEED' :
            // map over the state array to implement logic for each of the object
            const feedState = state.map(elephant => {

                //create a random number between 10 and 25 to increment the health
                const randomNumber = Math.floor(Math.random() * 25) + 10;

                //create a new object to update the state
                let updatedHealth = {};

                //update the new object based on the health level of the animal
                if(elephant.health + randomNumber > 100){
                    return updatedHealth = {
                        ...elephant,
                        health : 100
                    }
                } else if( elephant.health + randomNumber > 70){
                    return updatedHealth = {
                       ...elephant,
                       canWalk : true,
                       health : elephant.health + randomNumber
                   }
                } else if(elephant.canWalk === true){
                    return updatedHealth = {
                        ...elephant,
                        isAlive : true
                    }
                }
                return updatedHealth = {
                    ...elephant,
                    health : elephant.health + randomNumber
                }
            })

            //return our new array as state
            return feedState
        default :
            return state
    }
};

export default elephant