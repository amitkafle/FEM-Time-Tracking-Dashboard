const timeframes = document.querySelector("ul");
const lis = document.querySelectorAll(".timeframes");


// Event listener to change data for different timeframes
timeframes.addEventListener("click", e => {
    lis.forEach(li => {
        if (li.classList.contains("active")) {
            li.classList.remove("active");
        }
    })
    let activeTime = e.target.getAttribute("data-time");
    e.target.classList.add("active");
    updateUI(activeTime);
})

// Content for first load
document.addEventListener("DOMContentLoaded", e => {
    updateUI("daily");
})


// update ui function to update data based on various timeframes
const updateUI = (timeFrame) => {
    const tiles = document.querySelector(".tiles");
    let tile = ``;
    if (timeFrame == "daily") {
        dailyUI(tiles, tile);
    }

    if(timeFrame == "weekly"){
        weeklyUI(tiles, tile);
    }

    if(timeFrame == "monthly"){
        monthlyUI(tiles, tile);
    }
}

// daily data
const dailyUI = (tiles, tile) => {
    daily()
        .then(res => 
            {
                res.forEach(item => {
                    const title = item.title.toLowerCase().split(" ").join("");
                    tile = template(tile, title, item);          
                        })
                tiles.innerHTML = tile;
            })
            .catch(err => console.log(err.message));
}

//weekly data
const weeklyUI = (tiles, tile) => {
    weekly()
        .then(res => 
            {
                res.forEach(item => {
                    const title = item.title.toLowerCase().split(" ").join("");
                    tile = template(tile, title, item);     
                        })
                tiles.innerHTML = tile;
            })
            .catch(err => console.log(err.message));
}

//monthly data
const monthlyUI = (tiles, tile) => {
    monthly()
    .then(res => 
        {
            res.forEach(item => {
                const title = item.title.toLowerCase().split(" ").join("");
                         tile = template(tile, title, item);
                    })
            tiles.innerHTML = tile;
        })
        .catch(err => console.log(err.message));
}


//template for each tile
const template = (tile, title, item) => {
    tile += `<div class="tile" data-title="${title}">

                <div class="tileBack ${title}">
                </div>

                <div class="tileFront">
                    <div class="tileHead">
                        <p class="tileTitle">${item.title}</p>
                        <i class="fas fa-ellipsis-h tilePointer"></i>
                    </div>
                    <div class="statDiv">
                        <p class="currentData">${item.current}hrs</p>
                        <p class="previousData">${item.previousTime} - ${item.previous}hrs</p>
                    </div>
                </div>
                
            </div>`;  

  return tile;                     
}

