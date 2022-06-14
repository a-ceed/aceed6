<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<link rel="icon" href="<?php bloginfo( 'template_url' ); ?>/favicon.ico" type="image/x-icon">
 <link rel="shortcut icon" href="<?php bloginfo( 'template_url' ); ?>/favicon.ico" type="image/x-icon">
<title>Дизайнер Алексей Сидоров, авторский сайт, Череповец</title>
<meta name="Description" content="Дизайнер Алексей Сидоров, авторский сайт, Череповец">
<meta name="Keywords" content="android live wallpaper, designer, cherepovets, реклама, дизайн, aceed, блог дизайнера, зд, панорамы,3D, череповец">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Language" content="ru">
<link rel="alternate" type="application/rss+xml" title="RSS-канал" href="rss.xml" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" /> 
<!-- <link rel="stylesheet" type="text/css" media="all" href="style.css" />	-->			

<!-- Yandex.Metrika -->
<script src="//mc.yandex.ru/metrika/watch.js" type="text/javascript"></script>
<div style="display:none;"><script type="text/javascript">
try { var yaCounter1572327 = new Ya.Metrika(1572327); } catch(e){}
</script></div>
<noscript><div style="position:absolute"><img src="//mc.yandex.ru/watch/1572327" alt="" /></div></noscript>
<!-- /Yandex.Metrika -->



</head>
	<body>
		<div id="container">
            <div id="header">
                <div id="logo">
				<div id="avatar"><a style="border: none;" href="http://aceed.ru"><img src="<?php bloginfo( 'template_url' ); ?>/images/designer_cherepovets_alexey_sidorov.png" style="border: none;"></a></div>
                <div class="name">Aceed</div>
				</div>
                <div class="button">
                    <span id="menu"><a title="дизайнер Череповец" href="http://aceed.ru">ГЛАВНАЯ</a></span>
                </div>
                <div class="button active">
                    БЛОГ
                </div>
                
		    </div>
			
<div id="sidebar">
<form method="get" name="searchform" id="searchform" action="<?php bloginfo('siteurl')?>">
<input type="text" name="s" id="s" class=srch_query value="<?php echo wp_specialchars($s, 1); ?>"/>
<input id="btnSearch" type="submit" name="submit" value="<?php _e('Найти'); ?>" />

</form></br></br>
<?php get_sidebar(); ?>
</div>

</br></br></br></br>

<?php if ( have_posts() ) : ?>
<?php while ( have_posts() ) : the_post(); ?>
<div class="korobka">
<h1><a class="h1h1" href="<?php the_permalink(); ?>"><?php the_title();?></a></h1>

<span class="date"><?php the_date_xml ();?></span><p><?php the_content ('Читать далее');?></p>
</br></br></br></br>
</div>
<?php endwhile; ?>
<div class="nav"><?php posts_nav_link ('&nbsp;&nbsp;&nbsp;','',''); ?></div>
<?php endif; ?>



</div>
</div>
<div id="footer">
<div id="copyrait" style="text-align:center;">
<span style="float: left; margin-right:10px;">
<!--LiveInternet counter--><script type="text/javascript"><!--
document.write("<a href='http://www.liveinternet.ru/click' "+
"target=_blank><img src='//counter.yadro.ru/hit?t45.1;r"+
escape(document.referrer)+((typeof(screen)=="undefined")?"":
";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
";h"+escape(document.title.substring(0,80))+";"+Math.random()+
"' alt='' title='LiveInternet' "+
"border='0' width='31' height='31'><\/a>")
//--></script><!--/LiveInternet--><a href="http://aceed.ru"> Cоздание сайтов, лендингов, интернет-маркетинг в Череповце</a></span>

<span align="left">

</span>
</div>
</div>
<div id="pravoverh">


 <div id="sidebar2"><span style="color:#7D7C7C; font-size:12px";></span></div>
 <div id="content2"><span id="2" style="vertical-align:top"></span><br><span style="color:#2cadc0; font-size:12px";></span></div>


</div>



</body>
</html>
