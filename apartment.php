<?xml version='1.0' encoding='UTF-8' ?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=9">
		<title>Apartmani Jadrija - Opis apartmana</title>
		<meta name="description" content="Apartman se nalazi na prvom katu, sa odvojenim ulazom. Sastoji se od dvije spavaće sobe, kuhinje, dnevnog boravka, kupaone i terase.">
		
		<link rel="icon" type="image/png" href="http://apartmani-jadrija.com/favicon.png">
		<link rel="stylesheet" href="css/common.css"/>
		<link rel="stylesheet" href="css/apartment.css"/>

		<!--[if IE 8]><link href="css/ie8.css" rel="stylesheet" type="text/css" /><![endif]-->
		<!--[if IE 7]><link href="css/ie8.css" rel="stylesheet" type="text/css" /><![endif]-->

		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script src="js/apartment.js" type="text/javascript"></script>
		<script src="js/common.js" type="text/javascript"></script>

		<!-- jQuery UI -->
		<link href="css/ui-lightness/jquery-ui-1.9.2.custom.min.css" rel="stylesheet">
		<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
	</head>

	<body>
		<div id="page" class="page-apartment" data-page="apartment">

			<!-- ********** HEADER ********** -->
			<?php include('header.php') ?>

			<!-- ********** CONTENT ********** -->
			<div class="contentWrapper">
				<div id="content-left">
					<h1>Sadržaj Apartmana</h1>
					<ul>
						<li class="kitchen-icon">Kuhinja</li>
						<li class="livingroom-icon">Dnevni boravak</li>
						<li class="bathroom_icon">Kupaonica</li>
						<li class="badroom_icon">2 sobe + 1 dodatni ležaj</li>
						<li class="terrace_icon">Terasa</li>
						<li class="parking_icon">Parkirno mjesto</li>
						<li class="barbicue_icon">Roštilj</li>
						<li class="shower_icon">Vanjski tuš</li>
						<li class="aircondition_icon">Klima</li>
						<li class="tv_icon">TV</li>
						<li class="iron_icon">Glačalo</li>
						<li class="fridge_icon">Frižider</li>
					</ul>
				</div><!-- //.content-left -->

				<div id="content-right">
					<h1>Kalendar zauzetosti</h1>
					<img src="images/calendar.png" alt="calendar">
					<p>Pregledajte slobodne datume i rezervirajte svoj termin.</p>
					<p>Datumi označeni žutom bojom su zauzeti.</p>
					<div id="datepicker"></div>
					<p class="adds">Naš oglas možete vidjeti i na: <a href="http://www.apartmentscroatia.net/apartmani_hrvatska/apartman_atlagic.htm" target="blank">Apartments Croatia</a></p>
				</div><!-- //.content-right -->
			</div><!-- //.contentWrapper -->

			<!-- ********** FOOTER ********** -->
			<div id="footer">
				<p>© 2013 by Ante Burazer</p>
			</div><!-- //#footer -->
		</div>
	</body>
</html>