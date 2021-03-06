// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require app
//= require vendor/Chart.bundle.min
//= require vendor/jquery-jvectormap-1.2.2.min
//= require vendor/jquery-jvectormap-world-mill-en
//= require pages/demo.dashboard
//= require ckeditor/init

//= require cropperjs/dist/cropper.min
//= require vue/dist/vue.min
//= require sortable/Sortable.min

//= require_tree .

$(function(){

	$('.select2').select2();
	$('.date').daterangepicker({locale: {
      format: 'YYYY-MM-DD'
    }});


    $('#singledaterange').daterangepicker({
    	locale: { format: 'YYYY-MM-DD' },
    	startDate: $('#start_date').val() == '' ? moment().format("YYYY-MM-DD") : $('#start_date').val() ,
    	endDate:  $('#end_date').val() == '' ? moment().format("YYYY-MM-DD") : $('#end_date').val(),
    },  function(start, end, label) {
    	$('#start_date').val(start.format('YYYY-MM-DD'));
    	$('#end_date').val(end.format('YYYY-MM-DD'));
    });


	// // debugger;
	// if (CKEDITOR && CKEDITOR.instances) {
 //      for (instance in CKEDITOR.instances){
 //        CKEDITOR.instances[instance].updateElement();
 //      }
 //    }
});


$(window).on("turbolinks:before-render", function(e) {
    // old
    // $(window).on("page:before-unload", function(e) {
});


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();