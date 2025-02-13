import ProductService from "../services/product.service.js";

class ProductController {

  constructor() {
    this.productService = new ProductService();
  }

  async createProduct(req, res) {
    const { name, category, price, imgURL } = req.body;
    if ( name.trim() === "" || category.trim() === "" || price === "" || imgURL.trim() === "" ) {
      return res.status(400).json({ success: false, message: "All fields are required"});
    }
    try {
      const product = await this.productService.createProduct(
        {
          name,
          category,
          price,
          imgURL
        }
      )
      res.status(201).json({ success: true, product: 'Product created successfully', product })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }

  async getProducts(req, res) {
    try {
      const products = await this.productService.findAllProducts();
      res.status(200).json({ success: true, message: 'Products List', products })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }
  
  async getProduct(req, res) {
    const { id } = req.params;
    try {
      const product = await this.productService.findOneProductById(id);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json({ success: true, product: 'Product Item', product })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }

  async updateProductById(req, res) {
    const { id } = req.params;
    try {
      const productData = {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        imgURL: req.body.imgURL
      }
      console.log(productData);
      const product = await this.productService.updateProductById(id, productData);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(200).json({ success: true, product: 'Product updated successfully', product })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }

  async deleteProductById(req, res) {
    const { id } = req.params;
    try {
      const product = await this.productService.deleteProductById(id);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
      res.status(207).json({ success: true, product: 'Product deleted successfully', product })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }
}

export default ProductController;