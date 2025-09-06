class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getById(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, update) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = CrudRepository;
