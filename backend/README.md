
@ivanaab i @msiladjev - ovdje napišite upute za pokretanje backenda

# UPUTE ZA POKRETANJE BACKENDA
Za pokretanje backenda je potrebno imati instaliran VSC, Git i Node, te je potrebno imati kreiran račun na GitHubu, ukoliko neke stavke nisu instalirane na računalu mogu se preuzeti sa slijedećih poveznica:
  -	  Instalacija Visual Studio Code https://code.visualstudio.com/Download 
  -   Instalacija Git https://git-scm.com/download 
  -	  Instalacija Node https://nodejs.org/en/ 
  -	  Kreiranje računa na Githubu https://github.com/ 
 
# Pokretanje backenda:
1.	Na desktopu kreirati novu mapu.
2.	Otvoriti VSC i otvoriti novu kreiranu mapu.
3.	U VSC-u otvoriti terminal i klonirati repozitorij kojem pristupamo. Na GitHubu kopirati link repozitorija kojem pristupamo te u naredbi clone zalijepiti link. Naredba:
        
        git clone https://github.com/vdavid033/iooa-2022.git
4.	Pozicionirati se u kloniranu mapu naredbom:
        
        cd iooa-2022
5.	Pozicionirati se na željenu granu, točnije development branch s naredbom:
      
      
        git checkout development
6.	Pozicionirati se na backend mapu naredbom:
      
        cd backend
7.	Instalirati express i mysql naredbama:
      
        npm install express
      
        npm install mysql
8.	Pokrenuti određenu datoteku naredbom 
      
        node index.js
(index.js je datoteka koju želimo pokrenuti)
 
9.	Za zaustavljanje se koristi naredba pomoću tipki Control i C:  
        Ctrl + C


# REST API

### http://localhost/plant_species/:id
Dohvaća jednu biljnu vrstu s određenim id-jem  
Primjer: http://localhost/plant_species/1 


### https://localhost:3000/botanical_family
Dohvat svih botaničkih porodica

### http://localhost/botanical_family/:id
Dohvaća jednu botaničku porodicu prema id.<br/>
Primjer: http://localhost/botanical_family/22

### http://localhost/plant_species_by_bf/:id
Dohvaća biljne vrste za botaničku porodicu s id-jem  
Primjer: http://localhost/plant_species_by_bf/22



Dohvat biljne porodice za jednu biljnu vrstu
Primjer: htp://localhost/botanical_family_plant_species/:id

@pjuric - dovršiti!
