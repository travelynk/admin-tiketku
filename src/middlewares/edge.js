import { Edge } from 'edge.js';
import path from 'path';

const edge = Edge.create();
const __dirname = path.resolve();
edge.mount(path.join(__dirname, 'src/resources/views'));

export default (req, res, next) => {
    res.edge = async (view, data) => {
        const html = await edge.render(view, data);
        res.send(html);
    };
    next();
};