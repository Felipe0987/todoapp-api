import fs from 'fs/promises';
import path from 'path';

const filepath = path.join(process.cwd(), 'src', 'works.json');

const workController = {};

const loadData = async () => {
    try {
        const data = await fs.readFile(filepath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        throw err;
    }
};

workController.index = async (req, res) => {
    try {
        const data = await loadData();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error: no se pudieron cargar los datos');
    }
};

export default workController;
