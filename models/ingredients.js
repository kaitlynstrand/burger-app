module.exports = function(sequelize, DataTypes) {
	var Ingredient = sequelize.define("Ingredient", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		acquired: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});

	return Ingredient;
}