
const characters = [
    {name:'Kanye West', image:'./Images/kanye.png', category:'Entertainment'},
    {name:'Mark Suckenberg', image:'./Images/kanye..png', category:'Bussines'},
    {name:'Cristina Fernández de Kirchner', image:'./Images/cristina.png', category:'Politics'},
    {name:'Malala Youzafzai', image:'./Images/malala.png', category:'Entertainment'},
]

let mainCharacters = document.getElementById('mainCharacters');
for(i=0; i <= 3; i++){
    const people = characters[i];
    console.log(people)

    let character = document.createElement('div');
    character.classList.add('character');
    character.style.background = `url(${people.image})`;

    let characterProfile = document.createElement('div');
    characterProfile.classList.add('character-profile');

    let thumbsThumb = document.createElement('div');
    thumbsThumb.classList.add('thumbs__thumb', 'thumbs__thumb--up', 'small');
    
    let spanThumbs = document.createElement('span');
    spanThumbs.classList.add('thumbs__logo');

    let characterProfileInfo = document.createElement('div');
    characterProfileInfo.classList.add('character-profile__info');

    let characterProfileInfoName = document.createElement('h2');
    characterProfileInfoName.innerHTML=`${people.name}`;

    let profileReview = document.createElement('span');
    profileReview.innerHTML= `1 month ago in ${people.category}`

    let characterReview = document.createElement('p');
    characterReview.classList.add('character__review');
    characterReview.innerHTML=`Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero`;

    let characterVotes = document.createElement('div');
    characterVotes.classList.add('character-votes');

    let thumbsVoteUp = document.createElement('div');
    thumbsVoteUp.classList.add('thumbs__thumb', 'thumbs__thumb--up', 'vote');

    let spanVotesUp = document.createElement('span');
    spanVotesUp.classList.add('thumbs__logo');

    let thumbsVoteDown = document.createElement('div');
    thumbsVoteDown.classList.add('thumbs__thumb', 'thumbs__thumb--down', 'vote');

    let spanVotesDown = document.createElement('span');
    spanVotesDown.classList.add('thumbs__logo', 'thumbs__logo--down');    

    let characterVotesAdv = document.createElement('span');
    characterVotesAdv.classList.add('character-votes__adv'); 
    characterVotesAdv.innerHTML = 'Vote now';

    let voting = document.createElement('div');
    voting.classList.add('voting'); 

    let thumbsVotingUp = document.createElement('div');
    thumbsVotingUp.classList.add('thumbs__thumb', 'thumbs__thumb--up'); 

    let spanVotingUp = document.createElement('span');
    spanVotingUp.classList.add('thumbs__logo'); 

    let thumbsVotingDown = document.createElement('div');
    thumbsVotingDown.classList.add('thumbs__thumb', 'thumbs__thumb--down'); 

    let spanVotingDown = document.createElement('span');
    spanVotingDown.classList.add('thumbs__logo', 'thumbs__logo--down'); 



    mainCharacters.appendChild(character);
    character.appendChild(characterProfile);
    characterProfile.appendChild(thumbsThumb);
    thumbsThumb.appendChild(spanThumbs);
    character.appendChild(characterProfileInfo);
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
}
