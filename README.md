# Bro.js - Awesome Bro(wser) CSS Detector
Этот клёвый скрипт автоматически определит браузер и создаст для него класс в теге `<html>`.

Например этот код: 

	.opera h1 { background: red; }

Применит красный фон к тегу `<h1>` и **только** в браузере Opera.

### Internet Explorer
Скрипт для IE определяет версию браузера и применяет 2 типа классов: 

* с точной версией `.ie8`
* младше какой `.lt-ie8`

Например:

	.ie9 h1 { background: sea; } /* Только IE 9 */
	.ie8 h1 { background: teal; } /* Только IE 8 */
	.lt-ie8 h1 { background: purple; } /* все версии IE младше 8-ой */

## Применение: 
Просто подключите скрипт в теге `<head>`. 

	<script src="js/bro.js"></script>