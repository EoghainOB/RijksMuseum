## Rijksmaster - Rijksmuseum Image search

For this project I was asked to nake use of the Rijksmuseum API and create an application that incorporates search. The user can search well known painters and their work in the input field with suggestions taken from a list of popular artists and their artwork. This queries the API and returns the results on a results page, showing the work along with the title of the piece and a link to the page of that piece of art on the Rijksmuseum website.

### Desktop
![RijksSearchDesktop](https://github.com/EoghainOB/RijksMuseum/assets/110406695/f1b2d2b6-57b7-4dc6-8631-dc9175bab1ca)
![RijksResDesktop](https://github.com/EoghainOB/RijksMuseum/assets/110406695/efb832b1-4139-499a-9a2d-3d4f7b134eb6)

### Mobile
<img width="300" src="https://github.com/EoghainOB/RijksMuseum/assets/110406695/92a891a7-cb2b-4192-a462-ceff8837ab30">
<img width="300" src="https://github.com/EoghainOB/RijksMuseum/assets/110406695/8f493864-7d7c-4f8a-971a-8f1d36c4d9ab">


## Installation
- Clone the repository using `git clone`
- Install the dependencies using `npm install`
- Run the server using `npm start`

## Technologies Used
I chose `React` and `Typescript` as this is what I am most familiar with. React with its components allows me to reuse them in different pages, such as the search field and allows me to piece together the site in a modular way which I find great, especially when you have short amount of time to work on a project and the direction you are going with layout and design changes. I also used `React-router-dom` for routing within the site as well as `Context` to avoid prop drilling and make the data available across the site. For fetching the data from the API i used `Axios` instead of the built in fetch function as it has automatic JSON parsing and built in error handling.

<div>
    <img height=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
    <img height=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
    <img height=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
    <img height=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
</div>

## Notes
Normally I would have put the API key in a `env` file but for the sake of this task I left it in the endpoint URL
