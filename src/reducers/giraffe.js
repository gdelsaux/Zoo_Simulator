//import giraffe array
import { giraffes } from '../animals/giraffes'

const giraffe = (state = giraffes, action) => {
    switch(action.type){
        case 'TIME' :
            // map over the state array to implement logic for each of the object
            const timeState = state.map(giraffe => {

                //create a random number between 0 and 20 to decrement from health
                const randomNumber = Math.floor(Math.random() * 20) + 0;
                
                //create a new object to update the state
                let updatedHealth = {};

                //update the new object based on the health level of the animal
                if(giraffe.health - randomNumber < 0){
                    return updatedHealth = {
                        ...giraffe,
                        health : 0
                    }
                } else if (giraffe.health - randomNumber < 50){
                    return updatedHealth = {
                        ...giraffe,
                        isAlive: false,
                        health : giraffe.health - randomNumber
                    }
                } else {
                    return updatedHealth = {
                       ...giraffe,
                       health : giraffe.health - randomNumber
                   }
                }
            })

            //return our new array as state
            return timeState
        case 'FEED' :
            // map over the state array to implement logic for each of the object
            const feedState = state.map(giraffe => {

                //create a random number between 10 and 25 to increment the health
                const randomNumber = Math.floor(Math.random() * 25) + 10;

                //create a new object to update the state
                let updatedHealth = {};

                //pdate the new object based on the health level of the animal
                if(giraffe.health + randomNumber > 100){
                    return updatedHealth = {
                        ...giraffe,
                        health : 100
                    }
                } else {
                    return updatedHealth = {
                       ...giraffe,
                       health : giraffe.health + randomNumber
                   }
                }
            })

            //return our new array as state
            return feedState
        default :
            return state
    }
};

export default giraffe