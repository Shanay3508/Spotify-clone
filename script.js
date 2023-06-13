console.log("welcome to spotify")
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    { songName:"pyaar hota", filePath: "songs/1.mp3",coverPath:"covers/1.png" },
    { songName:"Kesariya", filePath: "songs/2.mp3",coverPath:"covers/2.png" },
    { songName:"Enna Sona", filePath: "songs/3.mp3",coverPath:"covers/3.png" },
    { songName:"Jai Shri Ram", filePath: "songs/4.mp3",coverPath:"covers/4.png" },
    { songName:"Salame-Ishq", filePath: "songs/1.mp3",coverPath:"covers/5.jpg" },
    { songName:"Salame-Ishq", filePath: "songs/1.mp3",coverPath:"covers/6.jpg" },
    { songName:"Salame-Ishq", filePath: "songs/1.mp3",coverPath:"covers/7.jpg" },
    { songName:"Salame-Ishq", filePath: "songs/1.mp3",coverPath:"covers/8.jpg" },
    { songName:"Salame-Ishq", filePath: "songs/1.mp3",coverPath:"covers/9.jpg" },
    { songName:"Salame-Ishq", filePath: "songs/1.mp3",coverPath:"covers/10.jpg" }
]
songItem.forEach((element,i) => {
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songInfo")[0].innerText=songs[i].songName;
    
});
//Handle play pause click
masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play')
        gif.style.opacity=0;

    }

})
//audioElement.play;
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    progressbar.value=progress;
});

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songPlaysm')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play')
    })
}
Array.from(document.getElementsByClassName('songPlaysm')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause')
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause')

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause')

})