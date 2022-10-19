let reviews = [
    {
        id: 1,
        name: "Екатерина",
        text: "Интересное место, очень атмосферное, приветливые официанты, красивые и необычные десерты. Офицыант Дарья подобрала для нас десерты, учитывая наши предпочтения. Рекомендовано для посещения.",
        data: "12/10/22",
        image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
    },
    {
        id: 2,
        name: "Иван",
        text: "Большой выбор завтраков! Безглютеновые десерты, без сахара - это прекрасно. Были семьей из 5 человек и всем все понравилось. Обслуживание ненавязчивое и легкое, есть детская комната. Сочетание вкуса, десертов, атмосферы и красоты, а также приятный бонус - кофе.",
        data: "2/03/21",
        image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",

    },
    {
        id: 3,
        name: "Ангелина",
        text: "Заходили с семьей в ваше заведение несколько дней назад по совету друзей. Мы были очень приятно удивлены. На входе нас встретил приятный молодой человек, предложил повесить верхнюю одежду в гардероб, проводил до столика. Официант Дарья была очень вежлива и улыбчива, помогла определиться с едой и напитками.Обязательно вернёмся ещё!",
        data: "11/11/20",
        image: "https://catherineasquithgallery.com/uploads/posts/2021-02/1614513667_18-p-devushka-v-belom-na-belom-fone-22.jpg",


    },
]


var i = 0
reviewContainer.innerHTML =  
` 
<div class='reviwe_background'>
        <p class="reviwe_background__text">${reviews[i].text}</p>
        <div>                
            <p class="reviwe_background__name">${reviews[i].name}</p>
            <p class="reviwe_background__date">${reviews[i].data}</p>
        </div>     
</div>  
`
function forward (){
    i++
    if( i== reviews.length){
        i=0
    }
        reviewContainer.innerHTML =  
        ` 
        <div class='reviwe_background'>
                <p class="reviwe_background__text">${reviews[i].text}</p>
                <div>                
                    <p class="reviwe_background__name">${reviews[i].name}</p>
                    <p class="reviwe_background__date">${reviews[i].data}</p>
                </div>     
        </div>  
        `
        
      
}

function back (){
    i--

    if( i== -1){
        i= [reviews.length -1]

        
    }
        reviewContainer.innerHTML =  
        ` 
        <div class='reviwe_background'>
                <p class="reviwe_background__text">${reviews[i].text}</p>
                <div>                
                    <p class="reviwe_background__name">${reviews[i].name}</p>
                    <p class="reviwe_background__date">${reviews[i].data}</p>
                </div>     
        </div>  
        `
        
      
}

function random() {
    var randomIndex = Math.floor(Math.random() * reviews.length);
    i = randomIndex
    reviewContainer.innerHTML =  
    ` 
    <div class='reviwe_background'>
            <p class="reviwe_background__text">${reviews[i].text}</p>
            <div>                
                <p class="reviwe_background__name">${reviews[i].name}</p>
                <p class="reviwe_background__date">${reviews[i].data}</p>
            </div>     
    </div>  
    `
  }
/*не поняла как сделать так, чтобы рандомные индексы не повторялись*/
const forwardButton = document.getElementById('forward')
forwardButton.addEventListener("click",forward)
const backdButton = document.getElementById('back')
backdButton.addEventListener("click",back)
const randomButton = document.getElementById('random')
randomButton.addEventListener("click",random)



