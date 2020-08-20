/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { Icon, Input, Button } from 'antd';

export default (params) => [

    {
        title: 'Nom Fichier',
        dataIndex: 'fileName',
        key: 'fileName',
        width: '30%',
        ellipsis: true,
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
            <div className="custom-filter-dropdown">
                <Input
                    ref={ ele => params.searchInput = ele }
                    placeholder="Nom du fichier"
                    value={ selectedKeys[0] }
                    onChange={ e => setSelectedKeys(e.target.value ? [e.target.value] : []) }
                    onPressEnter={ params.handleSearch(selectedKeys, confirm) }
                />
                <Button type="primary" onClick={ params.handleSearch(selectedKeys, confirm) }>
                    {'Search'}
                </Button>
                <Button onClick={ params.handleReset(clearFilters) }>
                    {'Reset'}
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={ { color: filtered ? '#108ee9' : '#aaa' } } />,
        onFilter: (value, record) => {
            if (record && record.fileName) {
                return record.fileName.toLowerCase().includes(value.toLowerCase());
            }
        },
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => {
                    params.searchInput.focus();
                });
            }
        },
        render: text => {
            return text;
        },
    },
    {
        title: 'Dossier',
        dataIndex: 'folderName',
        key: 'folderName',
        width: '30%',
        ellipsis: true,
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
            <div className="custom-filter-dropdown">
                <Input
                    ref={ ele => params.searchInput = ele }
                    placeholder="Nom de Dossier"
                    value={ selectedKeys[0] }
                    onChange={ e => setSelectedKeys(e.target.value ? [e.target.value] : []) }
                    onPressEnter={ params.handleSearch(selectedKeys, confirm) }
                />
                <Button type="primary" onClick={ params.handleSearch(selectedKeys, confirm) }>
                    {'Search'}
                </Button>
                <Button onClick={ params.handleReset(clearFilters) }>
                    {'Reset'}
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={ { color: filtered ? '#108ee9' : '#aaa' } } />,
        onFilter: (value, record) => record.folderName.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => {
                    params.searchInput.focus();
                });
            }
        },
        render: text => {
            return text;
        },
    },
    {
        title: 'Année',
        dataIndex: 'year',
        key: 'year',
        width: '20%',
        ellipsis: true,
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
            <div className="custom-filter-dropdown">
                <Input
                    ref={ ele => params.searchInput = ele }
                    placeholder="Année"
                    value={ selectedKeys[0] }
                    onChange={ e => setSelectedKeys(e.target.value ? [e.target.value] : []) }
                    onPressEnter={ params.handleSearch(selectedKeys, confirm) }
                />
                <Button type="primary" onClick={ params.handleSearch(selectedKeys, confirm) }>
                    {'Search'}
                </Button>
                <Button onClick={ params.handleReset(clearFilters) }>
                    {'Reset'}
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={ { color: filtered ? '#108ee9' : '#aaa' } } />,
        onFilter: (value, record) => record.year.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => {
                    params.searchInput.focus();
                });
            }
        },
        render: text => {
            return text;
        },
    },
    {
        title: 'Nb Pages',
        dataIndex: 'pageNumber',
        key: 'pageNumber',
        width: '20%',
        ellipsis: true,
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
            <div className="custom-filter-dropdown">
                <Input
                    ref={ ele => params.searchInput = ele }
                    placeholder="Nombre de pages"
                    value={ selectedKeys[0] }
                    onChange={ e => setSelectedKeys(e.target.value ? [e.target.value] : []) }
                    onPressEnter={ params.handleSearch(selectedKeys, confirm) }
                />
                <Button type="primary" onClick={ params.handleSearch(selectedKeys, confirm) }>
                    {'Search'}
                </Button>
                <Button onClick={ params.handleReset(clearFilters) }>
                    {'Reset'}
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={ { color: filtered ? '#108ee9' : '#aaa' } } />,
        onFilter: (value, record) => record.pageNumber.toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => {
                    params.searchInput.focus();
                });
            }
        },
        render: text => {
            return text;
        },
    },
];
