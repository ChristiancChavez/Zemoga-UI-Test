
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

let percentageUpVotes = 0;
let percentageDownVotes = 0;
let upVotes = 0;
let downVotes = 0;
let totalVotes = 0;


addBorderThumb = (e) => {
    idThumb = e.target.id;
    const thumbsVoteSelectGrand = document.getElementById(idThumb).parentElement.parentElement;
    const thumbsVoteSelectParent = document.getElementById(idThumb).parentElement;

    thumbsVoteSelectGrand.childNodes[0].classList.remove('border');
    thumbsVoteSelectGrand.childNodes[1].classList.remove('border');

    thumbsVoteSelectGrand.childNodes[0].childNodes[0].id  === idThumb ? thumbsVoteSelectParent.classList.add('border') : thumbsVoteSelectParent.classList.add('border');
    
    return idThumb;
}

addVoteNow = (e) => {
    let voteIdThumb = idThumb.slice(0,-1);
    const btnVoteId = e.target.id;
    const btnVoteSelectParent = document.getElementById(btnVoteId).parentElement;
    const text = e.target.textContent;
    const textCharacterReview = btnVoteSelectParent.previousSibling;
    const percentageProgress = btnVoteSelectParent.nextSibling;
    const principalTextCharacter = 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero';
    let currentWidthUp;

    text === 'Vote again' ? e.target.innerHTML = 'vote now' : e.target.innerHTML = 'Vote again';
    textCharacterReview.textContent.length > 21 ? textCharacterReview.innerHTML = 'Thank you for voting!' : textCharacterReview.innerHTML = principalTextCharacter ;
    
    btnVoteSelectParent.childNodes[0].classList.remove('border');
    btnVoteSelectParent.childNodes[1].classList.remove('border');
    btnVoteSelectParent.childNodes[0].classList.toggle('hidden');
    btnVoteSelectParent.childNodes[1].classList.toggle('hidden');


    if(voteIdThumb === 'upVote'){
        upVotes += 1;
        console.log(upVotes);
        // resultUpVotes < 100 ? resultUpVotes += 1 : resultUpVotes = 100;
        // resultDownVotes > 0 ? resultDownVotes -= 1 : resultDownVotes = 0;

        
    } else {
        downVotes += 1;
        console.log(downVotes);
        // resultDownVotes < 100 ? resultDownVotes += 1 : resultDownVotes = 100;
        // resultUpVotes > 0 ? resultUpVotes -= 1 : resultUpVotes = 0;
    }

    totalVotes = downVotes + upVotes;
    console.log(totalVotes, 'total votes');
    percentageUpVotes = Math.floor((upVotes*100)/totalVotes);
    percentageDownVotes = Math.floor((downVotes*100)/totalVotes);
    
    currentWidthUp = `${percentageUpVotes.toString()}%`;
    percentageProgress.childNodes[0].style.width = currentWidthUp;
    percentageProgress.childNodes[0].childNodes[1].innerHTML = currentWidthUp;
    percentageProgress.childNodes[1].childNodes[0].innerHTML = `${percentageDownVotes.toString()}%`;

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
    spanVotesUp.addEventListener("click", addBorderThumb);
    thumbsVoteDown.classList.add('thumbs__thumb', 'thumbs__thumb--down', 'vote');
    spanVotesDown.classList.add('thumbs__logo', 'thumbs__logo--down');  
    spanVotesDown.setAttribute("id", `downVote${i + 1}`);
    spanVotesDown.addEventListener("click", addBorderThumb);  
    characterVotesAdv.classList.add('character-votes__adv'); 
    characterVotesAdv.addEventListener("click", addVoteNow);
    characterVotesAdv.innerHTML = 'Vote now';
    characterVotesAdv.setAttribute("id", `voteNow${i + 1}`);
    voting.classList.add('voting'); 
    thumbsVotingUp.classList.add('thumbs__thumb', 'thumbs__thumb--up', 'progress'); 
    thumbsVotingUp.style.width = '60%';
    spanVotingUp.classList.add('thumbs__logo'); 
    thumbsVotingDown.classList.add('thumbs__thumb', 'thumbs__thumb--down', 'progress-left'); 
    spanVotingDown.classList.add('thumbs__logo', 'thumbs__logo--down'); 
    numberVotingUp.classList.add('voting__number'); 
    numberVotingUp.innerHTML = '0%';
    numberVotingDown.innerHTML = '0%';
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

    
