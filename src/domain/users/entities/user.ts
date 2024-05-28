import { DataTypes, Model } from "sequelize";
import sequelize from "../../../infra/sequelize/sequelize";

class User extends Model {
  public id: string;
  public password: string;
  public name: string;
  public toClient: () => User;
}

User.init(
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
  {
    tableName: "users",
    timestamps: false,
    sequelize,
  }
);

export default User;
