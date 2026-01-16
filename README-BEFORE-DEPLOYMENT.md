# ⚠️ IMPORTANT: Before Deploying to Vercel

## 🚨 The Logo Works in Figma Make BUT Needs a Change for Vercel

Your logo is showing perfectly in the **Figma Make preview**, but the `figma:asset` imports will cause a **build error** when deploying to Vercel.

**Don't worry! This is easy to fix!** 

---

## 🛠️ Quick Fix (Do This After Downloading)

### Option 1: Let Me Help You (Recommended for beginners)

After you download the project, **message back** and I'll update the code to use the standard `/public/logo.png` path that works on Vercel.

### Option 2: Do It Yourself (If you're comfortable with code)

Follow these steps:

---

## 📝 Step-by-Step Fix

### STEP 1: Add Your Logo to `/public` Folder

1. **Save your church logo** as `logo.png`
2. Create a `/public` folder in your project root (if it doesn't exist)
3. Put `logo.png` inside `/public`

---

### STEP 2: Update `Navigation.tsx`

**File:** `/src/app/components/Navigation.tsx`

**Find this line (near the top):**
```tsx
import logoImage from 'figma:asset/e58d1fba8b9d31e2b694ad70ec5dcc7c7e650772.png';
```

**DELETE IT COMPLETELY** ❌

**Then find this line (around line 40):**
```tsx
<img 
  src={logoImage} 
  alt="Christ the Cornerstone Tabernacle" 
  className="h-12 md:h-14 w-auto"
/>
```

**Change to:**
```tsx
<img 
  src="/logo.png" 
  alt="Christ the Cornerstone Tabernacle" 
  className="h-12 md:h-14 w-auto"
/>
```

---

### STEP 3: Update `Footer.tsx`

**File:** `/src/app/components/Footer.tsx`

**Find this line (near the top):**
```tsx
import logoImage from 'figma:asset/e58d1fba8b9d31e2b694ad70ec5dcc7c7e650772.png';
```

**DELETE IT COMPLETELY** ❌

**Then find this line (around line 44):**
```tsx
<img src={logoImage} alt="Church Logo" className="w-24 h-24" />
```

**Change to:**
```tsx
<img src="/logo.png" alt="Christ the Cornerstone Tabernacle" className="h-16 w-auto" />
```

---

### STEP 4: Deploy to Vercel

Now your project is ready! Deploy following the instructions in `DEPLOYMENT-INSTRUCTIONS.md`

---

## 🎯 Why Is This Necessary?

- ✅ **`figma:asset`** = Special Figma Make feature (works in preview only)
- ❌ **Vercel/Production** = Needs standard file paths like `/logo.png`
- 💡 **Solution:** Use `/public` folder + standard paths

---

## 🆘 Need Help?

If you're not comfortable making these changes:

1. **Download** your project from Figma Make
2. **Come back** and ask me to make the changes
3. I'll update the files for you
4. Then you can deploy successfully!

---

## ✅ Summary

**In Figma Make Preview:**
- Logo shows using `figma:asset` import ✅

**For Vercel Deployment:**
- Change to `/logo.png` path ✅
- Add logo file to `/public` folder ✅

**Both work perfectly - just different systems!** 🎉

---

*This is a normal part of the Figma Make → Vercel workflow*
*Don't worry, it's a simple 2-minute fix!* 😊
