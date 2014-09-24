<?php 
require('../libs/Toolbox.php');
$url = "http://ronaldoleal:x2w3oFQv@de.channel.become.eu/livexml/3.1/decido_sem-de.portal/query;product-results/box?mode=default";
$tool = new Toolbox;
$xml = $tool->getXML($url);
$products = $xml->xpath('//product-results-module/product-results');


echo "<pre>";
	print_r($products);
echo "</pre>";
