
const characters = [
    {name:'Kanye West', image:'./Images/kanye.png', category:'Entertainment'},
    {name:'Mark Suckenberg', image:'./Images/kanye..png', category:'Bussines'},
    {name:'Cristina Fernández de Kirchner', image:'./Images/cristina.png', category:'Politics'},
    {name:'Malala Youzafzai', image:'./Images/malala.png', category:'Entertainment'},
]

let character = document.createElement('div');
let characterProfile = document.createElement('div');
let thumbsThumb = document.createElement('div');
let spanThumbs = document.createElement('span');
let characterProfileInfo = document.createElement('div');
let characterProfileInfoName = document.createElement('h2');
let profileReview = document.createElement('span');
let characterReview = document.createElement('p');
let characterVotes = document.createElement('div');
let thumbsVoteUp = document.createElement('div');
let spanVotesUp = document.createElement('span');
let thumbsVoteDown = document.createElement('div');
let spanVotesDown = document.createElement('span');
let characterVotesAdv = document.createElement('span');
let voting = document.createElement('div');
let thumbsVotingUp = document.createElement('div');
let spanVotingUp = document.createElement('span');
let thumbsVotingDown = document.createElement('div');
let spanVotingDown = document.createElement('span');


getIdThumbVote = (e) => {
    let idThumb = e.target.id;

    idThumb === 'upVote' ? thumbsVoteUp.classList.add('border') : thumbsVoteDown.classList.add('border')
    return idThumb;
}

addVoteNow = (e) => {
    const text = e.target.textContent;
    const textCharacterReview = characterReview.textContent;
    const principalTextCharacter = 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero';
    text === 'Vote again' ? e.target.innerHTML = 'vote now' : e.target.innerHTML = 'Vote again';
    textCharacterReview.length > 21 ? characterReview.innerHTML = 'Thank you for voting!' : characterReview.innerHTML = principalTextCharacter ;
    thumbsVoteUp.classList.remove('border');
    thumbsVoteDown.classList.remove('border');
    thumbsVoteUp.classList.toggle('hidden');
    thumbsVoteDown.classList.toggle('hidden');
}


let mainCharacters = document.getElementById('mainCharacters');
characters.map(people => {
    character.classList.add('character');
    character.style.background = `url(${people.image}) no-repeat center`;
    character.style.backgroundSize = '140% 130%'
    characterProfile.classList.add('character-profile');
    thumbsThumb.classList.add('thumbs__thumb', 'thumbs__thumb--up', 'small');
    spanThumbs.classList.add('thumbs__logo');
    characterProfileInfo.classList.add('character-profile__info');
    characterProfileInfoName.innerHTML=`${people.name}`;
    profileReview.innerHTML= `1 month ago in ${people.category}`
    characterReview.classList.add('character__review');
    characterReview.innerHTML=`Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero`;
    characterVotes.classList.add('character-votes');
    thumbsVoteUp.classList.add('thumbs__thumb', 'thumbs__thumb--up', 'vote');
    spanVotesUp.classList.add('thumbs__logo');
    spanVotesUp.setAttribute("id", "upVote");
    spanVotesUp.addEventListener("click", getIdThumbVote);
    thumbsVoteDown.classList.add('thumbs__thumb', 'thumbs__thumb--down', 'vote');
    spanVotesDown.classList.add('thumbs__logo', 'thumbs__logo--down');  
    spanVotesDown.setAttribute("id", "downVote");
    spanVotesDown.addEventListener("click", getIdThumbVote);  
    characterVotesAdv.classList.add('character-votes__adv'); 
    characterVotesAdv.addEventListener("click", addVoteNow);
    characterVotesAdv.innerHTML = 'Vote now';
    voting.classList.add('voting'); 
    thumbsVotingUp.classList.add('thumbs__thumb', 'thumbs__thumb--up'); 
    spanVotingUp.classList.add('thumbs__logo'); 
    thumbsVotingDown.classList.add('thumbs__thumb', 'thumbs__thumb--down'); 
    spanVotingDown.classList.add('thumbs__logo', 'thumbs__logo--down'); 

    mainCharacters.appendChild(character);
    character.appendChild(characterProfile);
    characterProfile.appendChild(thumbsThumb);
    thumbsThumb.appendChild(spanThumbs);
    characterProfile.appendChild(characterProfileInfo);
    characterProfileInfo.appendChild(characterProfileInfoName);
    characterProfileInfo.appendChild(profileReview);
    character.appendChild(characterReview);
    character.appendChild(characterVotes);
    characterVotes.appendChild(thumbsVoteUp);
    thumbsVoteUp.appendChild(spanVotesUp);
    characterVotes.appendChild(thumbsVoteDown);
    thumbsVoteDown.appendChild(spanVotesDown);
    characterVotes.appendChild(characterVotesAdv);
    character.appendChild(voting);
    voting.appendChild(thumbsVotingUp);
    thumbsVotingUp.appendChild(spanVotingUp);
    voting.appendChild(thumbsVotingDown);
    thumbsVotingDown.appendChild(spanVotingDown);
});

    
