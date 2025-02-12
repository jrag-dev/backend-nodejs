
class ProductController {

  createProduct(req, res) {
    try {
      res.status(201).json({ success: true, product: 'Product created successfully'})
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }

  getProducts(req, res) {
    try {
      res.status(200).json({ success: true, product: 'Products List'})
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }

  getProduct(req, res) {
    try {
      res.status(200).json({ success: true, product: 'Product Item'})
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }

  updateProductById(req, res) {
    try {
      res.status(200).json({ success: true, product: 'Product updated successfully'})
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }

  deleteProductById(req, res) {
    try {
      res.status(207).json({ success: true, product: 'Product deleted successfully'})
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }
}

export default ProductController;