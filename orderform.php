<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><!-- InstanceBegin template="E:\GitHub\frias-cp1406\Templates\index-template.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- InstanceBeginEditable name="doctitle" -->
<title>Frias</title>
<!-- InstanceEndEditable -->
<!-- InstanceBeginEditable name="head" -->
<style type="text/css">
#apDiv2 {
	position: absolute;
	width: 900px;
	height: 550px;
	z-index: 1;
	left: 50%;
	top: 91px;
	margin-left: -450px;
	text-align: center;
}
</style>
<style type="text/css">
#Heading {
	position: absolute;
	width: 222px;
	height: 43px;
	z-index: 2;
	left: 334px;
	top: 9px;
	background-color: #000000;
	color: #FFF;
}
</style>
<style type="text/css">
#Feedback {
	position: absolute;
	width: 407px;
	height: 29px;
	z-index: 2;
	left: 241px;
	top: 63px;
	background-color: #CC0000;
}
</style>
<style type="text/css">
body {
	margin-top: 10px;
}
</style>
<style type="text/css">
#apDiv1 {
	position: absolute;
	width: 585px;
	height: 219px;
	z-index: 3;
	left: 179px;
	top: 99px;
}
</style>
<!--<script src="SpryAssets/SpryValidationTextField.js" type="text/javascript"></script>
<link href="SpryAssets/SpryValidationTextField.css" rel="stylesheet" type="text/css" />-->

<script src="js/validate.js"></script>
<!-- InstanceEndEditable -->
<!-- css links -->
<link rel="stylesheet" href="css/layout.css" />
<link rel="stylesheet" href="css/modules.css" />
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
<div class="row row--sliders">
</div>

<!-- InstanceBeginEditable name="Content" -->
<p>&nbsp;</p>
<div id="apDiv2">
  <div id="Abtvolley"></div>
  <p class="Heading">&nbsp;</p>
  <div class="Heading" id="Heading">FRIAS</div>
  <div class="Body" id="Feedback">Place Your Order Here</div>
  <p class="Body">&nbsp;</p>
  <div id="Pa1">  </div>
  <div id="apDiv1">
  
    <form name="order" method="post" action="" onsubmit="return validateOrderForm()">    
      <table width="461" border="0" align="left">
        <tr>
          <td width="124" bgcolor="#E0D2C6"><p> <span class="BodyFont">Product Name :</span></p></td>
          <td width="327" bgcolor="#E0D2C6"><strong><?php echo $_POST["pname"]; ?></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td bgcolor="#E0D2C6"><span class="BodyFont">Name :</span></td>
          <td bgcolor="#E0D2C6"><input type="text" name="name"/></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td bgcolor="#E0D2C6"><p>
            <span class="BodyFont">Address :</span></td>
          <td bgcolor="#E0D2C6"><input type="text" name="address"/></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td bgcolor="#E0D2C6"><p><span class="BodyFont">Phone Number:</span><span id="phoneNum"></p></td>
          <td bgcolor="#E0D2C6"><input type="text" name="phone"/></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td bgcolor="#E0D2C6"><span class="BodyFont">Email:</span></td>
          <td bgcolor="#E0D2C6"><input type="text" name="email" /></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td bgcolor="#E0D2C6"><span class="BodyFont">Quantity:</span></td>
          <td bgcolor="#E0D2C6"><input type="text" name="quantity"/></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td bgcolor="#E0D2C6"><input type="submit" name="Submit" value="Submit" /></td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </form>
    
  </div>
  <div id="background">
    <div id="apDiv7"></div>
  </div>
  <div id="Back2">
    <div id="net"></div>
  </div>
</div>
<p>&nbsp;</p>
<p>&nbsp;</p>

<!-- InstanceEndEditable -->  


</body>

<!-- footer -->
<div class="row row--black">

  <div class="footer-text">
  <h5>Copyright &copy; 2015 FRIAS. All rights Reserved.<br>
  <small>This website is optimized for Google Chrome. Users may experience animation lag and design omissions while viewing from other browsers.</small></h5>
</div>
</div>

<!-- InstanceEnd --></html>
