import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    firstName: {
        type: String,
        required: true,
      },
    lastName: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    selectedPackage: {
        type: String,
        required: true,
      },
    password: {
      type: String,
      required: true,
    },
    status: {
        type: String,
        default: "pending",
      },
    role: {
        type:String,
        default: "user",
        enum:["user", "admin"]
        
    }
  },
  {
    timestamps: true,
  }
);



// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;