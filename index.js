
const imagesCharacters = [
    {name:'Kanye West', image:'./Images/kanye.png', category:'Entertainment'},
    {name:'Mark Suckenberg', image:'./Images/kanye..png', category:'Bussines'},
    {name:'Cristina Fernández de Kirchner', image:'./Images/cristina.png', category:'Politics'},
    {name:'Malala Youzafzai', image:'./Images/malala.png', category:'Entertainment'},
]

let mainCharacters = document.getElementById('mainCharacters');
for(i=0; i < 3; i++){
    const characters = imagesCharacters[i];
    console.log(foursome);

    let character = document.createElement('div');
    character.classList.add('character');

    let characterProfile = document.createElement('div');
    characterProfile.classList.add('character-profile');

    let thumbsThumb = document.createElement('div');
    thumbsThumb.classList.add('thumbs__thumb thumbs__thumb--up small');
    
    let spanThumbs = document.createElement('span');
    spanThumbs.classList.add('thumbs__logo');

    let characterProfileInfo = document.createElement('div');
    characterProfileInfo.classList.add('character-profile__info');

    let characterProfileInfoName = document.createElement('h2');
    characterProfileInfoName.innerHTML=`${characters.name}`;

    let ProfileReview = document.createElement('span');
    characterProfileInfo.innerHTML= `1 month ago in ${characters.category}`

    let characterReview = document.createElement('p');
    characterReview.classList.add('character__review');
    characterReview.innerHTML=`Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero`;

    let characterVotes = document.createElement('div');
    characterVotes.classList.add('character-votes');

    let thumbsVote = document.createElement('div');
    thumbsVote.classList.add('thumbs__thumb thumbs__thumb--up vote');


    mainCharacters.appendChild(character);
    character.appendChild(characterProfile);
    characterProfile.appendChild(thumbsThumb);
    thumbsThumb.appendChild(spanThumbs);
    character.appendChild(characterProfileInfo);
    characterProfileInfo.appendChild(characterProfileInfoName);
    characterProfileInfo.appendChild(ProfileReview);
    character.appendChild(characterReview);



}

{/* <div class="character">
        <div class="character-profile">
            <div class="thumbs__thumb thumbs__thumb--up small "><span class="thumbs__logo" id="thumb"></span></div>
            <div class="character-profile__info">
                <h2>Kanye West</h2>
                <span><b>1 month ago</b>in Entertainment</span>
            </div>
        </div>
        <p class="character__review">Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero</p>
        <div class="character-votes">
            <div class="thumbs__thumb thumbs__thumb--up vote"><span class="thumbs__logo"></span></div>
            <div class="thumbs__thumb thumbs__thumb--down vote"><span class="thumbs__logo thumbs__logo--down"></span></div>
            <span class="character-votes__adv">Vote now</span>
        </div>
        <div class="voting">
            <div class="thumbs__thumb thumbs__thumb--up"><span class="thumbs__logo"></span></div>
            <div class="thumbs__thumb thumbs__thumb--down"><span class="thumbs__logo thumbs__logo--down"></span></div>
        </div>
    </div> 
*/}