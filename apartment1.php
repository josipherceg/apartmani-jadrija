<?xml version='1.0' encoding='UTF-8' ?>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
		<title>Apartmani Jadrija - Apartman 1</title>
		<meta name="description" content="Pregledajte galeriju slika apartmana 1 ali ujedno i samog mjesta te njegove obale.">
		
		<link rel="icon" type="image/png" href="http://apartmani-jadrija.com/favicon.png">
		<link rel="stylesheet" href="css/common.css"/>
		<link rel="stylesheet" href="css/gallerySlider.css"/>
		<link rel="stylesheet" href="css/gallery.css"/>
		<link rel="stylesheet" href="css/apartment.css"/>

		<!--[if IE 8]><link href="css/ie8.css" rel="stylesheet" type="text/css" /><![endif]-->
		<!--[if IE 7]><link href="css/ie8.css" rel="stylesheet" type="text/css" /><![endif]-->

		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
		<script src="js/gallery.js" type="text/javascript"></script>
		<script src="js/apartment.js" type="text/javascript"></script>
		<script src="js/common.js" type="text/javascript"></script>

		<!-- jQuery UI -->
		<link href="css/ui-lightness/jquery-ui-1.9.2.custom.min.css" rel="stylesheet">
		<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
	</head>

	<body>
		<div id="page" class="page-apartment1" data-page="apartment1">

			<!-- ********** HEADER ********** -->
			<?php include('header.php') ?>

			<!-- ********** CONTENT ********** -->
			<div id="content">
				<div id="content-top" class="contentWrapper">
					<div class="content-header"><h1 class="title">Apartman 1</h1></div>
					<div id="gallery-wrapper">
						<div id="gallery">
							<div id="slides" data-height="711">
								<a href="" id="prev">prev</a>
								<div class="slide first 1"><img src="images/apartment1/apartman.jpg" alt="Apartman"/></div>
								<div class="slide 2"><img src="images/apartment1/terasa.jpg" alt="Terasa"/></div>
								<div class="slide 3"><img src="images/apartment1/kuhinja.jpg" alt="Kuhinja"/></div>
								<div class="slide 4"><img src="images/apartment1/dnevni_boravak.jpg" alt="Dnevni boravak"/></div>
								<div class="slide 5"><img src="images/apartment1/dnevni_boravak_2.jpg" alt="Dnevni boravak 2"/></div>
								<div class="slide 6"><img src="images/apartment1/soba_velika.jpg" alt="Spavaća soba velika"/></div>
								<div class="slide 7"><img src="images/apartment1/soba_mala.jpg" alt="Spavaća soba mala"/></div>
								<div class="slide 8"><img src="images/apartment1/kupaonica.jpg" alt="Kupaonica"/></div>
								<div class="slide 9"><img src="images/apartment1/vikendica.jpg" alt="Vikendica"/></div>
								<div class="slide 10 last"><img src="images/apartment1/slide10.jpg" alt="Roštilj"/></div>
								<a href="" id="next">next</a>
							</div><!-- //#slides -->
							<div id="menu">
								<!--<span class="nav-arrows left"></span>-->
								<ul>
									<li class="fbar">&nbsp;</li>
									<li class="menuItem 1 first_thumb" name="1"><a href=""><img src="images/apartment1/slide1_thumb.png" alt="Apartman thumb"/></a></li>
									<li class="menuItem 2" name="2"><a href=""><img src="images/apartment1/slide2_thumb.png" alt="Terasa thumb"/></a></li>
									<li class="menuItem 3" name="3"><a href=""><img src="images/apartment1/slide3_thumb.png" alt="Kuhinja thumb"/></a></li>
									<li class="menuItem 4" name="4"><a href=""><img src="images/apartment1/slide4_thumb.png" alt="Dnevni boravak thumb"/></a></li>
									<li class="menuItem 5" name="5"><a href=""><img src="images/apartment1/slide5_thumb.png" alt="Dnevni boravak 2 thumb"/></a></li>
									<li class="menuItem 6" name="6"><a href=""><img src="images/apartment1/slide6_thumb.png" alt="Spavaća soba velika thumb"/></a></li>
									<li class="menuItem 7" name="7"><a href=""><img src="images/apartment1/slide7_thumb.png" alt="Spavaća soba mala thumb"/></a></li>
									<li class="menuItem 8" name="8"><a href=""><img src="images/apartment1/slide8_thumb.png" alt="Kupaonica thumb"/></a></li>
									<li class="menuItem 9" name="9"><a href=""><img src="images/apartment1/slide9_thumb.png" alt="Vikendica thumb"/></a></li>
									<li class="menuItem 10" name="10"><a href=""><img src="images/apartment1/slide10_thumb.png" alt="Vikendica thumb"/></a></li>
								</ul>
								<!--<span class="nav-arrows right"></span>-->
							</div><!-- //#menu -->
						</div><!-- //#gallery -->
					</div><!-- //#gallery-wrapper -->
				</div><!-- //#content-top -->
			</div><!-- //#content -->

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