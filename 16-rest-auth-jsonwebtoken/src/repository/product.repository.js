import Product from "../models/product.model.js";


class ProductRepository {

  async create(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async findAll() {
    return await Product.find({});
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async update(id, productData) {
    return await Product.findOneAndUpdate({ _id: id }, productData, { new: true });
  }

  async delete(id) {
    return await Product.findOneAndDelete({ _id: id });
  }
}

export default ProductRepository;