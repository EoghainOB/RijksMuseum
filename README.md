## Rijksmaster - Rijksmuseum Image search

For this project I was asked to nake use of the Rijksmuseum API and create an application that incorporates search. The user can search well known painters and their work in the input field with suggestions taken from a list of popular artists and their artwork. This queries the API and returns the results on a results page, showing the work along with the title of the piece and a link to the page of that piece of art on the Rijksmuseum website.

### Desktop
![RijksSearchDesktop](https://github.com/EoghainOB/RijksMaster_Angular/assets/110406695/3c78c34c-375d-44e0-baa1-c4651db76bcb)
![RijksResDesktop](https://github.com/EoghainOB/RijksMaster_Angular/assets/110406695/0f90c186-84d5-4159-8102-02e660615358)

### Mobile
<img width="300" src="https://github.com/EoghainOB/RijksMaster_Angular/assets/110406695/a525f62d-0e4a-4a75-a8b1-2a90802e05ab">
<img width="300" src="https://github.com/EoghainOB/RijksMaster_Angular/assets/110406695/b53f7801-841c-4ba4-9498-b02de3e50c7c">


## Installation
- Clone the repository using `git clone`
- Install the dependencies using `npm install`
- Run the server using `npm start`

## Technologies Used
I chose `React` and `Typescript` as this is what I am most familiar with. React with its components allows me to reuse them in different pages, such as the search field and allows me to piece together the site in a modular way which I find great. While not a reason, this is particularly useful when you have short amount of time to work on a project and the direction you are going with layout and design changes. I also used `React-router-dom` for routing within the site as well as `Context` to avoid prop drilling and make the data available across the site. For fetching the data from the API I used `Axios` instead of the built in fetch function as it has automatic JSON parsing and built in error handling.

<div>
    <img height=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
    <img height=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
    <img height=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
    <img height=40 src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
</div>

## Notes
Normally I would have put the API key in a `env` file but for the sake of this task I left it in the endpoint URL
