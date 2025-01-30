exports.validateApiKey = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (apiKey !== process.env.ADMIN_API_KEY) return res.status(403).json({ error: 'Invalid API Key' });
    next();
  };