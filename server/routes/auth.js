const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    
    const user = new User({ email, password});
    await user.save();
    req.session.userId = user._id;
    res.status(201).send("Succes signup");
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
      req.session.userId = user._id;
      res.status(201).send("succes login");
    //   json({ user: { email: user.email } })
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  });

  router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Error logging out', error: err });
      }
    //   res.json({ message: 'Logout successful' });
      res.status(201).send("Succes logout");
      
    });
  });

//   router.get('/account', (req, res) => {
//     if (!req.session.userId) {
//       return res.status(401).json({ message: 'Not authenticated' });
//     }
//     User.findById(req.session.userId, (err, user) => {
//       if (err || !user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       res.json({ email: user.email });
//     });
//   });
router.get('/account', async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
  
    try {
      const user = await User.findById(req.session.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Respond with user email
      res.json({ email: user.email , id: req.session.userId});
      console.log('Session UserID:', req.session.userId);

    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Error fetching user', error });
    }
  });
  
  router.post('/save-note', async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    try {
    const user = await User.findById(req.session.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await User.findByIdAndUpdate(req.session.userId, { notes: req.body.notes });
      res.status(200).json({ message: 'Note saved successfully' });
      
    } catch (error) {
      res.status(500).json({ message: 'Error saving note', error });
    }
  });
  router.get('/get-note', async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }
    try {
      const user = await User.findById(req.session.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
    //   await User.findByIdAndUpdate(req.session.userId, { notes: req.body.notes });
      res.json({ notes: user.notes });
      
    } catch (error) {
      res.status(500).json({ message: 'Error getting note', error });
    }
  });


module.exports = router;
