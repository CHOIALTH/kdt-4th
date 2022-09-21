const userinfo = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    "userinfo",
    {
      id: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true,
      },
      pw: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      birth: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(2),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      mbti: {
        type: DataTypes.STRING(4),
        allowNull: false,
      },
      nick: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      imgurl: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      userdesc: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      interest: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      specialty: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
    },
    {
      tableName: "userinfo",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return model;
};
module.exports = userinfo;
