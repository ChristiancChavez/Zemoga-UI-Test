
const characters = [
    {name:'Kanye West', image:'./Images/kanye.png', category:'Entertainment'},
    {name:'Mark Suckenberg', image:'./Images/kanye.png', category:'Bussines'},
    {name:'Cristina Fernández de Kirchner', image:'./Images/cristina.png', category:'Politics'},
    {name:'Malala Youzafzai', image:'./Images/malala.png', category:'Entertainment'},
];

let mainCharacters = document.getElementById('mainCharacters');
let character;
let characterProfile;
let thumbsThumb;
let spanThumbs;
let characterProfileInfo;
let characterProfileInfoName;
let profileReview;
let characterReview;
let characterVotes;
let thumbsVoteUp;
let spanVotesUp;
let thumbsVoteDown;
let spanVotesDown;
let characterVotesAdv;
let voting;
let thumbsVotingUp;
let spanVotingUp;
let thumbsVotingDown;
let spanVotingDown;
let numberVotingUp;
let numberVotingDown;
let idThumb;

getIdThumbVote = (e) => {
    idThumb = e.target.id;

    thumbsVoteUp.classList.remove('border');
    thumbsVoteDown.classList.remove('border')

    idThumb === 'upVote' ? thumbsVoteUp.classList.add('border') : thumbsVoteDown.classList.add('border');

    return idThumb;
}

addVoteNow = (e) => {
    let voteIdThumb = idThumb;
    let widthVotingUp = 60;
    let widthVotingDown = 0;
    const text = e.target.textContent;
    const textCharacterReview = characterReview.textContent;
    const principalTextCharacter = 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero';
    let currentWidthUp;
    text === 'Vote again' ? e.target.innerHTML = 'vote now' : e.target.innerHTML = 'Vote again';
    textCharacterReview.length > 21 ? characterReview.innerHTML = 'Thank you for voting!' : characterReview.innerHTML = principalTextCharacter ;
    thumbsVoteUp.classList.remove('border');
    thumbsVoteDown.classList.remove('border');
    thumbsVoteUp.classList.toggle('hidden');
    thumbsVoteDown.classList.toggle('hidden');

    if(voteIdThumb === 'upVote'){
        widthVotingUp < 100 ? widthVotingUp ++ : widthVotingUp = 100;
        currentWidthUp = `${widthVotingUp.toString()}%`;
        thumbsVotingUp.style.width = currentWidthUp;
        numberVotingUp.innerHTML = currentWidthUp;
        widthVotingDown =  100 - widthVotingUp;
        numberVotingDown.innerHTML = widthVotingDown;
    } else {

    }

}



characters.map((people, i) => {

    character = document.createElement('div');
    characterProfile = document.createElement('div');
    thumbsThumb = document.createElement('div');
    spanThumbs = document.createElement('span');
    characterProfileInfo = document.createElement('div');
    characterProfileInfoName = document.createElement('h2');
    profileReview = document.createElement('span');
    characterReview = document.createElement('p');
    characterVotes = document.createElement('div');
    thumbsVoteUp = document.createElement('div');
    spanVotesUp = document.createElement('span');
    thumbsVoteDown = document.createElement('div');
    spanVotesDown = document.createElement('span');
    characterVotesAdv = document.createElement('span');
    voting = document.createElement('div');
    thumbsVotingUp = document.createElement('div');
    spanVotingUp = document.createElement('span');
    thumbsVotingDown = document.createElement('div');
    spanVotingDown = document.createElement('span');
    numberVotingUp = document.createElement('span');
    numberVotingDown = document.createElement('span');

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
    spanVotesUp.setAttribute("id", `upVote${i + 1}`);
    spanVotesUp.addEventListener("click", getIdThumbVote);
    thumbsVoteDown.classList.add('thumbs__thumb', 'thumbs__thumb--down', 'vote');
    spanVotesDown.classList.add('thumbs__logo', 'thumbs__logo--down');  
    spanVotesDown.setAttribute("id", "downVote");
    spanVotesDown.addEventListener("click", getIdThumbVote);  
    characterVotesAdv.classList.add('character-votes__adv'); 
    characterVotesAdv.addEventListener("click", addVoteNow);
    characterVotesAdv.innerHTML = 'Vote now';
    voting.classList.add('voting'); 
    thumbsVotingUp.classList.add('thumbs__thumb', 'thumbs__thumb--up', 'progress'); 
    thumbsVotingUp.style.width = '60%';
    spanVotingUp.classList.add('thumbs__logo'); 
    thumbsVotingDown.classList.add('thumbs__thumb', 'thumbs__thumb--down', 'progress-left'); 
    spanVotingDown.classList.add('thumbs__logo', 'thumbs__logo--down'); 
    numberVotingUp.classList.add('voting__number'); 
    numberVotingUp.innerHTML = '60%';
    numberVotingDown.innerHTML = '40%';
    numberVotingDown.classList.add('voting__number', 'voting__number--right'); 

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
    thumbsVotingUp.appendChild(numberVotingUp);
    voting.appendChild(thumbsVotingDown);
    thumbsVotingDown.appendChild(numberVotingDown);
    thumbsVotingDown.appendChild(spanVotingDown);

});

    
