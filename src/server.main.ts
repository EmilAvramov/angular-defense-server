import sequelize from './config/database';
import app from './config/express';
import { PORT } from './config/settings';

try {
	sequelize
		.authenticate()
		.then(() => console.log('Database connected...'))
		.then(() => {
			app.listen(PORT, () =>
				console.log(`Server is listening to port ${PORT}...`)
			);
		});
} catch (err) {
	console.log(err);
}
