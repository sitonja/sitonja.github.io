import React, {Fragment, useState} from 'react';
import QrReader from 'react-qr-reader'

export const ScanQr = () => {

    const [result, setResult] = useState(null);

    const handleScan = (data) => {
        console.log(data)
        if (!result) {
            setResult(data)
        }
    }

    const handleError = (err) => {
        console.error(err)
    }
    return (<Fragment>
        <h1>Scan Qr</h1>
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
        />
        <h1>{result}</h1>
    </Fragment>)
}
