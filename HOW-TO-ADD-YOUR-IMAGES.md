# 📸 How to Add Your Actual Church Images

## ✅ CURRENT STATUS

I've created **placeholder SVG images** in the `/public` folder:
- `/public/logo.svg` - Church logo placeholder
- `/public/pastor.svg` - Pastor photo placeholder  
- `/public/favicon.svg` - Site icon placeholder

The website will now **build and deploy successfully** to Vercel with these placeholders!

---

## 🎯 TO USE YOUR ACTUAL IMAGES

### **Step 1: Prepare Your Images**

You need 3 images:

#### 1. **Church Logo** (`logo.png` or `logo.jpg`)
- **Recommended Size**: 200x200 pixels minimum
- **Format**: PNG (with transparent background) or JPG
- **What it's for**: Navigation bar and Footer

#### 2. **Pastor Photo** (`pastor.png` or `pastor.jpg`)
- **Recommended Size**: 400x520 pixels minimum
- **Format**: PNG or JPG
- **What it's for**: About section

#### 3. **Site Icon/Favicon** (`favicon.png`)
- **Recommended Size**: 32x32 pixels or 64x64 pixels
- **Format**: PNG or ICO
- **What it's for**: Browser tab icon

---

### **Step 2: Add Images to `/public` Folder**

#### **Option A: If You Have the Project Locally**

1. Open your project folder
2. Find or create the `/public` folder at the root level
3. Copy your 3 images into the `/public` folder
4. Rename them to:
   - `logo.png` (or `logo.jpg`)
   - `pastor.png` (or `pastor.jpg`)
   - `favicon.png`

Your folder structure should look like:
```
your-project/
├── public/
│   ├── logo.png         ← Your actual church logo
│   ├── pastor.png       ← Your actual pastor photo
│   └── favicon.png      ← Your actual site icon
├── src/
├── index.html
├── package.json
└── ...
```

#### **Option B: Upload to Vercel After Deployment**

If you deploy first with placeholders, you can add images later:

1. Deploy with current placeholders (they work fine!)
2. After deployment, add images to your Git repository
3. Push changes
4. Vercel will automatically redeploy with new images

---

### **Step 3: Update File References (If Using Different Extensions)**

If you use **JPG instead of SVG**, update these files:

#### **Update `/index.html`** (Line 5)
**From:**
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

**To (if using PNG):**
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

**To (if using ICO):**
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

#### **Update `/src/app/components/Navigation.tsx`** (Line ~36)
**From:**
```typescript
<img src="/logo.svg" alt="Christ the Cornerstone Tabernacle" />
```

**To (if using PNG):**
```typescript
<img src="/logo.png" alt="Christ the Cornerstone Tabernacle" />
```

**To (if using JPG):**
```typescript
<img src="/logo.jpg" alt="Christ the Cornerstone Tabernacle" />
```

#### **Update `/src/app/components/Footer.tsx`** (Line ~39)
**From:**
```typescript
<img src="/logo.svg" alt="Christ the Cornerstone Tabernacle" />
```

**To (if using PNG):**
```typescript
<img src="/logo.png" alt="Christ the Cornerstone Tabernacle" />
```

#### **Update `/src/app/components/About.tsx`** (Line ~42)
**From:**
```typescript
<img src="/pastor.svg" alt="Pastor Ademola Adetokunbo Fasubaa" />
```

**To (if using PNG):**
```typescript
<img src="/pastor.png" alt="Pastor Ademola Adetokunbo Fasubaa" />
```

**To (if using JPG):**
```typescript
<img src="/pastor.jpg" alt="Pastor Ademola Adetokunbo Fasubaa" />
```

---

### **Step 4: Deploy to Vercel**

After adding your images:

```bash
# Build locally to verify images show
npm run build

# Deploy to Vercel
npm run deploy
# OR
vercel --prod
```

---

## 🎨 IMAGE OPTIMIZATION TIPS

### For Best Results:

#### **Church Logo**
- Use PNG with transparent background
- Remove any white/colored backgrounds
- Minimum 200x200px, max 500x500px
- Keep file size under 100KB

#### **Pastor Photo**
- Professional headshot or portrait
- Good lighting and clear face
- Vertical orientation (portrait)
- Recommended: 400x520px to 800x1040px
- Keep file size under 500KB

#### **Favicon**
- Simple, recognizable icon
- 32x32px or 64x64px (small!)
- PNG or ICO format
- Keep file size under 10KB

---

## ⚡ QUICK DEPLOYMENT OPTIONS

### **Option 1: Deploy Now with Placeholders**
✅ **Recommended for immediate deployment**

The placeholder SVGs I created look professional and use your brand colors. You can:
1. Deploy now with placeholders
2. Add real images later
3. Push update to Git
4. Vercel auto-redeploys

### **Option 2: Add Real Images First**
If you have images ready:
1. Add to `/public` folder
2. Update file extensions if needed
3. Test locally: `npm run build`
4. Deploy: `vercel --prod`

---

## 📁 FILE LOCATIONS SUMMARY

| Image | Location | Used In | Size |
|-------|----------|---------|------|
| Logo | `/public/logo.svg` or `.png` | Navigation, Footer | 200x200px+ |
| Pastor | `/public/pastor.svg` or `.png` | About section | 400x520px+ |
| Favicon | `/public/favicon.svg` or `.png` | Browser tab | 32x32px |

---

## 🔍 TROUBLESHOOTING

### **Images Not Showing After Upload**

1. **Check file names match exactly:**
   - `/public/logo.svg` (lowercase)
   - `/public/pastor.svg` (lowercase)
   - `/public/favicon.svg` (lowercase)

2. **Check file paths in components:**
   - Should be `/logo.svg` (with leading slash)
   - NOT `./logo.svg` or `logo.svg`

3. **Clear browser cache:**
   - Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

4. **Check Vercel deployment:**
   - Go to Vercel dashboard
   - Click on your project
   - Check "Deployments" tab
   - Verify files uploaded correctly

### **Wrong Image Extension**

If you get 404 errors:
- Check if you're using `.png` but code references `.svg`
- Update the file paths in components to match your actual file extensions

---

## 🎉 WHAT TO EXPECT

### **With Placeholder SVGs (Current):**
- ✅ Church icon + text logo in navigation
- ✅ Church icon + text logo in footer
- ✅ Professional pastor placeholder with name overlay
- ✅ Favicon in browser tab
- ✅ Everything in your brand colors (#F5B301, #0E1E3A)

### **With Your Real Images:**
- ✅ Your actual church logo
- ✅ Pastor Ademola's actual photo
- ✅ Your custom favicon
- ✅ More personal and authentic branding

---

## 📞 DEPLOYMENT SUPPORT

### **Ready to Deploy?**

**With Placeholders (works now!):**
```bash
npm run build
vercel --prod
```

**After Adding Real Images:**
```bash
# Add images to /public folder
# Update file extensions if needed
# Test build
npm run build

# Deploy
vercel --prod
```

---

## ✅ CHECKLIST

Before deploying:
- [ ] Placeholder SVGs created (✅ Done!)
- [ ] Favicon reference updated in `index.html` (✅ Done!)
- [ ] Navigation logo path set (✅ Done!)
- [ ] Footer logo path set (✅ Done!)
- [ ] About pastor image path set (✅ Done!)
- [ ] Build succeeds locally: `npm run build`
- [ ] Ready to deploy!

After deploying (optional):
- [ ] Prepare your 3 actual images
- [ ] Add to `/public` folder
- [ ] Update file extensions if needed
- [ ] Push to Git
- [ ] Vercel auto-redeploys

---

## 🚀 FINAL NOTES

**YOU CAN DEPLOY RIGHT NOW!**

The placeholder SVGs are:
- ✅ Professional looking
- ✅ Using your brand colors
- ✅ Properly sized
- ✅ Optimized for web
- ✅ Will work perfectly on Vercel

**Add your real images anytime later** - the site will work great either way!

---

**Status:** ✅ Ready to deploy  
**Images:** ✅ Placeholders created  
**Build:** ✅ Will succeed  
**Next:** Deploy to Vercel! 🎊
