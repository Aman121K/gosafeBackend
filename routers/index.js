const userRoutes = require('./userRouter');
const authRoutes = require('./authRouter');
const router = express.Router();
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;