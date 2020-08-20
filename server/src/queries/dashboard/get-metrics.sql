SELECT
COUNT (case when statut > 0 and pj_acte_principal isnull then 1 else null end) as annotated,
COUNT (case when statut = 0 and pj_acte_principal isnull then 1 else null end) as toAnnot
FROM test_annotations
