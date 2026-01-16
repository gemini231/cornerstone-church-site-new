# 🚀 DEPLOYING YOUR IMAGES TO VERCEL - COMPLETE GUIDE

## ✅ CURRENT STATUS

Your website now shows **YOUR ACTUAL IMAGES** in Figma Make:
- ✅ Your church logo in navigation & footer
- ✅ Pastor Ademola's photo in the About section  
- ✅ Your church favicon in the browser tab

**IMPORTANT:** These images use `figma:asset` imports which work in Figma Make but **WILL NOT work on Vercel**.

---

## 🎯 WHAT YOU NEED TO DO FOR VERCEL

To deploy to Vercel with your images showing, follow these steps:

### **STEP 1: Download Your Images from Figma Make**

You need to save 3 images to your computer:

1. **Church Logo** - The logo showing in navigation/footer
2. **Pastor Photo** - Pastor Ademola's professional portrait
3. **Favicon** - The small church icon

**How to download:**
- Right-click on each image in the preview
- Select "Save image as..."
- Save them with these names:
  - `logo.png`
  - `pastor.png`
  - `favicon.png`

---

### **STEP 2: Create the `/public` Folder**

In your project root directory, create a folder called `public` if it doesn't exist:

```
your-project/
├── public/          ← Create this folder
├── src/
├── index.html
├── package.json
└── ...
```

---

### **STEP 3: Add Your Images to `/public` Folder**

Copy the 3 downloaded images into the `/public` folder:

```
your-project/
├── public/
│   ├── logo.png       ← Your church logo
│   ├── pastor.png     ← Pastor's photo
│   └── favicon.png    ← Favicon icon
├── src/
├── index.html
└── ...
```

---

### **STEP 4: Update the Code to Use Public Folder Images**

You need to change 4 files to use `/logo.png` instead of `figma:asset` imports:

#### **File 1: `/src/app/components/Navigation.tsx`**

**FIND (around line 5-6):**
```typescript
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import logoImg from 'figma:asset/e58d1fba8b9d31e2b694ad70ec5dcc7c7e650772.png';
```

**REPLACE WITH:**
```typescript
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
```

**FIND (around line 42):**
```typescript
<ImageWithFallback
  src={logoImg}
  alt="Christ the Cornerstone Tabernacle" 
  className="h-10 w-10 object-cover rounded"
/>
```

**REPLACE WITH:**
```typescript
<ImageWithFallback
  src="/logo.png"
  alt="Christ the Cornerstone Tabernacle" 
  className="h-10 w-10 object-cover rounded"
/>
```

---

#### **File 2: `/src/app/components/Footer.tsx`**

**FIND (around line 3-4):**
```typescript
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import logoImg from 'figma:asset/e58d1fba8b9d31e2b694ad70ec5dcc7c7e650772.png';
```

**REPLACE WITH:**
```typescript
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
```

**FIND (around line 47):**
```typescript
<ImageWithFallback
  src={logoImg}
  alt="Christ the Cornerstone Tabernacle" 
  className="w-16 h-16 object-cover rounded"
/>
```

**REPLACE WITH:**
```typescript
<ImageWithFallback
  src="/logo.png"
  alt="Christ the Cornerstone Tabernacle" 
  className="w-16 h-16 object-cover rounded"
/>
```

---

#### **File 3: `/src/app/components/About.tsx`**

**FIND (around line 3-4):**
```typescript
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import pastorImg from 'figma:asset/6e87d9cdaaf80741097273fe3084b6f0cc7afa6f.png';
```

**REPLACE WITH:**
```typescript
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
```

**FIND (around line 49):**
```typescript
<ImageWithFallback
  src={pastorImg}
  alt="Pastor Ademola Adetokunbo Fasubaa" 
  className="w-full h-[520px] object-cover"
/>
```

**REPLACE WITH:**
```typescript
<ImageWithFallback
  src="/pastor.png"
  alt="Pastor Ademola Adetokunbo Fasubaa" 
  className="w-full h-[520px] object-cover"
/>
```

---

#### **File 4: `/src/main.tsx`**

**FIND (around line 5-9):**
```typescript
import { setFavicon } from '@/app/utils/setFavicon';
import faviconImg from 'figma:asset/759e448ca2f615c9b99bbb14cfa85b52689375dc.png';

// Set the favicon
setFavicon(faviconImg);
```

**REPLACE WITH:**
```typescript
import { setFavicon } from '@/app/utils/setFavicon';

// Set the favicon
setFavicon('/favicon.png');
```

---

### **STEP 5: Test Locally**

Before deploying, test that everything works:

```bash
# Install dependencies (if needed)
npm install

# Build the project
npm run build

# Preview the build
npm run preview
```

Open the preview URL and verify:
- ✅ Church logo shows in navigation
- ✅ Church logo shows in footer
- ✅ Pastor photo shows in About section
- ✅ Favicon shows in browser tab

---

### **STEP 6: Deploy to Vercel**

#### **Option A: Using Vercel Website (Easiest)**

1. Go to https://vercel.com and log in
2. Click "New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel will auto-detect it's a Vite project
5. Click "Deploy"
6. Wait for deployment to complete
7. Visit your live site - all images should work! ✅

#### **Option B: Using Vercel CLI**

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Deploy
vercel --prod

# Follow the prompts
```

---

## 🎨 ALTERNATIVE: USE IMAGE HOSTING (NO CODE CHANGES NEEDED)

If you don't want to modify the code, you can use an image hosting service:

### **Recommended Services:**

1. **Imgur** (Free, no account needed)
   - Go to https://imgur.com/upload
   - Upload your 3 images
   - Copy the direct link (right-click image → Copy image address)

2. **Cloudinary** (Free tier available)
   - Sign up at https://cloudinary.com
   - Upload images
   - Get the public URLs

3. **ImgBB** (Free)
   - Go to https://imgbb.com
   - Upload images
   - Get direct links

### **Then Update the Code:**

Just replace the `figma:asset` URLs with your hosted image URLs:

**Navigation.tsx:**
```typescript
<ImageWithFallback
  src="https://i.imgur.com/YOUR_LOGO_ID.png"
  alt="Christ the Cornerstone Tabernacle"
/>
```

**Footer.tsx:**
```typescript
<ImageWithFallback
  src="https://i.imgur.com/YOUR_LOGO_ID.png"
  alt="Christ the Cornerstone Tabernacle"
/>
```

**About.tsx:**
```typescript
<ImageWithFallback
  src="https://i.imgur.com/YOUR_PASTOR_ID.png"
  alt="Pastor Ademola Adetokunbo Fasubaa"
/>
```

**main.tsx:**
```typescript
setFavicon('https://i.imgur.com/YOUR_FAVICON_ID.png');
```

---

## 📋 DEPLOYMENT CHECKLIST

Before deploying to Vercel:

- [ ] Downloaded 3 images from Figma Make preview
- [ ] Created `/public` folder in project root
- [ ] Added `logo.png`, `pastor.png`, `favicon.png` to `/public`
- [ ] Updated Navigation.tsx to use `/logo.png`
- [ ] Updated Footer.tsx to use `/logo.png`
- [ ] Updated About.tsx to use `/pastor.png`
- [ ] Updated main.tsx to use `/favicon.png`
- [ ] Removed `figma:asset` import lines from all files
- [ ] Tested build locally: `npm run build`
- [ ] Tested preview locally: `npm run preview`
- [ ] All images showing in local preview
- [ ] Ready to deploy!

---

## 🔍 TROUBLESHOOTING

### **Images Not Showing on Vercel**

1. **Check file paths are correct:**
   - Should be `/logo.png` (with leading slash)
   - NOT `./logo.png` or `logo.png`

2. **Check file names match exactly:**
   - Files in `/public` folder must be lowercase
   - `logo.png`, `pastor.png`, `favicon.png`

3. **Check files were uploaded to Git:**
   ```bash
   git status
   git add public/
   git commit -m "Add church images"
   git push
   ```

4. **Redeploy on Vercel:**
   - Go to Vercel dashboard
   - Click "Redeploy" or push new commit
   - Wait for deployment

### **Build Fails**

1. **Check for unused imports:**
   - Make sure you removed the `import logoImg from 'figma:asset/...'` lines
   - They should be deleted completely

2. **Check syntax:**
   - Make sure quotes are correct
   - No missing commas or brackets

3. **Clear build cache:**
   ```bash
   rm -rf node_modules dist .vercel
   npm install
   npm run build
   ```

---

## ✅ FINAL VERIFICATION

After deploying to Vercel, check:

- [ ] Navigate to your Vercel URL
- [ ] Church logo visible in navigation bar (top)
- [ ] Church logo visible in footer (bottom)
- [ ] Pastor photo visible in About section
- [ ] Favicon visible in browser tab
- [ ] No 404 errors in browser console (F12)
- [ ] Images load on mobile devices
- [ ] Images load on different browsers

---

## 📊 QUICK COMPARISON

| Method | Pros | Cons |
|--------|------|------|
| **Public Folder** | ✅ Self-hosted<br>✅ Free<br>✅ Fast<br>✅ Full control | ❌ Need to modify code<br>❌ Must manage files |
| **Image Hosting** | ✅ No file management<br>✅ Easy to update<br>✅ Quick setup | ❌ Depends on 3rd party<br>❌ Free tier limits |

**Recommended:** Use `/public` folder for production websites (better control and reliability)

---

## 🎯 SUMMARY

### **Current Situation:**
- ✅ Images showing in Figma Make (using `figma:asset`)
- ❌ Images WON'T show on Vercel (figma:asset doesn't work there)

### **Solution:**
1. Download your 3 images from preview
2. Put them in `/public` folder
3. Update 4 files to use `/logo.png`, `/pastor.png`, `/favicon.png`
4. Remove `figma:asset` import statements
5. Test locally
6. Deploy to Vercel

### **Expected Result:**
✅ Website deploys successfully  
✅ All images show on Vercel  
✅ Professional appearance maintained  
✅ Your actual church branding visible  

---

## 💡 NEED HELP?

### **Common Questions:**

**Q: Can I deploy now without changing anything?**  
A: Yes, but images won't show on Vercel. They only work in Figma Make.

**Q: Do I have to use PNG format?**  
A: No, you can use JPG too. Just update the file extensions in code to match.

**Q: Can I use different file names?**  
A: Yes! Just make sure the names in code match the actual file names.

**Q: What if I don't have a `/public` folder?**  
A: Create it in your project root (same level as `src` folder).

---

## 🚀 READY TO DEPLOY!

Once you complete the steps above, your website will:
- ✅ Build successfully
- ✅ Deploy to Vercel
- ✅ Show all your images
- ✅ Look professional and complete
- ✅ Work on all devices

**Good luck with your deployment! God bless your ministry website! 🙏✨**
