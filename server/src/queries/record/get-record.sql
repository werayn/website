select
noacte as "nom_lettre",
filename as "filename",
nature as "nature",
matiere as "matiere",
objetacte as "objetacte",
texte as "lettre",
pj_acte_principal as "acte_principal",
dept as "dept",
iddocument as "docId",
statut as "status",
step as "step",
is_recrutement as "isRecrutement",
is_avenant as "isAvenant"
from test_annotations
where iddocument = $1
AND filename = $2
