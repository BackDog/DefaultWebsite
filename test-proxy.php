<?php

    $url = 'http://www.google.com';
    // to check your proxy
    // $url = 'http://whatismyipaddress.com/';
    $proxy = '206.71.228.193:8841';
    // $proxy = '45.77.146.92:8080';
    // create curl resource
    $ch = curl_init();
    
    // set options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_PROXY, $proxy);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // read more about HTTPS http://stackoverflow.com/questions/31162706/how-to-scrape-a-ssl-or-https-url/31164409#31164409
    curl_setopt($ch, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13');
    
    // $output contains the output string
    $output = curl_exec($ch);
    
    // close curl resource to free up system resources
    curl_close($ch); 
    
    echo $output;
?>