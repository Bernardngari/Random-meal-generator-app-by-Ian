// printing utility
function print(value){
    console.log(value)
}

// web page utility
function createFoodItem(thumbnail, name){
    // div to contain the elements
    let rootDiv = document.createElement('div')

    // meal image
    let mealImage = document.createElement('img')
    mealImage.src = thumbnail
    mealImage.alt = `${name} image`
    mealImage.style.height = '200px'
    mealImage.style.width = '200px'

    // meal name
    let mealTitle = document.createElement('h5')
    mealTitle.innerHTML = name

    // append the image and text to root element
    rootDiv.append(mealImage)
    rootDiv.append(mealTitle)

    // return the element
    return rootDiv

}


// append item to an element
function appendElement(element, id = "app-body"){
    const rootElement = document.getElementById(id)
    rootElement.append(element)
}


// BASE URL FOR API
const MEAL_API = "https://www.themealdb.com/api/json/v1/1/"
const RANDOM_MEALS = `${MEAL_API}random.php`
const SEAFOOD = `${MEAL_API}filter.php?c=Seafood`


// function to load random meal
function loadRandomMeal(){
    const randomMeals = fetch( RANDOM_MEALS )
    randomMeals
        .then( ( response ) => response.json() )
        .then((jsonData)=>{
            const meals = jsonData.meals
            const actualMeal = meals[0];
            const thumbnail = actualMeal.strMealThumb;
            const name = actualMeal.strMeal;
            //print(jsonData.meals)
            const myFoodItem = createFoodItem(thumbnail, name)
            appendElement(myFoodItem, "random-meal")
        })
}
//loadRandomMeal()

// function to load list of seafoods
function loadSeafood(){

    // TODO: fill in the function

}


// wait for DOM to load to do stuff
document.addEventListener('DOMContentLoaded', (event) => {
    print(`Event loaded: ${event.type}`)

    // show random food
            loadRandomMeal()

    // show list of sea food


    //reload button
    let reload = document.querySelector( '#loadMoreMeals' );
    //print(reload)
    reload.addEventListener('click', () => location.reload())


    // BONUS: Add a button, add an event listener to it to reload the random image

})