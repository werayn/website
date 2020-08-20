SELECT "user", "id", "userin", "pass"
FROM "app_users"
WHERE "user" = $1
LIMIT 1;
