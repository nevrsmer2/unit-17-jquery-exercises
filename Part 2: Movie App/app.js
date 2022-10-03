//Event listener to create & append new elements & capture input values
$("#movies-form").on("submit", (e) => {
  e.preventDefault();
  $(".movies-list").append("<div>" + $("#movie-name").val() + "</div>");
  $(".movies-list").append("<div>" + $("#movie-rating").val() + "</div>");
  $(".movies-list").append('<button class="delete">Delete</button>');
  $("#movie-name").val("");
  $("#movie-rating").val("");
});

$("#movies-form").on("submit", (e) => {
  e.preventDefault();
  $(".movies-list").append("<div>" + $("#movie-name").val() + "</div>");
  $(".movies-list").append("<div>" + $("#movie-rating").val() + "</div>");
  $(".movies-list").append('<button class="delete">Delete</button>');
  $("#movie-name").val("");
  $("#movie-rating").val("");
});

//Practice - how to append elements as children
$("#movies-form").on("submit", (e) => {
  e.preventDefault();

  $(".movies-list").append(
    "<div class='parent'>" + $("#movie-name").val() + "</div>"
  );

  $(".parent").append("<div>" + $("#movie-rating").val() + "</div>");
  $(".parent").append('<button class="delete">Delete</button>');
  $("#movie-name").val("");
  $("#movie-rating").val("");
});

//NOTE: Having trouble appending the rating <div> and delete <button> to the movie-name <div> as children.
//See practice code below trying to resolve issue
//Practice - how to append elements as children
//Doesn't work.  Appends the rating and button for each subsequent element to first <div> with class .parent
$("#movies-form").on("submit", (e) => {
  e.preventDefault();

  $(".movies-list").append(
    "<div class='parent'>" + $("#movie-name").val() + "</div>"
  );

  $(".parent").append("<div>" + $("#movie-rating").val() + "</div>");
  $(".parent").append('<button class="delete">Delete</button>');
  $("#movie-name").val("");
  $("#movie-rating").val("");
});

//Event listener for delete <button> to remove movie name and rating (and delete button)
$(".movies-list").on("click", ".parent", function (e) {
  e.preventDefault();
  // e.target.remove();
  $(e.target).parent().remove();
});
