import sequelize from './src/config/database';
import app from './src/config/express';
import { port } from './src/config/settings';

try {
	sequelize
		.authenticate()
		.then(() => console.log('Database connected...'))
		.then(() => {
			app.listen(port, () =>
				console.log(`Server is listening to port ${port}...`)
			);
		});
} catch (err) {
	console.log(err);
}
