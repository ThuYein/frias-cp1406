<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>FRIAS-Order Form</title>
<link rel="stylesheet" href="css/layout.css"/>
<link rel="stylesheet" href="css/modules.css"/>
<link rel="stylesheet" href="css/base.css"/>
<link rel="stylesheet" href="css/normalize.css"/>
</head>
<body>
<header>
		<a href="index.html" id="logo"><img src="Images/Fashion/fashion-logo.png" /></a>
		<nav>
			<a href="#" id="menu-icon"></a>
 		<ul id="menu">
		<li><a href="index.html">Home ￬</a>
        <ul class="hidden">
				<li><a href="events.html">Events</a></li>
         
        </ul> 
        </li>
		<li><a href="products.html">Products</a></li>
		<li>
			<a href="#">Services ￬</a>
			<ul class="hidden">
				<li><a href="faq.html">FAQs</a></li>
				<li><a href="feedback-form.html">Feedback</a></li>
			</ul>
		</li>
		<li><a href="cafe.html">Café</a></li>
	</ul>
</nav>
</header>
    
<!-- form -->

<script src="js/validate.js"></script>
<div class=" row-form">
<form class="form-style" name="order" method="post" action="" onsubmit="return validateOrderForm()">   
 <h4>Order Form</h4>
 	
    <p1>Product Name :<br></p1>
    <div class="product-name">
    <p1><?php echo $_POST["pname"]; ?></p1><br>
    </div>
    <p1>Customer Name :<br></p1>
    <input type="text" name="name"><br>
    <p1>Address :<br></p1>
    <input type="text" name="address"><br>
    <p1>Phone No :<br></p1>
    <input type="text" name="phone"><br>
    <p1>E-mail Adress :<br></p1>
    <input type="text" name="email"><br>
    <p1>Quantity :<br></p1>
    <input type="text" name="quantity"><br>
  	<div class="form-buttons">
    <div class="form-buttons">
    <input type="submit" value="Submit">
    <input type="reset" value="Reset"><br>
    
    </div>
    </div>
    
    </form>
  </div>  
    
    
<!-- footer -->    
<div class="row row--black">
  <div class="footer-text">
  <h5>Copyright &copy; 2015 Diggers Volleyball. All rights Reserved.<br>
  <small>This website is optimized for Google Chrome. Users may experience animation lag and design omissions while viewing from other browsers.</small></h5>
</div>
</div>

</body>
</html>
