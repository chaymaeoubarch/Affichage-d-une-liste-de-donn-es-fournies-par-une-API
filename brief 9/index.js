let searchInput=document.getElementById('search-text-input');
let searchButton=document.getElementById('search-button');

let err=[];
// Fetch request "random meals":
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data =>{
    document.getElementById('first-meal-img').src= data.meals[0].strMealThumb; // random meal img:
    document.getElementById('img-text').innerText = data.meals[0].strMeal; // random meal name:
    document.getElementById('youtube').href= data.meals[0].strYoutube; // random meal Youtube link:
    }
    );

searchButton.addEventListener('click',()=>{
 
// Fetch request "ALL meals by the first letter"
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput.value}`)
  .then(response => response.json())
  .then(data =>{
    document.getElementById('first-meal-img').src= data.meals[0].strMealThumb;
    document.getElementById('img-text').innerText = data.meals[0].strMeal; 

    document.getElementById('second-meal-img').src= data.meals[1].strMealThumb; 
    document.getElementById('img-text1').innerText = data.meals[1].strMeal; 
    
    document.getElementById('third-meal-img').src= data.meals[2].strMealThumb; 
    document.getElementById('img-text2').innerText = data.meals[2].strMeal; 
    
    document.getElementById('forth-meal-img').src= data.meals[3].strMealThumb; 
    document.getElementById('img-text3').innerText = data.meals[3].strMeal; 
    }
    );

// Validation
if(searchInput.value==''){
  searchInput.style.border='4px solid red';
  err.push('error');}
  else {searchInput.style.border='4px solid green';
}
if(err.length !=0){ document.getElementById('res').innerText='Enter a letter';
} 
});
