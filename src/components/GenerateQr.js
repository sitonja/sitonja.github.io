import React, {Fragment} from 'react';
var QRCode = require('qrcode.react');

export const GenerateQr = () => {
    return (<Fragment>
        <h1>Generate Qr</h1>
        <QRCode size="256" value="http://facebook.github.io/react/" />
    </Fragment>)
}
