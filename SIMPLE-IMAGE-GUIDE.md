# 🖼️ SIMPLE GUIDE: How to Add Your Images

## ✅ CODE IS FIXED - NOW ADD 3 IMAGES!

I've updated all the code to work with Vercel. Now you just need to add 3 image files!

---

## 📸 THE 3 IMAGES YOU NEED

### **Image #1: Church Logo** 
**File name:** `logo.png`  
**Where it's used:** Navigation bar (top) + Footer (bottom)  
**Where to find it:** Look at the top-left of your preview  
**How to save:** Right-click the church logo → Save as `logo.png`

---

### **Image #2: Pastor Photo**
**File name:** `pastor.png`  
**Where it's used:** About Us section (middle of page)  
**Where to find it:** Scroll to "About Us" section  
**How to save:** Right-click Pastor Ademola's photo → Save as `pastor.png`

---

### **Image #3: Favicon**
**File name:** `favicon.png`  
**Where it's used:** Browser tab icon  
**Where to find it:** Same as church logo (or browser tab)  
**How to save:** Just copy `logo.png` and rename it to `favicon.png`

---

## 📁 WHERE TO PUT THE IMAGES

### **Step 1: Create `/public` Folder**

In your project folder (where `package.json` is), create a new folder called `public`

```
your-project/
├── public/     ← Create this!
├── src/
├── package.json
└── ...
```

---

### **Step 2: Put All 3 Images Inside `/public`**

Copy the 3 images into the `/public` folder:

```
your-project/
├── public/
│   ├── logo.png       ← Your church logo
│   ├── pastor.png     ← Pastor photo
│   └── favicon.png    ← Favicon (same as logo is fine)
```

**IMPORTANT:**
- ✅ Lowercase file names: `logo.png` NOT `Logo.png`
- ✅ All in `/public` folder (not in a subfolder)
- ✅ Exactly these names: `logo.png`, `pastor.png`, `favicon.png`

---

## 🧪 TEST IT

### **Test Locally (Before Deploying):**

```bash
npm run build
npm run preview
```

Open the preview URL and check:
- ✅ Logo shows at top (navigation)
- ✅ Logo shows at bottom (footer)
- ✅ Pastor photo shows in About section
- ✅ Favicon shows in browser tab

**All showing?** You're ready to deploy! 🚀

**Not showing?** Double-check file names and location.

---

## 🚀 DEPLOY TO VERCEL

### **Quick Deploy (30 seconds):**

1. **Commit to Git:**
   ```bash
   git add .
   git commit -m "Add church images"
   git push
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Import your repository
   - Click "Deploy"
   - Wait 1-2 minutes
   - Done! ✅

3. **Check your live site:**
   - All images should be showing
   - Share the URL with your church! 🎉

---

## ✅ CHECKLIST

Before deploying:

- [ ] Created `/public` folder in project root
- [ ] Saved `logo.png` in `/public` folder
- [ ] Saved `pastor.png` in `/public` folder
- [ ] Saved `favicon.png` in `/public` folder
- [ ] Tested locally - images showing ✅
- [ ] Pushed to Git
- [ ] Deployed to Vercel

---

## 🆘 NEED HELP?

### **Images not showing locally?**
- Check file names (lowercase, exact)
- Check they're in `/public` (not `/public/images`)
- Clear browser cache (Ctrl+Shift+R)

### **Images not showing on Vercel?**
- Make sure you pushed `/public` folder to Git
- Check Vercel deployment logs
- Try redeploying

### **Don't have the images saved?**
- Right-click each image in the Figma Make preview
- "Save image as..."
- Save with the correct file names

---

## 🎯 THAT'S IT!

**You're 3 files away from a fully deployed website!**

1. Save 3 images (2 minutes)
2. Put them in `/public` folder (30 seconds)
3. Deploy to Vercel (2 minutes)

**Total time: ~5 minutes!** 🚀

---

**Questions? Just ask! Good luck! 🙏✨**
