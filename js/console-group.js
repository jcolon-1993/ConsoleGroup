var $form = $("#calculator");

// Runs when submit is pressed
$form.on("submit", function (e)
{
  e.preventDefault();

  // Show the button was clicked
  console.log("You clicked the submit button.");

  var width, height, area;
  width = $("#width").val();
  height = $("#height").val();
  area = width * height;

  // Groups the messages together.
  console.group("Area calculations");
    // Writes the width
    console.info("Width", width);
    // Writes the height
    console.info("Height", height);
    // Writes the area
    console.info(area);
  console.groupEnd();

  $form.append("<p>" + area + "</p>");

});
