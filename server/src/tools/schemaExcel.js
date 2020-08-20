const styles = {
    sheetHeader: {
        font: {
            sz: 20,
            bold: true,
            underline: true,
        },
    },
    headerDark: {
        fill: {
            fgColor: {
                rgb: 'FF000000',
            },
        },
    },
    header: {
        font: {
            sz: 12,
            bold: true,
            underline: true,
        },
    },
    cell: {
        font: {
            sz: 10,
        },
    },
    cellGreen: {
        fill: {
            fgColor: {
                rgb: 'FF00FF00',
            },
        },
    },
};

//Here you specify the export structure
const specification = {
    categorie: {
        displayName: 'Categorie',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '10',
    },
    sous_categorie: {
        displayName: 'Sous-categories',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    }
    ,nb_occur: {
        displayName: 'Nb occurrences',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
};


//Here you specify the export structure
const specificationSearch = {
    nom_lettre: {
        displayName: 'Nom Lettre',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    id_lettre: {
        displayName: 'Id Lettre',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    scope: {
        displayName: 'Domaine',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    date: {
        displayName: 'Date',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    theme_principal_corr: {
        displayName: 'Thème',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    entite_pilote: {
        displayName: 'Entité pilote',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    entite_resp: {
        displayName: 'Entité responsable',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    quoted_in_text_site: {
        displayName: 'Site',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    quoted_in_text_exploitant: {
        displayName: 'Exploitant',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    quoted_in_text_INB: {
        displayName: 'Numéro INB',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
    lien_siv2: {
        displayName: 'Lien SiV2',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '12',
    },
};

const specificationPara = {
    para: {
        displayName: 'Paragraphes',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '50',
    },
    categorie: {
        displayName: 'Catégories',
        headerStyle: styles.header,
        cellStyle: styles.cell,
        width: '50',
    },
};

export { specificationSearch, specificationPara, specification };
