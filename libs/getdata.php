<?php 

include("toolbox.php");


function d($obj){
	echo "<pre>";
		print_r($obj);
	echo "</pre>";
}


function search($keyword){
	$url = "http://ronaldoleal:x2w3oFQv@de.channel.become.eu/livexml/3.1/decido_sem-de.portal/query;product-results/$keyword?mode=default&pge=5";
	$xml = getXML($url);

	if(!is_object($xml)) return "";
	$xml = $xml->xpath("//product-results-module/product-results/product");
	echo json_encode($xml);
}

search("ipad");