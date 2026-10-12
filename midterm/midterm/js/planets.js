
$(function() {
 
    //Write your code below
    async function planets(){
    try{
        const response = await fetch("data/planets.json");
        const planets = await response.json();

        console.log("Using asycn-await function", planets);
        loadPlanets(planets);
    }catch(error){
        console.error("Unexpector error.", error);
    };
            
    planets();



   

       
    }

    function loadPlanets(planets){
   const target = document.querySelector("#fetch-planets-json");
   planets.forEach(planet => {
       target.innerHTML += `${planets.title} (${planets.year})<br>`;
    });
}

    fetch("data/planets.json")
   .then(response => response.json())
   .then((planets) => {
      console.log(planets);
      loadPlanets(planets);
   }).catch( (error) => {
      console.error("Fetch failed.", error);
   });

});
