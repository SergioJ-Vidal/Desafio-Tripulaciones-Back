'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'El campo de nombre no puede estar vacío'
          },
          len: {
            args: [3, 30],
            msg: 'El nombre debe contener entre 3 y 30 letras'
          },
          isAlpha: {
            msg: 'El nombre solo puede contener letras'
          }
        }
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'El campo de apellidos no puede estar vacío'
          },
          len: {
            args: [3, 30],
            msg: 'El nombre debe contener entre 3 y 30 letras'
          },
          isAlpha: {
            msg: 'El nombre solo puede contener letras'
          }
        }
      },
      birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
          isDate: {
            msg: 'The birthdate field must be a valid date'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Debe de ser una dirección de correo válida'
          },
          is: {
            args: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            msg: 'El campo email debe contener un @ y un nombre de dominio válido'
          }
        }
      },
      codephone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'El campo de código es requerido'
          },
          len: {
            args: [2, 3],
            msg: 'Debe contener entre 2 y 3 carácteres'
          }
        }
      },
      telephone: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'El campo de teléfono es requerido'
          },
          len: {
            args: [9, 20],
            msg: 'Debe contener entre 9 y 20 carácteres'
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: {
            msg: 'El campo de contraseña es requerido'
          },
          // len: {
          //   args: [9, 20],
          //   msg: 'Debe contener entre 9 y 20 carácteres'
          // },
          // is: {
          //   args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
          //   msg: 'El campo contraseña debe contener una mayúscula, una minúscula y un número'
          // }
        }
      },
      image: {
        type: Sequelize.STRING
      }, 
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};