


export const isAdmin = (req, res, next) => {
  const roles = req.active_user.roles;

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'admin') {
      return next();
    }
  }
  return res.status(403).json({
    success: false,
    message: 'Action not allowed'
  })
} 


export const isEmployee = async (req, res, next) => {
  const roles = req.active_user.roles;

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'employee') {
      next();
    }
  }
  return res.status(403).json({
    success: false,
    message: 'Action not allowed, requires an administrator role'
  })
}