

class AuthController {

  constructor() {
    
  }

  async register(req, res) {
    try {
      res.status(201).json({ success: true, message: 'User registered successfully'})
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }

  async login(req, res) {
    try {
      res.status(201).json({ success: true, message: 'User logged successfully'})
    } catch (err) { 
      res.status(500).json({ success: false, message: err.message });
    }
  }
}