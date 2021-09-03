import React from 'react';

type Props = {
    value: string;
    onClick: (e: React.MouseEvent) => void; 
}

function Button(props: Props) {
    return (
        <button onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export { Button };
