UPDATE test_annotations
SET
    "statut" =  $1
where filename = $2
AND iddocument= $3
