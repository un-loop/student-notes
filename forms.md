<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Alien Abduction Order Form</title>
	<link href="css/forms.css" rel="stylesheet">
</head>
<body>
	<div class="wrapper">
		<section>
			<h1>Alien Abduction Order Form</h1>
			<p>Fill out the form below to place an order for an alien abduction by one of our fine UFOs.</p>
			<!--this adds prossesing to our form with hidden values-->
		<form action="https://e3vwdl4bpd.execute-api.us-west-2.amazonaws.com/default/API2SES" method="POST">
			<input type="hidden" name="send_to" value="ddewzy@gmail.com">
			<!--fieldset is one box legend is the name of the box-->
			<fieldset>
				<legend>Your contact information</legend>
				<label for="name">Your name</label> 
				<input type="text" id="name" name="name" >
				<label for="phone" >Phone number</label>
				<input type="tel" id="phone" name="phone" placeholder="area code">
				<label for="email">Email</label>
				<input type="email" id="email" name="email">
			</fieldset>
			<!--this fieldset is another box-->
			<fieldset>
			<legend>About your abduction </legend>
			<label for="date">Requested  date</label>
			<input type="date" id="date" name="date">
			<label for="qty">How many people would you like abducted?</label>
			<input type="number" id="qty" name="qty" min="1" max="10">
			<!--these are radio buttons "checked" makes Classic the default button-->
			<p>What type of UFO do you prefer?</p>
				<label>
					<input type="radio" name="ufotype" value="Classic" checked> Classic oval UFO
				</label>
				<label>
					<input type="radio" name="ufotype" value="starwars">	
					Star Wars-style Imperial cruiser
				</label>
				<label>
					<input type="radio" name="ufotype" value="battlestar">
					Battlestar Galactica-style Viper
				</label>
				<label>
					<input type="radio" name="ufotype" value="borg">
					Borg-style cube
				 </label>
			</fieldset>	
			<fieldset>
			<!--this is a drop down menu-->
			<label for="abtype">What type of abduction experience do you want?</label>
				<select id="abtype" name="abtype">
				<option selected>Select one...</option>
					<option value="tour">Tour of the solar system</option>
				<!--"selected makes that button the default button-->
					<option value="dinner" selected>Alien dinner and discussion</option>
					<option value="dance">Alien dance lessons</option>
					<option value="whales">Whale watching</option>
				</select>
				<!--this is a text box-->
			<label for="comments">Special requests:</label>
			<textarea id="comments" name="comments"></textarea>
				<!--checked makes it checked by defalult-->
			<label>	
			<input type="checkbox" value="subscribe" name="subscribe" checked>Add me to your email list
			</label>
			</fieldset>
			<button type="submit">Order your Alian obduction</button>		
		</form>	
		</section>
		<aside>
			<h3>Our Location</h3>
			<address>
				Frontend Masters &middot;
				60 South 6th Street &middot;
				Suite 3625 &middot;
				Minneapolis, MN 55402
			</address>
		</aside>
	</div>
	<!--this adds error checking to our form-->
	<script src="js/forms.js"></script>
</body>
</html>





