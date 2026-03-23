1. Clone the Repository
```bash
git clone https://github.com/guy0man/mountain-portfolio.git
```
2. Install Dependencies
```bash
npm install
```
3. Run Development Server
```bash
npm run dev
```
Update Workflow
```bash
Remove-Item -Recurse -Force dist
npm run build
npx gh-pages -d dist
```

