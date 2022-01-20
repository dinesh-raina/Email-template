//$(document).ready(function(){
//$('#techers_list').hide();
//$('#district_list').hide();
//$('#campus_list').hide();
//$('#submit').hide();
//   $('#get_list').click(function(){
//           var radioValue = $("input[type=radio]:checked").val();
//           if (radioValue == "teachers"){
//               $('#techers_list').show();
//               $('#district_list').hide();
//               $('#campus_list').hide();
//               $('#submit').show();
//           }
//           if (radioValue == "district-admin"){
//                          $('#techers_list').hide();
//                          $('#district_list').show();
//                          $('#campus_list').hide();
//                          $('#submit').show();
//                      }
//           if (radioValue == "campus-admin"){
//                          $('#techers_list').hide();
//                          $('#district_list').hide();
//                          $('#campus_list').show();
//                          $('#submit').show();
//                      }
//   });
//
//   $("#submit").click(function(){
////       var checkbox = $("input[name='checkbox']:checked").val();
////       console.log(checkbox);
//         var  checkbox = document.getElementsByName('checkbox');
//         var values = ' ';
//         for(i=0; i<checkbox.length; i++){
//           if(checkbox[i].checked === true){
//           values += checkbox[i].value;
//
//           }
//
//         }
//         console.log(values);
//   });
//
//});

$(document).ready(function(){


var $radiovalue = $('input[name="radio-button"]').change(function(){
     var radioValue = $radiovalue.filter(':checked').val();
        if(radioValue == 'teachers'){
        $('#checkbox').show();
           var json = [{"name":"sathiya","mail":"sathiya@yopmail.com"},{"name":"sathiya2","mail":"sathiya2"}]
           $.each(json,function(){
              $('#checkbox').append($('<label>').text(this.name).prepend(
              $('<input>').attr('type', 'checkbox').val(this.mail)
              ));
           });
//             $("#checkbox").on('change', '[type=checkbox]', function () {
//                  console.log($(this).val());
//               });
        }
})

//   var nameJson = {"templates":[{"id":"d-a671af1d4e9c46a2908b214f0c4785b1","name":"Test","generation":"dynamic","updated_at":"2022-01-03 07:48:22","versions":[{"id":"095ef4a0-4536-47ea-955f-571979599dfa","template_id":"d-a671af1d4e9c46a2908b214f0c4785b1","active":1,"name":"Untitled Version","generate_plain_content":true,"subject":"Test Image","updated_at":"2022-01-04 18:36:25","editor":"design","thumbnail_url":"//us-east-2-production-thumbnail-bucket.s3.amazonaws.com/7778ec1858024b8acd6538cce2cb2e60df10dd9147b93a068b27976e048479b3.png"}]}]}
//   $.each(nameJson, function(){
//      $('#name').append('<label>').text(this.templates.name);
//   });




});
