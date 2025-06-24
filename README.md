# 🍳 RecipeDia — Recipe Discovery Platform  
🚀 Discover recipes, save favorites, and cook with confidence across all devices.  
RecipeDia is a modern, cross-platform recipe application built with React Native and Express. With secure Clerk authentication, YouTube video integration, and PostgreSQL database, RecipeDia offers a seamless cooking experience with 8 beautiful themes.  


## ⚙️ Key Features  
### 🔐 Authentication & Security  
- **Clerk Integration** with signup, login, and 6-digit email verification  
- **JWT Authentication** with secure session management  
- **Protected Routes** for personalized content  

### 🍳 Recipe Discovery  
- **Featured Recipes** with category filtering  
- **Advanced Search** with detailed cooking instructions  
- **YouTube Integration** for video tutorials on recipe pages  

### ❤️ Personal Collection  
- **Favorites System** to save preferred recipes  
- **Dedicated Favorites Tab** for quick access  
- **Persistent Storage** across sessions  

### 🎨 UI & UX  
- **8 Color Themes** for personalized experience  
- **Cross-Platform** compatibility (iOS, Android, Web)  
- **Responsive Design** optimized for all screen sizes  

### 🔒 Data Management  
- **PostgreSQL Database** with Neon serverless hosting  
- **Drizzle ORM** for type-safe database operations  
- **Efficient Caching** for optimal performance  

## 🛠️ Tech Stack  
### Mobile App  
| Technology | Version | Usage |
|------------|---------|-------|
| React Native | 0.79.4 | Core framework |
| Expo | ~53.0.12 | Development platform |
| Clerk | ^2.13.1 | Authentication |
| Expo Router | ~5.1.0 | Navigation |
| React Navigation | ^7.1.6 | Tab navigation |

### Backend  
| Technology | Version | Usage |
|------------|---------|-------|
| Node.js | 18+ | Runtime |
| Express | ^5.1.0 | Server framework |
| PostgreSQL | Latest | Database |
| Drizzle ORM | ^0.44.2 | Database toolkit |
| Neon | ^1.0.0 | Serverless Postgres |

## 🚀 Getting Started  
### Prerequisites  
- Node.js v18+  
- Neon Database account  
- Clerk account for authentication  

### Installation  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/recipedia.git  
   cd recipedia  
   ```  

2. Install backend dependencies:  
   ```bash  
   cd backend
   npm install  
   ```  

3. Install mobile app dependencies:  
   ```bash
   cd ../mobile
   npm install
   ```

### 🧪 Environment Setup  
**Backend** (`/backend/.env`)
```env
PORT=5001
DATABASE_URL=your_neon_db_url
NODE_ENV=development
```

**Mobile App** (`/mobile/.env`)
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 🔧 Run the Application  
**Backend Server:**
```bash
cd backend
npm run dev        # Runs on port 5001
```

**Mobile App:**
```bash
cd mobile
npx expo start     # Opens Expo development tools
```

## 📱 Features Showcase  
- ✅ **100% Free Tools** — No paid services required  
- ✅ **Cross-Platform** — iOS, Android, and Web support  
- ✅ **Modern Stack** — Latest React Native and Express  
- ✅ **Secure Auth** — Industry-standard authentication  
- ✅ **Rich Media** — YouTube video integration  
- ✅ **Personalization** — 8 themes and favorites system  

## 🤝 Contributing  
1. Fork the repository  
2. Create feature branch:  
   ```bash
   git checkout -b feat/your-feature
   ```  
3. Commit changes:  
   ```bash
   git commit -m "feat: add your feature"
   ```  
4. Push to branch:  
   ```bash
   git push origin feat/your-feature
   ```  

## 📄 License  
MIT © 2024 [Miraz Zim]  

## 📩 Connect with Me
- GitHub: [MirazZim](https://github.com/MirazZim)
- LinkedIn: [Miraz](https://www.linkedin.com/in/mirazur-rahman-zim-62a973272/)
