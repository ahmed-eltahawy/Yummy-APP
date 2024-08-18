// SIDE NAVEBAR
let xbtn=document.getElementById('xbtn');
let menubtn =document.getElementById('menubtn');

$('.logoIcon').click(function(){
   let navebarWidth=$('.navebar').outerWidth();
   let leftNavebar=$('.sideNavbar').offset().left;
   if(leftNavebar == 0 ){
    $('.sideNavbar').css({
        left:`-250px`,
        transition:'all 1s',
    })
    menubtn.classList.replace('d-none','d-block')
    xbtn.classList.replace('d-block','d-none')

    $('.navebar ul li a').animate({
        bottom: '-50px'
    },500)

   }else{
    $('.sideNavbar').css({
        left:'0px',
        transition:'all 1s'
    })
    xbtn.classList.replace('d-none','d-block')
    menubtn.classList.replace('d-block','d-none')
    $('.navebar ul li a').animate({
        bottom: '0px',
        animationDelay: '5s'
    },1000)
   }
})
//__________________________________________________________________________________
//CONTACT US
// let nameInput= document.getElementById('nameInput');
// let emailInput =document.getElementById('emailInput');
// let phoneInput =document.getElementById('phoneInput');
// let ageInput =document.getElementById('ageInput');
// let passInput =document.getElementById('passInput');
// let repassInput =document.getElementById('repassInput');

// let alertName= document.getElementById('alertName');
// function namesValidation(){
//     let nameValue =nameInput.value;
//     let nameRegex = /^[A-Z][a-z]{3,10}$/;
//     if(nameRegex.test(nameValue)===true){
//         return true;
//     }else{
//         alertName.classList.replace('d-none','d-block')
//     }
// }
// function addNameUser(){
//     if(nameInput.value != " "){
//         if(namesValidation()===true){
//             alertName.classList.replace('d-block','d-none')
//             return true;
//         }else{
//             alertName.classList.replace('d-none','d-block')
//         }
//     }
// }
// nameInput.addEventListener('keyup',function(){
//     addNameUser();
// })

// let pSubmit =document.getElementById('pSubmit');
// let btnsubmit =document.getElementById('btnsubmit');
// function addUser(){
//     if(nameInput.value != " " & emailInput.value != " " & phoneInput.value != " " & ageInput.value != " " & passInput.value != " " &repassInput.value != " " ){
//      pSubmit.classList.replace('d-block','d-none')
//      btnsubmit.classList.replace('d-none','d-block')
//     }else{
//         btnsubmit.classList.replace('d-block','d-none')
//         pSubmit.classList.replace('d-none','d-block') 
//     }
// }
// addUser();

//__________________________________________________________________________________
// HOME
let allBody=document.getElementById('allBody')
let loader=document.getElementById('loader')
$(window).ready(function(){
    $('.loader').fadeOut(5000,function(){
        loader.classList.replace('d-block','d-none')
        allBody.classList.replace('overflow-hidden','overflow-auto')
        
    });
})

async function getMealHome(){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    var data = await result.json();
    // console.log(data.meals);
    displayMealHome(data.meals);
}
getMealHome();

function displayMealHome(data){
    let box='';
    for(var i=0 ; i<data.length ; i++){
        box +=`
        <div class=" col-xl-3 col-lg-6 col-md-12">
        <div class="imagHome rounded-3" id="imagHome">
            <img src="${data[i].strMealThumb}" alt="" class="w-100 " >
            <div class="layer d-flex align-items-center" ide="${data[i].idMeal}">
                <h3 class="ps-2" ide="${data[i].idMeal}">${data[i].strMeal}</h3>
            </div>
        </div>
    </div>
        `
    }
    
    document.getElementById('body').innerHTML=box;
    
}
let home =document.getElementById('home');
let details=document.getElementById('details');
document.addEventListener('click',function(e){
let clickedId= e.target.getAttribute('ide');
if(clickedId==null){
    return 0;
}else{
getDetails(clickedId)
}
})
async function getDetails(clickedId){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedId}`);
    var data = await result.json();
    displayDetails(data.meals);
}
function displayDetails(data){
    let box='';
        box +=`
        <div class="col-md-4">
                    <div class="imgDetails ">
                        <img src="${data[0].strMealThumb}" alt="" class="w-100 rounded-3">
                        <h2 class="text-white">${data[0].strMeal}</h2>
                    </div>
                </div>
                <div class="col-md-8">
                    <h2 class="text-white">Instructions</h2>
                    <p class="text-white">${data[0].strInstructions}</p>
                    <h3 class="text-white">Area: ${data[0].strArea}</h3>
                    <h3 class="text-white">Category: ${data[0].strCategory}</h3>
                    <h3 class="text-white">Recipes:</h3>
                    <ul class="list-unstyled d-flex g-3 flex-wrap">
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure1} ${data[0].strIngredient1}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure2} ${data[0].strIngredient2}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure3} ${data[0].strIngredient3}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure4} ${data[0].strIngredient4}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure5} ${data[0].strIngredient5}</li>
                        <li class="m-2 p-1 alert alert-info" >${data[0].strMeasure6} ${data[0].strIngredient6}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure7} ${data[0].strIngredient7}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure8} ${data[0].strIngredient9}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure10} ${data[0].strIngredient10}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure11} ${data[0].strIngredient11}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure12} ${data[0].strIngredient12}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure13} ${data[0].strIngredient13}</li>
                        <li class="m-2 p-1 alert alert-info">${data[0].strMeasure14} ${data[0].strIngredient14}</li>
                    </ul>
                    <h3 class="text-white mb-3">Tags :</h3>
                    <p class="m-2 p-1 alert alert-danger d-inline">${data[0].strTags}</p>
                    <div class="d-flex mt-4">
                        <a href="${data[0].strSource}" class="m-2 px-3 py-2 btn btn-success">Source</a>
                        <a href="${data[0].strYoutube}" class="m-2 px-3 py-2 btn btn-danger">Youtube</a>
                    </div>
                   
                </div>
     
        `
    document.getElementById('detailsBody').innerHTML=box;
    details.classList.replace('d-none','d-block')
    home.classList.replace('d-block','d-none')
}

// // //______________________________________________________________________________

//CATEGORY
async function getcategory(){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    var data = await result.json();
    console.log(data.categories);
    displayCategories(data.categories);
}
getcategory();
function displayCategories(data){
    let box='';
    for(var i=0 ; i<data.length ; i++){
        let des = data[i].strCategoryDescription;
        let myDes = des.slice(0,100)
        box +=`
        <div class="col-md-3">
        <div class="imagHome rounded-3" id="imagHome">
            <img src="${data[i].strCategoryThumb}" alt="" class="w-100 " >
            <div class="layer text-center" id='layerId'>
                <h3 class="pt-2" categoryName="${data[i].strCategory}">${data[i].strCategory}</h3>
                <p class='disCategory' categoryName="${data[i].strCategory}">${myDes}...</p>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('categorybody').innerHTML=box;
}
let nameCategory =document.getElementById('nameCategory');
let homeCategory =document.getElementById('homeCategory')
document.addEventListener('click',function(e){
    let clickedName= e.target.getAttribute('categoryName')
    if(clickedName==null){
        return 0;
    }else{
        getAllMealOfCategoryName(clickedName)
    }
    })
async function getAllMealOfCategoryName(clickedName){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${clickedName}`);
        var data = await result.json();
        displayAllMealOfCategoryName(data.meals);
}
function displayAllMealOfCategoryName(data){
    let box='';
    for(var i=0 ; i<data.length ; i++){
        box +=`
        <div class="col-md-3">
        <div class="imagHome rounded-3" id="imagHome">
            <img src="${data[i].strMealThumb}" alt="" class="w-100 " >
            <div class="layer d-flex align-items-center" id_categoryMeal="${data[i].idMeal}">
                <h3 class="ps-2" id_categoryMeal="${data[i].idMeal}" >${data[i].strMeal}</h3>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('bodyOfNameCategory').innerHTML=box;
    homeCategory.classList.replace('d-block','d-none');
    nameCategory.classList.replace('d-none','d-block');
}
let mealCategorydetails =document.getElementById('mealCategorydetails');
document.addEventListener('click',function(e){
    let clickedId= e.target.getAttribute('id_categoryMeal')
    if(clickedId==null){
        return 0;
    }else{
        getDetailsMealOfCategoryName(clickedId)
    }
    })
async function getDetailsMealOfCategoryName(clickedId){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedId}`);
        var data = await result.json();
        displayDetailsOfCategoryName(data.meals);
    }
function displayDetailsOfCategoryName(data){
        let box='';
            box +=`
            <div class="col-md-4">
                        <div class="imgDetails ">
                            <img src="${data[0].strMealThumb}" alt="" class="w-100 rounded-3">
                            <h2 class="text-white">${data[0].strMeal}</h2>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h2 class="text-white">Instructions</h2>
                        <p class="text-white">${data[0].strInstructions}</p>
                        <h3 class="text-white">Area: ${data[0].strArea}</h3>
                        <h3 class="text-white">Category: ${data[0].strCategory}</h3>
                        <h3 class="text-white">Recipes:</h3>
                        <ul class="list-unstyled d-flex g-3 flex-wrap">
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure1} ${data[0].strIngredient1}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure2} ${data[0].strIngredient2}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure3} ${data[0].strIngredient3}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure4} ${data[0].strIngredient4}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure5} ${data[0].strIngredient5}</li>
                            <li class="m-2 p-1 alert alert-info" >${data[0].strMeasure6} ${data[0].strIngredient6}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure7} ${data[0].strIngredient7}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure8} ${data[0].strIngredient9}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure10} ${data[0].strIngredient10}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure11} ${data[0].strIngredient11}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure12} ${data[0].strIngredient12}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure13} ${data[0].strIngredient13}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure14} ${data[0].strIngredient14}</li>
                        </ul>
                        <h3 class="text-white mb-3">Tags :</h3>
                        <p class="m-2 p-1 alert alert-danger d-inline">${data[0].strTags}</p>
                        <div class="d-flex mt-4">
                            <a href="${data[0].strSource}" class="m-2 px-3 py-2 btn btn-success">Source</a>
                            <a href="${data[0].strYoutube}" class="m-2 px-3 py-2 btn btn-danger">Youtube</a>
                        </div>
                       
                    </div>
         
            `
        document.getElementById('mealCategoryDetailsBody').innerHTML=box;
        mealCategorydetails.classList.replace('d-none','d-block')
        nameCategory.classList.replace('d-block','d-none')
    }
//_________________________________________________________________________

//INGREDIENTS  
async function getIngredients(){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    var data = await result.json();
    displayIngredients(data.meals);
}
getIngredients();
function displayIngredients(data){
    let box='';
    for(var i=0 ; i<20 ; i++){
        let des = data[i].strDescription;
        let myDes = des.slice(0,120)
        box +=`
        <div class="col-md-3 ">
            <div class="layerr text-center p-3" nameIn="${data[i].strIngredient}">
                <i class="fa-solid fa-drumstick-bite fs-1" nameIn="${data[i].strIngredient}"></i>
                <h3 class="pt-2 text-white" nameIn="${data[i].strIngredient}">${data[i].strIngredient}</h3>
                <div class="w-100"> <p class="ides" nameIn="${data[i].strIngredient}">${myDes}...</p> </div>
            </div>
    </div>
        `
    }
    document.getElementById('ingredientsbody').innerHTML=box;
}
let homeIngredients =document.getElementById('homeIngredients');
let nameIngredient =document.getElementById('nameIngredient');
document.addEventListener('click',function(e){
    let clickedName= e.target.getAttribute('nameIn')
    if(clickedName==null){
        return 0;
    }else{
        getAllMealOfIngredientsName(clickedName)
    }
    })
async function getAllMealOfIngredientsName(clickedName){
        var result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${clickedName}`);
            var data = await result.json();
            displayAllMealOfIngredientsName(data.meals);
    }
function displayAllMealOfIngredientsName(data){
        let box='';
        for(var i=0 ; i<data.length ; i++){
            box +=`
            <div class="col-md-3">
            <div class="imagHome rounded-3" id="imagHome">
                <img src="${data[i].strMealThumb}" alt="" class="w-100 " >
                <div class="layer d-flex align-items-center" id_Ingredientdetails=${data[i].idMeal}>
                    <h3 class="ps-2" id_Ingredientdetails=${data[i].idMeal}>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById('bodyOfNameIngredient').innerHTML=box;
        homeIngredients.classList.replace('d-block','d-none');
        nameIngredient.classList.replace('d-none','d-block');
    }
let mealIngredientdetails =document.getElementById('mealIngredientdetails');
document.addEventListener('click',function(e){
    let clickedId= e.target.getAttribute('id_Ingredientdetails')
    if(clickedId==null){
        return 0;
    }else{
        getDetailsMealOfIngredientsId(clickedId)
    }
    })
async function getDetailsMealOfIngredientsId(clickedId){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedId}`);
        var data = await result.json();
        displayDetailsOfIngredientsId(data.meals);
    }
function displayDetailsOfIngredientsId(data){
        let box='';
            box +=`
            <div class="col-md-4">
                        <div class="imgDetails ">
                            <img src="${data[0].strMealThumb}" alt="" class="w-100 rounded-3">
                            <h2 class="text-white">${data[0].strMeal}</h2>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h2 class="text-white">Instructions</h2>
                        <p class="text-white">${data[0].strInstructions}</p>
                        <h3 class="text-white">Area: ${data[0].strArea}</h3>
                        <h3 class="text-white">Category: ${data[0].strCategory}</h3>
                        <h3 class="text-white">Recipes:</h3>
                        <ul class="list-unstyled d-flex g-3 flex-wrap">
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure1} ${data[0].strIngredient1}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure2} ${data[0].strIngredient2}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure3} ${data[0].strIngredient3}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure4} ${data[0].strIngredient4}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure5} ${data[0].strIngredient5}</li>
                            <li class="m-2 p-1 alert alert-info" >${data[0].strMeasure6} ${data[0].strIngredient6}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure7} ${data[0].strIngredient7}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure8} ${data[0].strIngredient9}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure10} ${data[0].strIngredient10}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure11} ${data[0].strIngredient11}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure12} ${data[0].strIngredient12}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure13} ${data[0].strIngredient13}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure14} ${data[0].strIngredient14}</li>
                        </ul>
                        <h3 class="text-white mb-3">Tags :</h3>
                        <p class="m-2 p-1 alert alert-danger d-inline">${data[0].strTags}</p>
                        <div class="d-flex mt-4">
                            <a href="${data[0].strSource}" class="m-2 px-3 py-2 btn btn-success">Source</a>
                            <a href="${data[0].strYoutube}" class="m-2 px-3 py-2 btn btn-danger">Youtube</a>
                        </div>
                       
                    </div>
         
            `
        document.getElementById('mealIngredientDetailsBody').innerHTML=box;
        mealIngredientdetails.classList.replace('d-none','d-block')
        nameIngredient.classList.replace('d-block','d-none')
    }
//_____________________________________________________________________________
// AREA   

async function getArea(){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    var data = await result.json();
    console.log(data);
    displayArea(data.meals);
}
getArea();
function displayArea(data){
    let box='';
    for(var i=0 ; i<data.length ; i++){
        box +=`
        <div class="col-md-3">
            <div class="layerr text-center" areaName="${data[i].strArea}">
                <i class="fa-solid fa-house-laptop fs-1" areaName="${data[i].strArea}"></i>
                <h3 class="pt-2" areaName="${data[i].strArea}">${data[i].strArea}</h3>
            </div>
    </div>
        `
    }
    document.getElementById('bodyArea').innerHTML=box;
}
let homeArea=document.getElementById('homeArea');
let nameArea =document.getElementById('nameArea');
document.addEventListener('click',function(e){
    let clickedName= e.target.getAttribute('areaName')
    if(clickedName==null){
        return 0;
    }else{
        getDetailsMealOfAreasName(clickedName)
    }
    })
async function getDetailsMealOfAreasName(clickedName){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${clickedName}`);
    var data = await result.json();
    displayAllMealOfAreasName(data.meals);
    }
function displayAllMealOfAreasName(data){
        let box='';
        for(var i=0 ; i<data.length ; i++){
            box +=`
            <div class="col-md-3">
            <div class="imagHome rounded-3" id="imagHome">
                <img src="${data[i].strMealThumb}" alt="" class="w-100 " >
                <div class="layer d-flex align-items-center" id_Areadetails='${data[i].idMeal}'>
                    <h3 class="ps-2" id_Areadetails='${data[i].idMeal}'>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById('bodyOfNameArea').innerHTML=box;
        homeArea.classList.replace('d-block','d-none');
        nameArea.classList.replace('d-none','d-block');
    }
let mealAreadetails=document.getElementById('mealAreadetails');
document.addEventListener('click',function(e){
    let clickedId= e.target.getAttribute('id_Areadetails')
    if(clickedId==null){
        return 0;
    }else{
        getDetailsMealOfAreaId(clickedId)
    }
    })
async function getDetailsMealOfAreaId(clickedId){
        var result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedId}`);
        var data = await result.json();
        displayDetailsOfAreaId(data.meals);
        }
function displayDetailsOfAreaId(data){
            let box='';
                box +=`
                <div class="col-md-4">
                            <div class="imgDetails ">
                                <img src="${data[0].strMealThumb}" alt="" class="w-100 rounded-3">
                                <h2 class="text-white">${data[0].strMeal}</h2>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h2 class="text-white">Instructions</h2>
                            <p class="text-white">${data[0].strInstructions}</p>
                            <h3 class="text-white">Area: ${data[0].strArea}</h3>
                            <h3 class="text-white">Category: ${data[0].strCategory}</h3>
                            <h3 class="text-white">Recipes:</h3>
                            <ul class="list-unstyled d-flex g-3 flex-wrap">
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure1} ${data[0].strIngredient1}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure2} ${data[0].strIngredient2}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure3} ${data[0].strIngredient3}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure4} ${data[0].strIngredient4}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure5} ${data[0].strIngredient5}</li>
                                <li class="m-2 p-1 alert alert-info" >${data[0].strMeasure6} ${data[0].strIngredient6}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure7} ${data[0].strIngredient7}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure8} ${data[0].strIngredient9}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure10} ${data[0].strIngredient10}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure11} ${data[0].strIngredient11}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure12} ${data[0].strIngredient12}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure13} ${data[0].strIngredient13}</li>
                                <li class="m-2 p-1 alert alert-info">${data[0].strMeasure14} ${data[0].strIngredient14}</li>
                            </ul>
                            <h3 class="text-white mb-3">Tags :</h3>
                            <p class="m-2 p-1 alert alert-danger d-inline">${data[0].strTags}</p>
                            <div class="d-flex mt-4">
                                <a href="${data[0].strSource}" class="m-2 px-3 py-2 btn btn-success">Source</a>
                                <a href="${data[0].strYoutube}" class="m-2 px-3 py-2 btn btn-danger">Youtube</a>
                            </div>
                           
                        </div>
             
                `
            document.getElementById('mealAreaDetailsBody').innerHTML=box;
            mealAreadetails.classList.replace('d-none','d-block')
            nameArea.classList.replace('d-block','d-none')
        }
// //_____________________________________________________________________________
// // // SEARCH
let inputLitter = document.getElementById('inputLitter');
let inputName =document.getElementById('inputName');

inputName.addEventListener('keyup',function(){
 let nameMeal= inputName.value;
 searchByName(nameMeal)
})
async function searchByName(nameMeal){
    var result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nameMeal}`);
    var data = await result.json();
    console.log(data.meals);
    displayMealSearch(data.meals);
}
inputLitter.addEventListener('keyup',function(){
    let litterMeal= inputLitter.value;
    searchByLitter(litterMeal)
   })
async function searchByLitter(litterMeal){
       var result = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${litterMeal}`);
       var data = await result.json();
       console.log(data.meals);
       displayMealSearch(data.meals);
   }
function displayMealSearch(data){
    let box='';
    for(var i=0 ; i<data.length ; i++){
        box +=`
        <div class="col-md-3">
        <div class="imagHome rounded-3" id="imagHome">
            <img src="${data[i].strMealThumb}" alt="" class="w-100 " >
            <div class="layer d-flex align-items-center" searchId="${data[i].idMeal}">
                <h3 class="ps-2" searchId="${data[i].idMeal}">${data[i].strMeal}</h3>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('bodySearch').innerHTML= box;
}
let searchDetails =document.getElementById('searchDetails');
let searchInputs =document.getElementById('searchInputs')
let homeSearch = document.getElementById('homeSearch')
document.addEventListener('click',function(e){
    let clickedId= e.target.getAttribute('searchId');
    if(clickedId==null){
        return 0;
    }else{
        getSearchDetails(clickedId)
    }
    })
async function getSearchDetails(clickedId){
        var result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedId}`);
        var data = await result.json();
        displaySearchDetails(data.meals);
    }
function displaySearchDetails(data){
        let box='';
            box +=`
            <div class="col-md-4">
                        <div class="imgDetails ">
                            <img src="${data[0].strMealThumb}" alt="" class="w-100 rounded-3">
                            <h2 class="text-white">${data[0].strMeal}</h2>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h2 class="text-white">Instructions</h2>
                        <p class="text-white">${data[0].strInstructions}</p>
                        <h3 class="text-white">Area: ${data[0].strArea}</h3>
                        <h3 class="text-white">Category: ${data[0].strCategory}</h3>
                        <h3 class="text-white">Recipes:</h3>
                        <ul class="list-unstyled d-flex g-3 flex-wrap">
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure1} ${data[0].strIngredient1}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure2} ${data[0].strIngredient2}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure3} ${data[0].strIngredient3}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure4} ${data[0].strIngredient4}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure5} ${data[0].strIngredient5}</li>
                            <li class="m-2 p-1 alert alert-info" >${data[0].strMeasure6} ${data[0].strIngredient6}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure7} ${data[0].strIngredient7}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure8} ${data[0].strIngredient9}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure10} ${data[0].strIngredient10}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure11} ${data[0].strIngredient11}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure12} ${data[0].strIngredient12}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure13} ${data[0].strIngredient13}</li>
                            <li class="m-2 p-1 alert alert-info">${data[0].strMeasure14} ${data[0].strIngredient14}</li>
                        </ul>
                        <h3 class="text-white mb-3">Tags :</h3>
                        <p class="m-2 p-1 alert alert-danger d-inline">${data[0].strTags}</p>
                        <div class="d-flex mt-4">
                            <a href="${data[0].strSource}" class="m-2 px-3 py-2 btn btn-success">Source</a>
                            <a href="${data[0].strYoutube}" class="m-2 px-3 py-2 btn btn-danger">Youtube</a>
                        </div>
                       
                    </div>
         
            `
        document.getElementById('searchDetailsBody').innerHTML=box;
        searchDetails.classList.replace('d-none','d-block')
        searchInputs.classList.replace('d-block','d-none')
        homeSearch.classList.replace('d-block','d-none')
    }
//___________________________________________________________________________________


