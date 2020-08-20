select
file_path as "filePath",
file_name as "fileName",
folder_name as "folderName",
year as "year",
page_number as "pageNumber",
statut_anno as "annotStatut"
from app_ief
where statut_anno = $1
