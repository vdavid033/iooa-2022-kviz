
1. Početni prozor - definiranje layouta (slika u pozadini, prijedlog boja, naslov, gumb za startanje kviza) -  sbrozan, lukababic19, tkrznaric

2. Dizajn dijela prozora za pitanje i odgovore, gumbi za provjeru odgovora i povratna informacija, te prijelaz 
 na iduće pitanje i završetak, postaviti i broj pitanja vidljiv - složiti komponente - dati prijedlog (u Quasaru) - tonko555

3. Logika aplikacije:

	a) za prikaz pitanja gdje se nasumično odabire naziv biljke ili id  - martinasuman
	(middleware - random id, backend - dobivamo biljku prema id-u) - napraviti  
	Quasar komponentu QButton i klikom se dobije/ispisuje novo pitanje

	b) prikaz nekoliko botaničkih porodica - za odabrani id biljke (plant_id) - siladjev, babic
	dohvatiti i prikazati njenu botaničku porodicu u komponenti radio gumb i
 	odraditi ovo za	bilo koju odabranu biljku, npr. id=1
 
	c) dohvatiti i prikazati random botaničke porodice - napraviti Quasar - eshaton
	komponente QButton i RadioButton 
	
	d) provjera i prikaz točnog odgovora
		1. iskočni prozor - bojan
		2. kvačica ili x -dmeduran
		3. boja radio gumba - filip vasiljevic

	
4. Gumb za povratak na početnu stranicu (početak kviza) - pjuric, nino9333
5. Ispis svih pitanja i odgovora
__________________________________

## Postavljanje izmjena

Svaki student radi na vlastitoj grani i sve izmjene postavlja u nju.

## Instalacija Quasar frameworka

Instalaciju radite unutar frontend foldera  
_cd frontend_

Instalacija Quasar frameworka  
_npm i -g @quasar/cli_

Inicijalizacija (početno postavljanje) Quasar frameworka  
_npm init quasar_  
Prilikom inicijalizacije ostavite sve predloženo (samo Enter za dalje), osim u jednom koraku kad odabirete ESLint, Axios i Vue-i18n.
 
 ## Pokretanje Quasar frameworka

_cd quasar-project/_  
_quasar dev_ 

Nakon pokretanja otvara se web preglednik  
_http://localhost:8080/#/_  
Sve izmjene koje radite u programskom kodu vidljive su odmah nakon spremanja datoteka.
