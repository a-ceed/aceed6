<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи, язык WordPress и ABSPATH. Дополнительную информацию можно найти
 * на странице {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется сценарием создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения.
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'aceed');

/** Имя пользователя MySQL */
define('DB_USER', 'aceed');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'p8KydhK9');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется снова авторизоваться.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'g,b,U9L$~y|e{2/~2k;Av >MF-6M({HE(NFWA03pxwTwTL6w.+Zfv5|n^RH,EGNN');
define('SECURE_AUTH_KEY',  'A[r4}V M{yK2*F1kM-p02NyK_9x4EHrD$T{S<=lQmj^)%_mea/ !B|v] ibm1 0i');
define('LOGGED_IN_KEY',    'ywz|-X$5J72,6Sa~|:}<cGyg35&iG |{fqvgInw}7 FV$( f0+|n(V+[_G}|/^;_');
define('NONCE_KEY',        '&>8%&5cu:}W^IQi{ksvF-)ea-7-UYs&|Jt0bA^w_iIm]7>mkC%b[Fd3saZ,gc5Qq');
define('AUTH_SALT',        'Dh3B,z%7*Do)Z**Y=3ehgO5E&uHSeu~ &}(-e>--<AMw$gdcSW|gAkU_-7[MBWtc');
define('SECURE_AUTH_SALT', 'H`+?P!~wx>0VYB$,E&xy{tS:=5Z|2J+QY(nH:n@{`FKA||i)&o6qeTqZ{E_|{cft');
define('LOGGED_IN_SALT',   'B2:jt1<wQy*rrB+#O$P Du8yeO&LM4GA/(fGxdpvXC|B]h;q?wL|,s4%xbQO4wEO');
define('NONCE_SALT',       'Yn_L/_]VhpLi{k}+MGP:IXz:P@I1-J%qj3jXb&RMeuxl@-6+6qm`pBwrj}v+?Wgp');
/*
define('AUTH_KEY',         'впишите сюда уникальную фразу');
define('SECURE_AUTH_KEY',  'впишите сюда уникальную фразу');
define('LOGGED_IN_KEY',    'впишите сюда уникальную фразу');
define('NONCE_KEY',        'впишите сюда уникальную фразу');
define('AUTH_SALT',        'впишите сюда уникальную фразу');
define('SECURE_AUTH_SALT', 'впишите сюда уникальную фразу');
define('LOGGED_IN_SALT',   'впишите сюда уникальную фразу');
define('NONCE_SALT',       'впишите сюда уникальную фразу');
*/
/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько блогов в одну базу данных, если вы будете использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Язык локализации WordPress, по умолчанию английский.
 *
 * Измените этот параметр, чтобы настроить локализацию. Соответствующий MO-файл
 * для выбранного языка должен быть установлен в wp-content/languages. Например,
 * чтобы включить поддержку русского языка, скопируйте ru_RU.mo в wp-content/languages
 * и присвойте WPLANG значение 'ru_RU'.
 */
define('WPLANG', 'ru_RU');

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Настоятельно рекомендуется, чтобы разработчики плагинов и тем использовали WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
