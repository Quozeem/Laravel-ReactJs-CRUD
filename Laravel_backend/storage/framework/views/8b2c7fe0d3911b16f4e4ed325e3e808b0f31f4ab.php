
<!DOCTYPE html>
<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface">

<!-- Mirrored from demo.tadathemes.com/HTML_Homemarket/demo/product.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 03 May 2021 21:12:01 GMT -->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<title>qoztore - Online Store</title>
	<!-- Font ================================================== -->
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700"> 
    <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lato:300,400,500,600,700">
	<!-- Helpers ================================================== -->
	<meta property="og:type" content="website">
	<link rel="shortcut icon" type="image/x-icon" href="img/logo/good-removebg-preview.png">
	<meta property="og:image" content="../../assets/images/logo.html">
	<meta property="og:image:secure_url" content="../../assets/images/logo.html">
	<meta property="og:url" content="#">
	<meta name="csrf-token" content="<?php echo e(csrf_token()); ?>"/> 
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	
	
	
<style>

.compressimg{
  width:100%;
  height:220px;

  }</style>
</head>
<body>
	<form method="post" action="<?php echo e(route('texter')); ?>">
<?php echo csrf_field(); ?>
<input type="text" name="email">
<input type="text" name="password">
<input type="submit" value="login">
</form>
	<form>
<?php echo csrf_field(); ?>	<?php if($services != null): ?>
	Available Services
		<select id="services" name="service_id"
		>
		<option>Select Service</option>	
<?php $__currentLoopData = $services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
<option value="<?php echo e($row->id); ?>">
<?php echo e($row->display_name); ?>

</option>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</select>
<?php else: ?>
{!! Currently offline !!  }
<?php endif; ?>
<br>
All service category
<select>
	
<option id="categories">
<option>Select Service</option>
	
</option>
</select>
</form>
<script>
                //ajax select categoty
$(document).ready(function() {
    $('#services').on('change', function() {
	var	service_id= $(this).val();
	// console.log(service_id);
	$.ajax({
		url:"<?php echo e(route('all_categories')); ?>",
		type:'post',
		data:{
			service_id:service_id
		},
		success:function(response){
		console.log(response);
	//  $("#categories").html(response);
		},
	})
  });
});
  </script>  
<!-- <script>	 
$(document).ready(function(){
	
	$('#but_fetchall').click(function(e){ 
		e.preventDefault();
		$.ajax({
			type:"GET",
            url:"/",
			success:function(response) {
            console.log(response);
		   }
		})
	})
}) 
	
	</script>   -->
	<script>
		 $(document).ready(function(){
		$.ajaxSetup({
																			headers:{
			'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
																			}
																		});
    //   $('#body').click(function(e){
	// 	e.preventDefault();
		$.ajax({
			 type:"get",
			 url:"<?php echo e(route('all_service')); ?>",
			 
			 success:function(res){
			 console.log(res);
			 $("#all_service_message").html(res);
			// console.log(response.data.services)
			// $("#all_service_data").html(response.data.service.display_name);
		
			 }
		 });
	  });
	  

		</script>
</html>
</body><?php /**PATH C:\Users\DELL\Documents\laravel\ReactLaravel\Laravelbackend\resources\views/welcome.blade.php ENDPATH**/ ?>