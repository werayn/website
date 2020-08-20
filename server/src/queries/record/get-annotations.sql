SELECT qcm
FROM app_annotation
WHERE iddocument = $1
AND filename = $2
