import "./styles.css";

$.ajax({
  type: "GET",
  url:
    "https://cdn.contentstack.io/v3/content_types/product_single_page/entries/blt3813cf1b7ccd044a?environment=development",
  headers: {
    "Content-Type": "application/json",
    api_key: "blt1ffa4652a21e7445",
    access_token: "csad11ce20c37de5a790f62164"
  },
  dataType: "json",
  success: processData,
  error: function () {
    alert("failed");
  }
});

// function processData(data) {
//   $("#title").append(data.entry.title);
//   // $("#description").append(data.entry.modular_blocks.rich_text_editor);
//   // $("#image").attr("src", data.entry.image.url);
// }

function processData(data) {
  $("#current-page").append(data.entry.title);
  // $("#title").append(data.entry.group.product_qty);
  // $("#image").append(data.entry.product_images.url);
  $("#image").attr("src", data.entry.product_images[0].url);
  $("#thumb-image").attr("src", data.entry.product_images[1].url);
  $("#product-name").append(data.entry.group.product_name);
  $("#product-price").append(data.entry.group.product_price + " $");
  $("#product-color").append(data.entry.title);
  $("#product-qty").append(data.entry.group.product_qty + " pcs In Stock");
  $("#nav-product-des").append(
    data.entry.modular_blocks[0].product_description.rich_text_editor
  );
  $("#nav-product-review").append(
    data.entry.modular_blocks[1].product_review.rich_text_editor
  );
}
