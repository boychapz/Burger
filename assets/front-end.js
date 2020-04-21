$(document).ready(function () {
  // Add a new burger.
  $("#addBurger").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0,
    };

    // Sendind a POST request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Added new burger");
      // Reload the page to get the updated burger list.
      location.reload();
    });
  });

  $(".eatburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredCondition = {
      devoured: 1,
    };

    // Sending a PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredCondition,
    }).then(function () {
      console.log("Burger devoured");
      location.reload();
    });
  });

  $(".trashbutton").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id,
    }).then(function () {
      location.reload();
    });
  });
});
