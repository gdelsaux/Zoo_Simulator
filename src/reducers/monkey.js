//import monkey array
import { monkeys } from '../animals/monkeys'

const monkey = (state = monkeys, action) => {
    switch(action.type){
        case 'TIME' :
            // map over the state array to implement logic for each of the object
            const timeState = state.map(monkey => {

                //create a random number between 0 and 20 to decrement from health
                const randomNumber = Math.floor(Math.random() * 20) + 0;

                //create a new objcet to update the state
                let updatedAnimal = {};

                //update the new object based on the heath level of the animal
                if(monkey.health - randomNumber < 0){
                    return updatedAnimal = {
                        ...monkey,
                        health : 0
                    }
                } else if (monkey.health - randomNumber < 30){
                     return updatedAnimal = {
                        ...monkey,
                        isAlive : false,
                        health : monkey.health - randomNumber
                    }
                } else {
                    return updatedAnimal = {
                        ...monkey,
                        health : monkey.health - randomNumber
                    }
                }
            })

            //return our new array as a state
            return timeState
        case 'FEED' :
            //map over the state array to implement logic for each of the object
            const feedState = state.map(monkey => {

                //create a random number between 10 and 25 to increment the health
                const randomNumber = Math.floor(Math.random() * 25) + 10;

                //create a new object to update the state
                let updatedHealth = {};

                //update the new object based pn the healt level of the animal
                if(monkey.health + randomNumber > 100){
                    return updatedHealth = {
                        ...monkey,
                        health : 100
                    }
                } else {
                    return updatedHealth = {
                       ...monkey,
                       health : monkey.health + randomNumber
                   }
                }
            })

            //return our new array as state
            return feedState
        default :
            return state
    }
};

export default monkey