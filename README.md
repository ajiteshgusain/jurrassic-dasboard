# 🦖 Dino Explorer

> A modern React web application to search and explore dinosaurs with real-time data from Wikipedia.

---

## 🚀 Live Features

✨ Real-time dinosaur search with suggestions
📖 Detailed information powered by Wikipedia API
🖼 Hybrid image system (custom + API images)



---

## 📸 Preview

*Add screenshots here (recommended for GitHub)*

---

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript
* **Routing:** React Router
* **API:** Wikipedia REST API
* **Styling:** CSS / Tailwind (optional based on your setup)

---

## 📂 Project Structure

```bash
src/
 ├── components/
 │    └── DinoCard.jsx
 ├── data/
 │    └── dinosaurs.js
 ├── pages/
 │    ├── Home.jsx
 │    └── Details.jsx
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/dino-explorer.git
cd dino-explorer
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:5173
```

---

## 🌐 API Integration

This project uses the Wikipedia API:

```bash
https://en.wikipedia.org/api/rest_v1/page/summary/{dinosaur-name}
```

Also uses search suggestions:

```bash
https://en.wikipedia.org/w/api.php?action=opensearch
```

---

## 🎯 Key Functionalities

### 🔍 Search with Live Suggestions

* Fetches real-time data from Wikipedia
* Displays clickable suggestions

### 📖 Dynamic Details Page

* Loads full description and image
* Uses URL params for dynamic routing

### 🖼 Smart Image System

* Shows custom images for known dinosaurs
* Falls back to Wikipedia images

### 🌙 Dark Mode

* Toggle between light and dark themes

---

## 🧠 Learnings

* React Hooks (`useState`, `useEffect`)
* API integration using Fetch
* Dynamic routing with React Router
* State-driven UI updates
* Handling asynchronous data

---

## 🚧 Future Improvements

* ⭐ Favorites system (localStorage)
* ⚡ Debounced search for performance
* 🖼 Better image API integration
* 🎨 Advanced UI/UX (animations, glassmorphism)
* 📱 Mobile responsiveness improvements

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Adhi Gusain**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
