
// pre written constants
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
// random value
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
// story text constants
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertx = [ "Willy the Goblin","Big Daddy","Father Christmas"];
let inserty = ["the soup kitchen","Disneyland","the White House"];
let insertz = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {

  // init of the place holder vars
  let newStory = storyText;
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);
  
  // replace placeholders
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name)

  }

  if(document.getElementById("uk").checked) {
    // conversion
    const weight = Math.round(300/4);
    const temperature =  Math.round((92-32) * 5/9);
    newStory = newStory.replaceAll("300", weight);
    newStory = newStory.replaceAll("94", temperature);
    newStory = newStory.replaceAll("pounds", "stone");
    newStory = newStory.replaceAll("fahrenheit", "centigrade");

  }

  


  story.textContent = newStory;
  story.style.visibility = 'visible';

 
}



