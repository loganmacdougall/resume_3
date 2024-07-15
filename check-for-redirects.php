<?php

if (!function_exists('str_ends_with')) {
  function str_ends_with($haystack, $needle)
  {
    $strlen_needle = mb_strlen($needle);
    if (mb_substr($haystack, -$strlen_needle, $strlen_needle) == $needle) {
      return true;
    }
    return false;
  }
}

$uri = $_SERVER['REQUEST_URI'];

if (str_ends_with($uri, "/projects")) {
  include_once("./projects.php");
  exit;
}
