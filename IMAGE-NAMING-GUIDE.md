# 📸 IMAGE NAMING GUIDE - UPDATED!

## ✅ WHAT I JUST FIXED

1. **✅ Removed yellow border** from logo (navigation and footer)
2. **✅ Made logo bigger** in navigation (now 64x64px, was 40x40px)
3. **✅ Updated code** to use `/public` folder paths

---

## 📋 YOUR IMAGE FILE NAMES

You need to name your 3 uploaded images and place them in the `/public` folder:

### **Image 1: Church Logo**
- **Your file name:** Whatever you named it (e.g., `church-logo.png`, `cct-logo.png`, etc.)
- **Where code expects it:** `/public/logo.png`
- **What to do:** Rename your church logo file to exactly `logo.png` and put it in `/public` folder

**Used in:**
- Navigation bar (top) - Now 64x64px, no yellow border ✅
- Footer section (bottom) - Now 80x80px, no yellow border ✅

---

### **Image 2: Pastor Photo**
- **Your file name:** Whatever you named it (e.g., `pastor-photo.png`, `ademola.png`, etc.)
- **Where code expects it:** `/public/pastor.png`
- **What to do:** Rename your pastor photo to exactly `pastor.png` and put it in `/public` folder

**Used in:**
- About section - Large portrait photo

---

### **Image 3: Favicon**
- **Your file name:** Whatever you named it (e.g., `icon.png`, `church-icon.png`, etc.)
- **Where code expects it:** `/public/favicon.png`
- **What to do:** Rename your favicon to exactly `favicon.png` and put it in `/public` folder

**Used in:**
- Browser tab icon

---

## 📁 FINAL FILE STRUCTURE

After renaming, your `/public` folder should look like this:

```
your-project/
├── public/
│   ├── logo.png       ← Your church logo (renamed)
│   ├── pastor.png     ← Pastor photo (renamed)
│   └── favicon.png    ← Favicon icon (renamed)
├── src/
├── package.json
└── ...
```

---

## ⚠️ IMPORTANT

The files **MUST** be named exactly:
- ✅ `logo.png` (lowercase)
- ✅ `pastor.png` (lowercase)
- ✅ `favicon.png` (lowercase)

**NOT:**
- ❌ `Logo.png`
- ❌ `church-logo.png`
- ❌ `LOGO.PNG`
- ❌ Any other variation

---

## 🔄 HOW TO RENAME YOUR FILES

### **Windows:**
1. Right-click the file
2. Click "Rename"
3. Type the new name exactly: `logo.png`
4. Press Enter

### **Mac:**
1. Click the file once
2. Press Enter (or right-click → Rename)
3. Type the new name exactly: `logo.png`
4. Press Enter

---

## ✅ WHAT'S CHANGED

### **Before:**
- Logo had yellow/gold border background
- Logo was small (40x40px in nav, 64x64px in footer)

### **After (Now):**
- ✅ No yellow border - clean logo display
- ✅ Bigger logo in navigation (64x64px)
- ✅ Bigger logo in footer (80x80px)
- ✅ Better visibility and professional look

---

## 🚀 NEXT STEPS

1. **Rename your 3 uploaded images:**
   - Your church logo → `logo.png`
   - Your pastor photo → `pastor.png`
   - Your favicon → `favicon.png`

2. **Create `/public` folder** in your project root

3. **Move all 3 renamed files** into `/public` folder

4. **Test:**
   ```bash
   npm run build
   npm run preview
   ```

5. **Deploy:**
   ```bash
   git add .
   git commit -m "Add church images"
   git push
   ```
   Then deploy on Vercel!

---

## 📊 SUMMARY

| What You Have | What to Rename It To | Where to Put It |
|---------------|---------------------|-----------------|
| Your church logo file | `logo.png` | `/public/logo.png` |
| Your pastor photo file | `pastor.png` | `/public/pastor.png` |
| Your favicon file | `favicon.png` | `/public/favicon.png` |

---

**That's it! Just rename and place the 3 files, then deploy!** 🎉
