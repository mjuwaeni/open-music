// eslint-disable-next-line no-unused-vars
exports.up = (pgm) => {
  pgm.createTable('albums', {
    id: {
      type: 'VARCHAR(50)',
      primarykey: true,
      notNull: true,
    },
    name: {
      type: 'VARCHAR(150)',
      notNull: true,
    },
    year: {
      type: 'INT',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('albums');
};
