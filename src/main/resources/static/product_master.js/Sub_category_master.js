var idd;

function abc(){
idd=null;
$("#activebtn").hide();

ClearData();

}



    function fillEditForm(id,active, category, subCategory,description) {
idd=id;

    $('#activebtn').show();


    $("#categoryDropdown").val(category);
      $("#categoryDropdown").selectpicker("refresh");

        $('#subcategory').val(subCategory);
        $('.textareasize').val(description);
     var isActive = 1; // or false, depending on the status
        if (isActive==active) {
            $('#active').prop('checked', 1);
        } else {
            $('#active').prop('checked', 0);
        }
    }

function AddCategory() {
    $.ajax({
        url: "/getTable",
        type: 'GET',
        dataType: "json",
        success: function (response) {
            var dropdown = $('#categoryDropdown');
            console.log(dropdown);
            dropdown.empty(); // Clear existing options
            dropdown.append('<option value="">Select Category</option>'); // Add default option

            // Append options retrieved from AJAX call
            $.each(response, function (index, item) {
                if (item.active == 1) {
                console.log(item);
                    dropdown.append($('<option></option>').val(item.name).text(item.name));
//                    dropdown.append($(`<option id=${item.id}>${item.name}</option>`)

                }
            });

            // Refresh the selectpicker after updating options (if using bootstrap-select)
            dropdown.selectpicker('refresh');
        },
        error: function (xhr, status, error) {
            console.error("Error fetching categories - Status:", status, "Error:", error);
            alert("Failed to fetch categories. Check console for details.");
        }
    });
}

// Call the function to populate the dropdown when the page is ready
function addDataSubCategory() {
    var category = $("#categoryDropdown").val();
    var subCategoryName = $("#subcategory").val().trim();
    var description = $(".textareasize").val();

    // Check if category is selected
    if (!category) {
        toastr.error("Please select a category");
        return;
    }

    // Validate subcategory name
    var subCategoryRegex = /^[A-Za-z\s]+$/;
    if (!subCategoryRegex.test(subCategoryName)) {
        toastr.error("Please enter a valid subcategory name");
        return;
    }

    // Check if description is provided
    if (!description) {
        toastr.error("Please enter a description");
        return;
    }

    // Construct data object
    var data = {
        category: category,
        subCategory: subCategoryName,
        description: description,
        active: 1
    };

    // AJAX request
    $.ajax({
        url: "/AddCategory",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function(response) {
            $('.addmodal').modal('hide');
            GetSubCategory();
            ClearData();
            toastr.success("Successfully added data");
        },
        error: function(xhr, status, error) {
            if (xhr.responseText) {
                toastr.error("Sub-Category already exists");
            } else {
                toastr.error("Failed to add sub-category");
            }
        }
    });
}



function GetSubCategory(){

    $.ajax({
        url: "/Get",
        type: 'GET',
        dataType: "json",
        success: function (response) {
            if (response && response.length > 0) {

                var table = $('#category_append2'); // Select the table by ID
                table.empty(); // Clear existing data

                $.each(response, function (index, item) {


                 if(item.active==1){
console.log(item);
                        let tData = `<tr>
                                             <td class="text-center">
                                                 <span data-toggle="modal" data-target=".addmodal">
                                                 <a id="item_${item.id}" onClick="fillEditForm(${item.id},${item.active}, '${item.category}', '${item.subCategory}','${item.description}')" class="" data-toggle="tooltip" data-placement="bottom" data-original-title="Edit" href="javascript:void(0);">
                                                     <i class="fas fa-edit m-r-5 text-success"></i>
                                                 </a>
                                                     </a>
                                                 </span>
                                                 <a onClick="updateAndHideRow(${item.id})"  class="delete_alert" data-toggle="tooltip" data-placement="bottom" data-original-title="Delete" href="javascript:void(0);">
                                                     <i class="far fa-trash-alt text-danger"></i>
                                                 </a>
                                             </td>
                                             <td class="">
                                                 <span class="badge badge-success">Yes</span>
                                             </td>
                                               <td>${item.id}</td>
                                                           <td>${item.category}</td>
                                                           <td>${item.subCategory}</td>
                                                          <td>${item.description}</td>
                                         </tr>`;

                                         table.append(tData);
                                                             table.selectpicker("refresh");

                     }
                 if(item.active==0){
                    let tData = `<tr>

                                                 <td class="text-center">
                                                 <span data-toggle="modal" data-target=".addmodal">
                                                       <a id="item_${item.id}"  onClick="fillEditForm(${item.id},${item.active}, '${item.category}', '${item.subCategory}','${item.description}')"    class=" " data-toggle="tooltip" data-placement="bottom" data-original-title="Edit"
                                                      href="javascript:void(0);">
                                                     <i class="fas fa-edit m-r-5 text-success"></i>
                                                   </a>
                                                 </span>

                                                     <a onClick="updateAndHideRow(${item.id})" class=" delete_alert " data-toggle="tooltip" data-placement="bottom" data-original-title="Delete"   href="javascript:void(0);">
                                                         <i class="far fa-trash-alt  text-danger"></i>
                                                     </a>
                                                 </td>
                                                 <td class="">
                                                     <span class="badge badge-danger">No</span>
                                                 </td>
                                                                 <td>${item.id}</td>
                                                          <td>${item.category}</td>

                                                          <td>${item.subCategory}</td>
                                                          <td>${item.description}</td>
                                                      </tr>`;
table.append(tData);
   table.selectpicker("refresh");
                 }

                });
            } else {
                console.log('done');
            }
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });


}

$(function(){
GetSubCategory();
AddCategory();
});




function ClearData(){
$("#categoryDropdown").val([]);
$("#categoryDropdown").selectpicker("refresh");
$("#subcategory").val("");
$(".textareasize").val("");

}

function updateAndHideRow(rowId) {

 var confirmed = confirm("Are you sure you want to delete this row?");
    if (!confirmed) {
        return; // If user cancels, exit function
    }

    var data = {};

    // Send AJAX request to update data
    $.ajax({
        url: '/DeleteHideValue/' + rowId, // Corrected URL formatting
        type: 'PUT', // Using PUT method to update
        contentType: 'application/json', // Setting content type to JSON
        data: JSON.stringify(data),
        success: function(response) {
            $('#category_append2' + rowId).hide();
            console.log(response);
            // Code to execute after hiding the row

                       toastr.success(" DELETE Successfully");
GetSubCategory();
        },
        error: function(xhr, status, error) {
            console.error(error);
            // Code to handle errors
            alert("Error occurred: " + error); // Example alert
        }
    });

}


function UpdateSubCategory(id){

  // Ajax call to update the category
  var Updatesubc=$("#categoryDropdown").val();
    var updatedName = $('#subcategory').val();

    var updatedDescription = $('.textareasize').val();
       var ok = $('#active').is(':checked');

var regex = /^[A-Z a-z]+$/;


 if(Updatesubc!=""&&Updatesubc!=null){
   if(regex.test(updatedName)){

 if(ok!=true){
 active=0;
 }

 if(ok!=false){
 active=1;

 }
     var updatedData = {
            category: Updatesubc,
            subCategory: updatedName,
            description: updatedDescription,
            active:active
        };

        $.ajax({
            url: '/Edit/' + id,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(updatedData),


            success: function(response) {





                    $('.addmodal').modal('hide');

GetSubCategory();




                console.log('Category updated successfully:', response);
                // Optionally, update the UI to reflect the changes

            },
            error: function(xhr, status, error) {

                        toastr.error("Present SUB-Category");
            }

        });
       ClearData();
       }else{
        ClearData();
                toastr.error("Please enter only  characters for the category name.");

        }
 }else{
 toastr.error("Plz Enter Valid Catergory");
 }

}

function Exc() {

         $.ajax({
             url: "/Get",
             type: "GET",
             dataType: "json",
             success: function(data) {

                 // Convert JSON data to a worksheet
                 var sheet = XLSX.utils.json_to_sheet(data);

                 // Create a new workbook
                 var workbook = XLSX.utils.book_new();

                 // Append the worksheet to the workbook
                 XLSX.utils.book_append_sheet(workbook, sheet, "data");

                 // Save the workbook as an Excel file
                 XLSX.writeFile(workbook, "Subcategory.xlsx", { compression: true });
             },
             error: function(xhr, status, error) {
                 console.error('Error fetching data:', error);
                 // Handle error
             }
         });
     }





function MAIN(){

var iddd;
iddd=idd;


if(idd!=null){

UpdateSubCategory(iddd);
iddd=null;
}
else{

addDataSubCategory();
}
}



var sessionChecked = false; // Flag to track if session has been checked

// Function to check session status
function checkSessionStatus() {
    if (!sessionChecked) { // Check session only if not checked before
        $.ajax({
            type: "GET",
            url: "/checkSessionn",
            success: function(response) {
                // Log the response to console
                console.log(response);
                if (response.redirect) {
                    window.location.href = response.redirect;
                }
            },
            error: function(xhr, status, error) {
                alert("Error checking session. Redirecting to login page."); // Alert for error
                console.error("Error checking session:", error);
                // Handle error, e.g., redirect to login page
                window.location.href = "/login";
            }
        });
        sessionChecked = true; // Set flag to true after checking session
    }
}

$(document).ready(function(){
    checkSessionStatus(); // Call the function to check session status when the document is ready

    // Your method or loop code here...
});
