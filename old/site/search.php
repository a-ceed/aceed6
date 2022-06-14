<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="format-detection" content="telephone=no"/>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <title>Search</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Links -->

    <link rel="stylesheet" href="css/search.css">
    <link href="css/subscribe.css" rel="stylesheet">
    <link href="css/google-map.css" rel="stylesheet">

    <!--JS-->
    <script src="js/jquery.js"></script>
    <script src="js/jquery-migrate-1.2.1.min.js"></script>
    <script src="js/rd-smoothscroll.min.js"></script>


    <!--[if lt IE 9]>
    <div style=' clear: both; text-align:center; position: relative;'>
        <a href="http://windows.microsoft.com/en-US/internet-explorer/..">
            <img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"
                 alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/>
        </a>
    </div>
    <script src="js/html5shiv.js"></script>
    <![endif]-->
    <script src='js/device.min.js'></script>
</head>
<body>
<div class="page">
    <!--========================================================
                              HEADER
    =========================================================-->
    <header>
        <div id="stuck_container" class="stuck_container">
            <nav class="navbar navbar-default navbar-static-top ">
                <div class="navbar-header">
                    <h1 class="navbar-brand">
                        <a data-type='rd-navbar-brand' href="./">liam chandler</a>
                    </h1>
                </div>

                <div class="navbar-right">
                    <ul class="navbar-nav sf-menu" data-type="navbar">
                        <li class="dropdown">
                            <a href="./">Main Page</a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a href="#">Info</a>
                                </li>
                                <li>
                                    <a href="#">Offers</a>
                                </li>
                                <li>
                                    <a href="#">News</a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="#">Fresh</a>
                                        </li>
                                        <li>
                                            <a href="#">Archive</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="index-1.html">About</a>
                        </li>
                        <li>
                            <a href="index-2.html">Portfolio</a>
                        </li>
                        <li>
                            <a href="index-3.html">Experience</a>
                        </li>

                        <li>
                            <a href="index-4.html">Contacts</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <!--========================================================
                              CONTENT
    =========================================================-->
    <main>
        <section id="content" class="content well">
            <div class="container">
                <form class="search-form" action="search.php" method="GET" accept-charset="utf-8">
                </form>
                <h2>Search Results</h2>

                <div id="search-results"></div>
            </div>
        </section>
    </main>
    <!--========================================================
                              FOOTER
    =========================================================-->
    <footer>
        <div class="footer_cnt">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <h3>newsletter sign up</h3>

                        <div class="subscribe">
                            <form class='mailform' method="post" action="bat/rd-mailform.php" data-type="subscribe">
                                <div class="form-group" data-add-placeholder><label for="subscribe-form-email">your@email</label>
                                    <input id="subscribe-form-email" type="text" name="email"
                                           data-constraints="@Email @NotEmpty"/></div>
                                <div class="form-group">
                                    <button class="btn-link" type="submit">subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12 text-center">
                        <address class="h3">28 Jackson Blvd Ste 1020 Chicago <br/>
                                            IL 60604-2340
                        </address>
                        <ul class="inline-list">
                            <li>
                                <a class="fa-twitter" href="#"></a>
                            </li>
                            <li>
                                <a class="fa-facebook" href="#"></a>
                            </li>
                            <li>
                                <a class="fa-google-plus" href="#"></a>
                            </li>
                            <li>
                                <a class="fa-rss" href="#"></a>
                            </li>
                            <li>
                                <a class="fa-pinterest" href="#"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-12">

                        <h3 class="rights">
                            &#169; <span id="copyright-year"></span> |
                            <a href="index-5.html">Privacy Policy</a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="js/bootstrap.min.js"></script>
<script src="js/tm-scripts.js"></script>
<!-- </script> -->


</body>
</html>
