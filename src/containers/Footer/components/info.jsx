import React from 'react';

class FooterInfo extends React.Component {
    render() {
        return (
            <div className="content has-text-centered">
                <p>
                    <strong>
                        {'Junique Virgile'}
                    </strong>
                    {' by '}
                    <a href="https://junique-virgile.com">
                        {'Social Media'}
                    </a>
                    <br />
                    {' The website content is licensed and private '}
                </p>
            </div>
        );
    }
}

export { FooterInfo };
