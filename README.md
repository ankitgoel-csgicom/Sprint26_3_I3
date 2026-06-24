# Sprint Report - CEI.APAC1 26.3 I3

An interactive, modern sprint report webpage with beautiful UI and animations.

## 📁 Project Structure

```
├── index.html                              # Main HTML file
├── styles.css                              # All CSS styles and animations
├── script.js                               # JavaScript functionality
├── ASC.png                                 # ASC Logo (header)
├── Burndown26.3.I3.png                     # Burndown chart image
├── Velocity26.3.I3.png                     # Velocity chart image
├── ItemsMoved26.3.I3.png                   # Items moved grid image
├── AIStatsAdoptionScore26.3.I3.png         # AI Adoption Score
├── TeamLeaderBoardYTD26.3.I3.png           # Team Leaderboard YTD
├── TeamLeaderBoardCurrentMonth26.3.I3.png  # Team Leaderboard Current Month
└── README.md                               # This file
```

## 🚀 Deploying to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name your repository (e.g., `sprint-report-26-3-I3`)
   - Make it Public
   - Don't initialize with README (we already have files)
   - Click "Create repository"

2. **Upload your files**
   - On the repository page, click "uploading an existing file"
   - Drag and drop these files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
     - `ASC.png`
     - `Burndown26.3.I3.png`
     - `Velocity26.3.I3.png`
     - `ItemsMoved26.3.I3.png`
     - `AIStatsAdoptionScore26.3.I3.png`
     - `TeamLeaderBoardYTD26.3.I3.png`
     - `TeamLeaderBoardCurrentMonth26.3.I3.png`
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click "Save"

4. **Access your site**
   - Wait 1-2 minutes for deployment
   - Your site will be available at: `https://yourusername.github.io/sprint-report-26-3-I3/`

### Method 2: Using Git Command Line

1. **Initialize git repository**
   ```bash
   git init
   git add index.html styles.css script.js README.md ASC.png Burndown26.3.I3.png Velocity26.3.I3.png ItemsMoved26.3.I3.png AIStatsAdoptionScore26.3.I3.png TeamLeaderBoardYTD26.3.I3.png TeamLeaderBoardCurrentMonth26.3.I3.png
   git commit -m "Initial commit: Sprint Report 26.3 I3"
   ```

2. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/sprint-report-26-3-I3.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages** (follow step 3 from Method 1)

## ✨ Features

### 7 Interactive Slides:
1. **📊 Sprint Stats** - Comprehensive sprint statistics and metrics
2. **📈 Burndown Chart** - Visual burndown chart for the sprint
3. **⚡ Velocity Chart** - Detailed velocity metrics across all 3 iterations
4. **📤 Items Moved** - Items moved to other teams
5. **🐛 Bugs & Stories** - Major bugs and incidents resolved
6. **🤖 AI Corner** - AI adoption statistics and team leaderboards
7. **🏆 Wall of Fame** - Team recognition and achievements

### Key Features:
- ✨ Beautiful gradient animations
- 📱 Fully responsive design
- ⌨️ Keyboard navigation (Arrow keys)
- 🎨 Modern UI with hover effects
- 🚀 Fast loading and smooth transitions
- 📊 Embedded sprint charts and metrics
- 🤖 AI Corner with adoption stats and leaderboards

## 🎮 Usage

### Navigation:
- Click the navigation buttons at the top
- Use **Arrow Left/Right** keys to navigate between slides
- Scroll to view more content on each slide
- All sprint data, charts, and images are embedded and ready to view

## 🛠️ Customization

### To modify the content:
1. Edit `index.html` for content changes
2. Edit `styles.css` for styling changes
3. Edit `script.js` for functionality changes

### To change colors:
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    /* ... more variables */
}
```

## 📊 Sprint Information

- **Sprint**: CEI.APAC1 – 26.3 I3
- **Period**: 27/May/26 - 10/June/26
- **Commitment**: 42 Story Points
- **Delivered**: 35 Story Points
- **Success Rate**: 83.33%

### Sprint 26.3 Velocity Trends:
- **I1**: 20/22 delivered (-23.8%) - Full of spikes + team OOO
- **I2**: 22/31 delivered (-21.43%) - Complex feature + team OOO
- **I3**: 35/42 delivered (+12.9%) - Strong execution & recovery! ✅

## 🌟 Team Achievements

- Raj & Pratik - Quick EC issue resolution
- Ambika & Raj - Technical leadership on Fiber box feature
- Gargi - Incident management and conversion to backlog
- Harshita & Parthiban - Fiber feature testing collaboration
- Pavan - Excellent defect triaging
- Manish - Business query POC
- QA Team - Outstanding support and flexibility

## 🤖 AI Corner

Includes June 2026 AI adoption statistics:
- Adoption Score metrics
- Team Leader Board (Year-to-Date)
- Team Leader Board (Current Month)

## 📝 License

This project is created for internal sprint reporting purposes.

## 🤝 Support

For any issues or questions, please contact your team lead.

---

Made with ❤️ using HTML, CSS, and JavaScript
