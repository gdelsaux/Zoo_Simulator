# React Zoo Simulator

This a zoo simulator with only two buttons to interact with.

The Logic of the simulator is as follows:

- Each animal starts with 100% health.
- The user can either feed the animals or make an hour go by.
- Every hour spent generates a random number from 0 to 20 for each animal and is then taken for their health (health cannot be less than 0%).
- Every feed generates a random number from 10 to 25 for each animal and is then added to their health (health cannot be more than 100%).
- When a Monkey has health below 30% or a Giraffe below 50%, it is pronounced dead straight away.
- When an Elephant has a health below 70% it cannot walk. If its health does not return above 70% once the subsequent hour has elapsed, it is pronounced dead.

## Tech stack

- React
- Redux
- Styled Components
