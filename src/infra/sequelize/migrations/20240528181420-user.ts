import { DataTypes, QueryInterface, Transaction } from "sequelize";

export async function up(queryInterface: QueryInterface) {
  try {
    await queryInterface.sequelize.transaction(
      async (transaction: Transaction) => {
        await queryInterface.createTable(
          "users",
          {
            id: {
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              allowNull: false,
              primaryKey: true,
            },
            password: {
              type: DataTypes.UUID,
              defaultValue: DataTypes.UUIDV4,
              allowNull: false,
            },
            name: {
              type: DataTypes.STRING,
              allowNull: false,
            },
          },
          { transaction }
        );
      }
    );
  } catch (err) {
    console.log(err);
  }
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.sequelize.transaction(
    async (transaction: Transaction) => {
      await queryInterface.dropTable("users", {
        transaction,
      });
    }
  );
}
