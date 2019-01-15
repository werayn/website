import React from 'react';

class FooterInfo extends React.Component {
    render() {
        return (
            <div className="content has-text-centered">
                <p>
                    <strong>
                        {'Seedz website'}
                    </strong>
                    {' by '}
                    <a href="https://github.com/werayn">
                        {'Junique Virgile'}
                    </a>
                    <br />
                    {' The website content is licensed and private '}
                </p>
            </div>
        );
    }
}

export { FooterInfo };
