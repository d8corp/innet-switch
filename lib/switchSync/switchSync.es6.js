import innet from 'innet';

function switchSync({ children }, handler) {
    if (children) {
        for (let i = 0; i < children.length; i++) {
            const child = innet(children[i], handler);
            if (child !== undefined) {
                return child;
            }
        }
    }
}

export { switchSync };
