import { Dialog, DialogProps } from 'primereact/dialog';
import React from 'react';

type TMyDialog = {} & DialogProps;

const MyDialog: React.FC<TMyDialog> = ({ children, ...nest }) => {
    return <Dialog {...nest}>{children}</Dialog>;
};

export default MyDialog;
