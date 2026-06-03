import Article from '../models/Article.js';

// Get all articles
export const getArticles = async (req, res) => {
  try {
    const { status, journal, author } = req.query;
    let filter = {};
    
    if (status) filter.status = status;
    if (journal) filter.journal = journal;
    if (author) filter['authors.email'] = author;
    
    const articles = await Article.find(filter)
      .populate('journal', 'name issn')
      .populate('submittedBy', 'name email')
      .sort({ createdAt: -1 });
    
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single article
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
      .populate('journal')
      .populate('submittedBy', 'name email affiliation')
      .populate('reviews');
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    
    // Increment view count
    article.views += 1;
    await article.save();
    
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create article
export const createArticle = async (req, res) => {
  try {
    const article = new Article({
      ...req.body,
      submittedBy: req.user._id,
      submittedDate: new Date()
    });
    
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update article
export const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    
    res.json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete article
export const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user's articles
export const getUserArticles = async (req, res) => {
  try {
    const articles = await Article.find({ submittedBy: req.user._id })
      .populate('journal', 'name')
      .sort({ createdAt: -1 });
    
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};