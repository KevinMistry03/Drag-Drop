export const nodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Start' },
        position: { x: 250, y: 0 },
    },
    {
        id: '2',
        data: { label: 'Step 1' },
        position: { x: 250, y: 150 },
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'End' },
        position: { x: 250, y: 300 },
    },
];

export const edges = [
    { id: 'e1-2', source: '1', target: '2', type: 'button' },
    { id: 'e2-3', source: '2', target: '3', type: 'button' },
];
