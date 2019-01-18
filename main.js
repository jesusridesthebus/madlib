function createStory() {

    // grab inputs
    var nounInput = document.getElementById('noun');
    var adjectiveInput = document.getElementById('adjective');
    var noun2Input = document.getElementById('noun2');

    // get input values
    var noun = nounInput.value;
    var adjective = adjectiveInput.value;
    var noun2 = noun2Input.value;

    // create story (text + variables)
     var story = 'Story ' + noun + ' stuff '
      + adjective + ' things ' + noun2 + ' derp.'

    var final = document.getElementById('final')
    final.textContent = story;

      console.log(story);
    // display to browser
}
