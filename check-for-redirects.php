<?php

$uri = $_SERVER['REQUEST_URI'];

if (str_ends_with($uri, "/projects")) {
  include_once("./projects.php");
  exit;
}
