// // 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// $(document).ready(function () {
//   console.log("Let’s get ready to party with jQuery!");
// });

// // 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
// $("article, img").addClass("image-center");

// // 3.. Remove the last paragraph in the article.
// $("p").eq(5).remove();

// $("article").children().last().remove();
// // or:
// $("article, p").last().remove();

// // 4. Set the font size of the title to be a random pixel size from 0 to 100.

// const fontSize = Math.floor(Math.random() * 100);
// $("#title").css("fontSize", fontSize);

// // Or

// $("#title").css("fontSize", Math.floor(Math.random() * 100));

// // 5. Add an item to the list; it can say whatever you want.
// $("ol").append("<li>Whatever I want</li>");

// // 6. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// $(".col-sm-4").children().remove();
// $(".col-sm-4").append("<p> I'm so sorry I put a list here.</p>");

// // 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// $("input").on("keyup", () => {
//   let red = $("input").eq(0).val();
//   let blue = $("input").eq(1).val();
//   let green = $("input").eq(2).val();

//   $("body").css("background", "rgb(" + red + ", " + blue + ", " + green + ")");
// });

// // 8. Add an event listener so that when you click on the image, it is removed from the DOM.
// $(".col-sm-8").on("click", "img", function () {
//   $(this).remove();
// });

// // or:

// $("img").on("click", function (e) {
//   $(e.target).remove();
// });
