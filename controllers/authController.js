const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Institute = require('../models/institute.model');  
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

exports.registerInstitute = async (req, res) => {
  const {
    name, email, password,   
    instituteName, address, city, state, pincode  
  } = req.body;

  try {
    const existingUser = await User.findOne({ where: { Email: email } });
    if (existingUser) return res.status(400).json({ error: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      Name: name,
      Email: email,
      Password: hashedPassword,
      Role: 'institute'
    });

    await Institute.create({
      InstituteName: instituteName,
      Address: address,
      City: city,
      State: state,
      Pincode: pincode,
      UserId: user.UserId  
    });

    res.status(201).json({ message: 'Institute registered successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
};


exports.loginInstitute = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { Email: email } });
      if (!user) return res.status(404).json({ error: 'User not found' });

      if (user.Role !== 'institute') {
        return res.status(403).json({ error: 'Access denied. Not an institute user.' });
      }

      const isMatch = await bcrypt.compare(password, user.Password);
      if (!isMatch) return res.status(401).json({ error: 'Invalid password' });

      const token = jwt.sign(
        { userId: user.UserId, role: user.Role },
        JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.status(200).json({ message: 'Login successful', token });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong during login' });
    }
  };
  