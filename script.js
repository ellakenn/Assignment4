var button = $('button')
var poemDiv = $("#poemDiv")
var author = $("#author")

button.on("click", generatePoem)

function generatePoem() {
  $("h3").text("Spring Poem")
  var spring = "The spring haze. The scent already in the air. The moon and ume. 'Thanks for all'. Expressing my gratitude to blossoms at the parting."
  $("p").text(spring)
  $("h4").text("-Matsuo Basho")

  $("body").css('background-image', 'none');
  $("body").css("background-color", "pink");
  $(".container").css("background-color", "#fae1dd");

}
