<!DOCTYPE html>

<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->


<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <title>Emerging Five - Sub-Category Master</title>
    <link rel="icon" type="image/x-icon" href="/assets/custom/images/favicon.png" />


    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="/assets/custom/css/imports.css">

    <!-- END: Custom CSS-->
    <style>
        /* .popover {
            pointer-events: none !important;
        } */
    </style>
</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="horizontal-layout horizontal-menu  navbar-sticky footer-fixed  " data-open="hover"
      data-menu="horizontal-menu" data-col="">

<div class="preloader"></div>

<!-- BEGIN: Header-->
<script src="/assets/custom/js/header.js"></script>
<script language="javascript" type="text/javascript">
    document.getElementById('sub_category_master').className = "active";
</script>
<!-- END: Header-->




<!-- BEGIN: Content-->
<div class="app-content content ">
    <div class="content-overlay"></div>
    <div class="row pl-1 pr-1 p-b-5">
        <div class="col-xl-6 col-lg-6 col-sm-6 colmspadding padding0 width50">
            <div class="font-20">
                <span class="text-primary font-weight-700">Sub-Category Master</span>
            </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-sm-6 colmspadding padding0 width50 text-right">
            <a onclick="Exc()" class="btn  btn-success m-r-5">

                <i class="fas fa-file-excel m-r-5"></i>
                Excel

            </a>

            <a onClick="abc()" class="btn btn-primary" data-toggle="modal" data-target=".addmodal">
                <i class="fas fa-plus m-r-5"></i>
                Add
            </a>
        </div>
    </div>
    <div class="datatable-design mb-0 pt-1 bg-white resize_wrapper">
        <table id="subcategory_table" class="table table-striped table-custom-hover nowrap  display " style="width: 100%;">
            <thead>
            <tr>

                <th class="text-center" width="5%">Action</th>
                <th width="5%">Active</th>
                <th>Sub-Category Id</th>
                <th>Category Name</th>
                <th>Sub-Category Name</th>
                <th width="30%">Description</th>
            </tr>
            </thead>
            <tbody id="category_append2">

            </tbody>
        </table>
    </div>


</div>
<!-- END: Content-->


<div class="modal fade text-left addmodal" data-keyboard="false" data-backdrop="static" tabindex="-1" role="dialog"
     aria-labelledby="" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered  modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <label class="modal-title " id="">Add/Edit Sub-Category Master</label>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body ">
                <div class="card m-b-5">
                    <div class="header">
                        <h6 class="mb-0">
                            <span class="text-blue font-20">Basic </span><span class="font-20">Details</span>
                        </h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-sm-12 mb-2">
                                <label class="lable-align">Category</label>
                                <select id="categoryDropdown" class="selectpicker form-control typecombo" data-title="Select Category"
                                        data-style=" bg-transfer fieldmandatory" data-live-search="true" data-size="5">

                                </select>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-sm-12 mb-2">
                                <label class=" lable-align">Sub-Category Name</label>
                                <input onkeyup="this.value = this.value.replace(/[^a-zA-Z_\s-]/g, '');" id="subcategory" type="text" class="form-control fieldmandatory" placeholder="Enter Sub-Category Name">
                            </div>
                            <div class="col-xl-12 col-lg-12 col-sm-12 mb-1">
                                <label class="lable-align">Description</label>
                                <textarea class="form-control fieldmandatory textareasize" placeholder="Enter Description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div class="row">
                    <div id="activebtn" class="col-xl-6 col-lg-6 col-sm-6 text-right colmspadding width50">
                                          <div id="abcd" class="form-check float-left">
                                            <input id="active" type="checkbox" class="form-check-input" >
                                            <label class="form-check-label mb-0" >Active</label>
                                          </div>
                                        </div>

                    <div class="col-xl-12 col-lg-12 col-sm-12 text-right colmspadding">
                        <a onClick="MAIN()" href="javascript:void(0)" class="btn btn-success  m-r-5"  >
                            <i  class="far fa-save m-r-5"></i> Save
                        </a>

                        <a href="javascript:void(0)" class="btn btn-secondary " data-dismiss="modal">
                            <i class="fas fa-times m-r-5 "></i> Close
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<!-- BEGIN: Footer-->
<script src="/assets/custom/js/footer.js"></script>
<!-- END: Footer-->


<!-- BEGIN: Vendor JS-->
<script src="/assets/vendors/js/vendors.min.js"></script>
<!-- BEGIN Vendor JS-->

<!-- BEGIN: Page Vendor JS-->
<script src="/assets/vendors/js/ui/jquery.sticky.js"></script>


<!-- END: Page Vendor JS-->

<!-- BEGIN: Theme JS-->
<script src="/assets/js/core/app-menu.min.js"></script>
<script src="/assets/js/core/app.min.js"></script>
<script src="/assets/js/scripts/customizer.min.js"></script>
<!-- END: Theme JS-->
<link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/css/toastr.css" rel="stylesheet"/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/js/toastr.js"></script>

<!-- BEGIN: Page JS-->
<script src="/assets/custom/plugins/jquery-ui/jquery-ui.min.js"></script>
<script src="/assets/custom/plugins/datatables/js/datatables.min.js"></script>
<script src="/assets/custom/plugins/datatables/js/dataTables.responsive.min.js"></script>
<script src="/assets/custom/plugins/datatables/js/dataTables.colVis.js"></script>

<script src="/assets/custom/plugins/datatables/js/dataTables.scrollResize.js"></script>
<script src="/assets/custom/plugins/scrollable/js/scrollabar.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.3/xlsx.full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.13/xlsx.full.min.js"></script>
<script src="/assets/custom/plugins/scrollable/js/scrollable.js"></script>
<script src="/assets/custom/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
<script src="/assets/custom/plugins/bootstrap-select/bootstrap-select.js"></script>
<script src="/product_master.js/Sub_category_master.js"></script>
<script src="/assets/custom/plugins/jquery_confirm_v3/jquery-confirm.min.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/css/toastr.css" rel="stylesheet"/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/js/toastr.js"></script>

<script src="/assets/custom/plugins/jasny-bootstrap/dist/js/jasny-bootstrap.min.js"></script>
<script src="/assets/custom/plugins/img_cropper/js/cropper_min.js"></script>
<script src="/assets/custom/plugins/jquery_confirm_v3/jquery-confirm-custom.js"></script>
<script src="/assets/custom/plugins/jquery_toastr/jquery.toast.min.js"></script>
<!-- END: Page JS-->
<script src="/assets/custom/js/custom.js"></script>

<script>


    $(window).on('load', function () {
      if (feather) {
        feather.replace({ width: 14, height: 14 });
      }
    })


    $('#subcategory_table').DataTable({
      destroy: true,
      scrollResize: true,
      scrollX: true,
      // scrollY: 100,
      scrollCollapse: true,
      paging: true,
      // lengthChange: false,
      // scrollX: true,
      "bAutoWidth": true,
      // paging: true,
      "bLengthChange": true,
      // fixedColumns: true,
      "columnDefs": [{
        "targets": [0],
        "orderable": false,
        // "width": "2%",
      }],
      "pageLength": 15,

      fixedColumns: {
        rightColumns: 0,
        leftColumns: 0
      },
      language: {
        paginate: {
          next: '<i class="fa fa-angle-double-right">',
          previous: '<i class="fa fa-angle-double-left">'
        }
      },
      dom:
        "<'row pl-0 pr-1'<'col-xl-9 col-lg-8 col-sm-8'pi><'col-xl-3 col-lg-4 col-sm-4'f>>" +
        "<'row pl-1 pr-1'<'col-xl-12 col-lg-12 col-sm-12'tr>>"

    });

    $('#start_date').closest('div').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: "dd/mm/yyyy",
      clearBtn: true
    });
    $('#validfrom_date').closest('div').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: "dd/mm/yyyy",
      clearBtn: true
    });
    $('#validto_date').closest('div').datepicker({
      autoclose: true,
      todayHighlight: true,
      format: "dd/mm/yyyy",
      clearBtn: true
    });
</script>
</body>
<!-- END: Body-->


</html>