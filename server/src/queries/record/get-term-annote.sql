/*
case when categorie='Désignation' then '#007e81'
 when categorie='Problématiques matérielles' then '#ff2c76'
 when categorie='Méthodes' then '#ff1001'
 when categorie='Aspects organisationnels' then '#1c1b30'
 when categorie='Domaines/Métiers' then'#495e0b'
 when categorie='Barrières' then'#0000ff'
 when categorie='Conduite normale' then'#512808'
 when categorie='Chantiers et arrêts de réacteurs' then'#4043AC'
 when categorie='RGE' then'#872167'
 when categorie='Crise/Urgence' then'#ff7a11'
 when categorie='Environnement' then'#40ff33'
 when categorie='Radioprotection' then'#98b5ff'
 when categorie='ESP/ESPN' then'#5c061c'
 when categorie='Incendie' then'#ffcb1a'
 when categorie='Agressions' then'#778899'
*/
select distinct terms as "terms",
categorie as "categorie",
sous_categorie as sous_categorie,
id_lettre,
case when categorie='Désignation' then '#007e81'
 when categorie='Problématiques matérielles' then '#ff2c76'
 when categorie='Méthodes' then '#ff1001'
 when categorie='Aspects organisationnels' then '#1c1b30'
 when categorie='Domaines/Métiers' then'#495e0b'
 when categorie='Barrières' then'#0000ff'
 when categorie='Conduite normale' then'#512808'
 when categorie='Chantiers et arrêts de réacteurs' then'#4043AC'
 when categorie='RGE' then'#872167'
 when categorie='Crise/Urgence' then'#ff7a11'
 when categorie='Environnement' then'#40ff33'
 when categorie='Radioprotection' then'#98b5ff'
 when categorie='ESP/ESPN' then'#5c061c'
 when categorie='Incendie' then'#ffcb1a'
 when categorie='Agressions' then'#778899'
end as "color",
id_lettre || terms || categorie || sous_categorie as "code_supression"
from dw_annotation
where id_lettre =$1
