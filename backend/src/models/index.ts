import sequelize from '../config/database';
import Todo from './todo';

const initModels = async () => {
    await sequelize.sync();
};

export { sequelize, initModels, Todo };
