import ProductRepository from "../repository/product.repository.js";


class ProductService {

  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(productData) {
    return await this.productRepository.create(productData);
  }

  async findAllProducts() {
    return await this.productRepository.findAll();
  }

  async findOneProductById(id) {
    return await this.productRepository.findById(id);
  }

  async updateProductById(id, productData) {
    return await this.productRepository.update(id, productData);
  }

  async deleteProductById(id) {
    return await this.productRepository.delete(id);
  }

}

export default ProductService;