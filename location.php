<?php session_start(); ?>
<!doctype html>

<?xml version='1.0' encoding='UTF-8' ?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=9">
		<title>Apartmani Jadrija - Gdje smo</title>
		<meta name="description" content="Mjesto Jadrija nalazi se nedaleko od grada Šibenika u samoj blizini Vodica i Srime. Odvojeno od gradske vreve i ujedbo blizu grada za noćni izlazak ili šoping.">
		
		<link rel="icon" type="image/png" href="http://apartmani-jadrija.com/favicon.png">
		<link rel="stylesheet" href="css/common.css"/>
		<link rel="stylesheet" href="css/location.css"/>

		<!--[if IE 8]><link href="css/ie8.css" rel="stylesheet" type="text/css" /><![endif]-->
		<!--[if IE 7]><link href="css/ie8.css" rel="stylesheet" type="text/css" /><![endif]-->

		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
		<script src="lib/gmap3.min.js" type="text/javascript"></script>

		<!-- Contact form -->
		<script src="js/location.js" type="text/javascript"></script>
		<script src="js/common.js" type="text/javascript"></script>
	</head>

	<body>
		<div id="page" class="page-location" data-page="location">

			<!-- ********** HEADER ********** -->
			<?php include('header.php') ?>

			<!-- ********** CONTENT ********** -->
			<div id="content">
				<div id="content-top" class="contentWrapper">
					<div id="gmap-wrapper"></div>
				</div><!-- //#content-top -->

				<div id="content-bottom">
					<div id="gmap-form" class="contentWrapper">
						<h1>Prometne upute</h1>
						<p>Kliknite na kartu da bi postavili oznaku ili upišite adresu kako bi prikazali prometne upute do apartmana.</p>
						<p>Postavljenu oznaku možete pomicati po karti i mijenjati prometne upute.</p>
						<input type="text" id="address-input">
						<button id="submit-address" class="submitButton">Potvrdi</button>
						<span>(primjer: Trtarska 8, Šibenik)</span>
						<label id="validation-label">Molimo unesite točnu adresu.</label>
					</div>

					<div id="location-info" class="contentWrapper">
						<h1>Kontakt Info</h1>
						<ul>
							<li class="contact1">Jadrija V/I, 22000 Šibenik</li>
							<li class="contact2">
								<span>+385 022/460-126</span>
								<span>+385 022/215-180</span>
								<span>+385 915667758</span>
							</li>
							<li class="contact3">info@apartmani-jadrija.com</li>
						</ul>
					</div>

					<div id="contact-form" class="clearfix contentWrapper">
						<h1>Pošaljite upit</h1>
						<form id="contactform" name="contactform">
							<label class="warning-label hidden" id="valid_message_name">Molimo unesite Ime i prezime</label>
							<p>
								<label for='name'>Ime i Prezime:</label>
								<input type="text" name="name" class="inputField">
							</p>
							<label class="warning-label hidden" id="valid_message_email">Molimo unesite pravilnu e-mail adresu</label>
							<p>
								<label for='email'>Email Adresa:</label>
								<input type="text" name="email" class="inputField email">
							</p>
							<label class="warning-label hidden" id="valid_message_subject">Molimo unesite naslov poruke</label>
							<p>
								<label for='subject'>Naslov:</label>
								<input type="text" name="subject" class="inputField">
							</p>
							<label class="warning-label hidden" id="valid_message_message">Molimo unesite text poruke</label>
							<p>
								<label for='message'>Poruka:</label>
								<textarea name="message" class="textField"></textarea>
							</p>
							<input type="submit" value="Pošalji" class="submitButton">

							<label class="success-label">Poruka je uspješno poslana.</label>
							<label class="error-label">Dogodila se greška u slanju. Molimo pokušajte ponovo.</label>
						</form>
						<img src="images/email_icon.png" alt="e-mail">
						<p>Slobodno nas kontaktirajte i upitajte što vas zanima.</p>
						<p>Na sva vaša pitanja odgovorit ćemo u najkraćem vremenskom roku.</p>
					</div><!-- //#contact-form -->
				</div><!-- //#content-bottom -->
			</div><!-- //#content -->

			<!-- ********** FOOTER ********** -->
			<div id="footer">
				<p>© 2013 by Ante Burazer</p>
			</div><!-- //#footer -->
		</div>
	</body>
</html>